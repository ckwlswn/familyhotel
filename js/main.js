// main.js
// 이미지 슬라이더
// 전역변수로 해줘야함..(함수밖에다 설정)
function visual_change(num) {
  // alert(num);

  // 비주얼 이미지 모두 비표시 먼저해줌
  $('.img img').css('display', 'none');

  // 해당 이미지만 표시
  $('.img img')
    .eq(num - 1)
    .css('display', 'block');

  // 하단 페이저 탭 업데이트
  $('#visual_pager > a').removeClass('selected');
  $('#visual_pager > a').eq(num - 1).addClass('selected');
}

$(function () {

  // 비주얼 자동재생
  var visual_count = 1; // 이미지 카운터

  setInterval(function () {
    // 이미지 변경(1,2,3)
    if (visual_count > 3) { visual_count = 1; }
    visual_change(visual_count);
    visual_count++;  // 다음 이미지로
  }, 4000);


  // 비주얼 버튼 클릭
  $('#visual_pager > a').click(function () {
    // 클래스 제거(상태 초기화)
    $('#visual_pager > a').removeClass('selected');

    // 클래스 추가
    $(this).addClass('selected');

    //a 태그 하이퍼링크 기본 이벤트 해제 (pager 눌러도 위로 안올라가게함)
    return false;

  });


  // 달력

  $(function () {
    // 실행 및 옵션
    $('.mydate').datePicker({
      format: 'YY-MM-DD HH:mm:ss',
      isRange: true,  // 시작, 종료 범위 달력
      language: 'ko'  // 언어설정
    });
  })




  // 예약
  $('#book .people dl dd').click(function () {
    $('#popup_menu').toggle();
  });

  // 팝업창 닫기 버튼 
  $('#btn_close').click(function () {
    $('#popup_menu').toggle();
  });

  // 숫자버튼
  // var count = 1;
  // $('#popup_menu ul > button').on('click', function(){

  //               $('#popup_menu ul li').html(count);
  //               count++;
  //           });

});