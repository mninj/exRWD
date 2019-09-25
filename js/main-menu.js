var nav = $('.navigation');
var btn = $('.btn-menubar');
var menu = $('.menu');
var lists = $('.menu-list');
var items = $('.menu-item');

items.addClass('icon-plus');
items.attr('role', 'button');
items.attr('aria-haspopup', 'true');
items.attr('aria-pressed', 'false');
items.attr('aria-expanded', 'false');


//메인메뉴 제어버튼 클릭 시 메인메뉴가 보여지도록 클래스 토글
btn.on('click', function(e) {
  // 혹시 a 요소를 사용했을 때를 대비하여 a 요소의 기본 이벤트 취소
  e.preventDefault();
  nav.toggleClass('is-act');
  if (nav.hasClass('is-act')) {
    btn.attr('aria-label', '메인 메뉴 닫기');
  } else {
    btn.attr('aria-label', '메인 메뉴 열기');
  }
});

// 키보드 초점이 메인메뉴 영역 안에 있을 경우 .is-act를 nav 요소에 추가 
menu.on('focusin', function(){
  nav.addClass('is-act');
});
// 키보드 초점이 메인메뉴 영역을 벗어날 경우 .is-act를 nav 요소에서 제거
menu.on('focusout', function(){
    nav.removeClass('is-act');
});