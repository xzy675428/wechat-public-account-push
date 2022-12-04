export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxb9ab0887fa1b668d",
    // 公众号appSecret
    appSecret: "8513ed993ffa8be5f7527558ef6b0967",
    // 模板消息id
    templateId: "dP_p7ysyR9YyxP-y7tj34rqUruy1OtHy_lW-_ZZdhrs",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["omHDt6vBNBq0ko7Jmg6rKLRIwsYU"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "上海",
    // 所在城市
    city: "金山",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小宝", "year": "2004", "date": "02-15", "type": 'new'},
      {"name": "小羊", "year": "2004", "date": "02-10", "r": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-10-28",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
