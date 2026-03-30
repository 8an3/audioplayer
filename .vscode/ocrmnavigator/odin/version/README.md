


<a style="text-align: center;" href="https://marketplace.visualstudio.com/items?itemName=skyler.ocrmnav">
  <img style="display: block; margin: 0 auto;" src="https://raw.githubusercontent.com/8an3/midgardr-notes/main/utils/odin.png" />
  </a>

<h1 style="text-align: center;">MIÐGARÐR SÐK - MEÐIA PLAYER</h1>

<h4 align="center">A dead simple, user friendly media player shipped with some nice to have features.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •  
  <a href="#themes">Themes</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p> 

<div style="text-align: center;" >
  <img style="display: block; margin: 0 auto;" src="https://raw.githubusercontent.com/8an3/audioplayer/main/docs/audioplayer.gif" />
</div>

## Key Features

- **Displays tracks cover image**, if the current track does not have a cover photo one of 8 custom svgs replaces it on the spinning vynal record player that activates whenever a track is playing.
- **Random**
- **No repeat** - **Repeat all** - **Repeat single track**
- **Volume booster**, increasing the volume up to 300%. This is the ONLY media player that I know of, that features a volume booster, that ACTUALLY boosts the volume. The next best thing would be vlc, but that has multiple asterisks. I do not know of a single chrome extension that has both, it either one or the other and trust me, I've been searching for months and have tested every single one I could find. Just finding a good booster alone, is difficult. This solves both those problems. NOTE: I do not know what api the other volume booster extensions use, as this one is defiantly louder. Typically, I can listen to music with them cranked pretty high. This one I haven't pushed past 150%, so just be mindfull of that and don't accidently max it with an expensive sound system. For that reason, for the meantime, I did not include the feature where your boosted volume setting is saved in chromes api. That may change in the future, where you would have to explicitly turn it on.
- **Playlist** featuring toggle display/hidden
- **Folder and single track selection**, allows you to select any local folder to play. Tracks do not get sent over http, the data stays local so you can listen online or offline.
- **A host of different stylistic customizations** that add up to over 46,060 different configurations from just three values that are all accissible from the main ui via selects, you may configure the following:
  - **50-60+** fonts
  - **90+** themes to choose from
  - Whenever a font, theme has been selected, your selection immediatly gets saved using chromes api so that it can be accessed across devices and such.

UPDATE:

- UI has been updated so that on load, everything fits within the window nicely without having to resize it.
- Whenever you select a directory, it saves the directory location in chromes storage api making it so that, the next time that you open the media player the directory is alreay pre-loaded. Due to google security policy, the playlist CANNOT start at activation, but by simply pressing the folder button satisfies googles requirements of a user interaction and starts that folders playlist without having to re-select it.
- Preset select was removed to save on space, but it's not like it was doing that much to begin with.

This has turned into probably the best media player due to its ease of use, how quickly from startup to when music is actually playing, the extremely dead simple ui. With the below updates, I have yet to open another media player.

## How To Use

<img src="https://raw.githubusercontent.com/8an3/midgardr-notes/main/steps/one.svg" width="24"  style="vertical-align: middle; margin-bottom: 4px;">&nbsp;&nbsp;&nbsp;&nbsp; Clone this repository

```bash
git clone https://github.com/8an3/audioplayer.git
```

<img src="https://raw.githubusercontent.com/8an3/midgardr-notes/main/steps/two.svg" width="24"  style="vertical-align: middle; margin-bottom: 4px;">&nbsp;&nbsp;&nbsp;&nbsp; Open chromes extensions via chromes dropdown menu or by clicking [chrome://extensions/](chrome://extensions/).

<img src="https://raw.githubusercontent.com/8an3/midgardr-notes/main/steps/three.svg" width="24"  style="vertical-align: middle; margin-bottom: 4px;">&nbsp;&nbsp;&nbsp;&nbsp; Ensure that developer mode is active via the switch in the top right hand corner on the `chrome://extensions/` page.

<img src="https://raw.githubusercontent.com/8an3/midgardr-notes/main/steps/four.svg" width="24"  style="vertical-align: middle; margin-bottom: 4px;">&nbsp;&nbsp;&nbsp;&nbsp; Click `Load unpacked`, located in the top left corner on the `chrome://extensions/` page and select the media player project.

<img src="https://raw.githubusercontent.com/8an3/midgardr-notes/main/steps/five.svg" width="24"  style="vertical-align: middle; margin-bottom: 4px;">&nbsp;&nbsp;&nbsp;&nbsp; An icon will have been added alongside your other extensions, clicking on it will open the media player for you to use.

> **Note**
> You you will only have to load in the media player into chrome once, and will remain installed with your extensions.

## You may also like...

- [DevStack](https://marketplace.visualstudio.com/items?itemName=skyler.ocrmnav) - Check out MIÐGARÐR SÐK by visiting the VSCode extension
  

## License

MIT


