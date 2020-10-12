import * as React from 'react';

import {View,Image} from 'remax/wechat';
import Constants from "@/util/constants";
import {usePageEvent} from 'remax/macro';
import './Loading.css';
import {useState} from "react";
import {getSystemInfo} from "@/util/utils";

let timer;
let index = 0;

const Loading = () =>{

    const [showText,setShowText] = useState<string>('登陆中');
    const [isShowText,setIsShowText] = useState<boolean>(false);

    const onload = () =>{
        setIsShowText(true);
    }

    usePageEvent("onLoad",()=>{
        startTimer();
        // 登陆逻辑
        getSystemInfo();
    });


    const startTimer = ()=>{
        setInterval(()=>{
            index +=1;
            if(index%4===0){
                setShowText('登陆中');
            }else if(index%4===1){
                setShowText('登陆中.');
            }else if(index%4===2){
                setShowText('登陆中..');
            }else if(index%4===3){
                setShowText('登陆中...');
            }
        },600);
    }

    return (
        <View className="loading">
            <Image onLoad={onload} className="loading-bg" mode="widthFix"
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
                isShowText ? (<View className="loading-text">{showText}</View>) : null
            }

        </View>
    )
}

export default Loading;