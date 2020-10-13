import * as React from 'react';
import {Fragment} from 'react';
import {View,Image} from 'remax/wechat';
import Constants from "@/util/constants";
import './index.css';

const {pixelRate,statusBarHeight,capsuleHeight} = Constants.appInfo;
const titleColor = "white";
const titleFontSize = 36;
const titleFontWeight = 500;

interface NavBarProps{
    isShowPower?:boolean,
}

const NavBar:React.FC<NavBarProps> = ({isShowPower}) =>{

    return (
        <Fragment>
            <View className="status-bar" style={{height:statusBarHeight/pixelRate}} />
            <View className='nav-bar' style={{
                height:capsuleHeight/pixelRate,
                top:statusBarHeight/pixelRate,
                color:titleColor,
                fontSize:titleFontSize,
                fontWeight:titleFontWeight
            }}>
                {
                    isShowPower ? (
                        <View className="power-container">
                            <Image className="power-icon" src={`${Constants.resourceUrl}/image/component/navBar/home-Icon-lives@2x.png`} />

                        </View>
                    ) : null
                }
            </View>
        </Fragment>
    )
}

export default NavBar;