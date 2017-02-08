<html>
<head>
    <meta charset="utf-8">
    <title>前端搜索</title>
    <script>
        <%= htmlWebpackPlugin.options.adaptive%>;
        window.adaptive.desinWidth = 750;
        // body 字体大小 会将body字体大小设置为 baseFont / 100 + 'rem'
        window.adaptive.baseFont = 28;
        window.adaptive.scaleType = 2;
        window.adaptive.init();
    </script>
</head>
<body>
    <div id="du-app" class="du-app"></div>
</body>
</html>