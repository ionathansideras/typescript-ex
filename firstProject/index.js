"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = axios_1.default.get('https://jsonplaceholder.typicode.com/todos/1');
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
