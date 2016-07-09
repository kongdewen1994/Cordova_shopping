








// Initialize your app
var myApp = new Framework7({
	
});

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1',{
	dynamicNavbar: true
});



var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

myApp.onPageInit('about', function (page) {
	
	//alert(page.query.id);
});


//banner
var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination-index',
    autoplay: 3000,//可选选项，自动滑动
    loop : true,
    
  });





//监听退出应用
$$(document).on('pageAfterBack', function (page) {
	  // Do something here when page loaded and initialized
	//alert(page.url);
	//alert(view2.main);
})






//alert提示测试
function onPrompt(results) {

}

setTimeout(function(){
	
},7000);



setTimeout(function(){
	//view1.hideToolbar(true);
	//alert(666);
},3000);


//下拉刷新页面
var ptrContent = $$('.pull-to-refresh-content');

//添加'refresh'监听器
ptrContent.on('refresh', function (e) {
    // 模拟2s的加载过程
    setTimeout(function () {
        // 加载完毕需要重置
        myApp.pullToRefreshDone();
    }, 2000);
});

