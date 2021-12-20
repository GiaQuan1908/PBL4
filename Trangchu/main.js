function open_menu() {
  var x, m;
  m = (document.getElementById("leftmenu") || document.getElementById("sidenav"));
  if (m.style.display == "block") {
    m.style.display = "none"; 
  } else {
    m.style.display = "block";
    fix_sidemenu();
  }
}
function fix_sidemenu() {
  var w, top;
  w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  top = scrolltop()    
    if (top == 0) {
      document.getElementById("sidenav").style.top = "118px";
      document.getElementById("topnav").style.position = "relative";      
    }
    if (top > 0 && top < 73) {
      document.getElementById("sidenav").style.top = (118 - top) + "px";
      document.getElementById("topnav").style.position = "relative";      
    }
    if (top > 73) {
      document.getElementById("sidenav").style.top = "44px";
      document.getElementById("leftmenuinner").style.paddingTop = "44px";
      document.getElementById("belowtopnav").style.paddingTop = "44px";    
      document.getElementById("topnav").style.position = "fixed";
      document.getElementById("topnav").style.top = "0";
      document.getElementById("myAccordion").style.paddingTop = "44px";
    } else {
      document.getElementById("leftmenuinner").style.paddingTop = (118 - top) + "px";
      document.getElementById("belowtopnav").style.paddingTop = "0";
      document.getElementById("myAccordion").style.paddingTop = "0";
      document.getElementById("topnav").style.position = "relative";
    }
/*  }*/
}
function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}

function searchToggle(obj, evt){
  var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}

