import * as React from 'react';
import {Fragment} from 'react';
import {View,Image} from 'remax/wechat';
import Constants from "@/util/constants";
import './index.css';

const {pixelRate,statusBarHeight,capsuleHeight} = Constants.appInfo;
const titleColor = "white";
const titleFontSize = 36;
const titleFontWeight = 500;
const yearCardUser = false;
const energyTotal = 2;
const energyMaxValue = 5;
const isShowShopEnter2 = true;
let timer:any;

interface NavBarProps{
    isShowPower?:boolean,
}

interface NavBarState {
    countDown:string;
    energyCountDown:number;
}

class NavBar extends React.Component<NavBarProps, NavBarState>{

    state:NavBarState = {
        countDown:'',
        energyCountDown:800,
    }

    componentDidMount() {
        this.formatCountDown();
    }

    formatCountDown= () =>{
        const {energyCountDown} = this.state;
        let energyCountDown1 = energyCountDown;
        timer = setInterval(()=>{
            if(energyCountDown1<=0){
                clearInterval(timer);
            }

            const mins = Math.floor(energyCountDown1/60);
            const seconds = Math.floor(energyCountDown1-mins*60);
            this.setState({
                countDown:(mins<10?'0'+mins:mins)+":"+(seconds<10?'0'+seconds:seconds),
            });
            energyCountDown1--;
        },1e3);
    }

    componentWillUnmount() {
        clearInterval(timer);
    }

    render(){
        const {isShowPower} = this.props;
        const {countDown} = this.state;
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
                                {
                                    !yearCardUser ? (
                                        <>
                                            <View className="power-num" >{energyTotal > 99 ? '99+' : energyTotal}</View>
                                            <View className="power-status" style={{width:energyTotal>=energyMaxValue ? 80 : 112}}>{energyTotal >= energyMaxValue ? '已满' : countDown}</View>
                                        </>
                                    ) : (
                                        <View className="power-status" style={{width:80}}>无限</View>
                                    )
                                }
                                {
                                    isShowShopEnter2 ? (
                                        <Image className="shop-enter" src={`${Constants.resourceUrl}/image/component/navbar/shopEnter.png`} />
                                    ) : null
                                }
                            </View>
                        ) : null
                    }
                </View>
            </Fragment>
        )
    }


}

export default NavBar;