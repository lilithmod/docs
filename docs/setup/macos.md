---
sidebar_position: 2
sidebar_label: MacOS
title: MacOS Setup
---
<!--- Conttributors: --->
<!--- Sam (https://github.com/Scherso) for creating the majority of this beautiful guide --->
<!--- FireStorm (FireStorm#1000) for minor formatting adjustments and changes --->
<!--- Anyone is free to use any part of this guide for their own usage with the stipulation all contributors above must be credited --->

<h3>

Written by Salmon 

</h3>

<h4>

Note before running any commands, all files should stay in your `~/Downloads` directory, this should be done automatically upon downloading. 

</h4>

---
           
## First, Opening a Terminal window.

- Download Lilith [here][lilithdownload] if you haven't already.
- Upon downloading lilith, open a new terminal window, you can do this by pressing `Command + Space` on your keyboard and typing: Terminal
- Note: You can make sure you're in your home directory by running `cd ~/`

<br />

## Second, Grant [Read and Execute][chmod] Permission to Lilith 

- Copy the script (below) to your clipboard, upon doing this go back to the Terminal wnidow you have just opened and paste the command, upon pasting the command in terminal press "enter" or "return" on your keyboard. 

```bash
#!/bin/bash

if [[ ! -d "~/Desktop/Lilith" ]] ; then
  mkdir ~/Desktop/Lilith
else
  clear;
  rm -rf ~/Desktop/Lilith/*
fi

cd ~/Desktop/Lilith && mv ~/Downloads/lilith-macos-0-6-0-alpha-3 ~/Desktop/Lilith ;

chmod 755 ~/Desktop/Lilith/lilith-macos-0-6-0-alpha-3 ; curl -O https://api.lilithmod.xyz/assets/lilith-0-6-0.toml --output-dir ~/Desktop/Lilith

open -a "TextEdit" ~/Desktop/Lilith/lilith-0-6-0.toml
```

<br />

## Third, Add your credentials to Lilith's configuration file

- Press `Command + F` on your keyboard and type `[server.authenticatoin]` 
- Once you are in the server authentication group pick the following section's depending on your account type. 

<details>
  <summary>
       For Microsoft Accounts</summary>

  1. **You will see** `ExampleMicrosoftAccount = ['microsoft.account.email@example.com', '', 'microsoft']`
  2. **Replace** `ExampleMicrosoftAccount` **with your Minecraft Account Username, also known as your In Game Name.** 
  3. **Replace** `microsoft.account.email@example.com` **with your email address accociated with your Microsoft Account.**
  
     **Note: do NOT replace** `microsoft` **or the blank field** `''` **with any other text.**
  
</details>

<details>
  <summary>
       For Mojang Accounts</summary>

  1. **You will see** `ExampleMojangAccount = ['mojang.account.email@example.com', 'password goes here!']`
  2. **Replace** `ExampleMojangAccount` **with your Minecraft Account Username, also known as your In Game Name.** 
  3. **Replace** `mojang.account.email@example.com` **with your email address accociated with your Mojang Account.**
  4. **Replace** `password goes here!` **with the password you use to log into your Mojang Account.**
  
</details>

<br />

## Executing Lilith 

Once you have completed all the steps above, copy the command below to your clipboard, upon copying this command go to your Terminal window, paste this command into the the text box, and then press "Enter" or "Return" on your keyboard. 

```bash
cd ~/Desktop/Lilith && ./lilith-macos-0-6-0-alpha-3
```

<br />

## Joining Localhost

Now in Minecraft go to `Multiplayer` -> `Direct Connect` and in the text box copy and paste the following: `localhost`

Once you have copy and pasted localhost, click connect, once you have connected check Terminal and authenticate at the link. :tada:

[lilithdownload]: https://github.com/GhqstMC/LilithReleases/releases/download/0.6.0-alpha.3/lilith-macos-0-6-0-alpha-3
[chmod]: https://en.wikipedia.org/wiki/Chmod