import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: [
    'pages/game/index',
      'pages/index/index',
    'pages/finish/index',
  ],
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#282c34',
    navigationStyle:'custom',
  }
};

export default config;
