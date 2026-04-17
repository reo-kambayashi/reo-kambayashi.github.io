#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { basename, dirname, extname, join, resolve } from 'node:path';

const PUBLIC_DIR = resolve(process.cwd(), 'public');

const walk = (dir) => {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) out.push(...walk(full));
    else if (extname(entry).toLowerCase() === '.pdf') out.push(full);
  }
  return out;
};

const pad = (n, width) => String(n).padStart(width, '0');

const convert = (pdfPath) => {
  const name = basename(pdfPath, extname(pdfPath));
  const outDir = join(dirname(pdfPath), `${name}-svg`);
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  const tmpPattern = join(outDir, 'page%d.svg');
  execFileSync('mutool', ['convert', '-F', 'svg', '-o', tmpPattern, pdfPath], {
    stdio: ['ignore', 'ignore', 'inherit'],
  });

  const generated = readdirSync(outDir)
    .filter((f) => /^page\d+\.svg$/.test(f))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

  const width = String(generated.length).length;
  for (const file of generated) {
    const n = Number(file.match(/\d+/)[0]);
    const target = `page-${pad(n, width)}.svg`;
    if (file === target) continue;
    execFileSync('mv', [join(outDir, file), join(outDir, target)]);
  }

  console.log(`[pdf-to-svg] ${pdfPath} → ${generated.length} pages`);
};

const pdfs = walk(PUBLIC_DIR);
if (pdfs.length === 0) {
  console.log('[pdf-to-svg] no PDFs found');
  process.exit(0);
}

try {
  execFileSync('mutool', ['-v'], { stdio: 'ignore' });
} catch {
  console.error('[pdf-to-svg] mutool not found. Install with `brew install mupdf-tools`.');
  process.exit(1);
}

for (const pdf of pdfs) convert(pdf);
