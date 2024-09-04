$(".translate").click(function () {
  $(".menu_translate").slideToggle("slow");
});
$(".menu_translate li").click(function () {
  if ($(this).index() === 0) {
    $(".languae").text("VN");
  } else {
    $(".languae").text("EN");
  }
  $(".menu_translate").show();
});
$(".open_search").click(function () {
  $(".search_box").show();
});
$(".close_search").click(function () {
  $(".search_box").hide();
});
$(".list_banner").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

$(".title_investment").click(function () {
  $(".title_investment").removeClass("active");
  $(this).addClass("active");
  if ($(this).index() === 0) {
    $(".right_title_investment").css(
      "background-image",
      "url(https://atbank.com.vn/images/articles/2023/05/25/screenshot-1684999372-733.png)"
    );
  } else if ($(this).index() === 1) {
    $(".right_title_investment").css(
      "background-image",
      "url(https://atbank.com.vn/images/articles/2023/05/29/picture1-626.png)"
    );
  } else if ($(this).index() === 2) {
    cl;
    $(".right_title_investment").css(
      "background-image",
      "url(../img/banner2.jpg)"
    );
  } else {
    $(".right_title_investment").css(
      "background-image",
      "url(https://atbank.com.vn/images/articles/2023/05/25/screenshot-1685001969-764.png)"
    );
  }
  $(".card_investment").find(".card_name").text($(this).find("h5").text());
});

$(".list_partner").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:
    '<button class="slide-arrow prev-arrow  shadow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow  shadow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
$(".list_com_1").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:
    '<button class="slide-arrow prev-arrow  shadow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow  shadow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
});
$(".list_com_2").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: ".list_com_3",
});
$(".list_com_3").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: ".list_com_2",
  focusOnSelect: true,
  centerMode: true,
  centerPadding: "0px",
});
$(".list_feedback").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".hamburger").click(function () {
  $(this).toggleClass("active");
  $(".menu_mb").toggleClass("active");
  $(".overlay").toggleClass("active");
});
$(".show_menu").click(function () {
  $(".overlay").toggleClass("active");
  $(".menu_mb").toggleClass("active");
});
$(".overlay").click(function () {
  $(this).removeClass("active");
  $(".menu_mb").removeClass("active");
  $(".hamburger").removeClass("active");
});

$(".list_boss").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(function () {
  $(".datetimepicker").datepicker();
});
$(window).resize(function () {
  if ($(window).width() <= 1400) {
    $(".bnt_visit").text("THAM QUAN");
    $(".text_long").text("ĐẦU TƯ");
  } else {
    $(".bnt_visit").text("THAM QUAN ATBANK");
    $(".text_long").text("LĨNH VỰC ĐẦU TƯ");
  }
});
$(window).scroll(function () {
  var e = $(window).scrollTop();
  if (e > 300) {
    $(".back_to_top").show();
  } else {
    $(".back_to_top").hide();
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////translate////////////////////////////////////////////////////////
$(".menu_translate a").click(function () {
  var name = $(this).data("lang");
  localStorage.setItem("leng", name);
  console.log(name);
  var storedLang = localStorage.getItem("leng");

  if (storedLang) {
    var selectedLink = $('.menu_translate a[data-lang="' + storedLang + '"]');
    var imgSrc = selectedLink.find("img").attr("src");
    var langText = selectedLink.text().trim();
    $(".item-translate img").attr("src", imgSrc);
    $(".item-translate span").text(storedLang);
  } else {
    $(".item-translate img").attr("src", "../img/anh.png");
    $(".item-translate span").text("English");
  }
});
function GTranslateFireEvent(a, b) {
  try {
    if (document.createEvent) {
      var c = document.createEvent("HTMLEvents");
      c.initEvent(b, true, true);
      a.dispatchEvent(c);
    } else {
      var c = document.createEventObject();
      a.fireEvent("on" + b, c);
    }
  } catch (e) {}
}
function doTranslate(a) {
  const loadG = sessionStorage.getItem("loadGT");
  if (loadG === null) {
    $.getScript(
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    sessionStorage.setItem("loadGT", 1);
  }

  if (a.value) a = a.value;
  if (a === "") return;
  const b = a.split("|")[1];
  var c;
  const d = document.getElementsByTagName("select");
  for (let i = 0; i < d.length; i++)
    if (d[i].className === "goog-te-combo") c = d[i];
  if (
    document.getElementById("google_translate_element2") === null ||
    document.getElementById("google_translate_element2").innerHTML.length ===
      0 ||
    c.length === 0 ||
    c.innerHTML.length === 0
  ) {
    setTimeout(function () {
      doTranslate(a);
    }, 500);
  } else {
    c.value = b;
    GTranslateFireEvent(c, "change");
    GTranslateFireEvent(c, "change");
  }
}
function googleTranslateElementInit() {
  const translateElement = new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "vi,en,zh-CN,de,fr,ja,ko,ru",
      multilanguagePage: false,
      autoDisplay: false,
    },
    "google_translate_element2"
  );
  $("#goog-gt-tt h1").remove();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

AOS.init({
  offset: 0,
  delay: 0, // Độ trễ tính bằng millisecond cho mỗi phần tử
  duration: 1000, // Thời gian chạy hiệu ứng tính bằng millisecond
  easing: "ease", // Easing function (làm mềm chuyển động)
  once: false, // Hiệu ứng có chạy lại khi cuộn lại hay không
  mirror: true, // Hiệu ứng có chạy khi cuộn ngược lại hay không
});

Fancybox.bind('[data-fancybox="gallery-a"]', {});
Fancybox.bind('[data-fancybox="video"]', {});
