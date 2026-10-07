#!/bin/bash
# Double-click to publish youwontgetleftbehind
cd "$(dirname "$0")" || exit 1
rm -f .git/index.lock
echo "Publishing you won't get left behind..."
git add -A -- . ':!Claude outputs' ':!.claude'
if git diff --cached --quiet; then
  echo "Nothing new to publish."
else
  git commit -m "Site update $(date '+%Y-%m-%d %H:%M')" && git push && \
  echo "" && echo "Done! 4amiracle.github.io/youwontgetleftbehind will update in about a minute."
fi
echo ""
read -n 1 -s -r -p "Press any key to close."
