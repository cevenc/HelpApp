/*
 * Copyright © 2012-2015, Intel Corporation. All rights reserved.
 * Please see the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
function popup(url){
    var $modal = $('#doc-modal-1');
    $modal.modal();
    $('#audio').attr('src',url);
    document.getElementById('audio').play();
    $('.loading').css('display','none');
    $('#audiobtnc').css('display','block');
    $('#audiobtn').on('click',function(){
    document.getElementById('audio').play();
    });
}
function getajax(){
    console.log('ajaxing');
    $.ajax({
     type: 'get',
     url: 'http://120.26.47.233:8080/?callback=?',
    dataType: 'JSONP',
    success: function(data){
        if(data){
        var url="http://"+data.audio_url;
        popup(url);
        console.log(url);
    }
          
    } 
});
}
function finding(){
    
        setInterval('getajax()',3000);
}
finding();