import * as React from 'react';
import {View,Image,Form,Button} from 'remax/wechat';
import NavBar from "@/components/NavBar";
import Constants from "@/util/constants";
import {player} from "@/api/player";
import './index.css';
import classNames from 'classnames';
import GuideText from "@/components/GuideText";
import {imageShow} from "@/util/utils";

const roundNum=1;
const daTiFinishEnable = false;
const showRound1Guide = false;
const isAnimalEnd = false;

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
            <View className='block2'>
                <View className="finish-action-btn">
                    <View className="to-big-animation" hoverClassName="btn-click" hoverStartTime={0} hoverStayTime={100} style={{position:'relative',zIndex:(roundNum===2 ? 9:'')}}>
                        <Image className="back-btn" src={imageShow('/image/finish/yxjs-defauit-home@2x.png')} />
                        <Image className="back-red-dot move-animation" src={imageShow('/image/common/iocn-gx@2x.png')} />
                    </View>
                    {
                        (!player.activityEnable || player.activityEnable && showRound1Guide) && roundNum == 1 ? (
                            <GuideText
                                className="showPop2"
                                content="再来一关试试手吧！"
                                direction="down"
                                left={86}
                                marginLeft={190}
                                top={-182}
                            />
                        ) : null
                    }
                </View>
            </View>
            <View className='block3'>block3</View>
        </View>
    )
}


export default Index;