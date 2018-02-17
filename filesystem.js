
const Path = require('path');
const FileSystem = require('fs');

const Log = require('./log.js');


exports.ResolvePath = function (path) {
    return Path.resolve(path);
}

exports.CreateProjectDirectory = function (path, mode) {
    FileSystem.mkdir(path, mode, (error) => {
        if (!error) {
            Log.Print('Directory created successfully!');

            return true;
            //return cb(null, 1);
        }

        switch (error.code) {
            case 'EEXIST': {
                Log.Print('Directory already exists!');
            } break;

            default: {
                Log.Print('<Did not catch error code>');
            }
        }

        return false;
    });
}
