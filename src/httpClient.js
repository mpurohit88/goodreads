import axios from 'axios';
import { parseXml, xmlToJson } from './parseXML';
import goodreadsapi from './config';

export const get = function(query, callback) {
    axios('api/search/index.xml?key='+ goodreadsapi.key +'&q=' + query, {
        method: 'GET',
    }).then(res => {
        const dom = parseXml(res.data);
        var json = xmlToJson(dom);
        callback(JSON.parse(json.replace("undefined", "")));
    })
    .catch(err => console.log(err));
}

//Ender\'s+Game