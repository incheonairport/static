













<!doctype html>
<html lang="ko">
<head>
	






<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta http-equiv="Content-Script-Type" content="text/javascript"/>
<meta http-equiv="Content-Style-Type" content="text/css"/>
<link rel="stylesheet" type="text/css" href="/css/ko/common.css"/>
<link rel="stylesheet" type="text/css" href="/css/ko/jquery.bxslider.css"/>
<script src="/js/ko/jquery-1.11.2.min.js" type="text/javascript"></script>
<script src="/js/ko/jquery-ui.js" type="text/javascript"></script>
<script type="text/javascript" src="/js/ko/jquery.fileupload.js"></script>
<script src="/js/ko/jquery.bxslider.min.js" type="text/javascript"></script>
<script src="/js/ko/common.js" type="text/javascript"></script>
<script src="/js/ko/comn.js" type="text/javascript"></script>
<script type="text/javascript" src="/js/ko/ajax.mapping.js"></script>
<script type="text/javascript" src="/js/ko/ksy.fileupload.js"></script>
<script type="text/javascript" src="/js/ko/ksy.validation.js"></script>
<script type="text/javascript" src="/js/ko/menu_co.js"></script>
<link rel="stylesheet" type="text/css" href="/css/ko/login.css"/>
<title>공항공사</title>
</head>
<body>
<!-- wrap -->
<div id="wrap">
	<!-- header -->
		
	





	
	
	<script type="text/javascript">
	var strLang = "";
	var menuSvcTp = "";
	var isLogin = "";

	if("true" == "true"){
		isLogin = "N";
	} else {
		isLogin = "Y";
	}		
	
	$(document).ready(function(){
	    if(strLang == "ko"){
	    	fncSelLang("SEL_KR");
	    } else if(strLang == "en") {
	    	fncSelLang("SEL_EN");    	
	    } else {
	    	fncSelLang("SEL_NO");
	    }    
	});
	
	function fncSelLang(id){
		$("#SEL_LANG").find(">ul>li").hide();
		$("#SEL_LANG").find(">ul>li.on").removeClass();
		$("#"+id).show().addClass("on");	
	}

