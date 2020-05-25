/**
 * Simplified Chinese translation for bootstrap-datetimepicker
 * Yuan Cheung <advanimal@gmail.com>
 */
;(function($){
    // 한글 수정
      $.fn.datePicker.dates['ko'] = {
          days: ["일", '월', '화', '수', '목', '금', '토'],
          months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          now: "now",
          clear: '취소',
          headerYearLink:'',
          units: ['-', ''],
          button: ["확인", "취소"],
          confirm: '확인',
          cancel: '취소',
          chooseDay: '',
          chooseTime: '시간 선택',
          begin: 'Start Time',
          end: 'End Time',
          prevYear: 'prevYear',
          prevMonth: 'prevMonth',
          nextYear: 'nextYear',
          nextMonth: 'nextMonth',
          zero: '0:00'
      };
  }(jQuery));