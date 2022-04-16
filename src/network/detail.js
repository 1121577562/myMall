import { request } from "./request";


export function getDetail(iid) {
    return request({
        url: "/detail",
        params: {
            iid: iid
        }
    })
}

// 从result数据中，提取出 DetailBaseInfo组件要展示的数据(使用面向对象的思想进行封装)
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.discount = itemInfo.discountDesc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.realPrice = itemInfo.lowNowPrice;
        this.columns = columns;
        this.services = services;
    }
}