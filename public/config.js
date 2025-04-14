// 配置
window.Config = {

  // 显示标题
  SiteName: 'Eternity-Sky 网站监测',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm800303925-241056bd50456f2b6ae4e3ac',
    'm800168589-c331dc4b9d118ba291c8f025',
    'm800169332-63dd70481e0628c8985ae0b6',
    'm800169729-64485712606e71c49190a2dc',
    'm800169922-917a48597c0a5b287c81d299',
    'm800170144-0e91dbcea2626a14a084229c',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '论坛',
      url: 'https://etoj.freeflarum.com/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/Eternity-Sky/uptime-status'
    },
    {
      text: 'ETOJ',
      url: 'https://etoj.xyz'
    },
    {
      text: '由 Netlify 部署',
      url: 'https://www.netlify.com'
    }
  ],
};