function fncGoChangeLanguage(lang){
	if(lang!=''){
		if(isLogin=='Y' && 'ko'!=lang){
			if(confirm("다국어페이지로 이동시 로그아웃 처리됩니다. 이동하시겠습니까?")){
				fncJson("/pa/cmm/logout.do","",function(data){
				       location.href = "/co/index.do?lang="+lang;
				});	
			}
		}else{
			location.href = "/co/index.do?lang="+lang;
		}
	}
}
	</script>
	<!-- 로그인 모달 -->
		
	





	
	
	<script type="text/javascript">
	 // 일반로그인과 회원가입로그인 구분[회원가입의 경우 로그아웃이 없으므로 구분이 필요함.]
	 var loginGubun = "";
	
		//팝업 중앙에 위치
		jQuery.fn.center = function (id) {
			var topSize = 0;
			
			if(id=='2'){
				topSize = Math.max(0, (($(window).height() - $(this).outerHeight()) / 2)) - 162.5;				
			} else {
				topSize = Math.max(0, (($(window).height() - $(this).outerHeight()) / 2));
			}
			
		    this.css("position","absolute");
		    this.css("top", String(topSize)  + "px");
		    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
		    return this;
		};
		
		$(document).ready(function() {
			
			//외국어 사이트에서 로그인 호출할 경우
			if(""!= null && "" != '' && "" == 'K'){
				fncLogin();
			}
			
			if(""== null || ""== ''){
				$("#fncLogin").show();
				$('#LiIdMypageBtn').hide();
				$('#DivIdQuickPlan').hide();
			} else {
				$("#fncLogout").show();
				$('#LiIdMypageBtn').show();
				$('#DivIdQuickPlan').show();
			}	
			
			//로그인 클릭
			$("#fncLogIn").bind("click", function(){
				if(!fncformValidate_login()){
					return;
				}				
				fncLoginProc();
			});
			
			//로그인 엔터
			$("#LOGIN_USER_ID").bind("keypress",function(e){		
				if (e.which == 13) {/* 13 == enter key@ascii */			
					if(!fncformValidate_login()){
						return;
					}				
					fncLoginProc();
				}
			});
			
			$("#LOGIN_USER_PWD").bind("keypress",function(e){		
				if (e.which == 13) {/* 13 == enter key@ascii */			
					if(!fncformValidate_login()){
						return;
					}				
					fncLoginProc();
				}
			});
			
			//아이디찾기 클릭
			$("#fncFindId").bind("click", function(){
				$('#spot_login').hide();
				$('#spot_findid').show("normal");
				$('.popup_login').center('2');
				fncInit();
			});
			
			//회원가입 클릭
			$("#fncMembJoin").bind("click", function(){
				location.href = 'https://www.airport.kr/ma/cmm/pac9110Index.do';
			});
			
			//아이디찾기 엔터
			$("#ENT_AREA>input").bind("keypress",function(e){		
				if (e.which == 13) {/* 13 == enter key@ascii */			
					if(!fncformValidate_findid()){
						return;
					}				
					fncFindIdProc();
				}
			});
			
			//아이디찾기 클릭
			$("#fncFindIdProc").bind("click",function(e){		
				if(!fncformValidate_findid()){
					return;
				}				
				fncFindIdProc();
			});
			
			//이메일 도메인 선택
			$("#fncChangeDom").bind("change", function(e){
				var selVal = $(this).val();
			
				if(selVal == "W"){
					$("#LST_EMAIL").val("");
					$("#LST_EMAIL").prop("readonly",false);
					$("#LST_EMAIL").focus();
				} else {
					$("#LST_EMAIL").val(selVal);
					$("#LST_EMAIL").prop("readonly",true);
				}
				
				return;
			});
			
			//아이디찾기에서 로그인 클릭
			$("#fncGoLogin").bind("click", function(){
				$('#spot_findid').hide();
				$('#spot_login').show("normal");
				$('.popup_login').center();
				fncInit();
			});
			
			//이메일 도메인 선택
			$("#fncChangeDom3").bind("change", function(e){
				var selVal = $(this).val();
			
				if(selVal == "W"){
					$("#LST_EMAIL3").val("");
					$("#LST_EMAIL3").prop("readonly",false);
					$("#LST_EMAIL3").focus();
				} else {
					$("#LST_EMAIL3").val(selVal);
					$("#LST_EMAIL3").prop("readonly",true);
				}
				
				return;
			});
			
			//패스워드찾기에서 로그인 클릭
			$(".fncGoLogin3").bind("click", function(){
				$('#spot_findpw').hide();
				$('#spot_login').show("normal");
				$('.popup_login').center();
				fncInit();
			});
			
			//비밀번호찾기 클릭
			$(".fncFindPwd").bind("click", function(){
				$('#spot_login').hide();
				$('#spot_findid').hide();
				$('#spot_findpw').show("normal");
				$('.popup_login').center('2');
				return;
			});
			
			//임시 패스워드 발송 클릭
			$("#fncFindPwdProc").bind("click", function(){
				if(!fncformValidate_findpw()){
					return;
				}				
				fncFindPwdProc();
			});
			
			//임시 패스워드 발송 엔터
			$("#ENT_AREA3>input").bind("keypress",function(e){		
				if (e.which == 13) {/* 13 == enter key@ascii */			
					if(!fncformValidate_findpw()){
						return;
					}				
					fncFindPwdProc();
				}
			});
			
			//외국인 로그인 창으로 이동
			$("#fncGoForeigner").bind("click", function(){
				location.href = '/pa/index.do'+"?lang=en&LOGINCD=F";
			});
		}); /* End of ready */
		
		/* ********************************************************
		 * 로그인 이벤트
		 ******************************************************** */
		function fncLogin(gubun){
			
			if(""== null || ""== ''){
				
				if(gubun == 'JOIN'){
					loginGubun = "JOIN";
				}
				
				fncLoad("#spot_login", "/pa/cmm/loginPage.do", {}, function(data){
					$('#spot_login').show("normal");
					$('.popup_login').center();
					
					$('#LOGIN_USER_ID').val("");
					$('#LOGIN_USER_PWD').val("");
				});
								
				return;
			} else {
				//fncGoUrl('/pa/index.do','');
				location.href = '/pa/index.do';
				return;
			}			
		}

		/* ********************************************************
		 * 로그인 이벤트
		 ******************************************************** */
		function fncLoginProc(){
// 			fncPost("/cmm/existUserLoginInfo.do", { "USER_ID":$("#LOGIN_USER_ID").val()}, function(returnData){
// 				if("EXIST_LOGIN"==returnData){
// 					if(confirm("현재 아이디로 로그인 사용중입니다. \n로그인하시겠습니까?")){
// 						fncLoginExe();
// 					}
// 				}else{
// 					fncLoginExe();
// 				}
// 			});
			/*
			var rsaPublicKeyModulus = $('#rsaPublicKeyModulus').val();
			var rsaPublicKeyExponent = $('#rsaPublicKeyExponent').val();
			var LOGIN_USER_ID = $('#LOGIN_USER_ID').val();
			
			var rsa = new RSAKey();
			rsa.setPublic(rsaPublicKeyModulus, rsaPublicKeyExponent);
			var securedLOGIN_USER_ID = rsa.encrypt(LOGIN_USER_ID);

			$.ajax({
			    url: 'https://www.airport.kr/cmm/existUserLoginInfo.do',
			    data:  { "USER_ID":securedLOGIN_USER_ID},
			    type: 'GET',
			    crossDomain: true,
			    dataType: 'jsonp',
			    success: function(data) {
			    	if("EXIST_LOGIN"==data.msgCd){
						if(confirm("현재 아이디로 로그인 사용중입니다. \n로그인하시겠습니까?")){
							fncLoginExe();
						}
					}else{
						fncLoginExe();
					}
			    },
			    error: function() { alert('시스템오류'); }
			});
			*/
			fncLoginExe();
		}
		
		
		function fncLoginExe(){
			var rsaPublicKeyModulus = $('#rsaPublicKeyModulus').val();
			var rsaPublicKeyExponent = $('#rsaPublicKeyExponent').val();
			var LOGIN_USER_ID = $('#LOGIN_USER_ID').val();
			var LOGIN_USER_PWD = $('#LOGIN_USER_PWD').val();
			
			var rsa = new RSAKey();
			rsa.setPublic(rsaPublicKeyModulus, rsaPublicKeyExponent);
			var securedLOGIN_USER_ID = rsa.encrypt(LOGIN_USER_ID);
			var securedLOGIN_USER_PWD = rsa.encrypt(LOGIN_USER_PWD);

			$.ajax({
			    url: 'https://www.airport.kr/pa/cmm/sslLogin.do',
			    data:  { "USER_ID":securedLOGIN_USER_ID
				       , "USER_PWD":securedLOGIN_USER_PWD},
			    type: 'GET',
			    crossDomain: true,
			    dataType: 'jsonp',
			    success: function(data) {
			    		chkVal = data.msgCd;
				       
				       if(chkVal == 'Y'){
				    	   if(loginGubun=="JOIN"){				    		
				    		   //fncGoUrl('/pa/index.do','');
				    		   location.href = '/pa/index.do';
				    	   } else {
				    		   hideLoginPopup(chkVal);
				    	   }			
				    	   isLogin = 'Y';
				       } else if(chkVal == 'N'){
				    	   //hideLoginPopup(chkVal);
				       } else if(chkVal == 'ERR01'){		    	   
				    	   alert("존재하지 않는 아이디입니다.");
				    	   $("#LOGIN_USER_ID").focus();
				       } else if(chkVal == 'ERR02'){
				    	   //hideLoginPopup(chkVal);
				    	   alert("입력하신 비밀번호가 일치하지 않습니다. \n 5회이상 로그인 실패시 비밀번호 찾기로 패스워드를 찾으셔야 로그인이 가능합니다. \n 현재 "+data.PWDERRCO+"번 패스워드 입력에 실패하셨습니다.");
				    	   
				    	   if(data.PWDERRCO == '5'){
				    		   $('#spot_login').hide();
							   $('#spot_findid').hide();
							   $('#spot_findpw').show("normal");
							   $('.popup_login').center('2');
							   return; 
				    	   } else {
				    		   $("#LOGIN_USER_PWD").val("");
				    		   $("#LOGIN_USER_PWD").focus();
				    	   }
				    	   
				       } else if(chkVal == 'ERR03'){		    	   
				    	   alert("로그인하신 회원은 정지된 회원입니다.");
				    	   $("#LOGIN_USER_ID").focus();
				       } else if(chkVal == 'ERR04'){		    	   
				    	   alert("5회이상 로그인 실패하였습니다. 비밀번호 찾기로 패스워드를 재발급 받으셔야 로그인이 가능합니다.");
				    	   $('#spot_login').hide();
						   $('#spot_findid').hide();
						   $('#spot_findpw').show("normal");
						   $('.popup_login').center('2');
						   return;
				       } else if(chkVal == 'NEED_INTEGRATION'){		    	   
				    	  fncGoUrl('/cmm/integration.do','leftmenu_PA_C_9220');
						   return;
					} else if(chkVal == 'NEED_PASS'){		    	   
					    	  fncGoUrl('/cmm/passChangePage.do','leftmenu_PA_C_9220');
							   return;
				       }else if(chkVal == 'NOT_SSL'){		    	   
							alert("잘못된 접근입니다.");
							return;
					   }
			    },
			    error: function() { alert('시스템오류'); }
			});
			
			/* fncJson("/pa/cmm/login.do",
				   { "USER_ID":$("#LOGIN_USER_ID").val()
			       , "USER_PWD":$("#LOGIN_USER_PWD").val()},
				   function(data){
				       chkVal = data.msgCd;
				       
				       if(chkVal == 'Y'){
				    	   if(loginGubun=="JOIN"){				    		
				    		   //fncGoUrl('/pa/index.do','');
				    		   location.href = '/pa/index.do';
				    	   } else {
				    		   hideLoginPopup(chkVal);
				    	   }			
				    	   isLogin = 'Y';
				       } else if(chkVal == 'N'){
				    	   //hideLoginPopup(chkVal);
				       } else if(chkVal == 'ERR01'){		    	   
				    	   alert("존재하지 않는 아이디입니다.");
				    	   $("#LOGIN_USER_ID").focus();
				       } else if(chkVal == 'ERR02'){
				    	   //hideLoginPopup(chkVal);
				    	   alert("입력하신 비밀번호가 일치하지 않습니다. \n 5회이상 로그인 실패시 비밀번호 찾기로 패스워드를 찾으셔야 로그인이 가능합니다. \n 현재 "+data.PWDERRCO+"번 패스워드 입력에 실패하셨습니다.");
				    	   
				    	   if(data.PWDERRCO == '5'){
				    		   $('#spot_login').hide();
							   $('#spot_findid').hide();
							   $('#spot_findpw').show("normal");
							   $('.popup_login').center('2');
							   return; 
				    	   } else {
				    		   $("#LOGIN_USER_PWD").val("");
				    		   $("#LOGIN_USER_PWD").focus();
				    	   }				    	   
				    	   
				       } else if(chkVal == 'ERR03'){		    	   
				    	   alert("로그인하신 회원은 정지된 회원입니다.");
				    	   $("#LOGIN_USER_ID").focus();
				       } else if(chkVal == 'ERR04'){		    	   
				    	   alert("5회이상 로그인 실패하였습니다. 비밀번호 찾기로 패스워드를 재발급 받으셔야 로그인이 가능합니다.");
				    	   $('#spot_login').hide();
						   $('#spot_findid').hide();
						   $('#spot_findpw').show("normal");
						   $('.popup_login').center('2');
						   return;
				       }
				   }); */
		
		}

		/* ********************************************************
		 * 로그아웃 이벤트
		 ******************************************************** */
		function fncLogout(){
			if(confirm("로그아웃 하시겠습니까?")){
				fncJson("/pa/cmm/logout.do",
						   "",
						   function(data){
						       chkVal = data.msgCd;
						       
						       if(chkVal == 'N'){
						    	   hideLoginPopup(chkVal);
						       } else{
						    	   hideLoginPopup(chkVal);
						       }
						       isLogin = 'N';
						       location.href = '/pa/index.do';
						   });	
			}	
		}

		/****************************************************** 
		 * validation
		**************************************************** */
		var fncformValidate_login = function() {
			var isValid = true;
			
			rules 	= {
					LOGIN_USER_ID 	  : "required",
					LOGIN_USER_PWD    : "required" 
				};

			messages = {
					LOGIN_USER_ID 	: "아이디를 입력해주세요.",
					LOGIN_USER_PWD 	: "비밀번호를 입력해주세요."
				};
			
			if(!fncValidate(rules,messages)){
				isValid = !isValid;
			}
			
			return isValid;
			
		};

		/* ********************************************************
		 * 아이디찾기 이벤트
		 ******************************************************** */
		function fncFindIdProc(){
			
			var userNm = $('#LOGIN_USER_NM').val();
			userNm = encodeURIComponent(userNm);

			fncPost("/pa/cmm/selectFindId.do",
						{ "USER_NM":userNm
				        , "EMAIL":$("#EMAIL").val()},
						   function(data){
						       chkVal = data.msgCd;
						       
						       if(chkVal == 'Y'){
						    	   $("#GETID").html(data.userId);
						    	   $("#RESULT_Y").show();
						    	   $("#RESULT_N").hide();
						       } else{
						    	   $("#RESULT_N").show();
						    	   $("#RESULT_Y").hide();
						       }
						   });	

		}

		/****************************************************** 
		 * validation
		**************************************************** */
		var fncformValidate_findid = function() {
			var isValid = true;
			
			$("#EMAIL").val($("#FST_EMAIL").val() + "@" + $("#LST_EMAIL").val());
			
			rules 	= {
					LOGIN_USER_NM 	: "required",
					FST_EMAIL   : "required",
					LST_EMAIL   : "required",
					EMAIL       : "chkEmail"
				};

			messages = {
					LOGIN_USER_NM 	: "이름을 입력해주세요.",
					FST_EMAIL 	: "이메일 앞자리를 입력해주세요.",
					LST_EMAIL 	: "이메일 뒷자리를 입력해주세요.",
					EMAIL 	    : "이메일 형식이 올바르지 않습니다."
				};
			
			if(!fncValidate(rules,messages)){
				isValid = !isValid;
			}
			
			return isValid;
			
		};
		
		/* ********************************************************
		 * 임시 패스워드 발송 이벤트
		 ******************************************************** */
		function fncFindPwdProc(){
			
			var userNm = $('#LOGIN_USER_NM3').val();
			userNm = encodeURIComponent(userNm);
			
			
			fncPost("/pa/cmm/selectFindPwd.do",
					{ "USER_ID":$("#LOGIN_USER_ID3").val()
				    , "USER_NM":userNm
			        , "EMAIL":$("#EMAIL").val()},
					   function(data){
					       chkVal = data.msgCd;
					       
					       if(chkVal == 'Y'){			    	   
					    	   $("#RESULT_Y3").show();
					    	   $("#RESULT_N3").hide();
					    	   $("#RESULT_E3").hide();
					       } else if(chkVal == 'N'){
					    	   $("#RESULT_N3").show();
					    	   $("#RESULT_Y3").hide();
					    	   $("#RESULT_E3").hide();
					       } else{
					    	   $("#RESULT_E3").show();
					    	   $("#RESULT_Y3").hide();
					    	   $("#RESULT_N3").hide();
					       }
					   });
		}

		/****************************************************** 
		 * validation
		**************************************************** */
		var fncformValidate_findpw = function() {
			var isValid = true;
			
			$("#EMAIL").val($("#FST_EMAIL3").val() + "@" + $("#LST_EMAIL3").val());
			
			rules 	= {
						LOGIN_USER_ID3 	: "required",
						LOGIN_USER_NM3 	: "required",
						FST_EMAIL3  : "required",
						LST_EMAIL3  : "required",
						EMAIL       : "chkEmail"
				};

			messages = {
						LOGIN_USER_ID3 	: "아이디를 입력해주세요.",
						LOGIN_USER_NM3 	: "이름을 입력해주세요.",
						FST_EMAIL3 	: "이메일 앞자리를 입력해주세요.",
						LST_EMAIL3 	: "이메일 뒷자리를 입력해주세요.",
						EMAIL 	    : "이메일 형식이 올바르지 않습니다.."
				};
			
			if(!fncValidate(rules,messages)){
				isValid = !isValid;
			}
			
			return isValid;
			
		};
		
		function hideLoginPopup(chkVal)
		{
			$('#spot_login').hide("normal");			
			
			if(chkVal == 'Y'){
				$("#fncLogout").show();		
				$("#fncLogin").hide();
				$('#LiIdMypageBtn').show();
				fncLoad("#DivIdQuickPlan", "/pa/cmm/quickPlan.do", {}, function(data){});
				$('#DivIdQuickPlan').show();
			} else {
				$("#fncLogin").show();
				$("#fncLogout").hide();
				$('#LiIdMypageBtn').hide();
				$('#DivIdQuickPlan').hide();
			}
		}

		function hideIdFindPopup(chkVal)
		{
			$('#spot_findid').hide("normal");
			fncInit();
		}

		function hidePwPopup(chkVal)
		{
			$('#spot_findpw').hide("normal");
			fncInit();
		}
		
		function fncInit(){
			$("#ENT_AREA>input").val("");
			$("#ENT_AREA2>input").val("");
			$("#ENT_AREA3>input").val("");
			$("#RESULT_Y").hide();
			$("#RESULT_N").hide();
			$("#RESULT_Y3").hide();
			$("#RESULT_N3").hide();
			$("#RESULT_E3").hide();
			$("#fncChangeDom>option[value='']").prop("selected",true);
			$("#fncChangeDom3>option[value='']").prop("selected",true);
		}
	</script>

