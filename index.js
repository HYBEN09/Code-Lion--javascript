let hp = 3;

/* 드론 클릭시 침 발사 */
$("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=200" });

  // 벙커에 침이 맞은후 hp가 주는 방식
  $("#spit").fadeOut(function () {
    hp = hp - 1;
    $("#hp").text("HP : " + hp);

    if (hp === 0) {
      $("#bunker").fadeOut();
      $("#hp").fadeOut();
    }
  });

  $("#spit").css({ left: "150px" });
});
