const express = require('express')
const session = require('express-session');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const app = express()



app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.get('/', cors(), (req, res, next) => {
    // read cookies
    console.log("cookie"+req.headers.cookie)
    console.log("session"+req.session)
    let options = {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpOnly: true, // The cookie only accessible by the web server
        signed: false // Indicates if the cookie should be signed
    }

    // Set cookie
    res.cookie('cookieName123', 'cookieValue13', options)
    res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉 ' })
})
app.get('/login2', function(req, res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times");
    } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
    }
});
app.get('/login', function(req, res){


    // .. insert auth logic here .. //
    if(!req.session.user){
        console.log("session"+req.session)
        req.session.user = {
            id : Math.random()
        };
    }

    res.json({
        title: 'you are now egergrefgerlogged in',
        description: 'you are now egergrefgerlogged in',
        volumes: '1',
        score: '1'
    });
});

const server = app.listen(8081, () => {
    console.log('Listening on port %s', server.address().port)
})