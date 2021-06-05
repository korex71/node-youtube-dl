# youtube-dl wrapper in node.

### Usage

```
const ytdl = require("./src");

ytdl("https://www.youtube.com/watch?v=djV11Xbc914", {
  noWarnings: true,
  preferFreeFormats: true,
  dumpSingleJson: true,
  youtubeSkipDashManifest: true,
}).then((data) => console.log(data));
```
