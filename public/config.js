// 配置
window.Config = {

  // 显示标题
  SiteName: 'CB-X2-Jun网站监测',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm798505280-ae627d1c53c5f42fee173fd4',
    'm798522668-507502ed6be1465d4f6090ed',
    'm798505242-325e0fd1ee9bdc49622d6cc9',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 90,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '博客',
      url: 'https://cb-x2-jun.github.io'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/CB-X2-Jun/uptime-status'
    },
    {
      text: 'ETOJ',
      url: 'https://etoj.xyz'
    },
  ],
};
