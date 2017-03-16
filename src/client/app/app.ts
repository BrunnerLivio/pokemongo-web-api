import * as $ from 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import 'normalize.css';

import './app.scss';

$(document).ready(function () {
    const url = window.location.href;
    const arr = url.split('/');
    const apiurl = arr[0] + '//' + arr[2] + '/api/v1/';
    $('#api-url').text(apiurl);

    $.get(apiurl + 'pokemon/BULBASAUR', (data) => {
        $('#preview-output').text(JSON.stringify(data));
    });
});
