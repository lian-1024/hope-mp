import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    // 自动扫描
    autoscan: true,
    custom: {
      // uni-ui 规则如下配置
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
      // 以 Benefit 开头的组件， 在 components 文件夹中查找引入 (需要重启服务器)
      '^Benefit(.*)': '@/components/Benefit$1.vue',
    },
  },
  pages: [
    {
      path: 'pages/index/index',
      style: {
        navigationBarTitleText: '首页',
      },
    },
    {
      path: 'pages/dynamic/dynamic',
      style: {
        navigationBarTitleText: '动态',
      },
    },
    {
      path: 'pages/public-benefit/public-benefit',
      style: {
        navigationBarTitleText: '做公益',
      },
    },
    {
      path: 'pages/volunteer-activity/volunteer-activity',
      style: {
        navigationBarTitleText: '做志愿',
      },
    },
    {
      path: 'pages/my/my',
      style: {
        navigationBarTitleText: '我',
      },
    },
  ],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: 'Vitesse-Uni',
    navigationStyle: 'custom',
  },

  tabBar: {
    color: '@tabFontColor',
    selectedColor: '@tabSelectedColor',
    borderStyle: '@tabBorderStyle',
    backgroundColor: '@tabBgColor',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/tab/ic_home.png',
        selectedIconPath: 'static/tab/ic_home_selected.png',
      },
      {
        pagePath: 'pages/public-benefit/public-benefit',
        text: '做公益',
        iconPath: 'static/tab/ic_public_benefit.png',
        selectedIconPath: 'static/tab/ic_public_benefit_selected.png',
      },
      {
        pagePath: 'pages/volunteer-activity/volunteer-activity',
        text: '做志愿',
        iconPath: 'static/tab/ic_volunteer.png',
        selectedIconPath: 'static/tab/ic_volunteer_selected.png',
      },
      {
        pagePath: 'pages/dynamic/dynamic',
        text: '社区',
        iconPath: 'static/tab/ic_dynamic.png',
        selectedIconPath: 'static/tab/ic_dynamic_selected.png',
      },
      {
        pagePath: 'pages/my/my',
        text: '我',
        iconPath: 'static/tab/ic_my.png',
        selectedIconPath: 'static/tab/ic_my_selected.png',
      },
    ],
  },
})
