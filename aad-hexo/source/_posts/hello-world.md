---
title: Hexo 筆記
---
圖片除了可以放在統一的images文件夾中，還可以放在文章自己的目錄中。文章的目錄可以通過配置_config.yml來生成。

## 插入圖片
_config.yml
post_asset_folder: true

## 開啟摺疊
theme _config.yml
auto_excerpt:
  enable: true
  length: 750