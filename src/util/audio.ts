import Constants from "@/util/constants";

const audios = {
    btnClick: Constants.resourceUrl + "/mp3/btnClick.mp3",
    changeBox: Constants.resourceUrl + "/mp3/changeBox.mp3",
    correct: Constants.resourceUrl + "/mp3/correct.mp3",
    finish: Constants.resourceUrl + "/mp3/finish.mp3",
    incorrect: Constants.resourceUrl + "/mp3/incorrect.mp3",
    selectWord: Constants.resourceUrl + "/mp3/selectWord.mp3",
    gameTip: Constants.resourceUrl + "/mp3/gameTip.mp3",
    getEnergy: Constants.resourceUrl + "/mp3/getEnergy.mp3",
    levelUp: Constants.resourceUrl + "/mp3/levelUp.mp3",
    getBox: Constants.resourceUrl + "/mp3/getBox.mp3"
}
const audioContexts = new Map();

export const Audio= {
    audioInit: function() {
        for (let key in audios){
            audioContexts.set(key,wx.createInnerAudioContext());
        }
        wx.setInnerAudioOption({
            obeyMuteSwitch: !1
        });
    },
    playAudio: function(type:string) {
        if(audioContexts.size===0){
            this.audioInit();
        }
        const audioContext = audioContexts.get(type);
        if(audioContext) {
            // @ts-ignore
            audioContext.src = audios[type];
            audioContext.play();
        }
    },
}

export default Audio;