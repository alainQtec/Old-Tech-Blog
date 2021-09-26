---
layout: post
author: alain
title: Windows 10 password reset utilities
tags: TeXt
date: 2021-08-25T17:15:49.014Z
thumbnail-img: /assets/images/posts/troubleshoot.jpeg
category: it-ops
summary: Learn how to use lifesaver password reset utilities for windows pc
keywords: password
thumbnail: /assets/images/posts/troubleshoot.jpeg
permalink: /blog/password-reset-utilities
---
<!--StartFragment-->

Forgot your Windows 10 password? Typically, a user would give up, reinstall the operating system (OS), and start from scratch. But you’re not a typical user. Instead of doing an OS reset, why not try a user account password reset first using the [Offline NT Password & Registry Editor (NTPasswd)](https://pogostick.net/~pnh/ntpasswd/) utility?

In this tutorial, learn how to use the NTPasswd utility as a *“break-glass-in-case-of-emergency”* response to reset lost or forgotten Windows user or administrator passwords.

Are you now excited to hack your way into a locked computer? Hold on to your *black hat,* and let’s dive in.

Table of Contents

* [Prerequisites](https://adamtheautomator.com/ntpasswd/#Prerequisites "Prerequisites")
* [Creating a Bootable NTPasswd USB Drive](https://adamtheautomator.com/ntpasswd/#Creating_a_Bootable_NTPasswd_USB_Drive "Creating a Bootable NTPasswd USB Drive")
* [Booting into NTPasswd](https://adamtheautomator.com/ntpasswd/#Booting_into_NTPasswd "Booting into NTPasswd")
* [Resetting a User Password with NTPasswd](https://adamtheautomator.com/ntpasswd/#Resetting_a_User_Password_with_NTPasswd "Resetting a User Password with NTPasswd")
* [Conclusion](https://adamtheautomator.com/ntpasswd/#Conclusion "Conclusion")

  ## Prerequisites

  Since this tutorial is hands-on, you’ll need the following requirements if you plan to follow along.

  *
  * A Windows 10 computer. This tutorial will be using a Windows 10 version 20H2, but earlier versions should work as well.
  * A test or dummy Windows 10 local user account. This user account is optional but recommended if you don’t want to test this tutorial with production or live user account. This tutorial will be trying the password reset on a test account with the name *Dummy*.
  * Make sure that the [computer can boot from a USB drive](https://lifehacker.com/how-to-boot-from-a-usb-drive-or-cd-on-any-computer-5991848) and supports [legacy boot](https://pediaa.com/difference-between-uefi-and-legacy-boot/#Legacy%20Boot) mode. NTPasswd boot disks do not support [UEFI boot](https://pediaa.com/difference-between-uefi-and-legacy-boot/#UEFI) mode.
  * A USB flash drive with at least 50MB free space where you’ll be installing NTPasswd. This tutorial assumes that you’ve already attached the USB drive to the computer and know its drive letter. In this tutorial, the USB drive letter is E.
  * Download the latest [NTPasswd USB zip file](https://pogostick.net/~pnh/ntpasswd/). As of this writing, the latest zip file name is [usb140201.zip](https://pogostick.net/~pnh/ntpasswd/usb140201.zip), and the size is approximately 18MB.

  ## Creating a Bootable NTPasswd USB Drive

  To boot your computer into the NTPasswd environment, you must first create bootable media containing the NTPasswd files. Don’t worry. Doing so only takes running two lines of command. You don’t need to download any third-party tools, too.

  Follow the steps below to create an NTPasswd bootable USB drive.

  1. Open [PowerShell as admin](https://adamtheautomator.com/powershell-run-as-administrator/).
  2. Inside the PowerShell window, extract *usb140201.zip* file contents to the root of the USB drive. To do so, run the `Expand-Archive` command below. This command assumes that the NTPasswd zip file is in the *C:\Downloads* folder and the extract destination is the root of drive E.

<!--EndFragment-->

```powershell
Expand-Archive -Path C:\Downloads\usb140201.zip -DestinationPath E:
```

<!--StartFragment-->

3. After extracting the NTPasswd zip file, run the `syslinux.exe` command below to make the USB drive bootable. This command assumes that the USB drive letter is E. Change the drive letter if needed.

> *The NTPasswd zip that you previously extracted to the USB drive already includes the `syslinux.exe` executable file. You do not need to download the file separately.*

<!--EndFragment-->

```cmd
# (m) -- Install the master boot record (MBR).
# (a) -- Mark the partition as Active.

E:\syslinux.exe -ma E:
```

The command should only take approximately one second to complete, and there are no output messages. Once the command completes, you now have a bootable NTPasswd USB drive.

**Booting into NTPasswd**
Now that you’ve created your password reset disk, it’s time to put it to the test. Before you can start resetting passwords, you first need to boot your computer into the NTPasswd environment. Follow the steps below to do so.

Note: NTPasswd is not capable of accessing encrypted drives, such as Bitlocker-encrypted drives. According to the NTPasswd FAQ, there is no plan to add support for encrypted drives.

1. First, turn off your computer if you haven’t yet.
2. Power on your computer and boot it to the USB drive. Typically, you have to press a key while the computer is starting up (F2, Del, F12…), showing you the boot menu. Consult your computer’s manual if needed to learn how.
3. At the boot prompt, type in boot vga=ask and press Enter. Doing so gives you the option to choose the video mode.

<!--StartFragment-->

 At the following prompt, hit Enter again to list the available video modes.

![Press Enter to list available video modes](/assets/images/posts/pc-troubleshoot.jpeg)

Press Enter to list available video modes

5. Next, on the list of video modes, type `0` and press Enter. This step ensures that NTPasswd uses the lowest possible resolution to avoid showing disproportionate screen output.

![Selecting the lowest display resolution mode ](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T224636.458.png)

Selecting the lowest display resolution mode

After selecting the video mode, NTPasswd then automatically detects the disk partitions. As you can see below, the utility automatically determines which partition(s) may contain the Windows operating system.

![NTPasswd automatically detects possible Windows installation partitions ](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T224708.148.png)

NTPasswd automatically detects possible Windows installation partitions

[3rd party ad content](https://f7e228d19127a9a46b5a250bbd5a77cf.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html)

> *Note: If the computer did not shut down properly or in hibernate, NTPasswd would complain that the NTFS partition is unsafe, as you can see below. In which case, you have to boot to Windows and shut down the computer properly before booting into NTPasswd again.*

![The NTFS partition is in an unsafe state error](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T224752.584.png)

The NTFS partition is in an unsafe state error

6. On the list of **Possible windows installations**, typically, there would only be one Windows installation on a computer, as you can see below. In which case, you only need to press Enter to accept the default selection.

![Selecting the Windows installation partition](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T224845.080.png)

Selecting the Windows installation partition

[3rd party ad content](https://f7e228d19127a9a46b5a250bbd5a77cf.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html)

7. After selecting the Windows partition, NTPasswd lists files on the screen. Press the SPACEBAR once to exit the files list.

![Press the spacebar to exit the files list](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T224924.918.png)

Press the spacebar to exit the files list

## Resetting a User Password with NTPasswd

Now that you’ve booted your computer into NTPasswd, you’re ready to start resetting passwords. By following a series of prompts, you can reset the password of any Windows 10 local accounts on the computer. To do so, proceed as follows.

1. On the **Select which part of registry to load** menu, press Enter to accept the default selection, which is **1 – Password reset \[sam]**. Selecting this option will load the [SAM Windows registry hive](https://docs.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users).

> *The SAM registry hive contains the local user accounts and passwords data.*

Related:[How to Edit the Windows Registry Completely Offline](https://adamtheautomator.com/offline-registry-editor/)

![Loading the Password reset menu](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T225114.563.png)

Loading the Password reset menu

[3rd party ad content](https://f7e228d19127a9a46b5a250bbd5a77cf.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html)

2. On the **Main Interactive Menu** that follows, press Enter to accept the default option, which is **1 – Edit user data and passwords**.

![Select edit user data and passwords](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T225149.461.png)

Select edit user data and passwords

3. Next, on the list of user accounts, look for the user account whose password you want to reset. Find the user’s number under the RID column. Once you have the user’s RID value, type the value into the prompt to select the user and press Enter.

In the example below, the RID for the user to reset is `03ea`, and the username is `Dummy`.

![Entering the user's RID value](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T225239.556.png)

Entering the user’s RID value

[3rd party ad content](https://f7e228d19127a9a46b5a250bbd5a77cf.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html)

4. On the **User Edit Menu**, you’ll notice that there’s no option to *reset* the password, and that is normal—instead, type 1 to select the option to **Clear (blank) user password** and press Enter.

Choosing this option will clear the user’s password. Consequently, you can log in to Windows using this user account without entering a password.

![Selecting to clear the user password ](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T225326.052.png)

Selecting to clear the user password

After clearing the password, you should see a confirmation message similar to the screenshot below.

![Confirmation message](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T225416.992.png)

Confirmation message

5. Now, press Enter to exit the **User Edit Menu**.

![Exiting the User Edit Menu](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T225449.389.png)

Exiting the User Edit Menu

6. Back at the **Main Interactive Menu**, type `q`, and press Enter to exit.

![Exiting the Main Menu](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T225528.508.png)

Exiting the Main Menu

7. At the next prompt, type `y` and press Enter. This action will write the changes you made (clear password) back to the SAM registry hive.

![Saving the changes ](https://adamtheautomator.com/wp-content/uploads/2021/07/Untitled-2021-07-31T225620.458.png)

Saving the changes

After saving the changes, you should see a message saying **EDIT COMPLETE**. You have now finished resetting the Windows 10 user password.

[3rd party ad content](https://f7e228d19127a9a46b5a250bbd5a77cf.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html)

8. Finally, unplug the USB drive from your computer and press `CTRL+ALT+DEL` to restart your computer and boot into Windows. You can then log in using the account without entering a password.

## Conclusion

This tutorial showed you that a forgotten or lost password does not necessarily mean that you’ve already lost access to your computer. Don’t lose hope yet. You’ve learned that the NTPasswd password reset utility can be a lifesaver in such situations.

Apart from resetting passwords, there are other NTPasswd usage scenarios that you can try. How about enabling the built-in administrator account, promoting a standard user as an administrator, and [editing the registry offline](https://adamtheautomator.com/offline-registry-editor/)?

<!--EndFragment-->