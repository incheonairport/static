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



/**************
 * Base Class *
 **************/

var Index, HeaderGnb, PlayerInfo, PlayerVisual, MainNews, PhotoList;

$(function(){

  /**
   * Index Class( Parent Class )
   */

  Index = function(){

    this.$mainSection = $('.full-page-content .section');
    this.$mainVisualItem = $('.main-visual-item');
    this.$mainFullPageContent = $('.full-page-content');
    this.currentMainSectionIndex = 0;
    this.easingType = 'easeInOutExpo';

    this.setCurrentMainSectionIndex = function(currentIndex){

      this.currentMainSectionIndex = currentIndex;

    };

    this.getCurrentMainSectionIndex = function(){

      return this.currentMainSectionIndex;

    };

  };

  /**
   * HeaderGnb Class
   */

  HeaderGnb = new function(){

    Index.apply(this);

    var $visualItem = this.$mainVisualItem;
    var $mainSection = this.$mainSection;
    var $fullPageContent = this.$mainFullPageContent;


    var _initClass = function(){
      $('.header, .gnb').addClass( $fullPageContent.find('.section').eq(0).data('gnb-color') );
    };

    var _setClassVisual = function(index){
      //console.log('set visual index : ' + index);
      $('.header').attr('class', 'header ' + $visualItem.eq(index).data('gnb-color') );
      $('.gnb').attr('class', 'gnb ' + $visualItem.eq(index).data('gnb-color') );
    };

    var _setClassSection = function(index){
      $('.header').attr('class', 'header ' + $mainSection.eq(index).data('gnb-color') );
      $('.gnb').attr('class', 'gnb ' + $mainSection.eq(index).data('gnb-color') );
      //console.log('set section index : ' + index);
    };

    this.setClass = function(setClassSectionIndex, setClassVisualIndex){

      //console.log('section index : ' + setClassSectionIndex);
      //console.log('visual index : ' + setClassVisualIndex);

      this.setCurrentMainSectionIndex(setClassSectionIndex);

      if( setClassSectionIndex == 0 ){

        //console.log('set visual');
        _setClassVisual(setClassVisualIndex);

      } else {

        //console.log('set section');
        _setClassSection(setClassSectionIndex);

      }

    };

    _initClass();

  };

  /**
   * MainVisual Class
   */

  MainVisual = new function(){

    Index.apply(this);

    // private
    var currentVisualIndex = 0;
    var nextVisualIndex = 0;

    var $visualItem = $('.main-top-bg');
    var easingType = this.easingType;

    var $pageItem;

    var timeID, timeID2;
    var imageMovingTime = 4000;
    var imageIntervalTime = 8000;
    var barStretchTime = 10;

    // private
    var _initPosition = function(){

      $visualItem.hide().eq(0).show();

    };

    var _init = function(){

      _initPosition();

    };

    // public
    this.fade = function(){

      if( nextVisualIndex >= $visualItem.length ){

        nextVisualIndex = 0;

      } else if( nextVisualIndex <= -1 ){

        nextVisualIndex = $visualItem.length-1;

      }

      $visualItem.eq(currentVisualIndex).stop().fadeOut(imageMovingTime, easingType);
      $visualItem.eq(nextVisualIndex).stop().fadeIn(imageMovingTime, easingType);

      currentVisualIndex = nextVisualIndex;

    };

    this.rollAuto = function(){

      var _fade = this.fade;

      timeID = setInterval(function(){

        nextVisualIndex = currentVisualIndex + 1;
        _fade();

      }, imageIntervalTime);

    };

    this.rollLeft = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex + 1;
      this.fade();

    };

    this.rollRight = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex - 1;
      this.fade();

    };

    this.rollStop = function(){

      // stop rolling
      clearInterval(timeID);

      // stop time bar
      clearInterval(timeID2);

    };

    this.checkAnimate = function(){

      return this.$mainVisualItem.is(':animated');

    };

    this.getNextVisualIndex = function(){

      return nextVisualIndex;

    };

    // running in constructor when loading
    _init();
    this.rollAuto();

  };

  /**
   * MainNews Class
   */

  MainNews = function( $listParent ){

    // private
    var currentVisualIndex = 0;
    var nextVisualIndex = 0;

    var $visualItem = $listParent.find( $('.main-news-notice-item') );
    var easingType = this.easingType;

    var timeID;
    var imageMovingTime = 1000;
    var imageIntervalTime = 5000;

    // private
    var _initPosition = function(){

      $visualItem.css({top:'-100%'}).eq(0).css({top:0});
      $visualItem.eq( $visualItem.length-1 ).css({top:'100%'});

    };

    var _init = function(){

      _initPosition();

    };

    this.moveBottom = function(){

      if( nextVisualIndex >= $visualItem.length ){
        nextVisualIndex = 0;
      }

      $visualItem.eq(currentVisualIndex).stop().animate({top:'100%'}, imageMovingTime, easingType);
      $visualItem.eq(nextVisualIndex).css({top:'-100%'}).stop().animate({top:0}, imageMovingTime, easingType);

      currentVisualIndex = nextVisualIndex;

    };

    this.moveTop = function(){

      if( nextVisualIndex <= -1 ){
        nextVisualIndex = $visualItem.length-1;
      }

      $visualItem.eq(currentVisualIndex).stop().animate({top:'-100%'}, imageMovingTime, easingType);
      $visualItem.eq(nextVisualIndex).css({top:'100%'}).stop().animate({top:0}, imageMovingTime, easingType);

      currentVisualIndex = nextVisualIndex;

    };

    this.rollAuto = function(){

      var _moveBottom = this.moveBottom;

      timeID = setInterval(function(){

        nextVisualIndex = currentVisualIndex + 1;
        _moveBottom();

      }, imageIntervalTime);

    };

    this.rollBottom = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex + 1;
      this.moveBottom();

    };

    this.rollTop = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex - 1;
      this.moveTop();

    };

    this.rollStop = function(){

      // stop rolling
      clearInterval(timeID);

    };

    this.checkAnimate = function(){

      return this.$mainVisualItem.is(':animated');

    };

    this.getNextVisualIndex = function(){

      return nextVisualIndex;

    };

    // public


    // running in constructor when loading
    _init();
    this.rollAuto();

  };

  /**
   * PlayerVisual Class
   */

  PlayerVisual = new function(){

    // private
    var currentVisualIndex = 0;
    var nextVisualIndex = 0;

    var $visualItem = $('.main-member-list-item');
    var easingType = this.easingType;

    var timeID, timeID2;
    var imageMovingTime = 1000;
    var imageIntervalTime = 7000;

    // private
    var _initPosition = function(){

      $visualItem.hide().eq(0).show();

    };

    var _init = function(){

      _initPosition();

    };

    // public
    this.fade = function(){

      if( nextVisualIndex >= $visualItem.length ){

        nextVisualIndex = 0;

      } else if( nextVisualIndex <= -1 ){

        nextVisualIndex = $visualItem.length-1;

      }

      $visualItem.eq(currentVisualIndex).stop().fadeOut(imageMovingTime, easingType);
      $visualItem.eq(nextVisualIndex).stop().fadeIn(imageMovingTime, easingType);

      currentVisualIndex = nextVisualIndex;

    };

    this.rollAuto = function(){

      var _fade = this.fade;

      timeID = setInterval(function(){

        nextVisualIndex = currentVisualIndex + 1;
        _fade();

      }, imageIntervalTime);

    };

    this.rollLeft = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex + 1;
      this.fade();

    };

    this.rollRight = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex - 1;
      this.fade();

    };

    this.rollStop = function(){

      // stop rolling
      clearInterval(timeID);

      // stop time bar
      clearInterval(timeID2);

    };

    this.checkAnimate = function(){

      return $visualItem.is(':animated');

    };

    this.getNextVisualIndex = function(){

      return nextVisualIndex;

    };

    // running in constructor when loading
    _init();
    //this.rollAuto();

  };

  /**
   * PlayerInfo Class
   */

  PlayerInfo = new function(){

    var photoWidth;
    var listWidth;
    var $visualItem = $('.team-profile-player-list');
    var photoLength = $('.team-profile-player-photo').length;
    var outerPhotoLength = photoLength - 5;

    var _init = function(){

      photoWidth = $('.team-profile-player-photo').outerWidth() + 40;
      listWidth = photoWidth * photoLength;
      $('.team-profile-player-list').width(listWidth);

    };

    this.setURLCurrentMember = function(){

      var memberIndex = parseInt( window.location.hash.replace('#member', '') ) - 1;
      var moveIndex = 0;

      $('#search-player').val(window.location.hash).prop('selected', true);

      $('.team-profile-player-photo').removeClass('on');
      $('.team-profile-player-photo').eq(memberIndex).addClass('on');

      $('.individual-profile').removeClass('on');
      $('.individual-profile').eq(memberIndex).addClass('on');

      if( memberIndex <= 2 ){

        moveIndex = 0;

      } else if( memberIndex >= photoLength - 2 ) {

        moveIndex = photoLength - 5;

      } else {

        moveIndex = memberIndex - 2;

      }

      if( $('.team-profile-player-list').hasClass('coach-wrap') ){

        $('.team-profile-player-list').css({left:260});

      } else {

        $('.team-profile-player-list').stop().animate({
          left : -(moveIndex * photoWidth)
        });

      }



    };

    this.left = function(){

      var currentLeft =  parseInt( $visualItem.css('left') );

      if( parseInt( $visualItem.css('left') ) >= -(photoWidth * outerPhotoLength) && parseInt( $('.team-profile-player-list').css('left') ) < 0 ){

        $visualItem.stop().animate({

          left : currentLeft + photoWidth

        });

      }

    };

    this.right = function(){

      var currentLeft =  parseInt( $visualItem.css('left') );

      if( parseInt( $visualItem.css('left') ) > -(photoWidth * outerPhotoLength) && parseInt( $('.team-profile-player-list').css('left') ) <= 0 ){

        $visualItem.stop().animate({

          left : currentLeft - photoWidth

        });

      }

    };

    this.checkAnimate = function(){

      return $visualItem.is(':animated');

    };

    _init();

  };

  /**
   * PhotoList Class
   */

  PhotoList = new function(){

    var photoWidth;
    var listWidth;
    var $visualItem = $('.photo-list');
    var photoLength = $('.photo-list-item').length;
    var outerPhotoLength = photoLength - 4;

    var _init = function(){

      photoWidth = $('.photo-list-item').outerWidth() + 14;
      listWidth = photoWidth * photoLength;
      $('.photo-list').width(listWidth);

    };

    this.setURLCurrentMember = function(){

      var memberIndex = $('.photo-list-link').index( $('.photo-list-link.on') );

      $('.photo-list-link').removeClass('on');
      $('.photo-list-link').eq(memberIndex).addClass('on');

      if( memberIndex >= photoLength - 3 ) {

        memberIndex = photoLength - 4;

      }

      $visualItem.stop().animate({
        left : -(memberIndex * photoWidth)
      });

    };

    this.left = function(){

      var currentLeft =  parseInt( $visualItem.css('left') );

      if( parseInt( $visualItem.css('left') ) >= -(photoWidth * outerPhotoLength) && parseInt( $visualItem.css('left') ) < 0 ){

        $visualItem.stop().animate({

          left : currentLeft + photoWidth

        });

      }

    };

    this.right = function(){

      var currentLeft =  parseInt( $visualItem.css('left') );

      if( parseInt( $visualItem.css('left') ) > -(photoWidth * outerPhotoLength) && parseInt( $visualItem.css('left') ) <= 0 ){

        $visualItem.stop().animate({

          left : currentLeft - photoWidth

        });

      }

    };

    this.checkAnimate = function(){

      return $visualItem.is(':animated');

    };

    _init();

  };

});



