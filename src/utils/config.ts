require('dotenv').config();

export const AppConfig = {
    'dbUrl': `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@ds151513.mlab.com:51513/bookshelf`
};