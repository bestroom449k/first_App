@echo off
REM Windows용 이메일 수정 스크립트

echo 이전 커밋들의 이메일을 수정합니다...
echo.

git filter-branch -f --env-filter "set OLD_EMAIL=bestroom449k@example.com& set NEW_EMAIL=bestroom449@gmail.com& if %%GIT_COMMITTER_EMAIL%%==%OLD_EMAIL% (set GIT_COMMITTER_EMAIL=%NEW_EMAIL%)& if %%GIT_AUTHOR_EMAIL%%==%OLD_EMAIL% (set GIT_AUTHOR_EMAIL=%NEW_EMAIL%)" --tag-name-filter cat -- --branches --tags

echo.
echo 변경 완료! 결과 확인:
git log --pretty=format:"%%ae - %%s" -n 5

echo.
echo.
echo GitHub에 푸시하려면:
echo git push --force
pause
