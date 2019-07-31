"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {},
    onLoad: function () {
        wx.login({
            success: function (res) {
                var code = res.code;
                index_1.request({
                    url: index_1.GET_OPEN_ID,
                    method: 'POST',
                    data: {
                        code: code,
                    },
                    success: function (res) {
                        console.log(res.data);
                    }
                });
            }
        });
    },
    getUserInfo: function (result) {
        var userInfo = result.detail.userInfo;
        if (!userInfo)
            return wx.showModal({
                title: '',
                content: '需要获取个人信息，请务必同意哟~',
                confirmText: '好的了解',
                showCancel: false,
            });
        console.log(result.detail.cloudID);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUd3QjtBQUV4QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUNELE1BQU07UUFDSixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFFLEdBQUc7Z0JBQ0YsSUFBQSxlQUFJLENBQVE7Z0JBQ3BCLGVBQU8sQ0FBQztvQkFDTixHQUFHLEVBQUUsbUJBQVc7b0JBQ2hCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRTt3QkFDSixJQUFJLE1BQUE7cUJBQ0w7b0JBQ0QsT0FBTyxZQUFFLEdBQUc7d0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3ZCLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXLFlBQUUsTUFBNkI7UUFFdEMsSUFBQSxpQ0FBUSxDQUNPO1FBRWpCLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixXQUFXLEVBQUUsTUFBTTtnQkFDbkIsVUFBVSxFQUFFLEtBQUs7YUFDbEIsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJpbmRHZXRVc2VySW5mb1Jlc3VsdCxcclxufSBmcm9tICcuLi8uLi90eXBlcydcclxuaW1wb3J0IHtcclxuICByZXF1ZXN0LFxyXG4gIEdFVF9PUEVOX0lELFxyXG59IGZyb20gJy4uLy4uL2FwaS9pbmRleCdcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuXHJcbiAgfSxcclxuICBvbkxvYWQgKCkge1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICBjb25zdCB7IGNvZGUgfSA9IHJlc1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBHRVRfT1BFTl9JRCxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2V0VXNlckluZm8gKHJlc3VsdDogQmluZEdldFVzZXJJbmZvUmVzdWx0KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVzZXJJbmZvLFxyXG4gICAgfSA9IHJlc3VsdC5kZXRhaWxcclxuICAgIC8vIOayoeacieeUqOaIt+S/oeaBr+adg+mZkO+8jOWPi+WlveaPkOekulxyXG4gICAgaWYgKCF1c2VySW5mbykgcmV0dXJuIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgY29udGVudDogJ+mcgOimgeiOt+WPluS4quS6uuS/oeaBr++8jOivt+WKoeW/heWQjOaEj+WTn34nLFxyXG4gICAgICBjb25maXJtVGV4dDogJ+WlveeahOS6huinoycsXHJcbiAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kZXRhaWwuY2xvdWRJRClcclxuICB9XHJcbn0pXHJcbiJdfQ==