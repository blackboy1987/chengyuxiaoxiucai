import * as React from 'react';
import {View,Image} from 'remax/wechat';
import NavBar from "@/components/NavBar";
import Constants from "@/util/constants";
import './index.css';

const Index = () =>{

    return (
        <View className="finish-page">
            <View className='block1'>
                <NavBar />
                <View className='finish-banner-container'>
                    <Image className='banner-img' src={`${Constants.resourceUrl}/image/finish/yxjs-icon-gxgg@2x.png`} />
                </View>
                <View className="finish-level">第13关</View>
                <View className="finish-user">
                    <View className="user-head">
                        <open-data type="userAvatarUrl" lang='zh_CN' />
                    </View>
                    <View className="user-name">
                        <open-data type="userNickName" lang='zh_CN' />
                    </View>
                </View>
                <View className="finish-idiom-container">
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                    <View className="finish-idiom-item">
                        <Image className="idiom-bg" src={`${Constants.resourceUrl}/image/finish/yxjs-icon-js@2x.png`} />
                        <View className="idiom-text">数不胜数</View>
                    </View>
                </View>
            </View>
            <View className='block2'>block2</View>
            <View className='block3'>block3</View>
        </View>
    )
}


export default Index;