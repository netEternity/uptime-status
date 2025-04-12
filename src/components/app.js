import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>基于&nbsp;<Link to='https://uptimerobot.com/' text='UptimeRobot' />&nbsp;接口&nbsp;|&nbsp;检测频率：5&nbsp;分钟</p>
          <p><a href="https://icp.gov.moe/?keyword=20255955" target="_blank">萌ICP备20255955号</a></p>
          <p><a href="https://app.netlify.com/sites/cb-stats/deploys" target="_blank"><img src="https://api.netlify.com/api/v1/badges/2c80c2ef-d5d8-46b3-bb48-d4548eb71f67/deploy-status" alt="由 Netlify 部署" width="118" height="20" /></a></p>
        </div>
      </div>
    </>
  );
}

export default App;
