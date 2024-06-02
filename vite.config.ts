import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteEslint from 'vite-plugin-eslint';
import UnoCSS from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      // include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx', 'src/*.js', 'src/*.ts', 'src/*.tsx'],
      failOnError: false,
    }),
    UnoCSS({
      presets: [presetAttributify({}), presetUno()]
    })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.less'], //忽略输入的拓展
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true
      }
    }
  },
});
