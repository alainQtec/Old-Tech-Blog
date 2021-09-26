---
title: Install Windows Drivers using powershell
tags: TeXt
layout: post
author: alain
article_header:
  type: cover
  image:
    src: /assets/img/posts/pexels-luis-gomes-546819.jpg
thumbnail-img: /assets/img/posts/pexels-luis-gomes-546819.jpg
category: android
summary: Learn how to fix and install drivers using poweshell
keywords: powershell, driver
thumbnail: /assets/img/posts/pexels-luis-gomes-546819.jpg
permalink: /blog/install-windows-drivers-using-powershell
---

## Summary

When building any computer, virtual or physical, it requires drivers. This script will allow you to place a folder of .inf (and associated) files onto a computer and then install all relevant drivers. This script is tested as working on Windows Server 2016 and Windows Server 2016 Core.

Get-ChildItem "C:\mydrivers\" -Recurse -Filter "*.inf" |
ForEach-Object { PNPUtil.exe /add-driver $_.FullName /install }

https://gist.github.com/chrisbrownie/dded5da5cbb69dc5f37c9b603797830d#file-install-windowsdriversfromfolder-ps1

Or view [RAW](https://gist.github.com/chrisbrownie/dded5da5cbb69dc5f37c9b603797830d/raw/e3835f883e1b8611f50718a73cb6ffc29a5fc04f/Install-WindowsDriversFromFolder.ps1)
## How does it work?
The script is very simple:

Get-ChildItem retrieves any files with a .inf extension in the C:\mydrivers\ directory and its subfolders
ForEach-Object loops over these and performs the commands in the script block { } against them
PNPUtil.exe is a CLI utility for management of the Windows driver store. The /add-driver argument adds the specified driver to the driver store. /install installs the driver, resolving any missing driver issues for any attached hardware the driver suits