<input type="hidden" id="EMAIL" value="">	
	
<!-- 로그인 모달 팝업 -->
<div  id="spot_login" class="pop_bg" style="display:none;">
	<div class="popup_login">
		<h1 class="popup_login_tit">로그인</h1>
		<div class="pop_wrap2">
			<p>
				<strong class="">인천국제공항 홈페이지에 오신 것을 환영합니다. </strong><br />
				인천국제공항 홈페이지에 로그인하시면 회원만의 다양한 혜택과 <br />
				서비스를 편리하게 이용하실 수 있습니다.
			</p>
			<ul class="fom_login_join" style="float:left;">
				<li><a href="#none" id="fncGoForeigner"><u>Only korean. foreigner login go →</u></a></li>					
			</ul>
			<div class="fom_login" id="ENT_AREA2">
				<div class="fom_login_lft">
					<input type="text" title="회원 아이디" id="LOGIN_USER_ID" name="LOGIN_USER_ID" placeholder="회원 아이디" style="width:328px;">
					<input type="password" title="비밀번호" placeholder="비밀번호" id="LOGIN_USER_PWD" name="LOGIN_USER_PWD" style="width:328px;">
				</div>
				<a href="#none" id="fncLogIn" class="btn_login">로그인</a>
				
				<ul class="fom_login_join">
					<li><a href="#none" id="fncFindId">아이디찾기</a></li>
					<li><a href="#none" class="fncFindPwd">비밀번호찾기</a></li>
					<li><a href="#none" class="txt_point_b" id="fncMembJoin">회원가입</a></li>
				</ul>
			</div>
		</div>
		
		<a href="#none" onclick="hideLoginPopup('N');" class="popup_login_close"><img src="/images/ko/air/sub/btn_close02.png" alt="닫기"></a>
	</div>
