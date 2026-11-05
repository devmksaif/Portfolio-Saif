#!/bin/sh
# Rebuilds ../cv.pdf (English) and ../cv-fr.pdf (French). Requires tectonic.
set -e
cd "$(dirname "$0")"
out=$(mktemp -d)
tectonic --outdir "$out" cv-en.tex
tectonic --outdir "$out" cv-fr.tex
cp "$out/cv-en.pdf" ../cv.pdf
cp "$out/cv-fr.pdf" ../cv-fr.pdf
rm -rf "$out"
