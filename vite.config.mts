// https://vitejs.dev/config/
import type { UserConfig } from "vite";
import addContributors from "./.vitepress/addContributors";
export default {
  build: {
    chunkSizeWarningLimit: 4096,
  },
  plugins: [addContributors],
} as UserConfig;
