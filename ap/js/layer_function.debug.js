/**
 * VendorDevice Class
 */

/**
 * LineTab Class
 */

/**
 * SelectBox Class
 */

/**
 * CalendarPopup Class
 */

/**
 * showHide Class ?
 */

$(function(){

  // define
  function isMobile(){
    if(navigator.userAgent.indexOf('Mobile') != -1){
      $('html').addClass('mobile');
    }
  } //v
  function isOS(){
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
      $('select').addClass("mac");
    }
  } //v
  function tabAction(){
    var tabWidth = 0;
    var $tabWrap;

    try{

      $tabWrap = $('.tab-nav');

      $tabWrap.each(function(){

        if( $('html').hasClass('mobile') ){

          if( $(this).find('.tab-nav-list-item').length >= 4 ){

            tabWidth = 100 / Math.ceil( $(this).find('.tab-nav-list-item').length / 2 );

            $(this).find('.tab-nav-list-item').css({
              width: tabWidth + '%'
            });

          } else {

            tabWidth = 100 / $(this).find('.tab-nav-list-item').length;

            $(this).find('.tab-nav-list-item').css({
              width: tabWidth + '%'
            });

          }

        } else {

          tabWidth = 100 / $(this).find('.tab-nav-list-item').length;

          $(this).find('.tab-nav-list-item').css({
            width: tabWidth + '%'
          });

        }

      });

    } catch(e){}

    try{

      $tabWrap = $('.tab-area');

      $tabWrap.each(function(){

        tabWidth = 100 / $(this).find('.tab-area-heading').length;

        $(this).find('.tab-area-heading').css({
          width: tabWidth + '%'
        });

        $(this).find('.tab-area-heading').each(function(i){
          $(this).css({
            left : (i * tabWidth) + '%'
          });
        });

      });

    } catch(e) {}

    $('.tab-area-heading').on('click', function(){

      $(this).siblings('.tab-area-heading').removeClass('on').next('.tab-area-content').removeClass('on');

      $(this).addClass('on').next('.tab-area-content').addClass('on')

    });
  } //v


  // running
  isMobile(); // PC and Mobile check
  //isOS(); // OS check
  tabAction(); // tab.length width auto divide event
});

// showHide ?
$(document).ready(function(){
  function tableOperationEvent(){
    $("#viewhidden1").click(function() {
      status1 = $("#hidden1").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","none");
      }
    });
    $("#viewhidden2").click(function() {
      status1 = $("#hidden2").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","none");
      }
    });
    $("#viewhidden3").click(function() {
      status1 = $("#hidden3").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","none");
      }
      else {
        $("#hidden3").css("display","none");
      }
    });
    $("#viewhidden4").click(function() {
      status1 = $("#hidden4").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","none");
      }
    });
    $("#viewhidden5").click(function() {
      status1 = $("#hidden5").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","");
        $("#hidden6").css("display","none");
      }

    });
    $("#viewhidden6").click(function() {
      status1 = $("#hidden6").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","");
      }
    });
  }
  function layerGnbEvent(){
    $('.layer-gnb-mobile-btn').on('click',function(){
      $('.header').animate({left:0},350);
      $('.mobile-header').addClass('active');
    });

    $('.layer-gnb-mobile-btn-close').on('click',function(){
      $('.header').animate({left: -100 + '%'},350);
      $('.mobile-header').removeClass('active');
    });

    $(window).on('resize', function(){
      var widthSize = window.outerWidth;
      if (widthSize <= 780) {
        $('.header').animate({left: -100 + '%'},0);
        $('.mobile-header').removeClass('active');
      } else if (widthSize > 780) {
        $('.header').animate({left:0},0);
      }
    });
  }
  function layerCloseEvent(){
    $('.lp-close').on('click', function(e){
      window.opener='Self';
      window.close();
      e.preventDefault();
    });
  }

  // ready function running
  tableOperationEvent(); // AP_DC_07_02.html train operation tab event
  layerGnbEvent(); // [LP] Layer popup mobile header event
  layerCloseEvent(); // [LP] Layer popup close event

});

