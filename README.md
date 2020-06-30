1. 根目錄層資料夾當測試 
2. aad-hexo 資料夾裡面當正式台
3. 整理後把_edinting 到_post

## 請找以下類似方法

```
npm install hexo-cli -g
hexo init aad-hexo
cd .\aad61404-blog\     
cd .\aad-hexo\          
npm install  
code .
git clone https://github.com/iissnan/hexo-theme-next themes/next
hexo s
npm install hexo-deployer-git --save
hexo server
hexo clean 
hexo g
hexo d   
```

### 2020/06/30 搬運中
- aad-hexo/source/_editing 搬到 _posts/ 
- 需 hexo serve 顯示正常後再deploy

### blog 程式github : https://github.com/aad61404/aad61404-blog
### hexo 生成github : https://github.com/aad61404/aad61404.github.io
### 線上網址: https://aad61404.github.io/

<br />

---------------------------------------

<br />

## 補充
##### 資料夾說明
- aad-hexo 資料夾內資料 為正式台
- 測試請在外層資料夾環境（根目錄)

##### tags: 路徑調整
* hexo new page "about"
* hexo new page "tags"
* https://blog.csdn.net/mqdxiaoxiao/article/details/93644533
