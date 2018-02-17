/** @file new.js */

const Path = require('path');
const FileSystem = require('fs');

const FILE_SYSTEM_MKDIR_DEFAULT_MODE = 0o777;
const FILE_SYSTEM_MKDIR_DEFAULT_PATH = './test-dir';

const Log = require('./log.js');



const ResolvePath = function (path) {
    return Path.resolve(path);
}

const CreateProjectDirectory = function (path, mode) {
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

const newPath = ResolvePath(FILE_SYSTEM_MKDIR_DEFAULT_PATH);

CreateProjectDirectory(newPath, FILE_SYSTEM_MKDIR_DEFAULT_MODE);