$(function(){

  // lnb show per page
  $('.gnb-item').eq(p).find('.gnb-link').addClass('on');

  // window close
  $('.back-to-home').on('click', function(){

    window.close();

  });

});
$(function(){

  // define
  function isMobile(){
    if(navigator.userAgent.indexOf('Mobile') != -1){
      $('html').addClass('mobile');
    }
  }
  function isOS(){
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
      $('select').addClass("mac");
    }
  }


  function tabAction(){
    var tabWidth = 0;
    var $tabWrap;

    try{

      $tabWrap = $('.tab-nav');

      $tabWrap.each(function(){

        if( $('html').hasClass('mobile') ){

          if( $(this).find('.tab-nav-list-item').length >= 4 ){

            tabWidth = 100 / Math.ceil( $(this).find('.tab-nav-list-item').length / 2 );

            $(this).find('.tab-nav-list-item').css({
              width: tabWidth + '%'
            });

          } else {

            tabWidth = 100 / $(this).find('.tab-nav-list-item').length;

            $(this).find('.tab-nav-list-item').css({
              width: tabWidth + '%'
            });

          }

        } else {

          tabWidth = 100 / $(this).find('.tab-nav-list-item').length;

          $(this).find('.tab-nav-list-item').css({
            width: tabWidth + '%'
          });

        }

      });

    } catch(e){}

    try{

      $tabWrap = $('.tab-area');

      $tabWrap.each(function(){

        tabWidth = 100 / $(this).find('.tab-area-heading').length;

        $(this).find('.tab-area-heading').css({
          width: tabWidth + '%'
        });

        $(this).find('.tab-area-heading').each(function(i){
          $(this).css({
            left : (i * tabWidth) + '%'
          });
        });

      });

    } catch(e) {}

    $('.tab-area-heading').on('click', function(){

      $(this).siblings('.tab-area-heading').removeClass('on').next('.tab-area-content').removeClass('on');

      $(this).addClass('on').next('.tab-area-content').addClass('on')

    });
  }




  // running
  isMobile(); // PC and Mobile check
  //isOS(); // OS check
  tabAction(); // tab.length width auto divide event
});

$(document).ready(function(){
  function tableOperationEvent(){
    $("#viewhidden1").click(function() {
      status1 = $("#hidden1").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","none");
      }
    });
    $("#viewhidden2").click(function() {
      status1 = $("#hidden2").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","none");
      }
    });
    $("#viewhidden3").click(function() {
      status1 = $("#hidden3").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","none");
      }
      else {
        $("#hidden3").css("display","none");
      }
    });
    $("#viewhidden4").click(function() {
      status1 = $("#hidden4").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","none");
      }
    });
    $("#viewhidden5").click(function() {
      status1 = $("#hidden5").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","");
        $("#hidden6").css("display","none");
      }

    });
    $("#viewhidden6").click(function() {
      status1 = $("#hidden6").css("display");
      if (status1 == "none") {
        $("#hidden1").css("display","none");
        $("#hidden2").css("display","none");
        $("#hidden3").css("display","none");
        $("#hidden4").css("display","none");
        $("#hidden5").css("display","none");
        $("#hidden6").css("display","");
      }
    });
  }
  function layerGnbEvent(){
    $('.layer-gnb-mobile-btn').on('click',function(){
      $('.header').animate({left:0},350);
      $('.mobile-header').addClass('active');
    });

    $('.layer-gnb-mobile-btn-close').on('click',function(){
      $('.header').animate({left: -100 + '%'},350);
      $('.mobile-header').removeClass('active');
    });

    $(window).on('resize', function(){
      var widthSize = window.innerWidth;

      if (widthSize <= 780) {
        if( !$('.mobile-header').hasClass('active') ){
          $('.header').css({left: '-100%'});
        }

      } else if (widthSize > 780) {
        $('.header').css({left:0});
        $('.mobile-header').removeClass('active');
      }
    }).resize();
  }
  function layerCloseEvent(){
    $('.lp-close').on('click', function(e){
      window.close();
      self.close();
      window.opener = window.location.href;
      self.close();
      window.open('about:blank','_self').close();
      e.preventDefault();
    });
  }
  function layerTabStringEvent(){
    var tabLink = $('.tab-nav-list-item > .tab-nav-list-link');
    var tabStringLength = tabLink.text();
        tabStringLength = tabStringLength.length;

    var innerTabLink = $('.btn-type-tab');
    var InnerTabStringLength = innerTabLink.text();
        InnerTabStringLength = InnerTabStringLength.length;

    if(tabStringLength > 24){
      tabLink.addClass('active');
    } else if(InnerTabStringLength > 14){
      innerTabLink.addClass('active');
    }
  }

  // ready function running
  tableOperationEvent(); // AP_DC_07_02.html train operation tab event
  layerGnbEvent(); // [LP] Layer popup mobile header event
  layerCloseEvent(); // [LP] Layer popup close event
  layerTabStringEvent(); // tab string length css control

});

$(function(){

  $('.gnb-item').eq(p).find('.gnb-link').addClass('on');

  $('.back-to-home').on('click', function(){

    window.close();

  });

});