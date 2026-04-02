import net from "node:net";
import { spawn } from "node:child_process";

const PORT = 3001;
const HOST = "127.0.0.1";

function isPortInUse(port, host) {
  return new Promise((resolve) => {
    const socket = new net.Socket();

    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });

    socket.once("error", () => {
      resolve(false);
    });

    socket.connect(port, host);
  });
}

const portInUse = await isPortInUse(PORT, HOST);

if (portInUse) {
  console.log(
    `A local preview is already running at http://${HOST}:${PORT}.\n` +
      "Reuse that page, or stop the existing dev server before starting a new one."
  );
  process.exit(0);
}

const child = spawn(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["next", "dev", "-p", String(PORT), "--hostname", HOST],
  {
    stdio: "inherit",
    env: process.env,
  }
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
