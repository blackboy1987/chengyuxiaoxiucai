import * as React from 'react';
import {View,Image,ScrollView} from 'remax/wechat';
import './index.css';
import classNames from 'classnames';
import Popup from "@/components/Popup";
import {jobList} from "@/data/chengyu";

interface PopupProps {
    visible:boolean;
    onClose:()=>void;
}
const PopupRank:React.FC<PopupProps> = ({onClose,visible,children}) =>{

    return (
        <Popup visible={visible} onClose={onClose}>
            <View className='list-popup-container'>
                <Image
                    className="list-popup-title"
                    src="http://chengyuxiaoxiucai.i-gomall.com/addons/yf_chengyujiekong/resource/image/popup/gzdj-bj-gzdj@2x.png" />
                <ScrollView scrollY className="list-scroll-list">
                    {
                        jobList.map((job,index)=>(
                            <view className="list-scroll-item" key={job.index}>
                                <Image className='list-item-bg' src="http://chengyuxiaoxiucai.i-gomall.com/addons/yf_chengyujiekong/resource/image/popup/gzdj-iocn-ytg@2x.png" />

                                <View className={classNames('list-item-content',index===0 ? 'yellow':'blue')}>
                                    <View className='list-item-name'>
                                        {job.name}
                                    </View>
                                    <View className='list-item-round'>完成第{job.level}关</View>
                                </View>
                            </view>
                        ))
                    }
                </ScrollView>
            </View>
        </Popup>
    )
}

export default PopupRank;