import * as React from 'react';

import {View,Image} from 'remax/wechat';
import Constants from "@/util/constants";
import './index.css';

interface LoadingProps {
    showText:string;
}

const Loading:React.FC<LoadingProps> = ({showText}) =>{

    return (
        <View className="loading">
            <Image className="loading-bg" mode="widthFix"
                   src={`${Constants.resourceUrl}/image/loading/load_img_4.png`} />
            <View className="loading-content">
                <View className="loading-role">
                    <Image className="role-head"
                           src={`${Constants.resourceUrl}/image/loading/jzy-t.png`} />
                    <Image className="role-body"
                           src={`${Constants.resourceUrl}/image/loading/jzy-st.png`} />
                </View>
                <Image className="loading-tip"
                       src={`${Constants.resourceUrl}/image/loading/load_human_4.png`} />
            </View>
            {
                showText ? (<View className="loading-text">{showText}</View>) : null
            }

        </View>
    )
}

export default Loading;