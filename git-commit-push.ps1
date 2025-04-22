# git-commit-push.ps1
$message = Read-Host "Commit-Nachricht eingeben"
git add .
git commit -m "$message"
git push