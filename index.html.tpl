<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8">
      <title><%= htmlWebpackPlugin.options.title%></title>
      <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
      <script>
            <%= htmlWebpackPlugin.options.adaptive%>
            window.adaptive.desinWidth = 750;
            // body 字体大小 会将body字体大小设置为 baseFont / 100 + 'rem'
            window.adaptive.baseFont = 28;
            window.adaptive.init();
      </script>
  </head>
  <body>
      <div id="du-app" class="du-app"></div>
  </body>
</html>