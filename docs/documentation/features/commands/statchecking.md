---
sidebar_position: 1
sidebar_label: Statchecking
title: Statchecking Commands
---

---

Lilith provides an incredibly useful manual statchecking feature through the `/sc` command.

:::info Command: /sc

`/sc <gamemode> [targets...]`

Statchecks the target players in chat.

:::

### Gamemodes

Many of the shorthand gamemode aliases are self-explanatory, such as `/sc b` meaning `/sc bridge`. Most of the gamemodes themselves are taken from the
play command syntax used by Hypixel. For a full list of gamemode aliases, type `/sc` without any arguments.

:::tip

The full list of aliases, as well as their respective gamemodes, can be found in the `~/lilith/store.json` file.

:::

### Targets

`/sc` takes an unlimited number of target usernames. Do note that an excessive amount of statchecking will cause a Hypixel API rate limit.
If no targets are specified, the command will default to checking yourself.

#### Selectors (Experimental)

Targets can also be selectors. Selectors are similar to vanilla Minecraft selectors, but designed for Hypixel first.

| Selector | Description          |
|----------|----------------------|
| `@a`     | All players in lobby |
| `@p`     | All party members    |
| `@me`    | Yourself             |

#### Future Selectors

| Selector        | Description                                                |
|-----------------|------------------------------------------------------------|
| `@o`            | All opponents                                              |
| `@red`, `@blue` | All members of said team                                   |
| `>>`            | Highest stat player in lobby                               |
| `<<`            | Lowest stat player in lobby                                |
| `>>>`           | Highest stat player in lobby, including party and yourself |
| `<<<`           | Lowest stat player in lobby, including party and yourself  |

If you have ideas for future selectors, please make a suggestion.