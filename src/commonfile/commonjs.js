import wepy from 'wepy';

export default function navNew(targetType, targetUrl) {
    /**
             * 微信 navigae 方式的包装
             * targetType:要打开的目标类型 
             * url:地址
             */

    /*targetType:
    *咱不实现其他
    * a.小程序内跳转:mp
    * b.跨小程序跳转:
    * c.网页跳转:web
    * d.打开APP:app
    * e.other:
    * 
    */
    wx.navigateTo({
        url: targetUrl,
        success: function (res) {
            // success
        },
        fail: function () {
            // fail
        },
        complete: function () {
            // complete
        }
    })
}

