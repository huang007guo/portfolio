# -*- coding: utf-8 -*-
# 自动注册 Notion 延迟启动定时任务

$scriptPath = "g:\ai\my\ai_hope\script\notion_delayed_start.ps1"
$taskName = "NotionDelayStart"

if (-not (Test-Path $scriptPath)) {
    Write-Host "[错误] 脚本文件不存在: $scriptPath"
    Write-Host "请先确保 notion_delayed_start.ps1 文件存在"
    Read-Host "按回车键退出"
    exit 1
}

$existing = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($existing) {
    Write-Host "[信息] 发现已存在的任务，正在删除..."
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
}

$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -ExecutionPolicy Bypass -File `"$scriptPath`""
$trigger = New-ScheduledTaskTrigger -AtLogOn
$trigger.Delay = (New-TimeSpan -Seconds 30)
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable
$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Highest

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Description "等待翻墙软件启动后自动启动 Notion"

Write-Host "[成功] 定时任务 '$taskName' 已创建"
Write-Host "任务详情："
Write-Host "  - 触发条件：用户登录后 30 秒"
Write-Host "  - 执行脚本：$scriptPath"
Write-Host "  - 最长等待：10 分钟"
Write-Host ""
Write-Host "可以打开任务计划程序 (taskschd.msc) 查看任务详情"
Read-Host "按回车键退出"
