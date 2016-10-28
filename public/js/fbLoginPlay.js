/**
 * Created by jefferson.wu on 10/27/16.
 */

//Modularized version


//Modularized PurpleMonkey FB Login
var fbLoginPlay = {
    container: document.getElementById('container'),
    button: document.getElementById('button'),
    resultDiv: document.getElementById('result'),
    /**
     * Check Facebook status.  Essentially a wrapper for FB.getLoginStatus.
     */
    checkFBStatus: function(){
        FB.getLoginStatus(function(response){
            //need direct reference, because 'this' in callback refers to event.
            fbLoginPlay.statusChangeCallback(response);
        });
    },
    /**
     * Facebook status change callback function.
     * @param data  Data object returned by FB.getLoginStatus.
     */
    statusChangeCallback: function(data){
        console.log(data);
        fbLoginPlay.checkStatus(data);
    },
    /**
     * Check the current status returned from facebook, and do one 3 things.
     * @param data  Response data object from Facebook.
     */
    checkStatus: function(data){
        switch(data.status) {
            case 'connected':
                console.log('You are connected to FB and authorized.');
                //console.log(data.authResponse.accessToken);
                fbLoginPlay.getUserData('/me', {});
                fbLoginPlay.getUserData('/me/permissions', {});
                fbLoginPlay.getUserData('/me', {fields:'email'});
                break;
            case 'not_authorized':
                console.log('You are connected to FB, but not authorized for this app.');
                break;
            case 'unknown':
                console.log('You are not connected to FB at all. Log in.');
                fbLoginPlay.createLoginButton();
                break;
            default:
                console.log(Error('Invalid response.'));
        }
    },

    /**
     * If not logged in, create the login button.
     */
    createLoginButton: function(){
        var btn = document.createElement('button');
        var btnText = document.createTextNode('Log-In');
        btn.appendChild(btnText);
        this.container.appendChild(btn);

        btn.addEventListener('click', function(e){
            //login and remove button
            FB.login(function(response){
                console.log(response);
            }, {scope:'public_profile, email'});
            this.parentNode.removeChild(this);
        });

    },

    /**
     * Make API call to get user data.
     */
    getUserData: function(endpoint, paramsObject){
        FB.api(endpoint, paramsObject, function(response){
            console.log(response);
        });

    },
    /**
     * Debug: Get a random name.
     * @returns {string}    Returns a standard string name.
     */
    getRandomName: function() {
        var namesList = [
            'Caspar',
            'Toon',
            'Stacey',
            'Hanna',
            'Tiff',
            'Jeff',
            'Drew',
            'Dave',
            'Scott',
            'Vicky',
            'Vlad',
            'Francis'
        ];
        return namesList[Math.floor(Math.random() * namesList.length)];
    }

    
};