# WeChat AD Design Group Weekly Report Tool

## 写在前面
本工具基于 Airbnb's react-sketchapp、skpm。

## 目录结构
只需要关心两个文件：
1. src/data/*.json - 从网页中"Export Json"后保存下来的文件
2. src/report.js - 主程序，在开头修改文件名
注意保存文件

## 怎么跑
1. 打开终端 Terminal、打开 Sketch 并新建一个未命名文件
2. cd 到当前目录
3. 第一次跑需要 `npm install`，也可能需要装 `node`，
   安装地址：https://nodejs.org/dist/v6.11.1/node-v6.11.1.pkg
   如果不是第一次跑则忽略此条
4. `npm run render`

可以看一下完整的录屏操作：