/******************
 * Base Execution *
 ******************/

  // loading
(function(){

  setTimeout(function(){
    $('.loading-inner').removeClass('opacity');
  }, 1000);

  $(window).on('load', function(){
    setTimeout(function(){
      $('.loading').addClass('opacity').delay(1000).queue(function(){
        $(this).addClass('none');
      });
    }, 3000);
  })

})();

$(function(){

  /**
   * loading
   */

  // 메인 페이지 로딩
  var playerNews, matchNews;
  (function(){

    playerNews = new MainNews( $('.player-news') );
    matchNews = new MainNews( $('.match-news') );

  })();

  // 선수단 페이지 로딩
  (function(){

    if( $('div').hasClass('team-profile-player') ){

      if( window.location.hash == '' ){
        window.location.hash = '#member1';
      }

      PlayerInfo.setURLCurrentMember();

    }

  })();

  // 포토리스트 페이지 로딩
  (function(){

    PhotoList.setURLCurrentMember();

  })();


  /**
   * event
   */

  // Header 이벤트
  (function(){

    $('.gnb-depth1-link').on('mouseenter', function(){
      $('.gnb').addClass('on');
    });

    $('.gnb').on('mouseleave', function(){
      $('.gnb').removeClass('on');
    });

    $('.header-search-btn').on('click', function(){

      $('.total-search').addClass('show');
      $('.header, .gnb').addClass('bg');

    });

    $('.total-search-close').on('click', function(){

      $('.total-search').removeClass('show');

      $(window).scroll();

    });

  })();

  // 공통 이벤트
  (function(){

    // Layer Popup 닫기
    $('.layer-close').on('click', function(){

      LayerPopup.closePopup( $(this).parent('.layer') );

    });

  })();

  // 메인 페이지 이벤트
  (function(){

    $('.main-news-title').on('click', function(){

      var tabIndex = $('.main-news-title').index( $(this) );

      $('.main-news-title').removeClass('on');
      $(this).addClass('on');

      $('.main-news-text').removeClass('on');
      $('.main-news-text').eq(tabIndex).addClass('on');

    });

    $('.main-visual-control-arrow .arrow.prev').on('click', function(){

      if( !MainVisual.checkAnimate() ){

        MainVisual.rollRight();

      }

    });

    $('.main-visual-control-arrow .arrow.next').on('click', function(){

      if( !MainVisual.checkAnimate() ){

        MainVisual.rollLeft();

      }

    });

    $('.main-visual-control-paging .play-button').on('click', function(){

      if( $(this).hasClass('pause') ){

        MainVisual.rollStop();

      } else {

        MainVisual.rollAuto();

      }

    });

    $('.main-member-btn.prev').on('click', function(){

      if( !PlayerVisual.checkAnimate() ){

        PlayerVisual.rollRight();

      }

    });

    $('.main-member-btn.next').on('click', function(){

      if( !PlayerVisual.checkAnimate() ){

        PlayerVisual.rollLeft();

      }

    });

    $('.main-news-notice-btn.prev').on('click', function(){

      if( $(this).parents('.main-news-text').hasClass('player-news') ){
        if( !playerNews.checkAnimate() ) {
          playerNews.rollTop();
        }
      } else {
        if(!matchNews.checkAnimate()) {
          matchNews.rollTop();
        }
      }

      $(this).siblings('.play-button').removeClass('pause').addClass('play');

    });

    $('.main-news-notice-btn.next').on('click', function(){

      if( $(this).parents('.main-news-text').hasClass('player-news') ){

        if( !playerNews.checkAnimate() ){
          playerNews.rollBottom();
        }

      } else {
        if(!matchNews.checkAnimate()){
          matchNews.rollBottom();
        }
      }

      $(this).siblings('.play-button').removeClass('pause').addClass('play');

    });

    $('.main-news-notice-btn.play-button').on('click', function(){

      if( $(this).hasClass('pause') ){

        if( $(this).parents('.main-news-text').hasClass('player-news') ){
          playerNews.rollStop();
        } else {
          matchNews.rollStop();
        }

        $(this).removeClass('pause').addClass('play');

      } else {

        if( $(this).parents('.main-news-text').hasClass('player-news') ){
          playerNews.rollAuto();
        } else {
          matchNews.rollAuto();
        }

        $(this).removeClass('play').addClass('pause');

      }

    });

  })();

  // LNB 이벤트
  (function(){

    var $lnb = $('.left-menu-depth1-item-link');

    // init
    $lnb.each(function(i){

      if( $(this).next('.left-menu-depth2').length != 0 ){

        $(this).addClass('has-child');

      }

      if( !$(this).hasClass('open') ){
        $(this).data('open', false);
      } else {
        $(this).data('open', true);
      }

    });


    $lnb.on('click', function(e){

      if( $(this).hasClass('has-child') ){

        e.preventDefault();

        $lnb.each(function(){

          if( $(this).hasClass('has-child') ){

            $(this).addClass('close').removeClass('on open').data('open', false);

          }

        });

        if( $(this).data('open') ){
          //$(this).removeClass('on open').addClass('close').data('open', false);
        } else {
          $(this).removeClass('close').addClass('on open').data('open', true);
        }

      }

    });

  })();

  // 선수단 리스트 페이지 이벤트
  (function(){

    $('.arrow.prev').on('click', function(){
      if( !PlayerInfo.checkAnimate() ){
        PlayerInfo.left();
      }
    });

    $('.arrow.next').on('click', function(){
      if( !PlayerInfo.checkAnimate() ){
        PlayerInfo.right();
      }
    });

    $('.team-profile-player-photo').on('click', function(){

      window.location.hash = $(this).data().value;

      if(!PlayerInfo.checkAnimate()){
        PlayerInfo.setURLCurrentMember() ;
      }

    });

    $('.search-box-btn').on('click', function(){

      window.location.hash = $('#search-player option:selected').val();

      if(!PlayerInfo.checkAnimate()){
        PlayerInfo.setURLCurrentMember() ;
      }

    });

  })();

  // 포토 리스트 페이지 이벤트
  (function(){

    $('.photo-thumb-btn.prev').on('click', function(){

      if( !PhotoList.checkAnimate() ){
        PhotoList.left();
      }

    });

    $('.photo-thumb-btn.next').on('click', function(){

      if( !PhotoList.checkAnimate() ){
        PhotoList.right();
      }

    });

  })();

});


