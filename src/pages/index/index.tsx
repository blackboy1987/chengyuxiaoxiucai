import * as React from 'react';
import { View} from 'remax/wechat';
import './index.css';
import Loading from "@/pages/index/components/Loading";


export default () => {

  return (
      <View className='game'>
        <Loading />
      </View>
  );
};
