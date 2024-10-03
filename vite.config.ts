import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components'
import AutoImport from 'unplugin-auto-import/vite'

export default async () => {
  const UnoCSS = (await import('unocss/vite')).default
  return defineConfig({
    plugins: [
      UniHelperManifest(), // https://github.com/uni-helper/vite-plugin-uni-manifest
      UniHelperPages({ // https://github.com/uni-helper/vite-plugin-uni-pages
        dts: 'src/uni-pages.d.ts', // 为页面路径生成 TypeScript 声明
        homePage: 'pages/index/index', // 设置默认路由入口
        // mergePages: true, // 是否扫描并合并 pages.json 中 pages 字段
      }),
      UniHelperLayouts(), // https://github.com/uni-helper/vite-plugin-uni-layouts
      UniHelperComponents({ // https://github.com/uni-helper/vite-plugin-uni-components
        dts: 'src/components.d.ts',
        directoryAsNamespace: true,
      }),
      Uni(),
      AutoImport({ // https://github.com/antfu/unplugin-auto-import
        imports: ['vue', '@vueuse/core', 'uni-app'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/composables', 'src/stores', 'src/utils'],
        vueTemplate: true,
      }),
      UnoCSS(), // https://github.com/antfu/unocss
    ],
  })
}
