/****************
 * Common Class *
 ****************/

var VendorDevice, LineTab, SelectBox, LayerPopup, CalendarPopup, ShowHide;

$(function(){

  /**
   * VendorDevice Class
   */

  VendorDevice = new function(){

    var ua = navigator.userAgent;

    var checkMobile = function(){
      if(ua.indexOf('Mobile') != -1){
        $('html').addClass('mobile');
      }
    };

    var checkBrowser = function(){

      if(ua.toLowerCase().indexOf('safari') != -1){

        if(ua.toLowerCase().indexOf('chrome') != -1){
          $('html').addClass('chrome');
        } else {
          $('html').addClass('safari');
        }

      }

      if(ua.toLowerCase().indexOf('firefox') != -1){
        $('html').addClass('firefox');
      }

    };

    var checkOS = function(){

      if( ua.toLowerCase().indexOf('os x') != -1 ){

      }

    };

    checkMobile();
    checkBrowser();

  };

  /**
   * LineTab Class
   */

  LineTab = new function(){

    var tabWidth = 0;

    var calcTabWidth = function( $currentTab, findClass ){

      if ($('html').hasClass('mobile')) {

        tabWidth = 100 / Math.ceil( $currentTab.find(findClass).length / 2 );

      } else {

        tabWidth = 100 / $currentTab.find(findClass).length;

      }

    };

    var setTabWidth = function( $currentTab, findClass ){

      $currentTab.find(findClass).css({
        width: tabWidth + '%'
      });

    };

    var setTabPosition = function( $currentTab, findClass ){

      $currentTab.find(findClass).each(function(i){
        $(this).css({
          left : (i * tabWidth) + '%'
        });
      });

    };

    var setTab = function( $tabWrap ){

      if( $tabWrap.hasClass('tab-nav') ){

        $tabWrap.each(function() {

          calcTabWidth( $(this), '.tab-nav-list-item' );

          setTabWidth( $(this), '.tab-nav-list-item' );

        });

      } else {

        $tabWrap.each(function() {

          calcTabWidth( $(this), '.tab-area-heading' );

          setTabWidth( $(this), '.tab-area-heading' );

          setTabPosition( $(this), '.tab-area-heading' );

        });

      }

    };

    setTab( $('.tab-nav') );
    setTab( $('.tab-area') );

  };

  /**
   * SelectBox Class
   */

  SelectBox = new function(){

    this.toggleSelectList = function( $this ){
      $this.toggleClass('on');
      $this.next('.select-list').toggleClass('on');
    };

    this.afterClickList = function( $this ){
      $this.parents('.select-list').removeClass('on');
      $this.parents('.select-list').prev('.select-link-default').removeClass('on');
    };

    this.hideList = function(e){

      var container = $('.select-list');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('on');
        $('.select-link-default').removeClass('on');
      }

    };

  };

  /**
   * LayerPopup Class
   */

  LayerPopup = new function(){

    var $layerWrap = $('.layer-wrap');

    this.openPopup = function( $popupName ){

      $('html, body').addClass('open-layer');
      $layerWrap.addClass('on');
      $popupName.addClass('on');

    };

    this.closePopup = function( $popupName ){

      $('html, body').removeClass('open-layer');
      $layerWrap.removeClass('on');
      $popupName.removeClass('on');

    };

    this.nextPopup = function( $currentPopup, $nextPopup ){

      $currentPopup.removeClass('on');
      $nextPopup.addClass('on');

    }

  };

  /**
   * CalendarPopup Class
   */

  CalendarPopup = new function(){

    this.loadDatePicker = function(){

      var $setDateInput = $('.timesetting-date-day');

      // set datepicker when loading
      if( $setDateInput.length != 0 ){

        if( $setDateInput.hasClass('js-from-input') ){

          $('.js-from-input').datepicker({
            showMonthAfterYear : true,
            showOtherMonths : true,
            selectOtherMonths : true,

            prevText : 'p',
            nextText : 'n',
            dayNames : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesMin : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesShort : ['월', '화', '수', '목', '금', '토', '일' ],
            monthNames : ['. 1', '. 2', '. 3', '. 4', '. 5', '. 6', '. 7', '. 8', '. 9', '. 10', '. 11', '. 12']
          });

          $('.js-to-input').datepicker({
            showMonthAfterYear : true,
            showOtherMonths : true,
            selectOtherMonths : true,

            prevText : 'p',
            nextText : 'n',
            dayNames : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesMin : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesShort : ['월', '화', '수', '목', '금', '토', '일' ],
            monthNames : ['. 1', '. 2', '. 3', '. 4', '. 5', '. 6', '. 7', '. 8', '. 9', '. 10', '. 11', '. 12']
          });

        } else {

          $setDateInput.datepicker({
            showMonthAfterYear : true,
            showOtherMonths : true,
            selectOtherMonths : true,

            prevText : 'p',
            nextText : 'n',
            dayNames : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesMin : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesShort : ['월', '화', '수', '목', '금', '토', '일' ],
            monthNames : ['. 1', '. 2', '. 3', '. 4', '. 5', '. 6', '. 7', '. 8', '. 9', '. 10', '. 11', '. 12']
          });

        }
      }

    };

    this.showDatePicker = function($this, type){

      $this.datepicker(type);

    };

    this.loadDatePicker();

  };

  /**
   * ShowHide Class
   */

  ShowHide = new function(){

    this.showHideContent = function(showType, indexNum, $tableNode){

      console.log(1);

      if(showType){
        $tableNode.eq(indexNum).addClass('on');
      } else {
        $tableNode.eq(indexNum).removeClass('on')
      }

    };

    this.hideAllContent = function( $tableNode ){

      $tableNode.removeClass('on');

    };

  };

});



