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

  })();

});



/***************
 * Guide Class *
 ***************/


$(function(){

  /**
   * FileList Class
   */

});


/*******************
 * Guide Execution *
 *******************/

$(function(){

  /**
   * define
   */

  var item = [];
  var itemFlag = [];
  var fileData = [];

  var $record = $('.file-list tbody tr');

  var count = {

    allWork : 0,
    allPrimary : 0,
    allCategory : 0,
    allCancel : 0,
    allHtml : 0,
    allDev : 0,
    allBoard : 0,
    allLink : 0,
    allExtra : 0,
    allIframe : 0,

    doneWork : 0,
    doneHtml : 0,
    doneDev : 0,
    doneBoard : 0,
    doneIframe : 0

  };

  var pageCount = 1;

  // each data split filename and ext
  function splitData(data){

    $.each(data, function(key, val){

      item[key] = val.split('.')[0];

    });

  }

  // add class name each case ex. cancel/category/link/page(O/X)
  function addClassname($record){

    var $children = $record.children('td');
    var childrenText = $children.eq(6).text().toLowerCase();

    if($children.has('s').length){

      $record.addClass('cancel');
      $children.eq(7).text('');

    } else {

      if( $children.eq(7).text().indexOf('*') >= 0){

        childrenText = 'extra-page';

      } else if( $children.length == 1 && $children.eq(0).text() != '' ){

        //childrenText = childrenText ? 'primary-category ' + $children.eq(6).text().toLowerCase() + '-page' : 'primary-category '
        childrenText = 'primary-category ';

      } else {

        childrenText = childrenText ? childrenText + '-page' : childrenText + 'category';

      }

      $record.addClass(childrenText);

    }

  }

  // find same filename and put link html code or X
  function compareFile($record){

    if(!$record.hasClass('cancel') && !$record.hasClass('category') && !$record.hasClass('link-page')){

      if( $record.attr('class').indexOf('page') >= 0 ){

        for(var j=0; j<item.length; j++){

          if( $record.children('td:nth-child(8)').text() == item[j] ) {

            $record.prepend('<td>'+ pageCount +'</td>');
            $record.addClass('done').append('<td class="center"><a href="../html/' + item[j] + '.html" class="list-link" target="blank"> DONE </a></td>');
            itemFlag[j] = true;
            pageCount++;
            break;

          } else if( $record.children('td:nth-child(8)').text().indexOf('*') >= 0 ){

            $record.prepend('<td></td>');
            $record.append('<td></td>');
            break;

          } else {

            if( j == item.length-1 ){
              $record.prepend('<td>'+ pageCount +'</td>');
              $record.append('<td class="center">X</td>');
              pageCount++;
            }
          }
        }

      } else {
        $record.prepend('<td></td>');
        $record.append('<td></td>');
      }

    } else {
      $record.prepend('<td></td>');
      $record.append('<td></td>');

    }
  }

  // find unmatch filename and log
  function unmatchFile(){
    for(var k=0; k<itemFlag.length; k++){
      if( itemFlag[k] != true ){
        fileData.push(item[k]);
      }
    }
    console.log(fileData);
  }

  function countProgress(){

    $record.each(function () {

      var className = $(this).attr('class');

      if (className == 'primary-category') {

        // number of primary category
        count.allPrimary++;

      } else if (className == 'category') {

        // number of category
        count.allCategory++;

      } else if ( className == 'cancel' ) {

        count.allCancel++;

      }

      if( className.toLowerCase().indexOf('page') >= 0 ) {

        // number of working page
        count.allWork++;

        if (className.toLowerCase().indexOf('html') >= 0) {
          // number of html page
          count.allHtml++;

        } else if (className.toLowerCase().indexOf('develop') >= 0) {
          // number of develop page
          count.allDev++;

        } else if (className.toLowerCase().indexOf('board') >= 0) {
          // number of board page
          count.allBoard++;

        } else if (className.toLowerCase().indexOf('link') >= 0) {
          // number of link
          count.allLink++;

        } else if( className.toLowerCase().indexOf('extra') >= 0 ){
          // number of extra page
          count.allExtra++;

        } else if( className.toLowerCase().indexOf('iframe') >= 0 ){
          // number of iframe page
          count.allIframe++;

        }

      }

      if (className.toLowerCase().indexOf('done') >= 0) {
        // number of done page
        count.doneWork++;

        if (className.toLowerCase().indexOf('html') >= 0) {

          // number of done html page
          count.doneHtml++;

        } else if (className.toLowerCase().indexOf('develop') >= 0) {

          // number of done develop page
          count.doneDev++;

        } else if (className.toLowerCase().indexOf('board') >= 0) {

          // number of done board page
          count.doneBoard++;

        } else if (className.toLowerCase().indexOf('iframe') >= 0) {

          // number of done iframe page
          count.doneIframe++;

        }
      }

    });

    count.allWork = count.allWork - count.allLink - count.allExtra;

  }

  // write each count number
  function outputProgress() {

    countProgress();

    console.log(count);

    $('.progress-all .progress-bar').css({width:Math.floor( count.doneWork / count.allWork * 100 ) + '%'}).html('<div class="progress-percent">' + Math.floor( count.doneWork / count.allWork * 100 ) + '%</div>');

    $('.all-work').text( count.allWork + 'p');
    $('.done-work .progress-bar').css({width: Math.floor( count.doneWork / count.allWork * 100 ) + '%'}).html('<div class="progress-percent">' + count.doneWork + 'p</div>');

    $('.all-work-html').text(count.allHtml + 'p');
    $('.done-work-html .progress-bar').css({width: Math.floor( count.doneHtml / count.allHtml * 100 ) + '%'}).html('<div class="progress-percent">' + count.doneHtml + 'p</div>');

    $('.all-work-board').text(count.allBoard + 'p');
    $('.done-work-board .progress-bar').css({width: Math.floor( count.doneBoard / count.allBoard * 100) + '%'}).html('<div class="progress-percent">' + count.doneBoard + 'p</div>');

    $('.all-work-develop').text(count.allDev + 'p');
    $('.done-work-develop .progress-bar').css({width: Math.floor( count.doneDev / count.allDev * 100) + '%'}).html('<div class="progress-percent">' + count.doneDev + 'p</div>');

    $('.all-work-iframe').text(count.allIframe + 'p');
    $('.done-work-iframe .progress-bar').css({width: Math.floor( count.doneIframe / count.allIframe * 100) + '%'}).html('<div class="progress-percent">' + count.doneIframe + 'p</div>');

    $('.all-work-link').text(count.allLink + 'p');
    $('.done-work-link .progress-bar').css({width: Math.floor( count.allLink / count.allLink * 100) + '%'}).html('<div class="progress-percent">' + count.allLink + 'p</div>');
  }

  /**
   * run
   */

  // ajax
  $.getJSON('file_list.json', function(data){

    splitData(data);

  }).done(function(){

    $record.each(function(){

      addClassname($(this));

      compareFile($(this));

    });

    unmatchFile();

    outputProgress();

  });

  // show each list

  $('body').on('click', '.js-show-all', function(){

    $('.btn-type-small').removeClass('on');

    var showCategory = $(this).attr('class').split(' ')[4];

    $(this).addClass('on');

    $('.file-list tbody tr').addClass('hide');

    if( showCategory == undefined ){
      $('.file-list tbody tr').removeClass('hide');
    } else {
      $('.file-list tbody tr.' + showCategory + '-page').removeClass('hide');
    }

  });

  $('body').on('click', '.js-show-done', function(){

    $('.btn-type-small').removeClass('on');

    var showCategory = $(this).attr('class').split(' ')[4];

    $(this).addClass('on');

    $('.file-list tbody tr').addClass('hide');

    if( showCategory == undefined ){
      $('.file-list tbody tr.done').removeClass('hide');
    } else {
      $('.file-list tbody tr.' + showCategory + '-page.done').removeClass('hide');
    }

  });

  // link or alert message
  $('body').on('click', '.file-list tr', function(e){

    console.log( $(this).hasClass('cancel') );

    if( $(this).find('.list-link').length ){

      window.open($(this).find('.list-link').attr('href'));

    } else {

      alert('제작 페이지가 아닙니다.');

    }

  });

  // tab

  $('.tab-sub-list-item-link').on('click', function(e){
    e.preventDefault();

    var $tab = $('.tab-sub-list-item-link');
    var $tabContents = $('.tab-contents');

    var index = $tab.index( $(this) );

    $tab.removeClass('on');
    $(this).addClass('on');

    $tabContents.removeClass('on');
    $tabContents.eq(index).addClass('on');

  });

});


