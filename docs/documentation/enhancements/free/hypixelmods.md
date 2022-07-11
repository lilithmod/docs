---
sidebar_position: 1
sidebar_label: Hypixel Mods
title: Enabling Hypixel Mods
---

## Setup
1. Ensure Lilith, Lunar, and all files relating to Minecraft are closed. Also ensure the Lunar Enable bypasses are off. You can do this by going to the bypasses section in your [Lilith Config][LilithConfig].

:::tip
If you would like an excellent alternative to Lilith's Lunar bypasses, [Lunar Client QT](/docs/documentation/enhancements/lcqt) is a free, open source custom launcher for Lunar Client that allows you to modify the client with agents (don't confuse them with forge mods). Some agents include one to enable Lunar+ features, all cosmetics and emotes, one to customize your hurt-camera shake, and one to enable Freelook, AutoTextHotKey, and Lunar Staff modules like Lilith does. Since some Lilith bypasses can interfere with certain Hypixel Mods, using LCQT in combination with Lilith is much more effective than just Lilith.

:::

## Navigating to the Hosts File
2. Find the search icon/bar at the bottom of your screen and type `Notepad` into the searchbar; 
you should see the Notepad app pop up as an option. **DO NOT** open it yet.
3. Right-click on it ad select Run as Administrator. 
You'll be asked if you want to "allow this app to make changes to your device?". Click Yes.
4. Now that you are running Notepad as an admin, in the top right of the window click File then Open.
5. In file explorer that just popped up, navigate to `C:` -> `Windows` -> `System32` -> `drivers` -> `etc`. This folder may appear blank at first. To show all files, click the dropdown box in the bottom-right of file explorer titled `Text Documents .txt`, then select `All Files`.
6. **Double-Click** on hosts to open it. If there is no hosts file, you can just create a file in the folder called `hosts`.

## Modifying the Hosts File
7. You may see several lines starting with `#`. 
Create a new line at the very bottom of the file below all the lines starting with `#`.
8. Paste the following into that bottom line: `127.0.0.1 hypixel.net.hypixel.io`. 
9. Save your hosts file and close it.

## Connecting to 
10. **Relaunch** Lilith and Lunar like normal.
11. **Change** Your Lilith/localhost server address from `localhost` to `hypixel.net.hypixel.io` before reconnecting.

[LilithConfig]: https://me.lilithmod.xyz/