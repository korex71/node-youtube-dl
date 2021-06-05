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

In [flags](https://github.com/ytdl-org/youtube-dl/blob/master/README.md#options), you use all of youtube-dl [flags](https://github.com/ytdl-org/youtube-dl/blob/master/README.md#options).
