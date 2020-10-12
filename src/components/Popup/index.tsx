import * as React from 'react';
import {View,Image} from 'remax/wechat';
import './index.css';

interface PopupProps {
    visible:boolean;
    onClose:()=>void;
}
const Popup:React.FC<PopupProps> = ({onClose,visible,children}) =>{
console.log("popup",visible)
    return (
        <>
            {
                visible ? (
                    <View className="list-popup">
                        <View className="popup-container">
                            {children}
                            <View onTap={onClose} className="close-btn-container" hoverClassName="btn-click" hoverStartTime={0} hoverStayTime={100}>
                                <Image className="close-btn" src="http://chengyuxiaoxiucai.i-gomall.com/addons/yf_chengyujiekong/resource/image/word/cyjs-defauit-fh@2x.png" />
                            </View>
                        </View>
                    </View>
                ) : null
            }
        </>
    )
}

export default Popup;