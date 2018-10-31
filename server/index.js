const axios = require('axios');
const goodreadsapi = require('./config');

module.exports = {
getBooks(bookTitle) {
    return new Promise(function(resolve, reject) {
        return axios('https://www.goodreads.com/search/index.xml?key='+ goodreadsapi.key +'&q=' + bookTitle, {
            method: 'GET',
        }).then(result => {
            return resolve(result.data);
        })
        .catch(err => {
            console.log(err); 
            reject(err);
        });
    });
  }
};