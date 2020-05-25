// main.js
// 이미지 슬라이더
$(function(){

    // 전역변수(초기값)
   var img_num = 0; // 이미지 번호
   var img_width = 1920; // 이미지 폭
   
   // 슬라이더 이미지 변경 함수
   function change_slider (num) {
       img_num = num; // 이미지 번호
       img_width = 1920; // 이미지 폭
       $('.slider > .sliders')
       .css('margin-left', -(img_width * img_num) + 'px');
       
   }

   // 자동재생, 재생시간 5000
   setInterval(function(){
       // 마지막 이미지에서 처음으로
    //    이미지개수가 6개면 0,1,2,3,4,5 여서 5가맨끝
       if(img_num > 5) { img_num = 0; }

       change_slider(img_num);
       img_num++; // 다음 이미지       
   }, 4000);

  
});