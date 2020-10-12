import * as React from 'react';
import {Fragment, useState} from 'react';
import { View,Button,Image } from 'remax/wechat';
import {usePageEvent} from 'remax/macro';
import classNames from 'classnames';
import './index.css';

import {chengyu} from '@/data/chengyu';
import Popup from "@/components/Popup";
import PopupRank from "@/components/Popup/PopupRank";
import Audio from "@/util/audio";

export default () => {

  const [gameBox,setGameBox] = useState<any[]>([]);
  const [answer,setAnswer] = useState<string[]>([]);
  const [isShakeBtn1,setIsShakeBtn1] = useState<boolean>(true);
  const [isShakeBtn2,setIsShakeBtn2] = useState<boolean>(true);
  const [popupRank,setPopupRank] = useState<boolean>(false);

  usePageEvent('onLoad',()=>{
    const {gameBox,answer} = chengyu.data;
    setGameBox(gameBox);
    setAnswer(answer);
  });

  const animationEnd1 = () =>{
    console.log("---","animationEnd1");
    setIsShakeBtn1(false);
    setTimeout(()=>{
      setIsShakeBtn2(true)
    },600);
  }

  const animationEnd2 = () =>{
    console.log("---","animationEnd2");
    setIsShakeBtn2(false);
    setTimeout(()=>{
      setIsShakeBtn1(true)
    },600);
  }

  const showPopupRank = (flag?:boolean) =>{
    Audio.playAudio("btnClick");
    setPopupRank(!!flag);
  }

  const selectBox = (rowId:number,columnId:number,item:any) =>{
    console.log(rowId,columnId,item);
  }

  return (
      <View className='game'>
        <View className='game_container'>
          {
            gameBox.map((rowItem:any[],index:number)=>(
                <View className='game_row' key={index}>
                  {
                    rowItem.map((item:any,index1:number)=>{
                      let style = '';
                      if(item.show&&!item.canSelect&&!item.ans){
                        style = "game_box space block";
                      }
                      if(!item.show&&!item.canSelect){
                        style = "game_box";
                      }
                      if(item.canSelect&&item.show && item.ans){
                        style = "game_box space";
                      }
                      return (
                          <View onTap={()=>selectBox(index,index1,item)} className={style} key={`${index}_${index1}`}>
                            {item.text}
                          </View>
                      )
                    })
                  }
                </View>
            ))
          }
        </View>

        <View className='tool-container'>
          <View className="tool-left">
            <View className='tool-left-avatar'>
              <open-data type="userAvatarUrl" lang='zh_CN' />
            </View>
            <View className="tool-left-content">
              <Fragment>
                <View className="tool-left-tip">皇帝也要</View>
                <View className="tool-left-tip">多学习</View>
              </Fragment>
            </View>
          </View>
          <View className="tool-right">
            <Button onAnimationEnd={animationEnd1} className={classNames("btn_default", "right-icon-container", isShakeBtn1?"btn-scale":"")} hoverClassName="btn-click" hoverStartTime={0} hoverStayTime={100} openType="share" style={{marginLeft:0}}>
              <Image className="right-icon" src="/image/game/yxz-defauit-khy.png" style={{width:96}} />
            </Button>
            <View className="right-icon-container" hoverClassName="btn-click" hoverStartTime={0} hoverStayTime={100}>
              <Image className="right-icon" src="/image/game/yxz-defauit-cw@2x.png" />
            </View>
            <View style={{position: 'relative'}}>
              <Button onAnimationEnd={animationEnd2} className={classNames("btn_default", "right-icon-container", isShakeBtn2?"btn-scale":"")} hoverClassName="btn-click" hoverStartTime={0} hoverStayTime={100} style={{position:'relative'}}>
                <Image className="tip-icon" src="/image/game/yxz-defauit-ts.png" />
                <View className="tip-type-box">99+</View>
              </Button>
            </View>
          </View>

        </View>


        <View className='select_container'>
          <View className='select-row'>
            {
              answer.map((ans,index)=>(
                  <View className='select-item' key={index}>
                    <Button className='btn_default select_box big-select2'>
                      {ans}
                    </Button>
                  </View>
              ))
            }
          </View>
        </View>

        <Button onTap={()=>showPopupRank(true)}>adfa</Button>
        <PopupRank visible={popupRank} onClose={()=>showPopupRank(false)} />
      </View>
  );
};
