/**
 * 获取设备信息
 * @param callback
 */
export const getSystemInfo = (callback:(res:any)=>void) => {
    wx.getSystemInfo({
        success(res: any) {
            console.log(res);
        }
    })
}

/**
 * 将数据放入到缓冲
 * @param key
 * @param value
 */
export const setStorage = (key:string,data:any,callback:(res:any)=>void) =>{
    wx.setStorage({
        key,
        data,
        success(res: any) {
            callback(res)
        },
        fail(res: any) {
            callback(res);
        }
    });
}

/**
 * 将数据放入到缓冲
 * @param key
 * @param value
 */
export const setStorageSync = (key:string,data:any) =>{
    wx.setStorageSync(key,data);
}

/**
 * 将数据放入到缓冲
 * @param key
 * @param value
 */
export const getStorage = (key:string) =>{
    return wx.getStorageSync(key);
}

/**
 * 登陆
 * @param callback
 */
export const login = (callback:(res:any)=>void) =>{
    wx.login({
        success:function(res:any){
            callback({
                code:0,
                ...res,
            })
        },
        fail:function (res:any) {
            callback({
                code:-1,
                ...res,
            })
        }
    })
}