</div>
<!--// 로그인 모달 팝업 -->

<!-- 아이디 찾기 팝업 -->
<div  id="spot_findid" class="pop_bg" style="display:none;">
	<div class="popup_login">
		<h1 class="popup_login_tit">아이디 찾기</h1>
		<div class="pop_wrap2">
			<p>
				<strong>아이디가 기억나지 않으세요?</strong><br />
				회원가입 당시 입력한 이름과 E-메일 주소로 일치하는 ID를 찾습니다. 
			</p>
			<div class="fom_login" id="ENT_AREA">
				<label for="name01" class="label_stwid65">이름</label><input type="text" id="LOGIN_USER_NM" name="LOGIN_USER_NM" style="width:383px;">
				<label for="mail01" class="label_stwid65">E-mail</label><input type="text" id="FST_EMAIL" name="FST_EMAIL" title="이메일ID" style="width:84px;"> @
				<input type="text" id="LST_EMAIL" name="LST_EMAIL" title="이메일 도메인주소" style="width:114px;" readonly="readonly">
				<select title="메일 도메인 선택" id="fncChangeDom" style="width:144px;float:right">
					<option value="">선택</option>
					<option value="W">직접입력</option>
					<option value="naver.com">naver.com</option>					
					<option value="hanmail.net">hanmail.net</option>
					<option value="daum.net">daum.net</option>
					<option value="gmail.com">gmail.com</option>
					<option value="hotmail.com">hotmail.com</option>
					<option value="nate.com">nate.com</option>					
				</select>
				<a href="#none" class="btn_idsh" id="fncFindIdProc">아이디 찾기</a>
			</div>
			
			<!-- 찾기 결과 -->
			<div class="loginsh_box" id="RESULT_Y" style="display: none">
				<ul>
					<li>* 회원님의 ID는 다음과 같습니다. </li>
					<li>* 보안목적상 ID의 일부만 공개합니다. (별표 표시된 부분은 실제 ID가 아님)</li>
				</ul>
				<p class="loginsh_boxs" id="GETID"></p>
				<ul class="join_bot">
					<li><a href="#none" class="txt_point_b" id="fncGoLogin">로그인</a></li>
					<li><a href="#none" class="fncFindPwd">비밀번호찾기</a></li>
				</ul>
			</div>
			<div class="loginsh_box" id="RESULT_N" style="display: none">
				<ul>
					<li>* 입력하신 회원정보에 대한 아이디는 존재 하지 않습니다.</li>
				</ul>				
			</div>
			<!--// 찾기 결과 -->
			
		</div>
		
		<a href="#none" onclick="hideIdFindPopup();" class="popup_login_close"><img src="/images/ko/air/sub/btn_close02.png" alt="닫기"></a>
	</div>
</div>
<!--// 아이디 찾기 팝업 -->

