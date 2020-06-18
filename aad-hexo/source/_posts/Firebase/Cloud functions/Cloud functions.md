---
title: Firebase 目錄
date: 2020-06-10 17:00:57
categories: 
- Firebase
tags:
- Cloud functions
- 
---

Cloud Functions for Firebase

適用情境 ：

1.您的使用者第一次登入
發送 email 給他們

2.
使用者上傳圖片到你的storage bucket
you can analyze resize, and manipulate them

3. also send a message with Firebase Cloud Messaging

4.
you can even create functions to build a web-based API
for your u data that anyone  can use 


to provide the back-end services that your app requires to be
fast, secure , and complete and you can do it all without having to
provision servers tune them upgrade them

and scale them up or down to meet your

users demand we handle the maintenance

and you write the code so you can

quickly build apps without all the ops.




當發生值得注意的事情時通知用戶
開發者可以使用 Cloud Functions 讓用戶瞭解並獲取最新的應用相關信息。例如，假設有一款讓用戶可以在應用中關注彼此活動的應用。在這樣的一款應用中，用以存儲新關注者信息的實時數據庫中的寫入操作可以觸發一個函數，以便創建 Firebase 雲消息傳遞 (FCM) 通知，讓相應用戶知道他們有新的關注者。



對存儲關注者信息的實時數據庫路徑進行寫入操作時，函數即會觸發。
函數撰寫要通過 FCM 發送的消息。
FCM 向用戶設備發送通知消息。
要查看可正常工作的代碼，請參閱發送 FCM 通知。
其他有趣的通知用例
向訂閲/退訂簡報的用戶發送確認電子郵件。
在用戶完成註冊後向其發送歡迎電子郵件。
在用戶創建新帳號時向其發送短信確認。



執行實時數據庫清理和維護
利用 Cloud Functions 數據庫事件處理函數，您可以根據用戶行為修改實時數據庫，使系統保持最新狀態，並且整潔有序。例如，在基於實時數據庫構建的聊天室應用中，您可以監控寫入事件，並從用戶的消息中擦除不當或褻瀆性文字。其工作原理如下：



函數的數據庫事件處理程序會偵聽特定路徑上的寫入事件，並檢索包含聊天消息文本的事件數據。
函數處理文本以檢測和擦除任何不當用語。
函數將更新後的文本寫回數據庫。
要查看可正常工作的代碼，請參閱文本審核示例。此示例將清理聊天消息中的不當用語以及“大喊大叫”的大寫文字。



在雲端而不是在應用中執行密集型任務
開發者可以利用 Cloud Functions 分流無法在用戶設備上運行的資源密集型工作，將這些會導致較高 CPU 或網絡負載的工作交付給 Google Cloud 處理。例如，您可以編寫一個函數來偵聽圖象上傳到 Cloud Storage 的事件，將圖象下載到運行該函數的實例，進行修改並將其上傳回 Cloud Storage 中。修改操作可以包括調整圖象大小、裁剪或轉換圖象。 提供的 ImageMagick 命令行工具可與 Cloud Functions 結合使用，令此工作得以簡化。



函數在圖象文件上傳到 Cloud Storage 時觸發。
函數下載圖象並創建其縮略圖版本。
函數將縮略圖位置寫入數據庫，便於客戶端應用查找和使用。
函數將縮略圖上傳回 Cloud Storage 中的新位置。
應用下載縮略圖連結。


其他 Firebase 雲端批處理作業示例
定期刪除不用的 Firebase 帳號。
自動審核上傳的圖象。
向用戶發送批量電子郵件。
定期彙總數據。
處理尚未完成的工作隊列。


與第三方服務和 API 整合
Cloud Functions 可以通過調用和提供網絡 API 來幫助您的應用更好地與其他服務配合工作。例如，一款開發協作應用可以將 GitHub 提交發佈到工作組聊天室。





一個用戶向一個 GitHub 代碼庫推送提交。
HTTPS 函數通過 GitHub webhook API 觸發。
函數向團隊 Slack 頻道發送提交通知。
其他與第三方服務和 API 整合的方式
使用 Google Cloud Vision API 分析和標記上傳的圖象。
使用 Google 翻譯來翻譯消息。
使用 LinkedIn 或 Instagram 等身份驗證提供方的服務讓用戶登錄。
在寫入實時數據庫時向 webhook 發送請求。
啟用對實時數據庫元素的全文搜索。
處理用戶付款。
創建電話和短信自動回覆。
使用 Google 助理創建聊天機器人。
