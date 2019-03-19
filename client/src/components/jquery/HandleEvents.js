import $ from 'jquery';

$(document).ready(function(){

    //Handle actions in Teacher portal
    $('#li-one').on('click', function(){
        $('#li-one').css('color', 'green')
        $('#li-one').css('font-weight', 'bold')
        $('#li-two').css('color', 'black')
        $('#li-two').css('font-weight', 'normal')
        $('#li-three').css('color', 'black')
        $('#li-three').css('font-weight', 'normal')
    })
    $('#li-two').on('click', function(){
        $('#li-two').css('color', 'green')
        $('#li-two').css('font-weight', 'bold')
        $('#li-one').css('color', 'black')
        $('#li-one').css('font-weight', 'normal')
        $('#li-three').css('color', 'black')
        $('#li-three').css('font-weight', 'normal')
    })
    $('#li-three').on('click', function(){
        $('#li-three').css('color', 'green')
        $('#li-three').css('font-weight', 'bold')
        $('#li-two').css('color', 'black')
        $('#li-two').css('font-weight', 'normal')
        $('#li-one').css('color', 'black')
        $('#li-one').css('font-weight', 'normal')
    })
});