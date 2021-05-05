---
slideOptions:
  transition: slide
---

<style>
.reveal {
  font-size: 24px;
}
</style>

# Cloud Functions HackMD
## Introduction
[官方文件](https://firebase.google.com/docs/functions/use-cases)

---

## 提供服務
- 推送訊息給用戶
- 執行資料庫清理和維護
- 在雲中而不是您的應用程序中執行密集的任務。
- 與第三方服務和API集成。

<br />
<br />
<p>
按下↓ 看更多內容
</p>

----

## 使用步驟

|  |   |   |
| -------- | -------- | -------- |
| 1        | 設置雲功能     | 安裝Firebase CLI並在Firebase項目中初始化Cloud Functions。     |
| 2        | 寫功能 | 編寫JavaScript代碼（或在部署時進行轉換的TypeScript代碼）以處理來自Firebase服務，Google Cloud服務或其他事件提供程序的事件 |
| 3 | 測試功能 | 使用本地仿真器 測試您的功能 |
| 4 | 部署和監控 | 使用Firebase CLI部署功能。您可以使用Firebase控制台查看和搜索日誌。 |

---

---

## 推送訊息給用戶

---

####  推送訊息給用戶
<style>
    .present p {
        font-size: 20px;
    }
</style>
-![](https://i.imgur.com/oxUwsjP.png =70%x)
<p>

實例 :
假設有一款讓使用者關注彼此活動的功能。在這樣的一款應用中，新增關注者資料庫中的寫入操作可以搭配Cloud functions，以便創建Firebase 雲消息傳遞(FCM) 通知，讓相應用戶知道他們有新的關注者<br />

<span><!-- .element: class="fragment highlight-red" -->對存儲關注者信息的實時資料庫路徑進行寫入操作時，函數即會觸發</span>

函數撰寫要通過FCM發送通知給用戶裝置
</p>

<p>
按下↓ 看更多內容
</p>

----

<!-- .slide: data-background="#1A237E" -->
#### 其他有趣的通知用例
1. 向確認/取消訂閱時事通訊的用戶發送確認電子郵件。
2. 用戶完成註冊後發送歡迎電子郵件。
3. 用戶創建新帳戶時發送短信確認。

---

## 執行資料庫清理和維護

---

####  執行資料庫清理和維護
![](https://i.imgur.com/dmgRVLR.png =70%x)

1. 函數的資料庫事件處理程序會偵聽特定路徑上的寫入事件，並檢索包含聊天消息文本的事件資料。
2. 函數處理文本以檢測和擦除任何不當用語。
3. 函數將更新後的文本寫回資料庫。

<p>
按下↓ 看更多內容
</p>

----

<!-- .slide: data-background="#1A237E" -->
#### 其他資料庫清理和維護用例
1. 其他資料庫清理和維護用例
2. 從資料庫中清除已刪除用戶的內容。
3. 限制Firebase資料庫中的子節點數。
4. 追蹤資料庫列表中的數量。
5. 將數據從資料庫複製到Google Cloud BigQuery。
6. 將文本轉換為表情符號。
7. 管理資料庫記錄的計算得出的新數據。

---

## 在雲端而不是在應用中執行密集型任務

---

#### 在雲端而不是在應用中執行密集型任務
<span><!-- .element: class="fragment highlight-blue" -->開發者可以利用Cloud Functions分流無法在使用者裝置上運行的資源密集型工作，將這些會導致較高CPU或網絡負載的工作交付給Google Cloud處理。</span>

<span><!-- .element: class="fragment highlight-red" -->例如，您可以編寫一個函數來偵聽圖像上傳到Cloud Storage的事件，將圖像下載到運行該函數的實例，進行修改並將其上傳回Cloud Storage中。</span>

<span><!-- .element: class="fragment highlight-green"-->修改操作可以包括調整圖像大小、裁剪或轉換圖像。提供的ImageMagick命令行工具可與Cloud Functions結合使用，令此工作得以簡化。</span>

<p>
按下↓ 看更多內容
</p>

----

#### 在雲端而不是在應用中執行密集型任務
![](https://i.imgur.com/V2qNbkh.png =70%x)
1. 函數在圖像文件上傳到Cloud Storage 時觸發。
2. 函數下載圖像並創建其縮略圖版本。
3. 函數將縮略圖位置寫入數據庫，便於客戶端應用查找和使用。
4. 函數將縮略圖上傳回Cloud Storage 中的新位置。
5. 應用下載縮略圖鏈接。

<p>
按下↓ 看更多內容
</p>

----

<!-- .slide: data-background="#1A237E" -->
#### 其他Firebase 雲端批處理作業示例
1. 定期刪除不用的Firebase帳號。
2. 自動審核上傳的圖像。
3. 向用戶發送批量電子郵件。
4. 定期匯總數據。
5. 處理尚未完成的工作隊列。

---

## 串接第三方服務和API

---

#### 串接第三方服務和API

Cloud Functions 可以通過調用和提供網絡API 來幫助您的應用更好地與其他服務配合工作。例如，一款開發協作應用可以將GitHub 提交發佈到工作組聊天室。

<p>
按下↓ 看更多內容
</p>

----

![](https://i.imgur.com/5uygmFd.png =70%x)
1. 用戶將提交推送到GitHub存儲庫。
2. HTTPS函數通過GitHub webhook API觸發。
3. 該函數將提交的通知發送到團隊鬆弛通道。

<p>
按下↓ 看更多內容
</p>

----

#### 與第三方服務和API集成的其他方式
1. 使用Google Cloud Vision API分析和標記上傳的圖像。
2. 使用Google翻譯翻譯郵件。
3. 使用LinkedIn或Instagram等身份驗證提供程序登錄用戶。
4. 發送有關實時數據庫寫入的Webhook請求。
5. 對資料庫裡頭元素啟用全文搜索。
6. 處理來自用戶的付款。
7. 創建對電話和SMS消息的自動響應。
8. 使用Google Assistant創建聊天機器人。

---

## codelab 範例

---

#### codelab範例
[官方codelab ](https://codelabs.developers.google.com/codelabs/firebase-cloud-functions/#0)


```
npm -g install firebase-tools
firebase --version
Make sure the version of the Firebase CLI is above 4.0.0 so that it has all the latest features required for Cloud Functions. If not, run npm install -g firebase-tools to upgrade as shown above.
Authorize the Firebase CLI by running:
firebase login
Make sure you are in the cloud-functions-start directory then set up the Firebase CLI to use your Firebase Project:
firebase use --add
Then select your Project ID and follow the instructions. When prompted, you can choose any Alias, such as codelab for instance.
```

---

## Triggers
![](https://i.imgur.com/uiTDh8u.png)
<p>
按下↓ 看更多內容
</p>

----


## 
![](https://i.imgur.com/lWus9qK.png)

<p>
按下↓ 看更多內容
</p>

----

## functions/index.js

``` javascript
const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 1000)
    response.send(number.toString());
})
```

<p>
按下↓ 看更多內容
</p>

----

#### 別忘了在terminal 執行

``` javascript
firebase deploy --only functions
```

#### 若無法正常執行


- 可以嘗試重新 firebase init 
- 需要加入 firebase Funcitons
- 需要注意資料夾位置 預設(public) , 我是用 . (根目錄) 可自由決定
- 注意 index 不要覆蓋
<p>
按下↓ 看更多內容
</p>

----

#### 貼上functions 裡面url 網址
![](https://i.imgur.com/5omAgAz.png)
<p>
按下↓ 看更多內容
</p>

----

![](https://i.imgur.com/JGYYyPQ.png)