<!-- 비밀번호 찾기 팝업 -->
<div  id="spot_findpw" class="pop_bg" style="display:none;">
	<div class="popup_login">
		<h1 class="popup_login_tit">비밀번호 찾기</h1>
		<div class="pop_wrap2">
			<p>
				<strong>비밀번호가 기억나지 않으세요?</strong><br />
				회원가입 당시 입력한 이름과 E-메일 주소로 일치하는 계정을 찾고, <br />
				임시 비밀번호를 메일로 보내 드립니다. 
			</p>
			<div class="fom_login" id="ENT_AREA3">
				<label for="id01" class="label_stwid65">회원ID</label><input type="text" id="LOGIN_USER_ID3" name="LOGIN_USER_ID" value="" style="width:383px;">
				<label for="name01" class="label_stwid65">이름</label><input type="text" id="LOGIN_USER_NM3" name="LOGIN_USER_NM" value="" style="width:383px;">
				<label for="mail01" class="label_stwid65">E-mail</label>
					<input type="text" id="FST_EMAIL3" name="FST_EMAIL" value="" title="이메일ID" style="width:84px;"> @
					<input type="text" id="LST_EMAIL3" name="LST_EMAIL" value="" readonly="readonly" title="이메일 도메인주소" style="width:114px;">
				<select title="메일 도메인 선택" id="fncChangeDom3" style="width:144px;float:right">
					<option value="">선택</option>
					<option value="W">직접입력</option>
					<option value="naver.com">naver.com</option>					
					<option value="hanmail.net">hanmail.net</option>
					<option value="daum.net">daum.net</option>
					<option value="gmail.com">gmail.com</option>
					<option value="hotmail.com">hotmail.com</option>
					<option value="nate.com">nate.com</option>
				</select>
				<a href="#none" class="btn_idsh" id="fncFindPwdProc">임시 패스워드 발송</a>
			</div>
			
			<!-- 찾기 결과 -->
			<div id="RESULT_Y3" class="loginsh_box" style="display: none">
				<ul>
					<li>* 회원님의 비밀번호를 회원정보에 등록한 E-메일로 발송하였습니다.</li>
					<li>* 로그인하셔서 임시 비밀번호를 다른 비밀번호로 변경하시기 바랍니다. </li>
				</ul>
				<p class="txt_align_cnt mgt20"><a href="#none" onclick="javascript:fncLogin();return false;" class="fncGoLogin3"><img src="/images/ko/air/sub/btn_login02.gif" alt="로그인"></a></p>
			</div>
			<div id="RESULT_N3" class="loginsh_box" style="display: none">
				<ul>
					<li>* 잘못된 회원정보를 입력하셨습니다.</li>					
				</ul>
				<p class="txt_align_cnt mgt20"><a href="#none" onclick="javascript:fncLogin();return false;" class="fncGoLogin3"><img src="/images/ko/air/sub/btn_login02.gif" alt="로그인"></a></p>
			</div>
			<div id="RESULT_E3" class="loginsh_box" style="display: none">
				<ul>
					<li>* 메일전송에 장애가 발생했습니다. 잠시 후에 다시 시도해주세요.</li>					
				</ul>
				<p class="txt_align_cnt mgt20"><a href="#none" onclick="javascript:fncLogin();return false;" class="fncGoLogin3"><img src="/images/ko/air/sub/btn_login02.gif" alt="로그인"></a></p>
			</div>
			<!--// 찾기 결과 -->
			
		</div>
		
		<a href="#none" onclick="hidePwPopup();" class="popup_login_close"><img src="/images/ko/air/sub/btn_close02.png" alt="닫기"></a>
	</div>
</div>
<!--// 비밀번호 찾기 팝업 -->

	<!-- skipNav -->
	<div class="skipNav">
		<a href="#content">본문 바로가기</a>
		<a href="#gnb">상단메뉴 바로가기</a>
		<a href="#foot">하단 주소 바로가기</a>
	</div>
	<!--// skipNav -->
	
	<!-- header -->
	<div id="header">
		<div class="top">
			<ul class="ia_go">
				<li><a href="#" onclick="fncGoUrl('/pa/index.do?lang=ko','spa_12','N');return false;"><img src="/images/ko/sub/top_mu1_airport.png" alt="여객서비스 go" /></a></li>
			</ul>
<div class="headRight">
			<ul class="bnt_size">
				<li class="bnt_p"><a href="#none"><img src="/images/ko/air/main/btn_plus.png" alt="화면 확대"></a></li>
				<li class="bnt_m"><a href="#none"><img src="/images/ko/air/main/btn_minus.png" alt="화면 축소"></a></li>
				<li class="bnt_print"><a href="#none"><img src="/images/ko/air/main/btn_print.png" alt="화면 인쇈" /></a></li>
			</ul>
			<ul class="top_log">
				<li>
					<a href="#none" onclick="javascript:fncLogout(); return false;" id="fncLogout" style="display: none;">로그아웃</a>					
					<a href="#none" onclick="javascript:fncLogin(); return false;" id="fncLogin" style="display: none;">로그인</a>
					<!-- <a href="#none" onclick="javascript:alert('서비스 준비중 입니다.'); return false;" id="fncLogin" style="display: none;">로그인</a> -->
				</li>				
				<li id="LiIdMypageBtn" ><a href="/pa/ko/e/mypage/index.jsp"> 마이페이지</a></li>
				<li><a href="#none" onclick="fncGoPaUrl('/pa/ko/e/1/index.jsp','leftmenu_PA_D_7000_00',0,'N');return false;">고객센터</a></li>
				<li><a href="#none" onclick="fncGoUrl('/co/ko/7/index.jsp','leftmenu_CO_9900_00','N');return false;">사이트맵</a></li>
				<li>
					<div  id="SEL_LANG" class="selectbox select1">
						<ul>
							<li id="SEL_NO"><a href="#none" title="언어선택">language</a></li>
							<li id="SEL_KR"><a href="javascript:fncGoChangeLanguage('ko');" title="한글 페이지로 이동">한글</a></li>
							<li id="SEL_EN"><a href="javascript:fncGoChangeLanguage('en');" title="ENGLISH 페이지로 이동">ENGLISH</a></li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
