import os from "os";
import path from "path";

const PLATFORM = os.platform() === "win32" ? "win32" : "unix";

const BINARY_URL =
  PLATFORM === "unix"
    ? "https://yt-dl.org/downloads/latest/youtube-dl"
    : "https://yt-dl.org/downloads/2021.05.16/youtube-dl.exe";

const BINARY_DIR = path.join(__dirname, "..", "bin");

const BINARY_FILENAME =
  process.env.BINARY_FILENAME ||
  `youtube-dl${PLATFORM === "win32" ? ".exe" : ""}`;

const BINARY_PATH = path.join(BINARY_DIR, BINARY_FILENAME);

export { BINARY_DIR, BINARY_FILENAME, BINARY_URL, BINARY_PATH };
