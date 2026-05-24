# -*- coding: utf-8 -*-
# 调试启动器 - 运行 register_notion_task.ps1 并保持窗口不关闭
# 右键 -> 使用 PowerShell 运行 此脚本即可

$ErrorActionPreference = "Continue"

Write-Host "========================================"
Write-Host "  调试模式 - 注册 Notion 定时任务"
Write-Host "========================================"
Write-Host ""

try {
    Write-Host "[执行] 正在运行 register_notion_task.ps1 ..."
    Write-Host ""
    & "g:\ai\my\ai_hope\script\register_notion_task.ps1"
    Write-Host ""
    Write-Host "========================================"
    Write-Host "  脚本执行完毕"
    Write-Host "========================================"
} catch {
    Write-Host ""
    Write-Host "========================================"
    Write-Host "  捕获到错误："
    Write-Host "========================================"
    Write-Host $_.Exception.Message
    Write-Host ""
    Write-Host "完整错误信息："
    Write-Host $_.Exception.ToString()
    Write-Host ""
    Write-Host "脚本堆栈："
    Write-Host $_.ScriptStackTrace
} finally {
    Write-Host ""
    Write-Host "按回车键关闭控制台..."
    Read-Host
}
