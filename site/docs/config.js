export default [
  {
    name: 'intro',
    label: '起步',
    component: () => import('@docs/intro.md'),
  },
  {
    name: 'color',
    label: '色彩',
    component: () => import('./components/Colors/index.vue'),
  },
  {
    name: 'i18n',
    label: '国际化',
    component: () => import('@docs/i18n.md'),
  },
  {
    name: 'classnames',
    label: '快捷类名',
    component: () => import('@docs/classnames.md'),
  },
  {
    name: 'plugin',
    label: '编辑器插件',
    component: () => import('@docs/plugin.md'),
  },
  {
    name: 'Avatar',
    label: '头像',
    component: () => import('@/avatar/README.md'),
  },
  {
    name: 'ActionSheet',
    label: '动作面板',
    component: () => import('@/action-sheet/README.md'),
  },
  {
    name: 'Button',
    label: '按钮',
    component: () => import('@/button/README.md'),
  },
  {
    name: 'Badge',
    label: '红点',
    component: () => import('@/badge/README.md'),
  },
  {
    name: 'Checkbox',
    label: '多选框',
    component: () => import('@/checkbox/README.md'),
  },
  {
    name: 'Dialog',
    label: '对话框',
    component: () => import('@/dialog/README.md'),
  },
  {
    name: 'DatetimePicker',
    label: '日期选择器',
    component: () => import('@/datetime-picker/README.md'),
  },
  {
    name: 'Divider',
    label: '分割线',
    component: () => import('@/divider/README.md'),
  },
  {
    name: 'Flex',
    alias: 'Row',
    label: '弹性布局',
    component: () => import('@/row/README.md'),
  },
  {
    name: 'Icon',
    label: '图标',
    component: () => import('@/icon/README.md'),
  },
  {
    name: 'InfiniteLoading',
    label: '无限滚动',
    component: () => import('@/infinite-loading/README.md'),
  },
  {
    name: 'Input',
    label: '输入框',
    component: () => import('@/input/README.md'),
  },
  {
    name: 'Indexes',
    label: '索引',
    component: () => import('@/indexes/README.md'),
  },
  {
    name: 'Loading',
    label: '加载',
    component: () => import('@/loading/README.md'),
  },
  {
    name: 'NoticeBar',
    label: '通告栏',
    component: () => import('@/notice-bar/README.md'),
  },
  {
    name: 'NavBar',
    label: '导航栏',
    component: () => import('@/nav-bar/README.md'),
  },
  {
    name: 'List',
    label: '列表',
    component: () => import('@/list/README.md'),
  },
  {
    name: 'Picker',
    label: '选择器',
    component: () => import('@/picker/README.md'),
  },
  {
    name: 'Popup',
    label: '弹出层',
    component: () => import('@/popup/README.md'),
  },
  {
    name: 'Progress',
    label: '进度条',
    component: () => import('@/progress/README.md'),
  },
  {
    name: 'Radio',
    label: '单选框',
    component: () => import('@/radio/README.md'),
  },
  {
    name: 'Switch',
    label: '开关',
    component: () => import('@/switch/README.md'),
  },
  {
    name: 'SlipDrawer',
    label: '滑动抽屉',
    component: () => import('@/slip-drawer/README.md'),
  },
  {
    name: 'SearchBar',
    label: '搜索框',
    component: () => import('@/search-bar/README.md'),
  },
  {
    name: 'Swiper',
    label: '轮播',
    component: () => import('@/swiper/README.md'),
  },
  {
    name: 'Tab',
    label: '页签',
    component: () => import('@/tab/README.md'),
  },
  {
    name: 'Tabbar',
    label: '标签栏',
    component: () => import('@/tabbar/README.md'),
  },
  {
    name: 'Toast',
    label: '提示',
    component: () => import('@/toast/README.md'),
  },
  {
    name: 'Tag',
    label: '标签',
    component: () => import('@/tag/README.md'),
  },
  {
    name: 'Tooltips',
    label: '气泡提示',
    component: () => import('@/tooltips/README.md'),
  }
];
