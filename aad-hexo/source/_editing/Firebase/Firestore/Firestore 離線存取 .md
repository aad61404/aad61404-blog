---
title: Firestore 離線存取 
date: 2020-06-01 16:43:57
categories: 
- Firebase
tags:
- Firestore
- 離線存取
---


# Firestore
https://firebase.google.com/docs/firestore/manage-data/enable-offline

## 程式碼都在 test.firestore.js 

Server SDK (node.js);
there is no offline mode

適用時機 ：短期非長期

使用情境 用戶通過隧道
they can still retrieve any of this cached data 
that's been stored on their device,

Read
even if it sometimes has to use old data.
雖然它偶爾必須 使用舊的數據

Write

離線模式 寫入將保留在該設備上
But if you're offline, then that write will stay there on the device

and that's fine too.

You can continue to make changes to your data

and these changes will all stay locally queued up on the device.
這些修改將全部保留在 設備的本地端上排隊等候

無論你想何時 在本地端查詢數據

Firebase都會提取你的 原始數據，然後在上面

重放所有排隊等待的寫入數據


但是當多個設備 寫入同一個文檔時
Firebase會採取一種策略 它會使用它收到的最後一個寫入
假設我的朋友Pam和我
都在編寫 同一份餐館文件
我上了飛機，把我的手機 改為飛機模式
然後把我的餐館名稱換成了 Todd's Tacos
我現在處於離線狀態，我的修改 只在我的設備本地端上排隊等候
一小時後，Pam決定將我們的店名 改為Pam's Pozole
她處於在線狀態 所以她的修改立即生效
幾小時後，我的航班落地
我再次打開網絡訪問
我的修改被發送到 Cloud Firestore
現在，當Cloud Firestore 收到我的更改時
它會覆蓋掉Pam的更改
我們的餐廳 現在將被命名為Todd's Tacos
這個名字更好
雖然從技術上來說 我的更改發生在Pam之前
老實說，在大多數情況下
這個簡單的衝突解決方案 可能已經夠用了
但是如果你需要 比這更高級的用法
你可以嘗試使用安全規則 或雲功能的一些策略


part2 
緩存佔據大小
500 評論 每個評論 200 字  0.67 mb
3500 評論 每個評論 200 字 4.5mb (大概一張圖)


配置緩存大小
啟用持久化後，Cloud Firestore 會緩存從後端接收的每個文檔以便離線訪問。Cloud Firestore 為緩存大小設置默認閾值。超出默認值後，Cloud Firestore 會定期嘗試清理較舊的未使用文檔。您可以配置不同的緩存大小閾值，也可以完全停用清理過程：

// The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
// for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
// to disable clean-up.
firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

firebase.firestore().enablePersistence()


Part2-2
獲取離線數據
如果您在設備離線時獲取文檔，Cloud Firestore 會從緩存中返回數據。如果緩存不包含該文檔的數據，或該文檔不存在，則 get 調用會返回一個錯誤。

查詢離線數據
查詢功能可與離線持久化功能結合使用。您可以直接使用 get 或通過監聽（如前面的部分中所述）來檢索查詢的結果。當設備離線時，您也可以針對已在本地持久化的數據創建新的查詢，但這些查詢最開始只會針對緩存的文檔運行。


Caution
First off, with document writes, the biggest issue I've seen
好，最後，讓我說出 幾個需要注意的問題
out there in the wild is that the callback
首先，在寫入文檔的情況下 我在外頭看到的
to a document write doesn't get called
最大問題是
until the write has actually been confirmed on the server.
在服務器確認寫入之前
And this is a big deal, because I've seen a lot of cases
不會調用文檔寫入的回調
where developers will bring up forms
這是一大問題 因為我已經看到很多情形 開發人員會提出表單
to add a new document or edit an existing document
來添加新文檔 或編輯現有文檔
and then dismiss that form in the callback.
然後在回調中 關閉該表單
They test this while they're connected and everything works fine.
他們在連接時對它進行測試 一切都很正常
But if their user goes offline, this callback isn't called,
但是如果他們的用戶離線 則不會調用此回調
the form never goes away,
表單永遠不會消失
and it looks like the application is hung
應用程序的容量越來越大
because your app is still waiting for a response from the server.
因為你的應用程序仍在等待 來自服務器的響應
Now, I'd say most of the time the right thing to do here
現在，我要說大多數時候 正確的做法是
is take that code you've put into this callback
獲取你放入 這個回調的代碼
and simply call it immediately after your write.
並在你寫完後 立即調用它
Remember, thanks to some clever work in the client library,
請記住，有鑒於客戶端 程式庫的先進技術
Cloud Firestore acts as if the data in your write is applied immediately
Cloud Firestore就像 立即應用寫入的數據一樣
so you don't need to wait for a callback
因此，你無需等待回調
to be working with fresh data.
便可處理新提取的數據
Code that lives in these callbacks should be reserved for the times
當你希望確保你的寫入 已被服務器確認
when you want to be sure your write has been confirmed by the server
你應該保留 這些回調中的代碼
and it probably shouldn't be blocking anything.
它應該不會擋掉 任何內容



第二個問題：正如我們 在前一集中提到的
當你處於離線狀態 交易進行會失敗
這是一種交易機制的規則 永遠都必須在資料庫提取最新的數據

問題三
不要嘗試存取大量的緩存

Now again, if you use the cache the way it was intended to be used
再說一遍，如果你按照 預期的方式使用緩存
essentially as a fallback for new user goes through a tunnel, say,
作為新用戶的通過隧道時 的後備方案
you're still okay.
仍是可以的
I mean, even a slow local search is going to be faster than, say,
我的意思是 即使是慢速的本地搜索
trying to download data over a nonexistent or flakey connection.
也會比嘗試通過不存在 或存疑的連接下載數據更快
But I've seen situations where developers will download
但我已經看到 開發人員在他們首次
hundreds of thousands of documents
啟用應用程序時
when their app first starts up,
下載數十萬個文檔
then try to perform all the rest of their fetches only through the cache
然後嘗試僅通過緩存 執行所有數據提取
either because they think they'll save time or billing costs,
因為他們認為這樣可以 節省時間或成本
and, in general, they just end up
但是一般來說，他們最終
creating a worse experience for their users.
會為用戶創造 更糟糕的體驗


結語 ： 

就像我說的那樣 移動設備的應用程序
已經啟用離線模式 默認行為通常是正確的

因此，你無需做任何事

便可確保良好的離線體驗

但我仍然認為
或至少欣賞Cloud Firestore
為你付出的努力 可能是一個好主意