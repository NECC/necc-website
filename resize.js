'use strict';
const Jimp = require('jimp');
const fs = require('fs');

const path = "./src/img/avatar/";


fs.readdir(path, (err, avatares) => {
    avatares.forEach(avatar => {
        let pathAvatar = path + avatar;
        Jimp.read(pathAvatar)
        .then(image => {
            return image
                .resize(120, 120) // resize
                .quality(95) // set JPEG quality
                .write(pathAvatar); // save
        })
        .catch(err => {
            console.error(err);
        });
    });
})
