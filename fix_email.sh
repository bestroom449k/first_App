#!/bin/bash

# 이전 커밋들의 이메일을 수정하는 스크립트

NEW_EMAIL="bestroom449@gmail.com"
NEW_NAME="louie"

git filter-branch -f --env-filter "
export GIT_AUTHOR_EMAIL=\"$NEW_EMAIL\"
export GIT_COMMITTER_EMAIL=\"$NEW_EMAIL\"
export GIT_AUTHOR_NAME=\"$NEW_NAME\"
export GIT_COMMITTER_NAME=\"$NEW_NAME\"
" --tag-name-filter cat -- --branches --tags

echo "이메일 변경 완료!"
echo "변경된 커밋 확인:"
git log --pretty=format:"%ae - %s" -n 5

echo ""
echo ""
echo "GitHub에 푸시하려면 다음 명령어를 실행하세요:"
echo "git push --force"
