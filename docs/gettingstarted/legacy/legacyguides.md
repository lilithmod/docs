---
sidebar_position: 4
sidebar_label: Legacy Guides
title: Guides and Enhancements
---

## Optional Enhancements

### Free

<!--- Hypixel Mods Enable --->
<details>
  <summary>
    Enable Hypixel Mods</summary>
  1. Ensure Lilith, Lunar, and all files relating to Minecraft are closed.
Also ensure the Lunar Enable bypasses are off. 
You can do this by settings `lunar = true` to `lunar = false` in your config, if it isn't already `false`. 
  Note: If you need to use Lunar Enable we recommend using [Lunar Client QT][LunarClientQT], 
an open source custom launcher for Lunar. 
It lets you add custom mods to Lunar called agents that are similar to forge mods in nature. 
Please note most forge mods won't work with it, as the only agents that will work with it are specially written ones 
made in [Java Byte Code][JavaByteCode]. Popular agents include an unlocker for Lunar+, every emote, and every cosmetic, 
similar Lunar bypasses to the ones Lilith offers, and a customizable hurt-camera.
  2. Find the search icon/bar at the bottom of your screen and type Notepad into the searchbar; 
you should see the Notepad app pop up as an option. DO NOT open it yet.
  3. Right-click on it ad select Run as Administrator. 
You'll be asked if you want to "allow this app to make changes to your device?". Click Yes.
  4. Now that you are running Notepad as an admin, in the top right of the window click File then Open.
  5. Navigate to `C:` -> `Windows` -> `System32` -> `drivers` -> `etc`. This folder may appear blank at first. 
To show all files, click the dropdown box in the bottom-right of file explorer titled 
`Text Documents .txt`, then select `All Files`. If you're a macOS user your hosts file should be in the etc folder.
  6. **Double-Click** on hosts to open it. You may see several lines starting with `#`. 
Create a new line at the very bottom of the file below all the lines starting with `#`.
  7. Paste the following into that bottom line: `127.0.0.1 hypixel.net.hypixel.io`. 
Next, save your hosts file and close it.
  8. Relaunch Lilith and Lunar like normal.
  9. **Change** Your Lilith/localhost server address from `localhost` to `hypixel.net.hypixel.io` before connecting.

</details>

<br/>

<!--- Adding Alts --->
<details>
  <summary>
    Add Alts</summary>

  **Note: Lilith WILL NOT support Mojang accounts in 1.0**
  1. Ensure Lilith and Lunar are closed.
  2. Navigate to the TOML file in your Lilith folder where you previously entered the details of your main minecraft account.
Scroll down to the `[server.authentication]` portion of your TOML file. 
You should see the place where you entered you main's details. 
You are going to enter your alt's details following the exact same formatting you used for your main.
  3. Copy the entire line with your main's details to your clipboard by pressing `ctrl` + `c`
  4. Create a new line right underneath the line with your main's details. 
Paste the line you just copied into this new line.
  5. Replace the ign and email portions in this new line with your alts details 
following the same formatting rules you did with your main.
  6. Save your toml file and close it. Launch Lilith and Minecraft. 
In Minecraft, sign in to your alt and connect to the Lilith localhost server.
  7. Just like you did with your main, authenticate with Microsoft with the email associated with the ign 
you are trying to log in with. You may have to click on 
`sign in with a different microsoft account` to choose the right email to sign in with.
  8. To add more alts just follow the above steps to add a new alt on each line 
and authenticating each one with microsoft one by one.

</details>

<br/>

### Requires Premium

<!--- Acquiring Premium --->
<details>
  <summary>
    How to Get Premium</summary>

  - If you would like to purchase premium please DM an admin or developer. 
You can contact us via the [Lilith Discord Server][LilithDiscord]. 
Licenses are $10 for lifetime access to all Lilith premium updates and features. 
Server boosters will also receive 1 month of premium for each month they boost the server.

</details>

<br/>

## Troubleshooting
- If none of the solutions below work for you, please create a ticket in the [Lilith Discord Server][LilithDiscord].

<!--- Lilith Not Running --->
<details>
  <summary>
    Java.net Connection Exception In Game</summary>

  - When you connected to localhost you didn't make sure to have Lilith running while you were doing so. 
Please launch Lilith and keep it running while you are connected to localhost.

</details>

<br/>

<!--- Socket Closed --->
<details>
  <summary>
    End, SocketClosed</summary>

  - You have not added your details to your TOML file, or if you have, they were added improperly. 
Please see the examples above in the `Inserting Your Credentials` section of this guide 
to ensure you entered your details properly.
  - Note: If you are changing your TOML file, be sure to save it and relaunch Lilith to load your changes properly. 

</details>

<br/>

<!--- TOML Syntax Error --->
<details>
  <summary>
    Bad Atom Value at line ___</summary>

  - You didn't format your TOML file properly according to the `Inserting Your Credentials` section 
in the guide and Lilith is rejecting the improper formatting. 
Please see the examples above to ensure it is formatted correctly.
  - Note: If you are changing your TOML file, be sure to save it and relaunch Lilith to load your changes properly.

</details>

<br/>

<!--- TOML Syntax Error --->
<details>
  <summary>
    Unexpected token in JSON at position ___</summary>

  - You didn't format your TOML file properly according to the `Inserting Your Credentials` section 
in the guide and Lilith is rejecting the improper formatting. 
Please see the examples above to ensure it is formatted correctly.
  Note: If you are changing your TOML file, be sure to save it and relaunch Lilith to load your changes properly.

</details>

<br/>

<!--- Wrong Account Authentication Fix --->
<details>
  <summary>
    Lilith Is Logging In to the Wrong Account</summary>

  - When you were authenticating either a main or an alt with Microsoft you accidentally signed in 
with a Microsoft account that was not associated with the ign you were trying to log in with.
  1. Close Lilith and Minecraft
  2. Navigate to your `.Minecraft` folder by typing `%Appdata%` into the searchbar 
at the bottom of your screen and then finding `.Minecraft`.
  3. Find the JSON cache files that start with a bunch of random characters and delete them. 
There should be 3 of these per account you use.
  4. Relaunch both Lilith and Minecraft and reauthenticate with Microsoft on each account. 
Remember to authenticate each ign with the **proper** Microsoft account associated with it. You may have to click `sign in with a different Microsoft account` to do so.

</details>

<!--- Links --->
[LilithDownload]: https://github.com/GhqstMC/LilithReleases/releases/download/0.6.0-alpha.3/lilith-win-0-6-0-alpha-3.exe
[LunarClientQT]: https://github.com/Nilsen84/lunar-client-qt
[JavaByteCode]: https://en.wikipedia.org/wiki/Java_bytecode
[LilithDiscord]: https://discord.gg/lilith
[LilithDocsFAQ]: https://docs.lilithmod.xyz/#/FAQ