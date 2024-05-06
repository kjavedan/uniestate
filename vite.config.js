import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

const pathSrc = path.resolve(__dirname, "src");


// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      "~": `${pathSrc}`,
    },
  },


  plugins: [vue(),

  //unocss
  Unocss({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        warn: true,
        extraProperties: {
          display: "inline-block",
          "vertical-align": "middle",
          // ...
        },
      }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
  }),
  ],
})
