/**
 * Created by jefferson.wu on 10/27/16.
 */

window.addEventListener('load', function(e){


    //===== LOAD FACEBOOK WEB SDK =====================
    (function(doc,elem,id){
        var js, fjs = doc.getElementsByTagName(elem)[0];
        if(doc.getElementById(id)) {return;}
        js = doc.createElement(elem);
        js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
//===== LOAD FACEBOOK WEB SDK - (END) =============


// Initialize Facebook with app information.
    window.fbAsyncInit = function(){
        FB.init({
            appId   : '1310049252373886',   //Purple Monkey app id.
            xfbml   : true,
            version : 'v2.6'
        });
    };


});
