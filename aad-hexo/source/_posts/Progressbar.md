---
title: Progressbar
date: 2021-11-16 23:41:36
tags: 
---

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <style>
        #loadWidth {
            display: block;
            /* width: 200px; */
            height: 20px;
            background-color: pink;
        }
    </style>
</head>
<body>  
    <div id="progress" class="progress">
        <div id="percent">1</div>
        <div id="loadWidth"></div>
    </div>

    <script>
        var getId = document.getElementById('percent').innerHTML
        // document.getElementById('loadWidth').style
        for (let index = 0; index < 100; index++) {
            setTimeout(function(){
                document.getElementById('percent').innerHTML = index + '%'
                document.getElementById('loadWidth').style.width = index * 2 + 'px'
                console.log('index:', index)
            }, 50 * index);
        }
       
    </script>
    
</body>
</html>
```