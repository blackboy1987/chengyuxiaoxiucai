import * as React from 'react';

import {View,Image} from 'remax/wechat';
import {usePageEvent} from 'remax/macro';
import './index.css';
import Constants from "@/util/constants";
import request from "@/util/request";
import {useState} from "react";
import {getStorage} from "@/util/utils";

const newPlayHelp = true;

const Detail = () =>{

    const [userInfo,setUserInfo] = useState(getStorage("userInfo"));
    console.log("userInfo",userInfo);
    return (
        <View className="index">
            <Image className="bg" mode="widthFix" src={`${Constants.resourceUrl}/image/index/home-bj2.png`} />
            <View className='page-container'>
                {
                    userInfo.houseIndex===0 ? (
                        <Image className="home" src={`${Constants.resourceUrl}/image/index/home-fz0.png`} />
                    ) : null
                }
                {
                    userInfo.houseIndex!==-1 ? (
                        <Image className="home" src="{{listData.baseUrl}}{{houseResource.body}}" />
                    ) : null
                }
            </View>
            {
                newPlayHelp ? (<View className="new-player-modal" />) : null
            }
        </View>
    )
}

export default Detail;