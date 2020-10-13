import * as React from "react";
import {View,Image} from 'remax/wechat'
import {imageShow} from "@/util/utils";
import './index.css';

interface GuideTextProps {
    className?:string;
    content?:string;
    direction?:string;
    left?:number;
    marginLeft?:number;
    top?:number;
    content2?:string;
    arrow?:string;
}

const GuideText:React.FC<GuideTextProps> = ({arrow,content2,className,content,direction,left,top,marginLeft}) =>{

    return (
        <View className="guide" style={{left, top}}>
            {
                arrow!=='none'&&direction==='up' ? (
                    <Image className="guide-arrow-up" src={imageShow('/image/common/ys-iocn-sjx@2x.png')} style={{marginLeft}} />
                ) : null
            }

            <View className="guide-content-box">
                <View className="guide-content-text">{content}</View>
                {
                    content2 ? (<View className="guide-content-text">{content2}</View>) : null
                }

            </View>
            {
                arrow!=='none'&&direction==='down' ? (
                    <Image className="guide-arrow-down"
                           src={imageShow('/image/common/ys-iocn-sjx@2x.png')} style={{marginLeft}} />
                ) : null
            }

        </View>
    )
}

export default GuideText