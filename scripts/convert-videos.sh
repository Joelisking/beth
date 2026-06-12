#!/bin/zsh
# Convert iPhone MOV/MP4 videos to web-safe H.264 MP4 + poster frames
set -u
SRC=~/Downloads/beth
OUT=/Users/joel/Documents/beth/public/media/videos
mkdir -p "$OUT"
cd "$SRC"
for f in *.MOV *.MP4; do
  [ -e "$f" ] || continue
  base="${f%.*}"
  dst="$OUT/${base}.mp4"
  poster="$OUT/${base}.jpg"
  if [ ! -e "$dst" ]; then
    ffmpeg -y -i "$f" \
      -vf "scale='min(1280,iw)':-2" \
      -c:v libx264 -preset fast -crf 24 -pix_fmt yuv420p \
      -c:a aac -b:a 128k \
      -movflags +faststart \
      "$dst" </dev/null >/dev/null 2>&1 && echo "ok $f" || echo "FAIL $f"
  fi
  if [ ! -e "$poster" ] && [ -e "$dst" ]; then
    ffmpeg -y -ss 0.5 -i "$dst" -frames:v 1 -q:v 4 "$poster" </dev/null >/dev/null 2>&1
  fi
done
echo "DONE"
