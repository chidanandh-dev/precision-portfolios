import { cp, rm } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.resolve(rootDir, "dist");
const vercelOutputDir = path.resolve(rootDir, ".vercel", "output");

async function copyDirectory(source, destination) {
  await cp(source, destination, { recursive: true });
}

async function main() {
  await rm(vercelOutputDir, { recursive: true, force: true });

  await cp(path.join(distDir, "config.json"), path.join(vercelOutputDir, "config.json"));
  await copyDirectory(path.join(distDir, "client"), path.join(vercelOutputDir, "static"));
  await copyDirectory(path.join(distDir, "server"), path.join(vercelOutputDir, "functions", "__server.func"));
}

main().catch((error) => {
  console.error("Failed to prepare Vercel output:", error);
  process.exitCode = 1;
});