/*
 * Runstant
 * 思いたったらすぐ開発. プログラミングに革命を...
 */

// グローバルに展開
phina.globalize();

var ASSETS = {
  image: {
    'tomapiko': 'http://cdn.rawgit.com/phi-jp/phina.js/v0.1.1/assets/images/tomapiko.png',
  },
};

/*
 * メインシーン
 */
phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',

  // 初期化
  init: function() {
    // super init
    this.superInit();

    // 背景色
    this.backgroundColor = '#544';

    // ラベルを生成
    var label = Label('Hello, phina.js!@@').addChildTo(this);
    label.x = this.gridX.center(); // x 軸
    label.y = this.gridY.center(); // y 軸
    label.fill = '#fee';  // 塗りつぶし色
    
    label.tweener.to({x: 100, y: 150}, 1000).play();

    var star = StarShape().addChildTo(this);
    star.x = 440;
    star.y = 480;
    star.radius = 64; // 半径を変更
    star.tweener.to({x: 200, y: 350}, 1000).play();
    this.star = star;

    var tomapiko = Sprite('tomapiko').addChildTo(this);
    tomapiko.x = this.gridX.center();
    tomapiko.y = 600;
    tomapiko.width = 128;
    tomapiko.height = 128;
    this.player = tomapiko;

  },

  update: function(app) {
    var keyboard = app.keyboard;
    
    // 左右移動
    if (keyboard.getKey('left')) {
      this.player.x -= 8;
      this.player.scale.x = 1;
    }
    if (keyboard.getKey('right')) {
      this.player.x += 8;
      this.player.scale.x = -1;
    }
    // 上下移動
    if (keyboard.getKey('up')) {
      this.player.y -= 8;
    }
    if (keyboard.getKey('down')) {
      this.player.y += 8;
    }

    if (this.player.hitTestElement(this.star)) {
        // 衝突していたら色を変える
     // this.star.fill = 'red';
    }

  }
  
  
});

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    startLabel: 'main', // MainScene から開始
    assets: ASSETS,
  });

  //app.enableStats();

  // 実行
  app.run();
});
