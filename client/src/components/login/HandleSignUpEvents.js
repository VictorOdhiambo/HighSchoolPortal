import $ from 'jquery'

$(document).ready(function(){
    $('#student').on('click', function(){
        alert('Student')
        // $('#showForm').css('visibility', 'visible');
    })
    $('#staff').on('click', function(){
        alert('Staff')
        // $('#showForm').css('visibility', 'hidden');
    })
})