// ==UserScript==
// @name         EID/Login
// @namespace    EID/Login
// @version      1.0
// @description  Conversion
// @author       nirichm
// @match        http://*/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    export default function getLogins(url, IDs) {
        var AAs = {}
        url += JSON.stringify(IDs)
        getAPI(url, function(data) { loginToEmployeeId(data, AAs); } );
        return AAs;

        function loginToEmployeeId(data, AAs) {
            let keys = Object.keys(data);
            for ( let i = 0; i < keys.length; i++ ) {
                AAs[keys[i]].login = data[keys[i]].login;
                AAs[keys[i]].shift = data[keys[i]].shiftCode;
                AAs[keys[i]].tier = data[keys[i]].jobTitle;
            };};

        function getAPI(url, code){
            GM_xmlhttpRequest({
                method: 'GET',
                url: url,
                onload: function (response)
                { let data = response.responseText;
                 data = ( typeof data === 'object' ) ? data : JSON.parse(data);
                 if (!!code) { code(data) }; }});};
    };
})();
