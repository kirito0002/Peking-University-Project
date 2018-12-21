<script type="text/javascript">
        
  var index = 1;
  var intervalId = setInterval(function() {
    clearInterval(intervalId);
    document.getElementsByClassName("slider")[0].style.marginLeft = "-1380px";
    document.getElementsByClassName("slider")[0].style.transition = "all 3s";
  },  3000)

  var ismouseover = true;
  document.getElementsByClassName("slider")[0].addEventListener("webkitTransitionEnd", function() {
    if(index == ) {
      index = 0;
      document.getElementsByClassName("slider")[0].style.marginLeft = ""+ -index*1380 +"px";
      document.getElementsByClassName("slider")[0].style.transition = "all 0s"
    }
    if (this) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(function() {
      
      index = index + 1;
      clearInterval(intervalId);
      document.getElementsByClassName("slider")[0].style.marginLeft = ""+ -index*1380 +"px";
      document.getElementsByClassName("slider")[0].style.transition = "all 3s"
    }, 3000)
  });    
  //北大概况   
 $(".top4").mouseover(function(){
    $("#aa").show();
  
  });
     $(".top4").mouseout(function(){
    $("#aa").hide();
    
  });
     $("#aa").mouseover(function(){
    $("#aa").show();
  
  });
      $("#aa").mouseout(function(){
    $("#aa").hide();
    
  });


     //招生与资助
     $("#top5").mouseover(function(){
    $("#bb").show();
  
  });

    $("#top5").mouseout(function(){
    $("#bb").hide();
    
  });

     $("#bb").mouseover(function(){
    $("#bb").show();
  
  });
      $("#bb").mouseout(function(){
    $("#bb").hide();
    
  });
      

      //学院与院系
      $("#top6").mouseover(function(){
    $("#cc").show();
  
  });

    $("#top6").mouseout(function(){
    $("#cc").hide();
    
  });

     $("#cc").mouseover(function(){
    $("#cc").show();
  
  });
      $("#cc").mouseout(function(){
    $("#cc").hide();
    
  });


    //教育教学
    $("#top7").mouseover(function(){
    $("#dd").show();
  
  });

    $("#top7").mouseout(function(){
    $("#dd").hide();
    
  });

     $("#dd").mouseover(function(){
    $("#dd").show();
  
  });
      $("#dd").mouseout(function(){
    $("#dd").hide();
    
  });

    //科学研究
    $("#top8").mouseover(function(){
    $("#ee").show();
  
  });

    $("#top8").mouseout(function(){
    $("#ee").hide();
    
  });

     $("#ee").mouseover(function(){
    $("#ee").show();
  
  });
      $("#ee").mouseout(function(){
    $("#ee").hide();
    
  });

    //合作交流
    $("#top9").mouseover(function(){
    $("#ff").show();
  
  });

    $("#top9").mouseout(function(){
    $("#ff").hide();
    
  });

     $("#ff").mouseover(function(){
    $("#ff").show();
  
  });
      $("#ff").mouseout(function(){
    $("#ff").hide();
    
  });

    //校园生活
    $("#top0").mouseover(function(){
    $("#gg").show();
  
  });

    $("#top0").mouseout(function(){
    $("#gg").hide();
    
  });
     $("#gg").mouseover(function(){
    $("#gg").show();
  
  });
      $("#gg").mouseout(function(){
    $("#gg").hide();
    
  });
  var b0 = document.getElementById("ll");
  var b1 = document.getElementById("jj");
  var pku_notice = document.getElementById("pku_notice");
  var notice = document.getElementById("pku_statement");

    b0.onmouseover=function(){
    pku_notice.style="display: block";
    notice.style="display: none";

  }
   b1.onmouseover=function(){
    pku_notice.style="display: none";
    notice.style="display: block";

  }

  b0.onmouseout=function(){
    pku_notice.style="display: block";
    notice.style="display: none";

  }
   b1.onmouseout=function(){
    pku_notice.style="display: none";
    notice.style="display: block";

  }      
    </script>