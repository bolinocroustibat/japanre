import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build",
  },
  define: {
    "process.env.PUBLIC_URL": JSON.stringify(""),
  },
});
