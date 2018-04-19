console.log('Client.js have been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is ready');
    $.ajax({
        type: 'GET',
        url: '/records'
    })

        .then(function (recordCollection) {
            for (let i = 0; i < recordCollection.length; i++) {
                $('#ajaxDiv').append(`<li> + ${recordCollection[i].title} by ${recordCollection[i].artist}, ${recordCollection[i].cost}</li>`);
            }
        });

}