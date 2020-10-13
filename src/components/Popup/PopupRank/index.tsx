import * as React from 'react';
import {View,Image,ScrollView} from 'remax/wechat';
import './index.css';
import classNames from 'classnames';
import Popup from "@/components/Popup";
import request from "@/util/request";
import Constants from "@/util/constants";

interface PopupRankProps {
    visible:boolean;
    onClose:()=>void;
}

interface PopupRankState {
    jobList:any[];
}

class PopupRank extends React.Component<PopupRankProps,PopupRankState>{

    state:PopupRankState = {
        jobList:[],
        currentJobRank:2,
    }

    componentDidMount() {
        request("api/job_rank/list",(res:any)=>{
            const {data=[]} = res;
            this.setState({
                jobList:data,
            })
        });
    }

    render(){
        const {visible,onClose} = this.props;
        const {jobList,currentJobRank} = this.state;
        return (
            <Popup visible={visible} onClose={onClose}>
                <View className='list-popup-container'>
                    <Image className="list-popup-title" src={`${Constants.resourceUrl}/image/popup/gzdj-bj-gzdj@2x.png`} />
                    <ScrollView scrollY className="list-scroll-list">
                        {
                            jobList.map(job=>(
                                <view className="list-scroll-item" key={job.level}>
                                    {
                                        job.level<currentJobRank ? (
                                            <Image className='list-item-bg' src={`${Constants.resourceUrl}/image/popup/gzdj-iocn-ytg@2x.png`} />
                                        ) : null
                                    }
                                    {
                                        job.level===currentJobRank ? (
                                            <Image className='list-item-bg' src={`${Constants.resourceUrl}/image/popup/gzdj-iocn-zjx@2x.png`} />
                                        ) : null
                                    }
                                    {
                                        job.level>currentJobRank ? (
                                            <Image className='list-item-bg' src={`${Constants.resourceUrl}/image/popup/gzdj-iocn-wwc@2x.png`} />
                                        ) : null
                                    }
                                    <View className={classNames('list-item-content',job.level<currentJobRank ? 'blue':job.level===currentJobRank ? 'yellow' : 'grey')}>
                                        <View className='list-item-name'>
                                            {job.name}
                                        </View>
                                        {
                                            job.level!==0 ? (<View className='list-item-round'>完成第{job.level}关</View>) : null
                                        }

                                    </View>
                                </view>
                            ))
                        }
                    </ScrollView>
                </View>
            </Popup>
        );
    }
}

export default PopupRank;