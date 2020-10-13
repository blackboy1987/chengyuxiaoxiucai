import * as React from 'react';
import { View} from 'remax/wechat';
import './index.css';
import {usePageEvent} from "remax/macro";
import {login, setStorageSync} from "@/util/utils";
import request from '@/util/request';
import {useState} from "react";
import Loading from "@/pages/index/components/Loading";
import Detail from "@/pages/index/components/Detail";
import NavBar from "@/components/NavBar";

let timer:any;
let index = 0;

export default () => {

    const [isLogin,setIsLogin] = useState<boolean>(false);
    const [showText,setShowText] = useState<string>('登陆中');

    const startTimer = ()=>{
        timer = setInterval(()=>{
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

    usePageEvent("onLoad",()=>{
        startTimer();
        setIsLogin(false);
        login((res:any)=>{
            request('api/login',(res:any)=>{
                const {data} = res;
                console.log(data);
                setStorageSync("userInfo",data);
                setStorageSync("token",data.token);
                setIsLogin(true);
                clearInterval(timer);
            },{
                data:{
                    code:res.code,
                }
            });
        })
    });

  return (
      <View className='index'>
          {
              isLogin ? (<NavBar isShowPower />) : null
          }
          <View className='page-container'>
              {
                  !isLogin ? (<Loading showText={showText} />):(<Detail />)
              }
          </View>

      </View>
  );
};
