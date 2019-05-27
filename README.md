# Dracula.min
_[Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) minified 📦 Less GUI, more code._

Minimal 🌙Dark & 🔆Light themes for [VSCode](https://code.visualstudio.com)

- Flat
- Borderless
- All-one-color

Dracula.min is a minimal version of [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) for [VSCode](https://code.visualstudio.com/). I was inspired by the beautiful seamless style of [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme) which I fell in love with for its immersive feeling and distraction-free UI.

### Dracula.min 

![Dracula.min Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min.png)

### Dracula.min Light

![Dracula.min Light Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-light.png)

### Dracula.min Light Darker

![Dracula.min Light Darker Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-light-darker.png)

### Dracula.min White

![Dracula.min White Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-white.png)

### Dracula.min White Darker

![Dracula.min White Darker Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-white-darker.png)

## Install

### Marketplace

Go to this theme's VSCode Marketplace [extension page](https://marketplace.visualstudio.com/items?itemName=ashrafhadden.dracula-dot-min) and click `install`

### Quick Open <kbd>⌘</kbd> <kbd>P</kbd>

```
ext install ashrafhadden.dracula-dot-min
```

### Command Line

```bash
code --install-extension ashrafhadden.dracula-dot-min
```

### settings.json

For those who prefer [tweaking themes via `settings.json`](https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme), here are all the settings you need to mimic this theme. This has the added advantage of automatically including the latest [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) theme updates.

**Enable/Disable**: surround and `Toggle Block Comment` <kbd>⇧</kbd> <kbd>⌥</kbd> <kbd>A</kbd>

1. Set theme to [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
2. Paste the following into your `settings.json`...

```jsonc
// settings.json
// ...

  "workbench.colorCustomizations": {
    "[Dracula]": {
      // Dracula.min
      // https://github.com/ashrafhadden/dracula.min#settingsjson
      "breadcrumb.background": "#282a36",
      "editor.background": "#282a36",
      "editorGroupHeader.tabsBackground": "#282a36",
      "panel.background": "#282a36",
      "sideBar.background": "#282a36",
      "sideBar.border": "#282a36",
      "sideBarSectionHeader.background": "#282a36",
      "sideBarSectionHeader.border": "#282a36",
      "statusBar.background": "#282a36",
      "statusBar.border": "#282a36",
      "statusBar.noFolderBackground": "#282a36",
      "tab.activeBackground": "#282a36",
      "tab.border": "#282a36",
      "tab.inactiveBackground": "#282a36",
      "terminal.background": "#282a36",
      "terminal.border": "#282a36",
      "titleBar.activeBackground": "#282a36",
      "titleBar.inactiveBackground": "#282a36"
    }
  }
```

## Colors Used

### Light

| Name | [Original (Dracula)](https://github.com/dracula/visual-studio-code/blob/master/src/dracula.yml#L6) | Hex | Darkened | Hex | Ratio to Background (#282a36) | Difference   |
|------|----------------------------------------------------------------------------------------------------|-----|----------|-----|-------------------------------------|--------------|
| COLOR8 | <div style="color:#6272a4; font-size:1.618em">■</div> | #6272a4 | <div style="color:#6171a3; font-size:1.618em">■</div> | #6171a3 | 4.5 | 0% |
| COLOR6 | <div style="color:#8be9fd; font-size:1.618em">■</div> | #8be9fd | <div style="color:#007e90; font-size:1.618em">■</div> | #007e90 | 4.5 | 280% |
| COLOR2 | <div style="color:#50fa7b; font-size:1.618em">■</div> | #50fa7b | <div style="color:#008504; font-size:1.618em">■</div> | #008504 | 4.5 | 290% |
| ORANGE | <div style="color:#ffb86c; font-size:1.618em">■</div> | #ffb86c | <div style="color:#a0651b; font-size:1.618em">■</div> | #a0651b | 4.5 | 230% |
| COLOR5 | <div style="color:#ff79c6; font-size:1.618em">■</div> | #ff79c6 | <div style="color:#c13f8e; font-size:1.618em">■</div> | #c13f8e | 4.5 | 160% |
| COLOR4 | <div style="color:#bd93f9; font-size:1.618em">■</div> | #bd93f9 | <div style="color:#855fbf; font-size:1.618em">■</div> | #855fbf | 4.5 | 160% |
| COLOR1 | <div style="color:#ff5555; font-size:1.618em">■</div> | #ff5555 | <div style="color:#d82f39; font-size:1.618em">■</div> | #d82f39 | 4.5 | 100% |
| COLOR3 | <div style="color:#f1fa8c; font-size:1.618em">■</div> | #f1fa8c | <div style="color:#6c7908; font-size:1.618em">■</div> | #6c7908 | 4.5 | 330% |
| COLOR0 | <div style="color:#21222c; font-size:1.618em">■</div> | #21222c | <div style="color:#21222c; font-size:1.618em">■</div> | #21222c | 14.8 | 0% |
| COLOR1 | <div style="color:#ff5555; font-size:1.618em">■</div> | #ff5555 | <div style="color:#d82f39; font-size:1.618em">■</div> | #d82f39 | 4.5 | 100% |
| COLOR2 | <div style="color:#50fa7b; font-size:1.618em">■</div> | #50fa7b | <div style="color:#008504; font-size:1.618em">■</div> | #008504 | 4.5 | 290% |
| COLOR3 | <div style="color:#f1fa8c; font-size:1.618em">■</div> | #f1fa8c | <div style="color:#6c7908; font-size:1.618em">■</div> | #6c7908 | 4.5 | 330% |
| COLOR4 | <div style="color:#bd93f9; font-size:1.618em">■</div> | #bd93f9 | <div style="color:#855fbf; font-size:1.618em">■</div> | #855fbf | 4.5 | 160% |
| COLOR5 | <div style="color:#ff79c6; font-size:1.618em">■</div> | #ff79c6 | <div style="color:#c13f8e; font-size:1.618em">■</div> | #c13f8e | 4.5 | 160% |
| COLOR6 | <div style="color:#8be9fd; font-size:1.618em">■</div> | #8be9fd | <div style="color:#007e90; font-size:1.618em">■</div> | #007e90 | 4.5 | 280% |
| COLOR8 | <div style="color:#6272a4; font-size:1.618em">■</div> | #6272a4 | <div style="color:#6171a3; font-size:1.618em">■</div> | #6171a3 | 4.5 | 0% |
| COLOR9 | <div style="color:#ff6e6e; font-size:1.618em">■</div> | #ff6e6e | <div style="color:#cb4046; font-size:1.618em">■</div> | #cb4046 | 4.5 | 130% |
| COLOR10 | <div style="color:#69ff94; font-size:1.618em">■</div> | #69ff94 | <div style="color:#008525; font-size:1.618em">■</div> | #008525 | 4.5 | 300% |
| COLOR11 | <div style="color:#ffffa5; font-size:1.618em">■</div> | #ffffa5 | <div style="color:#727724; font-size:1.618em">■</div> | #727724 | 4.5 | 340% |
| COLOR12 | <div style="color:#d6acff; font-size:1.618em">■</div> | #d6acff | <div style="color:#8762ae; font-size:1.618em">■</div> | #8762ae | 4.5 | 210% |
| COLOR13 | <div style="color:#ff92df; font-size:1.618em">■</div> | #ff92df | <div style="color:#b34b97; font-size:1.618em">■</div> | #b34b97 | 4.5 | 200% |
| COLOR14 | <div style="color:#a4ffff; font-size:1.618em">■</div> | #a4ffff | <div style="color:#157f80; font-size:1.618em">■</div> | #157f80 | 4.5 | 320% |
| WHITE | <div style="color:#ffffff; font-size:1.618em">■</div> | #ffffff | <div style="color:#727272; font-size:1.618em">■</div> | #727272 | 4.5 | 350% |
| TEMP_QUOTES | <div style="color:#e9f284; font-size:1.618em">■</div> | #e9f284 | <div style="color:#6c7907; font-size:1.618em">■</div> | #6c7907 | 4.5 | 310% |
| TEMP_PROPERTY_QUOTES | <div style="color:#8be9fe; font-size:1.618em">■</div> | #8be9fe | <div style="color:#007e91; font-size:1.618em">■</div> | #007e91 | 4.5 | 280% |
| LineHighlight | <div style="color:#44475a75; font-size:1.618em">■</div> | #44475a75 | <div style="color:#44475a75; font-size:1.618em">■</div> | #44475a75 | 8.6 | 0% |
| WHITE | <div style="color:#ffffff; font-size:1.618em">■</div> | #ffffff | <div style="color:#727272; font-size:1.618em">■</div> | #727272 | 4.5 | 350% |
| TAB_DROP_BG | <div style="color:#44475a70; font-size:1.618em">■</div> | #44475a70 | <div style="color:#44475a70; font-size:1.618em">■</div> | #44475a70 | 8.6 | 0% |

### Light Darker

| Name | [Original (Dracula)](https://github.com/dracula/visual-studio-code/blob/master/src/dracula.yml#L6) | Hex | Darkened | Hex | Ratio to Background (#282a36) | Difference   |
|------|----------------------------------------------------------------------------------------------------|-----|----------|-----|-------------------------------------|--------------|
| COLOR8 | <div style="color:#6272a4; font-size:1.618em">■</div> | #6272a4 | <div style="color:#425483; font-size:1.618em">■</div> | #425483 | 7 | 120% |
| COLOR6 | <div style="color:#8be9fd; font-size:1.618em">■</div> | #8be9fd | <div style="color:#005d6f; font-size:1.618em">■</div> | #005d6f | 7 | 370% |
| COLOR2 | <div style="color:#50fa7b; font-size:1.618em">■</div> | #50fa7b | <div style="color:#006400; font-size:1.618em">■</div> | #006400 | 7 | 380% |
| ORANGE | <div style="color:#ffb86c; font-size:1.618em">■</div> | #ffb86c | <div style="color:#7d4800; font-size:1.618em">■</div> | #7d4800 | 7 | 320% |
| COLOR5 | <div style="color:#ff79c6; font-size:1.618em">■</div> | #ff79c6 | <div style="color:#9f1670; font-size:1.618em">■</div> | #9f1670 | 7 | 260% |
| COLOR4 | <div style="color:#bd93f9; font-size:1.618em">■</div> | #bd93f9 | <div style="color:#64429e; font-size:1.618em">■</div> | #64429e | 7 | 250% |
| COLOR1 | <div style="color:#ff5555; font-size:1.618em">■</div> | #ff5555 | <div style="color:#ae001c; font-size:1.618em">■</div> | #ae001c | 7 | 200% |
| COLOR3 | <div style="color:#f1fa8c; font-size:1.618em">■</div> | #f1fa8c | <div style="color:#4c5b00; font-size:1.618em">■</div> | #4c5b00 | 7 | 410% |
| COLOR0 | <div style="color:#21222c; font-size:1.618em">■</div> | #21222c | <div style="color:#21222c; font-size:1.618em">■</div> | #21222c | 14.8 | 0% |
| COLOR1 | <div style="color:#ff5555; font-size:1.618em">■</div> | #ff5555 | <div style="color:#ae001c; font-size:1.618em">■</div> | #ae001c | 7 | 200% |
| COLOR2 | <div style="color:#50fa7b; font-size:1.618em">■</div> | #50fa7b | <div style="color:#006400; font-size:1.618em">■</div> | #006400 | 7 | 380% |
| COLOR3 | <div style="color:#f1fa8c; font-size:1.618em">■</div> | #f1fa8c | <div style="color:#4c5b00; font-size:1.618em">■</div> | #4c5b00 | 7 | 410% |
| COLOR4 | <div style="color:#bd93f9; font-size:1.618em">■</div> | #bd93f9 | <div style="color:#64429e; font-size:1.618em">■</div> | #64429e | 7 | 250% |
| COLOR5 | <div style="color:#ff79c6; font-size:1.618em">■</div> | #ff79c6 | <div style="color:#9f1670; font-size:1.618em">■</div> | #9f1670 | 7 | 260% |
| COLOR6 | <div style="color:#8be9fd; font-size:1.618em">■</div> | #8be9fd | <div style="color:#005d6f; font-size:1.618em">■</div> | #005d6f | 7 | 370% |
| COLOR8 | <div style="color:#6272a4; font-size:1.618em">■</div> | #6272a4 | <div style="color:#425483; font-size:1.618em">■</div> | #425483 | 7 | 120% |
| COLOR9 | <div style="color:#ff6e6e; font-size:1.618em">■</div> | #ff6e6e | <div style="color:#a7192c; font-size:1.618em">■</div> | #a7192c | 7 | 230% |
| COLOR10 | <div style="color:#69ff94; font-size:1.618em">■</div> | #69ff94 | <div style="color:#006400; font-size:1.618em">■</div> | #006400 | 7 | 390% |
| COLOR11 | <div style="color:#ffffa5; font-size:1.618em">■</div> | #ffffa5 | <div style="color:#535901; font-size:1.618em">■</div> | #535901 | 7 | 420% |
| COLOR12 | <div style="color:#d6acff; font-size:1.618em">■</div> | #d6acff | <div style="color:#68448e; font-size:1.618em">■</div> | #68448e | 7 | 300% |
| COLOR13 | <div style="color:#ff92df; font-size:1.618em">■</div> | #ff92df | <div style="color:#912a78; font-size:1.618em">■</div> | #912a78 | 7 | 290% |
| COLOR14 | <div style="color:#a4ffff; font-size:1.618em">■</div> | #a4ffff | <div style="color:#005f60; font-size:1.618em">■</div> | #005f60 | 7 | 400% |
| WHITE | <div style="color:#ffffff; font-size:1.618em">■</div> | #ffffff | <div style="color:#555555; font-size:1.618em">■</div> | #555555 | 7 | 430% |
| TEMP_QUOTES | <div style="color:#e9f284; font-size:1.618em">■</div> | #e9f284 | <div style="color:#4c5b00; font-size:1.618em">■</div> | #4c5b00 | 7 | 400% |
| TEMP_PROPERTY_QUOTES | <div style="color:#8be9fe; font-size:1.618em">■</div> | #8be9fe | <div style="color:#005d70; font-size:1.618em">■</div> | #005d70 | 7 | 370% |
| LineHighlight | <div style="color:#44475a75; font-size:1.618em">■</div> | #44475a75 | <div style="color:#44475a75; font-size:1.618em">■</div> | #44475a75 | 8.6 | 0% |
| WHITE | <div style="color:#ffffff; font-size:1.618em">■</div> | #ffffff | <div style="color:#555555; font-size:1.618em">■</div> | #555555 | 7 | 430% |
| TAB_DROP_BG | <div style="color:#44475a70; font-size:1.618em">■</div> | #44475a70 | <div style="color:#44475a70; font-size:1.618em">■</div> | #44475a70 | 8.6 | 0% |

### White

| Name | [Original (Dracula)](https://github.com/dracula/visual-studio-code/blob/master/src/dracula.yml#L6) | Hex | Darkened | Hex | Ratio to Background (#ffffff) | Difference   |
|------|----------------------------------------------------------------------------------------------------|-----|----------|-----|-------------------------------------|--------------|
| COLOR8 | <div style="color:#6272a4; font-size:1.618em">■</div> | #6272a4 | <div style="color:#6171a3; font-size:1.618em">■</div> | #6171a3 | 4.5 | 0% |
| COLOR6 | <div style="color:#8be9fd; font-size:1.618em">■</div> | #8be9fd | <div style="color:#007e90; font-size:1.618em">■</div> | #007e90 | 4.5 | 280% |
| COLOR2 | <div style="color:#50fa7b; font-size:1.618em">■</div> | #50fa7b | <div style="color:#008504; font-size:1.618em">■</div> | #008504 | 4.5 | 290% |
| ORANGE | <div style="color:#ffb86c; font-size:1.618em">■</div> | #ffb86c | <div style="color:#a0651b; font-size:1.618em">■</div> | #a0651b | 4.5 | 230% |
| COLOR5 | <div style="color:#ff79c6; font-size:1.618em">■</div> | #ff79c6 | <div style="color:#c13f8e; font-size:1.618em">■</div> | #c13f8e | 4.5 | 160% |
| COLOR4 | <div style="color:#bd93f9; font-size:1.618em">■</div> | #bd93f9 | <div style="color:#855fbf; font-size:1.618em">■</div> | #855fbf | 4.5 | 160% |
| COLOR1 | <div style="color:#ff5555; font-size:1.618em">■</div> | #ff5555 | <div style="color:#d82f39; font-size:1.618em">■</div> | #d82f39 | 4.5 | 100% |
| COLOR3 | <div style="color:#f1fa8c; font-size:1.618em">■</div> | #f1fa8c | <div style="color:#6c7908; font-size:1.618em">■</div> | #6c7908 | 4.5 | 330% |
| COLOR0 | <div style="color:#21222c; font-size:1.618em">■</div> | #21222c | <div style="color:#21222c; font-size:1.618em">■</div> | #21222c | 14.8 | 0% |
| COLOR1 | <div style="color:#ff5555; font-size:1.618em">■</div> | #ff5555 | <div style="color:#d82f39; font-size:1.618em">■</div> | #d82f39 | 4.5 | 100% |
| COLOR2 | <div style="color:#50fa7b; font-size:1.618em">■</div> | #50fa7b | <div style="color:#008504; font-size:1.618em">■</div> | #008504 | 4.5 | 290% |
| COLOR3 | <div style="color:#f1fa8c; font-size:1.618em">■</div> | #f1fa8c | <div style="color:#6c7908; font-size:1.618em">■</div> | #6c7908 | 4.5 | 330% |
| COLOR4 | <div style="color:#bd93f9; font-size:1.618em">■</div> | #bd93f9 | <div style="color:#855fbf; font-size:1.618em">■</div> | #855fbf | 4.5 | 160% |
| COLOR5 | <div style="color:#ff79c6; font-size:1.618em">■</div> | #ff79c6 | <div style="color:#c13f8e; font-size:1.618em">■</div> | #c13f8e | 4.5 | 160% |
| COLOR6 | <div style="color:#8be9fd; font-size:1.618em">■</div> | #8be9fd | <div style="color:#007e90; font-size:1.618em">■</div> | #007e90 | 4.5 | 280% |
| COLOR8 | <div style="color:#6272a4; font-size:1.618em">■</div> | #6272a4 | <div style="color:#6171a3; font-size:1.618em">■</div> | #6171a3 | 4.5 | 0% |
| COLOR9 | <div style="color:#ff6e6e; font-size:1.618em">■</div> | #ff6e6e | <div style="color:#cb4046; font-size:1.618em">■</div> | #cb4046 | 4.5 | 130% |
| COLOR10 | <div style="color:#69ff94; font-size:1.618em">■</div> | #69ff94 | <div style="color:#008525; font-size:1.618em">■</div> | #008525 | 4.5 | 300% |
| COLOR11 | <div style="color:#ffffa5; font-size:1.618em">■</div> | #ffffa5 | <div style="color:#727724; font-size:1.618em">■</div> | #727724 | 4.5 | 340% |
| COLOR12 | <div style="color:#d6acff; font-size:1.618em">■</div> | #d6acff | <div style="color:#8762ae; font-size:1.618em">■</div> | #8762ae | 4.5 | 210% |
| COLOR13 | <div style="color:#ff92df; font-size:1.618em">■</div> | #ff92df | <div style="color:#b34b97; font-size:1.618em">■</div> | #b34b97 | 4.5 | 200% |
| COLOR14 | <div style="color:#a4ffff; font-size:1.618em">■</div> | #a4ffff | <div style="color:#157f80; font-size:1.618em">■</div> | #157f80 | 4.5 | 320% |
| WHITE | <div style="color:#ffffff; font-size:1.618em">■</div> | #ffffff | <div style="color:#727272; font-size:1.618em">■</div> | #727272 | 4.5 | 350% |
| TEMP_QUOTES | <div style="color:#e9f284; font-size:1.618em">■</div> | #e9f284 | <div style="color:#6c7907; font-size:1.618em">■</div> | #6c7907 | 4.5 | 310% |
| TEMP_PROPERTY_QUOTES | <div style="color:#8be9fe; font-size:1.618em">■</div> | #8be9fe | <div style="color:#007e91; font-size:1.618em">■</div> | #007e91 | 4.5 | 280% |
| LineHighlight | <div style="color:#44475a75; font-size:1.618em">■</div> | #44475a75 | <div style="color:#44475a75; font-size:1.618em">■</div> | #44475a75 | 8.6 | 0% |
| WHITE | <div style="color:#ffffff; font-size:1.618em">■</div> | #ffffff | <div style="color:#727272; font-size:1.618em">■</div> | #727272 | 4.5 | 350% |
| TAB_DROP_BG | <div style="color:#44475a70; font-size:1.618em">■</div> | #44475a70 | <div style="color:#44475a70; font-size:1.618em">■</div> | #44475a70 | 8.6 | 0% |

### White Darker

| Name | [Original (Dracula)](https://github.com/dracula/visual-studio-code/blob/master/src/dracula.yml#L6) | Hex | Darkened | Hex | Ratio to Background (#ffffff) | Difference   |
|------|----------------------------------------------------------------------------------------------------|-----|----------|-----|-------------------------------------|--------------|
| COLOR8 | <div style="color:#6272a4; font-size:1.618em">■</div> | #6272a4 | <div style="color:#425483; font-size:1.618em">■</div> | #425483 | 7 | 120% |
| COLOR6 | <div style="color:#8be9fd; font-size:1.618em">■</div> | #8be9fd | <div style="color:#005d6f; font-size:1.618em">■</div> | #005d6f | 7 | 370% |
| COLOR2 | <div style="color:#50fa7b; font-size:1.618em">■</div> | #50fa7b | <div style="color:#006400; font-size:1.618em">■</div> | #006400 | 7 | 380% |
| ORANGE | <div style="color:#ffb86c; font-size:1.618em">■</div> | #ffb86c | <div style="color:#7d4800; font-size:1.618em">■</div> | #7d4800 | 7 | 320% |
| COLOR5 | <div style="color:#ff79c6; font-size:1.618em">■</div> | #ff79c6 | <div style="color:#9f1670; font-size:1.618em">■</div> | #9f1670 | 7 | 260% |
| COLOR4 | <div style="color:#bd93f9; font-size:1.618em">■</div> | #bd93f9 | <div style="color:#64429e; font-size:1.618em">■</div> | #64429e | 7 | 250% |
| COLOR1 | <div style="color:#ff5555; font-size:1.618em">■</div> | #ff5555 | <div style="color:#ae001c; font-size:1.618em">■</div> | #ae001c | 7 | 200% |
| COLOR3 | <div style="color:#f1fa8c; font-size:1.618em">■</div> | #f1fa8c | <div style="color:#4c5b00; font-size:1.618em">■</div> | #4c5b00 | 7 | 410% |
| COLOR0 | <div style="color:#21222c; font-size:1.618em">■</div> | #21222c | <div style="color:#21222c; font-size:1.618em">■</div> | #21222c | 14.8 | 0% |
| COLOR1 | <div style="color:#ff5555; font-size:1.618em">■</div> | #ff5555 | <div style="color:#ae001c; font-size:1.618em">■</div> | #ae001c | 7 | 200% |
| COLOR2 | <div style="color:#50fa7b; font-size:1.618em">■</div> | #50fa7b | <div style="color:#006400; font-size:1.618em">■</div> | #006400 | 7 | 380% |
| COLOR3 | <div style="color:#f1fa8c; font-size:1.618em">■</div> | #f1fa8c | <div style="color:#4c5b00; font-size:1.618em">■</div> | #4c5b00 | 7 | 410% |
| COLOR4 | <div style="color:#bd93f9; font-size:1.618em">■</div> | #bd93f9 | <div style="color:#64429e; font-size:1.618em">■</div> | #64429e | 7 | 250% |
| COLOR5 | <div style="color:#ff79c6; font-size:1.618em">■</div> | #ff79c6 | <div style="color:#9f1670; font-size:1.618em">■</div> | #9f1670 | 7 | 260% |
| COLOR6 | <div style="color:#8be9fd; font-size:1.618em">■</div> | #8be9fd | <div style="color:#005d6f; font-size:1.618em">■</div> | #005d6f | 7 | 370% |
| COLOR8 | <div style="color:#6272a4; font-size:1.618em">■</div> | #6272a4 | <div style="color:#425483; font-size:1.618em">■</div> | #425483 | 7 | 120% |
| COLOR9 | <div style="color:#ff6e6e; font-size:1.618em">■</div> | #ff6e6e | <div style="color:#a7192c; font-size:1.618em">■</div> | #a7192c | 7 | 230% |
| COLOR10 | <div style="color:#69ff94; font-size:1.618em">■</div> | #69ff94 | <div style="color:#006400; font-size:1.618em">■</div> | #006400 | 7 | 390% |
| COLOR11 | <div style="color:#ffffa5; font-size:1.618em">■</div> | #ffffa5 | <div style="color:#535901; font-size:1.618em">■</div> | #535901 | 7 | 420% |
| COLOR12 | <div style="color:#d6acff; font-size:1.618em">■</div> | #d6acff | <div style="color:#68448e; font-size:1.618em">■</div> | #68448e | 7 | 300% |
| COLOR13 | <div style="color:#ff92df; font-size:1.618em">■</div> | #ff92df | <div style="color:#912a78; font-size:1.618em">■</div> | #912a78 | 7 | 290% |
| COLOR14 | <div style="color:#a4ffff; font-size:1.618em">■</div> | #a4ffff | <div style="color:#005f60; font-size:1.618em">■</div> | #005f60 | 7 | 400% |
| WHITE | <div style="color:#ffffff; font-size:1.618em">■</div> | #ffffff | <div style="color:#555555; font-size:1.618em">■</div> | #555555 | 7 | 430% |
| TEMP_QUOTES | <div style="color:#e9f284; font-size:1.618em">■</div> | #e9f284 | <div style="color:#4c5b00; font-size:1.618em">■</div> | #4c5b00 | 7 | 400% |
| TEMP_PROPERTY_QUOTES | <div style="color:#8be9fe; font-size:1.618em">■</div> | #8be9fe | <div style="color:#005d70; font-size:1.618em">■</div> | #005d70 | 7 | 370% |
| LineHighlight | <div style="color:#44475a75; font-size:1.618em">■</div> | #44475a75 | <div style="color:#44475a75; font-size:1.618em">■</div> | #44475a75 | 8.6 | 0% |
| WHITE | <div style="color:#ffffff; font-size:1.618em">■</div> | #ffffff | <div style="color:#555555; font-size:1.618em">■</div> | #555555 | 7 | 430% |
| TAB_DROP_BG | <div style="color:#44475a70; font-size:1.618em">■</div> | #44475a70 | <div style="color:#44475a70; font-size:1.618em">■</div> | #44475a70 | 8.6 | 0% |

## Light Theme Methodology

When I first attempted to create a Dracula Light theme I simply switched the background [`#282a36`](https://github.com/dracula/dracula-theme#color-palette) and foreground [`#f8f8f2`](https://github.com/dracula/dracula-theme#color-palette) colors to see what would hapen.

![Dracula.min Light (no contrast adjust) Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min-light_no_contrast_adjust.png)

As it turns out, most dark theme colors only work for dark themes 🤷‍♂️ When you only switch the background and foreground, the syntax hightlighting colors
are often left with very poor contrast. In the screenshot above, Yellow is nearly invisible.

### [Chroma.js](https://vis4.net/chromajs) to the rescue!

Thanks to the powerful color manipulation library [Chroma.js](https://github.com/gka/chroma.js), I was able to darken all the syntax colors using it's [color.darken()](https://vis4.net/chromajs/#color-darken) method.

```js
currentColor = chroma(currentColor).darken(1.5);
```

![Dracula.min (darken equally) Screenshot](https://raw.githubusercontent.com/ashrafhadden/dracula.min/master/screenshots/dracula-dot-min_darken_equally.png)

However as you can see, darkening all the syntax colors equally doesn't quite cut it. The yellows are still a bit too light and the file explorer selection highlight on the left is difficult to see. Darkening each color manually and checking by eye seemed like hard work 👀, so being the lazy programmer that I am, I decided to try and automate it!

![patrick technology GIF](https://media1.tenor.com/images/b7a43f2a884a5469c505b3b0838b6aa2/tenor.gif?itemid=5567497)

#### [chroma.contrast()](https://vis4.net/chromajs/#chroma-contrast)

Using Chroma's [.contrast method](https://vis4.net/chromajs/#chroma-contrast) I was able to create a [`while` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) that darkened each syntax color indefinitely until it's contrast ratio reached 4.5. 4.5:1 is the WCAG's [_"Contrast (Minimum)"_](https://www.w3.org/TR/WCAG21/#contrast-minimum) recommendation for text.

```js
while (chroma.contrast(currentColor, foregroundColor) < 4.5) {
    currentColor = chroma(currentColor).darken(0.001);
}
```

> While the contrast ratio between `currentColor` and `foregroundColor` is less than 4.5, darken the `currentColor` by 0.1%

Which results in [Dracula.min Light](#dracula.min-Light).

### Light Theme Darker

The WCAG also has a AAA or [_"Contrast (Enhanced)"_](https://www.w3.org/TR/WCAG21/#contrast-enhanced) recommendation of 7:1. Using the same method as above we can do the following to create a slightly darker syntax variant of the Light Theme:

```js
while (chroma.contrast(currentColor, foregroundColor) < 7) {
    currentColor = chroma(currentColor).darken(0.001);
}
```

Which results in [Dracula.min Light Darker](#dracula.min-Light-Darker).
This provides an even darker color syntax for those who prefer it.

## Learn more about WCAG

-   [Color contrast checker playground](https://webaim.org/resources/contrastchecker/)
-   [Accessible color palette generator](http://colorsafe.co/)
-   [Fantastic human-readable article on Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
-   Gregor Aisch's articles on his inspiration behind Chroma.js
    -   [How To Avoid Equidistant HSV Colors](https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/)
    -   [Mastering Multi-hued Color Scales with Chroma.js](https://www.vis4.net/blog/2013/09/mastering-multi-hued-color-scales/)

## Roadmap
- Settings to control which themes are visible and registered (declutter themepicker menu)

## Special thanks to...

-   ![Derek Sifford](https://github.com/dsifford.png?size=16) [Derek Sifford](https://github.com/dsifford) for [dracula/visual-studio-code](https://github.com/dracula/visual-studio-code) and his auto-magical build process
-   ![Gregor Aisch](https://github.com/gka.png?size=16) [Gregor Aisch](https://github.com/gka) and his passion for colors that led to [Chroma.js](https://vis4.net/chromajs/)

## Feedback

Let me know what you think! Feel free to open issues and PR's over at https://github.com/ashrafhadden/dracula.min