</div>
<h1 class="sub_logo">
<!--img src="/images/ko/sub/logo31.png" alt="Incheon Airport"-->
<a href="#" onclick="fncGoUrl('/co/index.do?lang=ko','sco_1','N');return false;"><img src="/images/ko/sub/h1_logo1_m.png" alt="Incheon Airport"></a>
</h1>
		<div class="top_mid">
			<div class="search">
				<input type="text" class="bod0" placeholder="검색어를 입력하세요." id="ALL_SEARCH_STR" name="ALL_SEARCH_STR" onkeypress="fncEnterGoAllSearch(event);">
				<a href="#none" class="btn_sh" onclick="fncGoAllSearch();return false;"><img src="/images/ko/sub/icon_search.png" alt="검색"></a>
			</div>
			<ul class="sub_sns">
				<li><a href="/common/facebook_redirect.jsp" target="_blank"><img src="/images/ko/sub/sns_fb_off.png" alt="facebook" /></a></li>
				<li><a href="/common/twitter_redirect.jsp" target="_blank"><img src="/images/ko/sub/sns_twt_off.png" alt="twitter" /></a></li>
				<li><a href="/common/youtube_redirect.jsp" target="_blank"><img src="/images/ko/sub/sns_yb_off.png" alt="youtube" /></a></li>
			</ul>
		</div>
		<div class="gnb" id="gnb">
		
			<div class="depth2"></div>
			<ul class="gnbmenu">
				
				<li><a href="#" onclick="fncGoUrl('/co/ko/1/index.jsp','sco_11','N');return false;">공사소개</a>
					<ul>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/1/1/index.jsp','sco_111','N');return false;">인천국제공항공사</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/1/2/index.jsp','sco_112','N');return false;">비전</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/1/6/index.jsp','sco_116','N');return false;">경영공시</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/1/3/index.jsp','sco_113','N');return false;">지속가능경영</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/1/4/index.jsp','sco_114','N');return false;">인천공항의 발자취</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/1/5/index.jsp','sco_115','N');return false;">채용</a></li>
						
					</ul>
				</li>
				
				<li><a href="#" onclick="fncGoUrl('/co/ko/3/index.jsp','sco_13','N');return false;">사이버홍보실</a>
					<ul>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/3/1/index.jsp','sco_131','N');return false;">한눈에보는 IIAC</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/3/2/index.jsp','sco_132','N');return false;">포토역사관</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/3/3/index.jsp','sco_133','N');return false;">CI 및 슬로건</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/3/4/index.jsp','sco_134','N');return false;">수상/인증</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/3/5/index.jsp','sco_135','N');return false;">미디어자료실</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/3/6/index.jsp','sco_136','N');return false;">자료실</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/3/7/index.jsp','sco_137','N');return false;">3단계건설사업</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/3/8/index.jsp','sco_138','N');return false;">자기부상열차</a></li>
						
					</ul>
				</li>
				
				<li><a href="#" onclick="fncGoUrl('/co/ko/4/index.jsp','sco_14','N');return false;">전자민원</a>
					<ul>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/4/1/index.jsp','sco_141','N');return false;">일반민원/제안</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/4/2/index.jsp','sco_142','N');return false;">예산낭비신고</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/4/3/index.jsp','sco_143','N');return false;">개인정보열람</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/4/4/index.jsp','sco_144','N');return false;">불법하도급신고</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/4/5/index.jsp','sco_145','N');return false;">정보공개/사전정보공표</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/4/7/index.jsp','sco_147','N');return false;">사업실명제</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/4/6/index.jsp','sco_146','N');return false;">청렴신문고</a></li>
						
					</ul>
				</li>
				
				<li><a href="#" onclick="fncGoUrl('/co/ko/5/index.jsp','sco_15','N');return false;">고객참여</a>
					<ul>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/5/1/index.jsp','sco_151','N');return false;">공지사항</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/5/7/index.jsp','sco_157','N');return false;">정규직전환 알림방</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/5/2/index.jsp','sco_152','N');return false;">공항견학</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/5/3/index.jsp','sco_153','N');return false;">3단계 건설사업 전시실 관람</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/5/4/index.jsp','sco_154','N');return false;">자원봉사단</a></li>
						
						<li><a href="#" onclick="fncGoUrl('/co/ko/5/5/index.jsp','sco_155','N');return false;">이벤트</a></li>
						
					</ul>
				</li>
				
			</ul>
		</div>
		<div class="gnb_business"><a href="#" onclick="fncGoUrl('/co/ko/6/index.jsp','sco_16','N');return false;">비즈니스 Business</a></div>
	</div>
	<!--// header -->

	
	
	<!--// header -->
	



	<!-- visual -->
	<div class="visual_wrap2">
		<div class="visual2">
			<ul>
				<li><img src="/images/ko/sub/submain01.jpg" alt="Fly High@Incheon Airport 세계인의 인천공항, 신뢰받는 국민기업" /></li>
			</ul>
		</div>
	</div>
	<!--// visual -->

	<!-- contenter -->
	<div id="contenter">
		
		<!-- leftmenu -->
		<div id="leftmenu">
	<h2><img src="/co/ko/1/__icsFiles/metafile/2015/06/24/title_h2_sub1.gif" alt="공사소개" /></h2>
	
	<ul>
		
		<li class="on"><a href="#" onclick="fncGoUrl('/co/ko/1/1/index.jsp','sco_111','N');return false;">인천국제공항공사</a>
		
			<ul style="display: block;">
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/1/1/index.jsp','sco_1111','N');return false;">- CEO소개</a>
				
				
				</li>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/1/2/index.jsp','sco_1112','N');return false;">- 일반현황</a>
				
				
				</li>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/1/3/index.jsp','sco_1113','N');return false;">- 조직</a>
				
				
				</li>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/1/5/index.jsp','sco_1115','N');return false;">- 직원광장</a>
				
				
				</li>
				
				<li class="on">
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/1/6/index.jsp','sco_1116','N');return false;">- 오시는길</a>
				
				
				</li>
				
			</ul>
		</li>
		
		<li><a href="#" onclick="fncGoUrl('/co/ko/1/2/index.jsp','sco_112','N');return false;">비전</a>
		
		
		<li><a href="#" onclick="fncGoUrl('/co/ko/1/6/index.jsp','sco_116','N');return false;">경영공시</a>
		
		
		<li><a href="#" onclick="fncGoUrl('/co/ko/1/3/index.jsp','sco_113','N');return false;">지속가능경영</a>
		
			<ul>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/3/1/index.jsp','sco_1131','N');return false;">- 지속가능성</a>
				
				
				</li>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/3/2/index.jsp','sco_1132','N');return false;">- 윤리경영</a>
				
				
				</li>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/3/3/index.jsp','sco_1133','N');return false;">- 사회 공헌</a>
				
				
				</li>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/3/4/index.jsp','sco_1134','N');return false;">- 동반성장</a>
				
				
				</li>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/3/5/index.jsp','sco_1135','N');return false;">- 환경 경영</a>
				
				
				</li>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/3/6/index.jsp','sco_1136','N');return false;">- 에너지경영</a>
				
				
				</li>
				
				<li>
				
				
				
				<a href="#" onclick="fncGoUrl('/co/ko/1/3/7/index.jsp','sco_1137','N');return false;">- 공정거래자율준수</a>
				
				
				</li>
				
			</ul>
		</li>
		
		<li><a href="#" onclick="fncGoUrl('/co/ko/1/4/index.jsp','sco_114','N');return false;">인천공항의 발자취</a>
		
		
		<li><a href="#" onclick="fncGoUrl('/co/ko/1/5/index.jsp','sco_115','N');return false;">채용</a>
		
		

	







	</ul>


		</div>
		<!--// leftmenu -->

		<!-- content -->
		<div id="content">
		
				
				
				
			<ul class="location">
				<li><a href="/co/index.do?lang=ko">HOME</a><span class="">&#62;</span></li>
				
				
				<li><a href="#" onclick="fncGoUrl('/co/ko/1/index.jsp','sco_11','N');return false;">공사소개</a> <span class="">&gt;</span></li>
								
				
				<li><a href="#" onclick="fncGoUrl('/co/ko/1/1/index.jsp','sco_111','N');return false;">인천국제공항공사</a> <span class="">&gt;</span></li>
				<li class="on">오시는길</li>
				
				
			</ul>
			<h3><img src="/co/ko/1/1/6/__icsFiles/metafile/2015/06/24/title_h3_sub1_01_06.gif" alt="오시는길" /></h3>

			<!-- content : info-->
			<div class="cont_info" id="cont_info">
			
			
				

