# -*- coding: utf-8 -*-
# Notion 延迟启动脚本 - 等待翻墙软件启动后自动启动 Notion

$notionPath = "C:\Users\Administrator.PC-20150529JRDL\AppData\Local\Programs\Notion\Notion.exe"
$proxyPort = 7890
$maxWaitSeconds = 600
$checkInterval = 3
$elapsed = 0

Write-Host "[等待] 正在等待翻墙软件启动 (端口 $proxyPort)..."

while ($elapsed -lt $maxWaitSeconds) {
    $portOpen = $false
    try {
        $tcp = New-Object System.Net.Sockets.TcpClient
        $ar = $tcp.BeginConnect("127.0.0.1", $proxyPort, $null, $null)
        if ($ar.AsyncWaitHandle.WaitOne(1000, $false)) {
            $tcp.Close()
            $portOpen = $true
        }
    } catch { }

    if ($portOpen) {
        Write-Host "[成功] 检测到翻墙软件已启动 (端口 $proxyPort)，正在启动 Notion..."
        Start-Sleep 2
        Start-Process $notionPath
        exit 0
    }

    Write-Host "[等待] 等待翻墙软件启动... ($elapsed/$maxWaitSeconds 秒)"
    Start-Sleep $checkInterval
    $elapsed += $checkInterval
}

Write-Host "[错误] 等待超时，请检查翻墙软件是否正常运行（端口 $proxyPort）"
Start-Sleep 5
exit 1
