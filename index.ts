import YTGetter from "./src";
(async () => {
  YTGetter("https://www.youtube.com/watch?v=lFAaaXEB0SM", {
    dumpSingleJson: true,
    noWarnings: true,
    noCallHome: true,
    noCheckCertificate: true,
    preferFreeFormats: true,
    youtubeSkipDashManifest: true,
  }).then((data) => {});
})();