<div class="txt_h5 mar0">인천국제공항공사</div>
				<!-- sub_내용 -->
				<div class="in_map mar_bot40 mgt20">
					<div class="mar_bot20" align="center">						
						<!--<iframe id="CO_MAP01" src="http://dna.daum.net/include/tools/routemap/map_view.php?width=740&height=550&latitude=37.44744542002921&longitude=126.45253429738946&contents=&zoom=5" width="740" height="585" scrolling="no" frameborder="0"></iframe>-->																		
						<img id="CO_MAP02" src="/images/ko/contents/co_map.gif" alt="오시는길 인천국제공항공사 약도입니다"  />
					</div>
<!--
					<div class="map_two_bot">
						<a href="#none" id="fncMapView01"><img src="/images/ko/sub/map1_img.jpg" alt="지도보기" /></a>
						<a href="#none" id="fncMapView02"><img src="/images/ko/sub/map2_img.jpg" alt="약도보기" /></a>
					</div>-->
					<ul>
						<li><a href="https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B3%B5%ED%95%AD%EC%B6%9C%EC%9E%85%EA%B5%AD%EA%B4%80%EB%A6%AC%EC%82%AC%EB%AC%B4%EC%86%8C/@37.440652,126.461746,18z/data=!3m1!4b1!4m2!3m1!1s0x357b9a5c4497c8d7:0x75f12082f7e900b9?hl=en" target="_blank"><img src="/images/ko/sub/google_bottom.jpg" alt="google 길찾기" /></a></li>
						<li class="mar_ltf2"><a href="http://map.naver.com/?dlevel=12&pinType=site&pinId=11577227&x=126.4523470&y=37.4476110&enc=b64" target="_blank" ><img src="/images/ko/sub/never_bottm.jpg" alt="never 길찾기" /></a></li>
						<li class="mar_ltf2"><a href="http://map.daum.net/?urlX=380928&urlY=1095246&urlLevel=3&itemId=12750370&q=%EC%9D%B8%EC%B2%9C%EA%B5%AD%EC%A0%9C%EA%B3%B5%ED%95%AD%EA%B3%B5%EC%82%AC&srcid=12750370&map_type=TYPE_MAP" target="_blank" ><img src="/images/ko/sub/daum_bottom.jpg" alt="daum 길찾기" /></a></li>
					</ul>
				</div>
				<div class="txt_h5 mar0">연락처 안내</div>
				<div class="mgt20 mar_bot40">
					<table summary="연락처안내 테이블양식입니다" class="table_style01 style2 table_col">
						<caption>연락처안내</caption>
							<colgroup>
								<col style="width:30%" />
								<col style="width:70%" />
							</colgroup>
						<tbody>
							<tr class="col_topbod">
								<th>도로명주소</th>
								<td class="txt_left">인천광역시 중구 공항로424번길 47</td>
							</tr>
							<tr>
								<th>지번주소</th>
								<td class="txt_left">인천광역시 중구 운서동 2850 인천국제공항정부합동청사</td>
							</tr>
							<tr>
								<th>전화</th>
								<td class="txt_left">1577-2600</td>
							</tr>
							<tr>
								<th>팩스</th>
								<td class="txt_left">032)741-2450</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="txt_h5">차량으로 오실 경우</div>
				<p class="list_dot mgt20 mar_bot5">인천국제공항 여객터미널 진입 1km 전, <br /> 인천국제공항공사방면 진입로로 진입하여 500m 지점</p>
				
				<div class="txt_h5">대중교통으로 오실 경우</div>
				<div class="list_dot">공항철도, 버스 등으로 오시는 분들을 위하여, <br />여객터미널 3층에서 공항청사 앞까지 무료셔틀버스가 운행됩니다. </div>
				<p class="hy_dd27_1 mgl10">여객터미널 3층으로 올라오시기 바랍니다. </p>
				<p class="hy_dd27_2 mgl10">여객터미널 3층, 3번·12번 게이트 앞 정차장에서 사진과 같은 무료셔틀버스에 탑승하시기 바랍니다. </p>
				
				<div class="mgl30">※ 3번 게이트 앞 정류소명: 여객터미널 동측</div>
				<div class="mgl30">※ 12번 게이트 앞 정류소명: 여객터미널 서측</div>
				<div class="mgl30 color_gr mar_bot20">※ 무료순환버스 출발시간 : 첫차 04:30 , 막차 00:30, 배차간격 12분</div>
				<div class="mar_bot20"><a href="#none" onclick="fncGoUrl('/pa/ko/a/3/1/1/index.jsp','leftmenu_PA_C_3110_10','', 3);return false;"><img src="/images/ko/sub/shot_bus_img.jpg" alt="셔틀버스 노선 및 시간표 안내" /></a></div>
				<div class="mar_bot20">
					<div class="left_cts">
						<div class="mar_bot10">&lt;셔틀버스 사진&gt;</div>
						<div><a href="#"><img src="/images/ko/sub/map0_1.jpg" alt="셔틀버스사진" /></a></div>
					</div>
					<div class="right_cts">
						<div class="mar_bot10">&lt;셔틀버스 탑승위치&gt;</div>
						<div>
							<a href="#"><img src="/images/ko/sub/map0_2.jpg" alt="셔틀버스사진" /></a>
							<a href="#"><img src="/images/ko/sub/map0_3.jpg" alt="셔틀버스사진" /></a>
						</div>
					</div>
				<div class="clear"></div>
				</div>
				<div class="mar_bot20">
					<div class="mar_bot10">&lt;순환버스 노선도&gt;</div>
					<div><a href="#" ><img src="/images/ko/sub/subway_map.jpg" alt="순환버스 노선도" /></a></div>
				</div>
				<div>
					<div class="hy_dd27_3  mar_lt11 mar_bot5">탑승한 후, 두번째 정거장에서 하차하시기 바랍니다.</div>
					<div class="mgl30 mar_bot5">※ 하차하는 정류소명: 국제업무단지(정부청사, 인천국제공항공사) 앞</div>
					<div class="hy_dd27_4  mar_lt11">하차하신 후 진행방향 전방 50미터 위치에 있는 횡단보도를 건너시면, 전방에 공항청사가 보입니다.</div>
					<div class="hy_dd27_5  mar_lt11">여객터미널로 돌아오실 경우에는, 내린 곳 맞은편 정류소에서 탑승하시기 바랍니다.</div>
				</div>
				
				<div class="txt_h5">인천국제공항 인재개발원 찾아오시는 길</div>
				<p class="list_dot">인재개발원은 여객터미널 북서쪽에 별도 시설로 위치하고 있습니다. </p>
				<p class="list_dot">인재개발원 홈페이지에서, 찾아오시는 길을 확인하시기 바랍니다.</p>
				<div><a href="http://academy.airport.kr/" target="_blank" title="새창으로 열림" ><img src="/images/ko/sub/btn_human.gif" alt="인재개발원 찾아오시는 길 보기" /></a></div>

					<!-- 담당부서 및 만족도 -->
					<div class="satisfaction">
						<div class="satisfaction_letter">
							<p class="img_letter"><img src="/images/ko/sub/img_letter.png" alt="letter" /></p>
							<p class="tit">홈페이지 내 게시된 정보 문의는 아래의 연락처로 문의주시기 바랍니다.</p>
							<ul class="tel">
								<li>담당부서 : 교통서비스팀  </li>
	
							<li>전화번호 : 032) 741-2048</li>
							</ul>
						</div>
						
					
					</div>
					<!--// 담당부서 및 만족도 -->
					

			
			</div>
			<!--// content : info-->		
		</div>
		<!-- content -->
	</div>
	<!--// contenter -->
	
	
