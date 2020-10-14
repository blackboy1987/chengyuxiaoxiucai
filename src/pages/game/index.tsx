import * as React from 'react';
import {Fragment, useState} from 'react';
import { View,Button,Image } from 'remax/wechat';
import {usePageEvent} from 'remax/macro';
import classNames from 'classnames';
import './index.css';


import PopupRank from "@/components/Popup/PopupRank";
import Audio from "@/util/audio";
import request from "@/util/request";

export default () => {

  const [gameBoxes,setGameBoxes] = useState<any[]>([]);
  const [currentKey,setCurrentKey] = useState<string>("");
  const [answer,setAnswer] = useState<string[]>([]);
  const [isShakeBtn1,setIsShakeBtn1] = useState<boolean>(true);
  const [isShakeBtn2,setIsShakeBtn2] = useState<boolean>(true);
  const [popupRank,setPopupRank] = useState<boolean>(false);
  const [idiom,setIdiom] = useState<any>({});

  usePageEvent('onLoad',()=>{
    setAnswer(answer);
    load(4);
  });

  const load=(id:number)=>{
    request("api/game/level",(res:any)=>{
      const {data} = res;
      setIdiom(data);
      setAnswer(data.answer);
      const {newGameBoxes,newCurrentKey} = render(data.gameBoxes);
      setGameBoxes(newGameBoxes);
      setCurrentKey(newCurrentKey);
      console.log("api/game/level",res);
    },{
      data:{
        id,
      }
    });
  }

  const render=(gameBoxes1:any[])=>{
    let newCurrentKey = '';
    const newGameBoxes = (gameBoxes1 || [[]]).map((rowItem:any[],index:number)=>{
      let newRowItem=(rowItem||[]).map((item:any,index1:number)=>{
        let newItem = {
            ...item,
        };
        let style = '';
        if(newItem.show&&!newItem.canSelect&&!newItem.ans){
          style = "game_box space block";
        }
        if(!newItem.show&&!newItem.canSelect){
          style = "game_box";
        }
        if(newItem.canSelect&&newItem.show && newItem.ans){
          if(!newCurrentKey){
            newCurrentKey = `${index}_${index1}`;
          }
          style = "game_box space";
        }
        if(currentKey===`${index}_${index1}`){
          style = style +" active";
        }
        newItem.style = style;
        return newItem;
      });
      return newRowItem;
    });
    return {
      newGameBoxes,
      newCurrentKey
    }
  }


  const animationEnd1 = () =>{
    setIsShakeBtn1(false);
    setTimeout(()=>{
      setIsShakeBtn2(true)
    },600);
  }

  const animationEnd2 = () =>{
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
    if (item.show && item.canSelect && !item.isSuccess){
      Audio.playAudio("changeBox");
      setCurrentKey(`${rowId}_${columnId}`);
      console.log(rowId,columnId,item);
    }
  }

  const selectWord = (ans:string) =>{
    Audio.playAudio("selectWord");
  }

  console.log("gameBoxes",gameBoxes);
  return (
      <View className='game'>
        <View className='game_container'>
          {
            (gameBoxes || [[]]).map((rowItem:any[],index:number)=>(
                <View className='game_row' key={index}>
                  {
                    (rowItem||[]).map((item:any,index1:number)=>{
                      return (
                          <View onTap={()=>selectBox(index,index1,item)} className={classNames(item.style,currentKey===`${index}_${index1}` ? 'active':'')} key={`${index}_${index1}`}>
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
              (answer || []).map((ans,index)=>(
                  <View onTap={()=>selectWord(ans)} className='select-item' key={index}>
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
