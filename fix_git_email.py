#!/usr/bin/env python3
import subprocess
import sys

OLD_EMAIL = "bestroom449k@example.com"
NEW_EMAIL = "bestroom449@gmail.com"
NEW_NAME = "louie"

# 모든 커밋 해시 가져오기
result = subprocess.run(['git', 'rev-list', '--all', '--reverse'], 
                       capture_output=True, text=True)
commits = result.stdout.strip().split('\n')

print(f"총 {len(commits)}개의 커밋을 수정합니다...")

# 각 커밋을 체크아웃하고 author 수정
for i, commit in enumerate(commits, 1):
    print(f"[{i}/{len(commits)}] 커밋 수정 중: {commit[:8]}")
    
    # 커밋 정보 가져오기
    email_result = subprocess.run(['git', 'show', '-s', '--format=%ae', commit],
                                  capture_output=True, text=True)
    current_email = email_result.stdout.strip()
    
    if current_email == OLD_EMAIL:
        # 커밋 수정
        subprocess.run([
            'git', 'filter-branch', '-f', '--env-filter',
            f'if [ "$GIT_COMMIT" = "{commit}" ]; then '
            f'export GIT_AUTHOR_EMAIL="{NEW_EMAIL}"; '
            f'export GIT_COMMITTER_EMAIL="{NEW_EMAIL}"; '
            f'export GIT_AUTHOR_NAME="{NEW_NAME}"; '
            f'export GIT_COMMITTER_NAME="{NEW_NAME}"; fi',
            '--', '--all'
        ], env={'FILTER_BRANCH_SQUELCH_WARNING': '1'})

print("\n완료!")
print("\n최근 5개 커밋 확인:")
subprocess.run(['git', 'log', '--pretty=format:%ae - %s', '-n', '5'])
print("\n\nGitHub에 푸시하려면: git push --force")
