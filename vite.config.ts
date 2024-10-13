import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "iranian-debit-cards-react",
      fileName: "iranian-debit-cards-react",
      formats: ["cjs", "es", "umd"],
    },
  },
});
