# aad61404-blog


[問題] Hexo 部署上 Github 後頁面全空了
https://kennyliblog.nctu.me/2019/06/19/Hexo-problem-Gitsubmodules/#%E5%95%8F%E9%A1%8C%E6%8F%8F%E8%BF%B0



# 舊版筆記
--------------------------------------------------------

# myblog
﻿# aad61404-blog

# hexo 使用方式

1. 將所有資訊移到 github 專案跟目錄

2. 使用套件 npm install hexo-deployer-git --save

3. 修改_config.yml  底部 98 行

``` 
theme: next

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/aad61404/mynewblog.git
  message: try

```

4. 然後用 hexo deploy


5. 其他 
#載下來時需重新安裝 theme next 套件
(舊版)
git clone https://github.com/iissnan/hexo-theme-next themes/next
(新版,若有錯誤可刪除試試看舊版)
 git clone https://github.com/theme-next/hexo-theme-next themes/next

cd themes/next
git pull

 