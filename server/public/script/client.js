console.log('Client.js have been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is ready');
    $.ajax({
        method: 'GET',
        url: '/records'
    })

    //forEach loops are only used in arrays
        .then(function (response) {
            response.forEach(function (recordCollection) {
                $('#recordList').append(`<tr>
                <td>${recordCollection.title}</td>
                <td>${recordCollection.artist}</td> 
                <td>${recordCollection.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}</td>
                </tr>`);
            });
        });

}