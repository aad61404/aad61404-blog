---
title: 鐵人賽精選文章(深入現代前端開發)-13-You_might_not_need_jQuery
date: 2020-05-24 16:28
categories: 
- web前端
tags:
- 鐵人賽精選文章
- 13-You_might_not_need_jQuery
- 深入現代前端開發
---


# You Might Not Need jQuery
#JS/複習/You_Might_Not_Need_jQuery


(http://youmightnotneedjquery.com/#remove)
# 需注意不是絕對
在  [you might not need jQuery](http://youmightnotneedjquery.com/#remove)  當中，remove 可以直接替換成 removeChild。不過其實在 remove 當中做了更多事：

cleanData 會幫你把裡頭的 event 跟 data 都刪除，來避免一些舊瀏覽器裡無法被垃圾回收的問題。如果不想要 jquery 幫你刪除的話就要用 detatch 這個函數。
```
function remove(selector, keepData) {
	var elem,
		i = 0;

	for (; (elem = this[I]) != null; I++) {
		if (!selector || jQuery.filter(selector, [elem]).length) {
			if (!keepData && elem.nodeType === 1) {
				jQuery.cleanData(elem.getElementsByTagName(‘*’));
				jQuery.cleanData([elem]);
			}

			if (elem.parentNode) {
				elem.parentNode.removeChild(elem);
			}
		}
	}

	return this;
}
```


cleanData 會幫你把裡頭的 event 跟 data 都刪除，來避免一些舊瀏覽器裡無法被垃圾回收的問題。如果不想要 jquery 幫你刪除的話就要用 detatch 這個函數。


雖然現在的開發當中，透過 React 或是 Vue 開發的話，或許不再需要 jQuery 也說不定，但 jQuery 發展至今已經相當成熟，而且原始碼當中有許多值得我們借鏡的 API 設計模式，以上提出一些我覺得不錯的設計，事實上還有很多（非常多！），再寫下去可能就變成 jQuery 佈道大會了，有興趣了解的話，網路上有許多文章，大家可以參考看看。
有些盛行許久的函式庫裡頭有許多值得我們學習的事物，像是 jQuery 易用的 API 以及強大的 DOM 操作背後的原因是什麼，是一個相當有趣的問題，這個章節試著解釋一些 jQuery 的設計，並沒有辦法涵蓋到全部，不過希望讓大家體會到觀察開源函式庫，可以從中學到什麼。
