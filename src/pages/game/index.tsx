import * as React from 'react';
import {Fragment, useDebugValue, useState} from 'react';
import {Button, Image, View} from 'remax/wechat';
import {usePageEvent} from 'remax/macro';
import classNames from 'classnames';
import './index.css';


import PopupRank from "@/components/Popup/PopupRank";
import Audio from "@/util/audio";
import request from "@/util/request";
import {filterArray} from "@/util/utils";

export default () => {

  const [gameBoxes,setGameBoxes] = useState<any[]>([]);
  const [currentKey,setCurrentKey] = useState<string>("");
  const [currentKeys,setCurrentKeys] = useState<string[]>([]);
  const [answer,setAnswer] = useState<any[]>([]);
  const [isShakeBtn1,setIsShakeBtn1] = useState<boolean>(true);
  const [isShakeBtn2,setIsShakeBtn2] = useState<boolean>(true);
  const [popupRank,setPopupRank] = useState<boolean>(false);
  const [idioms,setIdioms] = useState<string[]>([]);

  usePageEvent('onLoad',()=>{
    load(4);
  });

  const load=(id:number)=>{
    request("api/game/level",(res:any)=>{
      const {data} = res;
      initAnswer(data.answer);
      initGameBox(data.gameBoxes);
      setIdioms(data.idioms);
    },{
      data:{
        id,
      }
    });
  }

  const initAnswer=(dataAnswer:string[])=>{
    const newAnswer = dataAnswer.map(item=>({
      text:item,
      style:'',
    }))
    setAnswer(newAnswer);
  }

  const initGameBox=(dataGameBox:any)=>{
    let newCurrentKey = '';
    let newCurrentKeys:string[] = [];
    const newGameBoxes = (dataGameBox || [[]]).map((rowItem:any[],index:number)=>{
      let newRowItem=(rowItem||[]).map((item:any,index1:number)=>{
        let newItem = {
          ...item,
          x:index,
          y:index1,
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
          newCurrentKeys.push(`${index}_${index1}`);
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
    setGameBoxes(newGameBoxes);
    setCurrentKeys(newCurrentKeys);
    setCurrentKey(newCurrentKey);
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
      // 如果有这个值，去掉
      if(item.text){
        toggleAnswer(item.text,'');
        toggleGameBox(rowId,columnId,'');

        let  newCurrentKeys = [
            ...currentKeys,
          `${rowId}_${columnId}`
        ]
        newCurrentKeys = filterArray(newCurrentKeys);
        newCurrentKeys.sort((a,b)=>a.localeCompare(b));
        setCurrentKeys(newCurrentKeys);
      }
    }
  }

  /**
   * 选择下面的词语
   * @param ans
   */
  const selectWord = (ans:any) =>{
    if(ans.style==="selected"){
      return;
    }

    const rowId = parseInt(currentKey.split("_")[0],10);
    const columnId = parseInt(currentKey.split("_")[1],10);

    toggleAnswer(ans.text,'selected');
    const newGameBoxes = toggleGameBox(rowId,columnId,ans.text);
    updateCurrentKey();
    Audio.playAudio("selectWord");

    // 检查刚才这个词填充的周围是否有完整的四字成语.
    checkAnswer(newGameBoxes,rowId,columnId,ans);
  }

  const checkAnswer=(newGameBoxes:any,rowId:number,columnId:number,ans:string)=> {
    const word1 = new Map();
    for (let row = rowId - 3; row <= rowId + 3; row += 1) {
      if (row >= 0 && row < 9) {
        word1.set(`${row}_${columnId}`, '');
      }
    }

    const word2 = new Map();
    for (let column = columnId - 3; column <= columnId + 3; column += 1) {
      if (column >= 0 && column < 9) {
        word2.set(`${rowId}_${column}`, '');
      }
    }
    // 循环gameBox里面的数据，看看有没有完整的4字成语。
    (newGameBoxes || [[]]).forEach((rowItem: any[]) => {
      (rowItem || []).forEach((item: any) => {

        if (word1.get(`${item.x}_${item.y}`) === '') {
          if (item.text !== '') {
            word1.set(`${item.x}_${item.y}`, item.text);
          } else {
            word1.set(`${item.x}_${item.y}`, "龠");
          }
        }
        if (word2.get(`${item.x}_${item.y}`) === '') {
          if (item.text !== '') {
            word2.set(`${item.x}_${item.y}`, item.text);
          } else {
            word2.set(`${item.x}_${item.y}`, "龠");
          }
        }
      });
    });
    // 开始判断成语了。
    let idiom1 = '';
    let idiom2 = '';

    // 这里做扩展处理。超过2个字都算成语。
    word1.forEach(value => {
      idiom1 += value;
    });

    word2.forEach(value => {
      idiom2 += value;
    });

    let position1 = -1;
    for (let position11 = 0; position11 < idiom1.length - 3; position11++) {
      idioms.forEach(idiom => {
        if (idiom === idiom1.substr(position11, 4)) {
          position1 = position11;
        }
      })
    }


    let position2 = -1;
    for (let position22 = 0; position22 < idiom2.length - 3; position22++) {
      idioms.forEach(idiom => {
        if (idiom === idiom2.substr(position22, 4)) {
          position2 = position22;
        }
      })
    }
    if (position1 >= 0) {
      let activityKeys: string[] = [];
      let index = 0;
      word1.forEach((value, key) => {
        if (index < position1 + 4) {
          activityKeys.push(key);
        }
        index += 1;
      });
      console.log("activityKeys1", activityKeys);
    }
    if (position2 >= 0) {
      let activityKeys: string[] = [];
      let index = 0;
      word2.forEach((value, key) => {
        if (index < position1 + 4) {
          activityKeys.push(key);
        }
        index += 1;
      });
      console.log("activityKeys2", activityKeys);
    }
  }


  const toggleGameBox=(rowId:number,columnId:number,ans:string)=>{
    const newGameBoxes = (gameBoxes || [[]]).map((rowItem:any[],index:number)=>{
      if(rowId!==index){
        return rowItem;
      }
      return (rowItem || []).map((item: any, index1: number) => {
        if (columnId !== index1) {
          return item;
        }
        let newItem = {
          ...item,
        };
        newItem.text = ans;
        if(ans){
          newItem.style = newItem.style + " text";
        }else{
          newItem.style = newItem.style.replace(" text","");
        }
        return newItem;
      });
    });
    // 重新设置currentKey
    setGameBoxes(newGameBoxes);
    return newGameBoxes;
  }

  // 将该处值设置为选中
  const toggleAnswer = (ans:string,style:string) =>{
    if(ans){
      const newAnswer = answer.map(ans1=>{
        if(ans1.text===ans){
          return {
            ...ans1,
            style:style,
          }
        }
        return ans1;
      });
      setAnswer(newAnswer);
    }
  }

  const updateCurrentKey=()=>{
    let newCurrentKey='';
    const position = currentKeys.findIndex((value,index,arr)=>{
      return value===currentKey;
    });
    newCurrentKey = currentKeys[(position+1)%currentKeys.length];
    const newCurrentKeys = currentKeys.filter((item,index)=>item!==currentKey);
    if(newCurrentKeys.length===0){
      // 所有已经填写完毕
      console.log("----已完成");
    }else{
      console.log("===未完成");
      setCurrentKeys(newCurrentKeys);
    }
    setCurrentKey(newCurrentKey);
  }

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
                    <Button className={classNames("btn_default","select_box","big-select2",ans.style)}>
                      {ans.text}
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
