import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: [
    'pages/finish/index',
      'pages/index/index'
  ],
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#282c34',
    navigationStyle:'custom',
  }
};

export default config;
