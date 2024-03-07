//------------------------ローディング---------------

var bar = new ProgressBar.Line(loader, {//id名を指定
	easing: 'easeInOut',//アニメーション効果
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#fff',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#76AB9F',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'3rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#loader_bg").delay(500).fadeOut(800);//アニメーションが終わったらフェードアウト
});  


//-----------------------slick---------------

$(document).ready(function(){
  $('#mv').slick({
    dots: true,
    autoplay: true,
    arrows: false,
  });
});


//-----------------ハンバーガーメニュー---------------

$(function(){
  $("#burger").click(function(){
    $(this).toggleClass("open");
    $("#sp_menu").slideToggle();
  });
});

//----------------スクロール時ヘッダー---------------

$(function () {
  $(window).on('scroll', function () {
      if ($('.mv').height() < $(this).scrollTop()) {
          $('.js-header').addClass('change-color');
    } else {
          $('.js-header').removeClass('change-color');
    }
  });
});
//-----------------アバウトイラスト---------------

$('.img1').waypoint({
  handler(direction) {
		if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  offset: '50%',
});
$('.img2').waypoint({
  handler(direction) {
		if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  offset: '50%',
});
$('.img3').waypoint({
  handler(direction) {
		if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  offset: '50%',
});
$('.img4').waypoint({
  handler(direction) {
		if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  offset: '50%',
});
// -----------------topまで戻るボタン-----------------

const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
};
$(window).on('scroll', updateButton);
$('.back-to-top').on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 600);
});
updateButton();