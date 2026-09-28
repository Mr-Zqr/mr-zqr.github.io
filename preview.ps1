param(
    [ValidateRange(1024, 65535)]
    [int]$Port = 1313
)

$ErrorActionPreference = 'Stop'
$hugo = Join-Path $PSScriptRoot '.local/tools/hugo/hugo.exe'
$goBin = Join-Path $PSScriptRoot '.local/tools/go/bin'
if (!(Test-Path -LiteralPath $hugo) -or !(Test-Path -LiteralPath (Join-Path $goBin 'go.exe'))) {
    throw 'Local Hugo and Go tools are missing. See README.md for setup instructions.'
}

$previousPath = $env:PATH
Push-Location $PSScriptRoot
try {
    $env:PATH = "$goBin;$previousPath"
    & $hugo server --bind 127.0.0.1 --port $Port --baseURL "http://localhost:$Port/" --disableFastRender
    if ($LASTEXITCODE -ne 0) { throw "Hugo exited with code $LASTEXITCODE" }
}
finally {
    $env:PATH = $previousPath
    Pop-Location
}