</div>
<!-- foot -->
	
<div id="foot">
		<div class="footer">
			<div class="footer_lft">
				<p class="teltxt">인천공항 대표전화 <span>안내/신고</span></p> 
				<div class="tel_info">
					<a href="#a"><img src="/images/ko/sub/footer_tel.png" alt="1577-2600" class="mgr5" /></a>
					<a href="/pa/ko/e/1/index.jsp" class="pd0"><img src="/images/ko/sub/btn_contactus.png" alt="고객센터" /></a>
				</div>
				
			</div>
			<div class="footer_rht">
				<ul class="footer_mu">
					<li class="first"><a href="#" onclick="fncGoSubmain(menuSvcTp);return false;">홈</a></li>
					<li><a href="/mo/main.do?lang=ko">모바일 홈페이지</a></li>
					<li><a href="https://play.google.com/store/apps/details?id=com.ubivelox.icairport&feature=search_result#?t=W10">안드로이드 앱</a></li>
					<li><a href="/co/ko/6/2/3/3/index.jsp">안전신고</a></li>
					<li><a href="/common/1/ko/pa_c_9220.jsp?tabIndex=1" class="pit_color_blue2">개인정보처리방침</a></li>
					<li><a href="/common/1/ko/pa_c_9220.jsp?tabIndex=0">이용약관</a></li>
					<li><a href="/common/1/ko/pa_c_9220.jsp?tabIndex=2">저작권보호정책</a></li>
					<li><a href="/common/1/ko/pa_c_9220.jsp?tabIndex=3">이메일 주소 무단수집 거부</a></li>
					<li><a href="/common/1/ko/pa_c_9220.jsp?tabIndex=4">시각장애인이용안내</a></li>
				</ul>
				<div class="copy">인천국제공항 터미널 : 22382 인천시 중구 공항로 272 <br />
                인천국제공항공사 : 22382 인천시 중구 공항로 424번길 47 <br/>
                Copyright Incheon International Airport Corporation. All rights reserved</div>
				<ul class="sns">
					<li>
						<select id="select" title="관련사이트 목록" name="fsite" class="fsite" onchange="fncCmmGoSelectBox(11,this,'',true);return false;" onkeypress="fncCmmEnterMove(11,event,'',true);" onclick="fncCmmIsClick(11);">
							<option value="">관련사이트</option>
							<option value="http://ebid.airport.kr/">전자입찰시스템</option>
							<option value="http://ebpp.airport.kr/">인터넷청구시스템</option>
							<option value="http://iiac.guideline.co.kr/">자금입찰시스템</option>
							<option value="http://obstacle.airport.kr/">장애물관리안내</option>
							<!-- <option value="http://iiacairstar.kr/">AIRSTAR AVENUE</option>-->
							<option value="http://aircis.kr/">항공물류정보시스템</option>
							<option value="http://academy.airport.kr/kasa/index.jsp">항공보안교육원</option>
							<option value="http://academy.airport.kr/academy/">Aviation Academy</option>
							<option value="http://airinfo.airport.kr/airinfo/index.jsp">운항자료서비스</option>
							<option value="http://business.airport.kr/business/index.jsp">적재대관리 홈페이지</option>
							<option value="http://cip.airport.kr/">협업포털서비스</option>
							<option value="http://academy.airport.kr/">인천공항 인재개발원</option>
							<option value="/bd/main.do">인천공항 이사회</option>
							<option value="http://phonebook.airport.kr/">인천공항 전자전화번호부</option>
							<option value="http://www.iae.co.kr/">인천공항에너지(주)</option>
							<option value="/iia3rd/">3단계건설사업</option>
							<option value="https://tsp.airport.kr:844/">입주자서비스포탈</option>
							<option value="">-----------------------</option>
							<option value="http://www.molit.go.kr/">국토교통부 홈페이지</option>
							<option value="http://ia.icpolice.go.kr/main.asp">인천공항 경찰대</option>
							<option value="http://www.0404.go.kr/">외교부 안전여행</option>
							<option value="http://www.bbbkorea.org/">언어가 안통할때</option>
							<option value="http://www.juso.go.kr">도로명주소안내</option>
							<option value="http://travelinfo.cdc.go.kr/">해외여행질병정보센터</option>
							<option value="http://wiseuser.go.kr/jsp/commList.do?bcode=520&amp;hcode=500&amp;vcode=2019">해외로밍 캠페인</option>
							<option value="http://www.airport.co.kr/">한국공항공사</option>
							<option value="http://www.safe182.go.kr/index.do">안전Dream</option>
							<option value="http://www.customs.go.kr/kcshome/site/index.do?layoutSiteId=incheon">인천공항세관</option>
							<option value="http://www.immigration.go.kr">출입국외국인정책본부</option>
						</select>
					</li>
					<li><a href="http://www.facebook.com/incheonairport1" target="_blank" title="새 창 열림"><img src="/images/ko/sub/icon_sns01.png" alt="페이스북" /></a></li>
					<li><a href="http://instagram.com/incheon_airport" target="_blank" title="새 창 열림"><img src="/images/ko/sub/icon_sns02.png" alt="인스타그램" /></a></li>
					<li><a href="/common/youtube_redirect.jsp" target="_blank" title="새 창 열림"><img src="/images/ko/sub/icon_sns03.png" alt="유튜브" /></a></li>
				</ul>
			</div>
		</div>
	</div>
<!--// foot -->
</div>
<!--// wrap -->
</body>
</html>