/********************
 * Common Execution *
 ********************/

$(function(){

  /**
   * 날짜 선택
   */

  (function(){

    $('.timesetting-date-calendar').on('click', function(){

      CalendarPopup.showDatePicker($(this), 'show');

    });

    $('body').on('click', '.js-from-button', function(){

      CalendarPopup.showDatePicker($(this), 'show');

    });

    $('body').on('click', '.js-to-button', function(){

      CalendarPopup.showDatePicker($(this), 'show');

    });

  })();

  /**
   * 셀렉트 리스트
   */

  (function(){

    $('.select-link-default').on('click', function(){
      SelectBox.toggleSelectList( $(this) );
    });

    $('.select-list .select-list-link').on('click',function(){

      SelectBox.afterClickList( $(this) );

    });

    $(document).mouseup(function (e) {

      SelectBox.hideList(e);

    });

  })();

  /**
   * 필터
   */

  (function(){

    $('.filter .filter-brand-search-btn').on('click', function(){
      $(this).toggleClass('on');
      $(this).parents('.filter').toggleClass('on');
    });

    $('.filter .base-close').on('click', function(){
      $(this).parents('.filter').removeClass('on');
    });

    $('.filter .filter-option').on('click', function(){
      $(this).toggleClass('on');
      $(this).next('.filter-service-field').toggleClass('on');
      //$(this).next('.filter-service-field').toggleClass('off');
    });

  })();

  /**
   * 탭
   */

  (function(){

    $('.tab-area-heading').on('click', function(){

      $(this).siblings('.tab-area-heading').removeClass('on').next('.tab-area-content').removeClass('on');

      $(this).addClass('on').next('.tab-area-content').addClass('on')

    });

    $('.btn-type-tab').on('click', function(){

      $(this).siblings('.btn-type-tab').removeClass('on');

      $(this).addClass('on');

    });

  })();

});



/***************
 * Layer Class *
 ***************/

var MobileGnb, ArrangeBusStop;

$(function(){

  /**
   * MobileGnb
   */

  MobileGnb = new function(){

    this.mobileOnOffMenu = function( type ){

      if(type=='on'){
        $('.header').animate({left:0},350);
        $('.mobile-header').addClass('active');
      } else {
        $('.header').animate({left: -100 + '%'},350);
        $('.mobile-header').removeClass('active');
      }

    };

  };

  /**
   * ArrangeBusStop
   */

  ArrangeBusStop = new function(){

    var busStop = {

      $node : $('.route-bus-line-list > .route-bus-line-list-article'),

      allNumber : $('.route-bus-line-list > .route-bus-line-list-article').length,

      topNumber : 0,

      bottomNumber : 0,

      topGap : 0,

      bottomGap : 0

    };

    this.setArrange = function(){

      busStop.topNumber = Math.ceil(busStop.allNumber / 2);
      busStop.bottomNumber = busStop.allNumber - busStop.topNumber;
      busStop.topGap = 100 / (busStop.topNumber - 1);
      busStop.bottomGap = 100 / (busStop.bottomNumber - 1);

      for(var i=0; i<busStop.topNumber; i++){

        busStop.$node.eq(i).addClass('top').css({
          left: busStop.topGap * i + '%'
        });

      }

      for(var j=0; j<busStop.bottomNumber; j++ ){

        busStop.$node.eq(j + busStop.topNumber).addClass('bottom').css({
          left: busStop.bottomGap * j + '%'
        });

      }

    };

    this.setBusStopPosition = function(){

      $('.bus-stop-index').each(function(i){
        $('.route-bus-stop-ico-box').append('<p class="exit exit-' + $(this).text() + '">' + $(this).text() + '번 출구</p>')
      });

    };

    this.setArrange();

    this.setBusStopPosition();

  };

});



/*******************
 * Layer Execution *
 *******************/

$(function(){

  // window close
  (function(){

    $('.lp-close').on('click', function(){

      e.preventDefault();
      window.close();
      self.close();
      window.opener = window.location.href;
      self.close();
      window.open('about:blank','_self').close();

    });

  })();

  // header action when mobile
  (function(){

    $('.layer-gnb-mobile-btn').on('click',function(){
      MobileGnb.mobileOnOffMenu('on');
    });

    $('.layer-gnb-mobile-btn-close').on('click',function(){
      MobileGnb.mobileOnOffMenu('off');
    });

    $(window).on('resize', function(){
      var widthSize = window.outerWidth;
      if (widthSize <= 780) {
        $('.header').animate({left: -100 + '%'},0);
        $('.mobile-header').removeClass('active');
      } else if (widthSize > 780) {
        $('.header').animate({left:0},0);
      }
    }).resize();

  })();

  // time table show/hide
  (function(){

    $('.maglev-train-line-list-article-link').on('click', function(){

      var $tableNode = $('.maglev-train-line-time-table');

      ShowHide.hideAllContent( $tableNode );

      var indexNum = $(this).index('.maglev-train-line-list-article-link');

      ShowHide.showHideContent(true, indexNum, $tableNode);

    });

  })();

});