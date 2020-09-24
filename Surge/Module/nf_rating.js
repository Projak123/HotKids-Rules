#!name=Ratings for Netflix
#!desc=IMDb, Rotten Tomatoes and Douban ratings for Netflix shows.
#!system=ios

[MITM]
hostname = %INSERT% ios.prod.ftl.netflix.com

[Script]
# > Netflix 获取 IMDb 分数 by yichahucha
nf_rating.js = type=http-request,pattern=^https?:\/\/ios\.prod\.ftl\.netflix\.com\/iosui\/user\/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
nf_rating.js = type=http-response,requires-body=1,max-size=-1,pattern=^https?:\/\/ios\.prod\.ftl\.netflix\.com\/iosui\/user\/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
// 单集评分
nf_rating_season.js = type=http-response,pattern=^https?:\/\/ios\.prod\.ftl\.netflix\.com\/iosui\/warmer\/.+type=show-ath,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js
