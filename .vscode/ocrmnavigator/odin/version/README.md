
<a style="text-align: center;" href="https://marketplace.visualstudio.com/items?itemName=skyler.ocrmnav">
  <img style="display: block; margin: 0 auto;" src="https://raw.githubusercontent.com/8an3/midgardr-notes/main/utils/odin.png" />
  </a>


<h1 style="text-align: center;">MIÐGARÐR SÐK - Skyler Zanth</h1>


<h4 align="center">A dead simple, user friendly media player shipped with some nice to have features.</h4>

 

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •  
  <a href="#themes">Themes</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/8an3/audioplayer/main/docs/audioplayer.gif)

## Key Features

* Displays tracks cover image, if the current track does not have a cover photo one of 8 custom svgs replaces it on the spinning vynal record player that activates whenever a track is playing.
* Random
* No repeat - Repeat all - Repeat single track
* Volume booster, increasing the volume up to 300%. This is the ONLY media player that I know of, that features a volume booster, that ACTUALLY boosts the volume. The next best thing would be vlc, but that has multiple asterisks. I do not know of a single chrome extension that has both, it either one or the other and trust me, I've been searching for months and have tested every single one I could find. Just finding a good booster alone, is difficult. This solves both those problems. NOTE: I do not know what api the other volume booster extensions use, as this one is defiantly louder. Typically, I can listen to music with them cranked pretty high. This one I haven't pushed past 150%, so just be mindfull of that and don't accidently max it with an expensive sound system. For that reason, for the meantime, I did not include the feature where your boosted volume setting is saved in chromes api. That may change in the future, where you would have to explicitly turn it on.
* Playlist featuring toggle display/hidden
* Folder anbd single track selection, allows you to select any local folder to play. Tracks do not get sent over http, the data stays local so you can listen online or offline.
* A host of different stylistic customizations that add up to over 46,060 different configurations from just three values that are all accissible from the main ui via selects, you may configure the following:
  * 14+ Presets - Not the most noticeable in this small of a implementation but put it in with the themes.
  * 50-60+ fonts
  * 90+ themes to choose from
* Any change to the themes settings, instantly updates the UI. I must admit, the selects aren't in the exact spot I would LIKE them to be, but... when you compare them to the likes of vlc and other media players that even allow you to change the theme... it is many leagues, a better implementation than say the likes of vlc. First time I tried doing that on vlc, took over 2 hours ** rolls eyes **, thats IF you can find the folders right away. Anyways, if I'm not mistaken, I beleive that this player hosts the highest number of available themes to choose from, all while not having to open a single menu or dropdown.

> [!NOTE]
>
> Whenever a font, preset or theme has been selected, your selection immediatly gets saved using chromes api so that it can be accessed across devices and such.
>
> This has turned into probably the best media player due to its ease of use, how quickly from startup to when music is playing, the extremely dead simple ui. While currently, its not as compact as I would like it to be, in the future I will make it so that there are several 'views' to choose from that will range in sizes. Don't get me wrong, it is already a nice size compared to other media players, and tbh its perfect the way it is, I just perfer something a bit more compact while I code/work.

## How To Use

Currently, I do not plan on posting this to the chrome extension marketplace

```bash
# Clone this repository
git clone https://github.com/8an3/audioplayer.git

# Go into the repository
$ cd electron-markdownify

# Install dependencies
$ npm install

# Run the app
$ npm start
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## Themes 

<details> <summary>75+ Color Themes</summary>



</details>
 
## Related

[Try Web version of Markdownify](https://notepad.js.org/markdown-editor/)

## Support

If you like this project and think it has helped in any way, consider buying me a coffee!

<a href="https://buymeacoffee.com/amitmerchant" target="_blank"><img src="app/img/bmc-button.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## You may also like...

- [Pomolectron](https://github.com/amitmerchant1990/pomolectron) - A pomodoro app
- [Correo](https://github.com/amitmerchant1990/correo) - A menubar/taskbar Gmail App for Windows and macOS

## License

MIT

---

> [amitmerchant.com](https://www.amitmerchant.com) &nbsp;&middot;&nbsp;
> GitHub [@amitmerchant1990](https://github.com/amitmerchant1990) &nbsp;&middot;&nbsp;
> Twitter [@amit_merchant](https://twitter.com/amit_merchant)

