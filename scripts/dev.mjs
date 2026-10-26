import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const server = spawn("npx.cmd", ["next", "dev"], {
  stdio: "inherit",
  shell: true,
});

server.on("exit", (code) => {
  process.exitCode = code ?? 0;
});

process.on("SIGINT", () => server.kill("SIGINT"));

async function openChrome() {
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) return;

    try {
      const response = await fetch("http://localhost:3000");

      if (response.ok || response.status < 500) {
        spawn("cmd.exe", [
          "/c",
          "start",
          "",
          "chrome",
          "http://localhost:3000",
        ], {
          detached: true,
          stdio: "ignore",
        }).unref();

        return;
      }
    } catch {
      // Wait for the development server.
    }

    await delay(1000);
  }

  console.error("Next.js did not become ready within 60 seconds.");
}

openChrome();
