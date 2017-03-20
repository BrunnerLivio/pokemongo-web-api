import * as $ from 'jquery';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import 'normalize.css';
import * as hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

import './app.scss';

$(document).ready(() => {
    const url = window.location.href;
    const arr = url.split('/');
    const apiurl = arr[0] + '//' + arr[2] + '/api/v1/';
    $('#api-url').text(apiurl);

    $.get(apiurl + 'pokemon/BULBASAUR', (data) => {
        $('#preview-output').text(JSON.stringify(data, null, 4));
        $('pre code').each((i, block) => {
            console.log(block);
            hljs.highlightBlock(block);
        });
    });


});
