$(document).ready(function(){
     //  ============= SIGNIN TAB FUNCTIONALITY =========

    $('.sign-control li').on("click", function(){
         var tab_id = $(this).attr('data-tab');
         $('.sign-control li').removeClass('current');
         $('.sign_in_sec').removeClass('current');
         $(this).addClass('current animated fadeIn');
         $("#"+tab_id).addClass('current animated fadeIn');
         return false;
     });
 
     //  ============= SIGNIN TAB FUNCTIONALITY =========
 
     $('.signup-tab ul li').on("click", function(){
         var tab_id = $(this).attr('data-tab');
         $('.signup-tab ul li').removeClass('current');
         $('.dff-tab').removeClass('current');
         $(this).addClass('current animated fadeIn');
         $("#"+tab_id).addClass('current animated fadeIn');
         return false;
     });
 
     //  ============= SIGNIN SWITCH TAB FUNCTIONALITY =========
 
     $('.tab-feed ul li').on("click", function(){
         var tab_id = $(this).attr('data-tab');
         $('.tab-feed ul li').removeClass('active');
         $('.product-feed-tab').removeClass('current');
         $(this).addClass('active animated fadeIn');
         $("#"+tab_id).addClass('current animated fadeIn');
         return false;
     });
   
   });