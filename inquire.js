/**
 * Created by jefferson.wu on 11/2/16.
 */

var inquirer    = require('inquirer');
var chalk       = require('chalk');

function getCredentials(callback){
    var questions = [
        {
            name: 'username',
            type: 'input',
            message: 'Enter your username: ',
            validate: function(val){
                if(val.length){
                    return true;
                } else {
                    return 'Please enter your username or e-mail address'
                }
            }
        },
        {
            name: 'password',
            type: 'password',
            message: 'Enter your password: ',
            validate: function(val){
                if(val.length) {
                    return true;
                } else {
                    return 'Please enter your password';
                }
            }
        },
        {
            name: 'correct',
            type: 'confirm',
            message: 'Is all this info correct?',
            validate: function(val){
                if(val == 'y') {
                    return 'You selected the letter Y.'
                }
                else if (val == 'n') {
                    return 'You selected the letter N.'
                } else {
                    return 'Please confirm your selections!'
                }
            }
        }, {
            type: 'list',
            name: 'el listo',
            message: 'Pick from this list: ',
            choices: [
                'First choice', 'Second choice', 'third choice', 'last choice'
            ],
            validate: function(val){
                if(val.length) {
                    return true;
                } else {
                    return 'Please pick something from the list.';
                }
            }
        }, {
            type: 'checkbox',
            name: 'checkboxes',
            message: 'Pick multiple from this list',
            choices: [
                {name:'Water', checked: true},
                {name: 'Soda'},
                {name: 'Soup'},
                {name: 'Beans'},
                {name: 'Juices'},
                {name: 'Pizza'},
                {name: 'Tacos'}
            ],
            validate: function(val){
                if(val.length){
                    return true;
                } else {
                    return 'Please select at least one item.';
                }
            }
        }
    ];
    inquirer.prompt(questions).then(callback);
}

getCredentials(function(){
    console.log(arguments); //arguments=keyword
});