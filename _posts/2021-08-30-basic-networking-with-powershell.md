---
layout: post
author: alain
title: Basic Networking with PowerShell
tags: TeXt
date: 2021-08-30T04:57:23.752Z
article_header:
  type: cover
  image:
    src: /assets/img/posts/powershell.jpg
thumbnail-img: /assets/img/posts/powershell.jpg
category: guides
summary: Get started on how to use powershell with networking
keywords: PowerShell, Networking
thumbnail: /assets/img/posts/powershell.jpg
permalink: blog/basic-networking-with-powershell
---
<!--StartFragment-->

[PowerShell](https://docs.microsoft.com/en-us/powershell/) together with networking are becoming more and more important. I created this little cheat sheet so it becomes easy for people to get started.

## Basic Networking PowerShell cmdlets

![Get-NetIPConfiguration](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/Get-NetIPConfiguration-1024x569.png)

Get the IP Configuration (ipconfig with PowerShell)

{% highlight PowerShell %}
Get-NetIPConfiguration
{% endhighlight %}

List all Network Adapters

{% highlight PowerShell %}
Get-NetAdapter
{% endhighlight %}

Get a spesific network adapter by name

{% highlight PowerShell %}
Get-NetAdapter -Name *Ethernet*
{% endhighlight %}

Get more information VLAN ID, Speed, Connection status

{% highlight PowerShell %}
Get-NetAdapter | ft Name, Status, Linkspeed, VlanID
{% endhighlight %}

Get driver information

{% highlight PowerShell %}
Get-NetAdapter | ft Name, DriverName, DriverVersion, DriverInformation, DriverFileName
{% endhighlight %}

Get adapter hardware information. This can be really usefull when you need to know the PCI slot of the NIC.

{% highlight PowerShell %}
Get-NetAdapterHardwareInfo
{% endhighlight %}

Disable and Enable a Network Adapter

{% highlight PowerShell %}
Disable-NetAdapter -Name "Wireless Network Connection"
Enable-NetAdapter -Name "Wireless Network Connection"
{% endhighlight %}

Rename a Network Adapter

{% highlight PowerShell %}
Rename-NetAdapter -Name "Wireless Network Connection" -NewName "Wireless"
{% endhighlight %}

## IP Configuration using PowerShell

![PowerShell Networking Get-NetIPAddress](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/Get-NetIPAddress-1024x420.png)

Get IP and DNS address information

{% highlight PowerShell %}
Get-NetAdapter -Name "Local Area Connection" | Get-NetIPAddress
{% endhighlight %}

Get IP address only

{% highlight PowerShell %}
(Get-NetAdapter -Name "Local Area Connection" | Get-NetIPAddress).IPv4Address
{% endhighlight %}

Get DNS Server Address information

{% highlight PowerShell %}
Get-NetAdapter -Name "Local Area Connection" | Get-DnsClientServerAddress
{% endhighlight %}

Set IP Address

{% highlight PowerShell %}
New-NetIPAddress -InterfaceAlias "Wireless" -IPv4Address 10.0.1.95 -PrefixLength "24" -DefaultGateway 10.0.1.1
{% endhighlight %}

or if you want to change a existing IP Address

{% highlight PowerShell %}
Set-NetIPAddress -InterfaceAlias "Wireless" -IPv4Address 192.168.12.25 -PrefixLength "24"
{% endhighlight %}

Remove IP Address

{% highlight PowerShell %}
Get-NetAdapter -Name "Wireless" | Remove-NetIPAddress
{% endhighlight %}

Set DNS Server

{% highlight PowerShell %}
Set-DnsClientServerAddress -InterfaceAlias "Wireless" -ServerAddresses "10.10.20.1","10.10.20.2"
{% endhighlight %}

Set interface to DHCP

{% highlight PowerShell %}
Set-NetIPInterface -InterfaceAlias "Wireless" -Dhcp Enabled
{% endhighlight %}

Clear DNS Cache with PowerShell

You can also manage your DNS cache with PowerShell.

List DNS Cache:

{% highlight PowerShell %}
Get-DnsClientCache
{% endhighlight %}

Clear DNS Cache

{% highlight PowerShell %}
Clear-DnsClientCache
{% endhighlight %}

## Ping with PowerShell

![PowerShell Networking Test-NetConnection Ping](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/Test-NetConnection-Ping-1024x599.png)

How to Ping with PowerShell. For a simple ping command with PowerShell, you can use the Test-Connection cmdlet:

{% highlight PowerShell %}
Test-Connection alainqtec.com
{% endhighlight %}

There is an advanced way to test connection using PowerShell

{% highlight PowerShell %}
Test-NetConnection -ComputerName www.alainqtec.com
{% endhighlight %}

Get some more details from the Test-NetConnection

{% highlight PowerShell %}
Test-NetConnection -ComputerName www.alainqtec.com -InformationLevel Detailed
{% endhighlight %}

Ping multiple IP using PowerShell

{% highlight PowerShell %}
1..99 | % { Test-NetConnection -ComputerName x.x.x.$_ } | FT -AutoSize
{% endhighlight %}

## Tracert

![PowerShell Tracert](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/PowerShell-Tracert-1024x425.png)

Tracert with PowerShell

{% highlight PowerShell %}
Test-NetConnection www.thomasmaurer.ch –TraceRoute
{% endhighlight %}

## Portscan with PowerShell

![PowerShell Portscan](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/PowerShell-Portscan-1024x505.png)

Use PowerShell to check for open port

{% highlight PowerShell %}
Test-NetConnection -ComputerName www.thomasmaurer.ch -Port 80
Test-NetConnection -ComputerName www.thomasmaurer.ch -CommonTCPPort HTTP
{% endhighlight %}

## NSlookup in PowerShell

![PowerShell Networking NSlookup](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/PowerShell-NSlookup-1024x352.png)

NSlookup using PowerShell:

{% highlight PowerShell %}
Resolve-DnsName www.thomasmaurer.ch
Resolve-DnsName www.thomasmaurer.ch -Type MX -Server 8.8.8.8
{% endhighlight %}

## Route in PowerShell

![PowerShell Networking Route](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/PowerShell-Route-1024x448.png)

How to replace Route command with PowerShell

{% highlight PowerShell %}
Get-NetRoute -Protocol Local -DestinationPrefix 192.168*
Get-NetRoute -InterfaceAlias Wi-Fi
 
New-NetRoute –DestinationPrefix "10.0.0.0/24" –InterfaceAlias "Ethernet" –NextHop 192.168.192.1
{% endhighlight %}

## NETSTAT in PowerShell

![PowerShell Networking Netstat](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/PowerShell-Netstat-1024x448.png)

How to replace NETSTAT with PowerShell

{% highlight PowerShell %}
Get-NetTCPConnection
Get-NetTCPConnection –State Established
{% endhighlight %}

## NIC Teaming PowerShell commands

Create a new NIC Teaming (Network Adapter Team)

{% highlight PowerShell %}
New-NetLbfoTeam -Name NICTEAM01 -TeamMembers Ethernet, Ethernet2 -TeamingMode SwitchIndependent -TeamNicName NICTEAM01 -LoadBalancingAlgorithm Dynamic
{% endhighlight %}

## SMB Related PowerShell commands

![SMB PowerShell SMB Client Configuration](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/SMB-PowerShell-SMB-Client-Configuration-1024x521.png)

Get SMB Client Configuration

{% highlight PowerShell %}
Get-SmbClientConfiguration
{% endhighlight %}

Get SMB Connections

{% highlight PowerShell %}
Get-SmbConnection
{% endhighlight %}

Get SMB Mutlichannel Connections

{% highlight PowerShell %}
Get-SmbMutlichannelConnection
{% endhighlight %}

Get SMB open files

{% highlight PowerShell %}
Get-SmbOpenFile
{% endhighlight %}

Get SMB Direct (RDMA) adapters

{% highlight PowerShell %}
Get-NetAdapterRdma
{% endhighlight %}

## Hyper-V Networking cmdlets

![Hyper-V PowerShell Get-VMNetwork Adapter](https://www.thomasmaurer.ch/wp-content/uploads/2016/02/Hyper-V-PowerShell-Get-VMNetwork-Adapter-1024x215.png)

Get and set Network Adapter VMQ settings

{% highlight PowerShell %}
Get-NetAdapterVmq
# Disable VMQ
Set-NetAdapterVmq -Enabled $false
# Enable VMQ
Set-NetAdapterVmq -Enabled $true
{% endhighlight %}

Get VM Network Adapter

{% highlight PowerShell %}
Get-VMNetworkAdapter -VMName Server01
{% endhighlight %}

Get VM Network Adapter IP Addresses

{% highlight PowerShell %}
(Get-VMNetworkAdapter -VMName NanoConHost01).IPAddresses
{% endhighlight %}

Get VM Network Adapter Mac Addresses

{% highlight PowerShell %}
(Get-VMNetworkAdapter -VMName NanoConHost01).MacAddress
{% endhighlight %}

I hope you enjoyed it and the post was helpful, if you think something important is missing, please add it in the comments.

<!--EndFragment-->