/*
This file is used to add some default seed data to the database when the app is initially
setup. Normally this module would be ran from something like a grunt task so that it only
runs once.
*/

var models = require("./models");
var User = models.User;
var Note = models.Note;
var Category = models.Category;
var encrypt = require("./encrypt");

module.exports = {
  seed: function() {
    models.sequelize.sync().on("success", function() {

    // User seeds
    User.findOrCreate({
      "username": "zeldman",
      "name": "Saran Ahluwalia",
      "bio": "Designer, Software Engineer, Learner.",
      "twitter_handle": "@sahluwalia",
      "site": "zeldman.com"
    });

    User.findOrCreate({
      "username": "ndanielsen",
      "name": "Nathan Danielsen",
      "bio": "I am an aspiring full stack data scientist",
      "twitter_handle": "@ndanielsen",
      "site": "somesite.com/nathandanielsen"
    });

    User.findOrCreate({
      "username": "necaris",
      "name": "Rami Chowdhury",
      "bio": "Pythonista and Full Stack Dev at Continuum",
      "twitter_handle": "@meyerweb",
      "site": "continuum.com"
    });

    User.findOrCreate({
      "username": "PG",
      "name": "Prashant Gangadharan",
      "bio": "Technology Manager @ Wynyard Group USA",
      "twitter_handle": "@pgangadharan",
      "site": "wynyardgroup.com"
    });

    User.findOrCreate({
      "username": "clopez",
      "name": "Claudia Lopez",
      "bio": "Aspiring physician",
      "twitter_handle": "@claudialopez",
      "site": ""
    });

    User.findOrCreate({
      "username": "Lnunes",
      "name": "Lauriston Nunes",
      "bio": "Bio sections always intimidate me. I can never think of anything to say that will achieve that awe inspiring effect I want it to have.",
      "twitter_handle": "@lnunes",
      "site": "lnunes.com"
    });

    User.findOrCreate({
      "username": "jharms",
      "name": "John Harms",
      "bio": "GWU grad, solutions consultant at Wynyard",
      "twitter_handle": "@jharms",
      "site": "jharms.com"}).success(function(user){

    // Note Types
    Category.findOrCreate({"name": "Testing", "icon": "tumblr"});
    Category.findOrCreate({"name": "Personal Note", "icon": "pencil"});
    Category.findOrCreate({"name": "Bash", "icon": "terminal"});
    Category.findOrCreate({"name": "Idea", "icon": "lightbulb"});
    Category.findOrCreate({"name": "Use with Caution","icon": "warning"});
    Category.findOrCreate({"name": "Question", "icon": "question"}).success(function(type){

        // Create notes for the Question note type
        Note.findOrCreate({
          "UserId": user.id,
          "CategoryId": type.id,
          "link" : "",
          "description" : "Clarify the confusion between Service the term and `service` the angular method and to explain the 5 different Service recipes in Angular.",
          "title" : "Service Service? Really Angular?","content": "There are 5 Recipes used to create a Service. One of those *was* unfortunately named, Service. So yes, amongst its fellow peers such as Provider Service and Factory Service, there is in fact a Service Service.",
          "icon" : "question"
        });

        Note.findOrCreate({
          "UserId": user.id,
          "CategoryId": type.id, "link" : "",
          "description" : "QUESTIONABLE DESCRIPTION GOES HERE",
          "title" : "TEST TEST TEST",
          "content": "QUESTIONABLE CONTENT GOES HERE",
          "icon" : "question"
        });

        Note.findOrCreate({
          "UserId": user.id,
          "CategoryId": type.id,
          "link" : "",
          "description" : "Define Service",
          "title" : "What is a Service",
          "content": "Service: Angular services are objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app.",
          "icon" : "question"
        });

        Note.findOrCreate({
          "UserId": user.id,
          "CategoryId": type.id,
          "description" : "Steps for Creating a Service",
          "title" : "How do you create a Service?",
          "content": "You can register a service to our Angular module `app` with a one of the following 5 recipes:\
            \n 	- **factory** \
            \n 	- **provider** \
            \n 	- **service** \
            \n 	- **value** \
            \n 	- **constant** \
            ",
          "icon" : "question"
        });

      }); // Closing Question Category
    });

    User.findOrCreate({
      "username": "ItsThrillhouse",
      "name": "Jason Millhouse",
      "bio": "Course builder. Aspiring writer. Comp Sci guy. Teacher. Sweetfiend. Corgi lover. Gamer who doesn't. Pro Series host. Voice of the UCF Marching Knights. Dork.",
      "twitter_handle": "@ItsThrillhouse",
      "site": ""
    }).success(function(user){

      Category.findOrCreate({
        "name": "Best Practice",
        "icon": "thumbs up outline"
      }).success(function(type){

        // Create notes for the Best Practice note type
        Note.findOrCreate({
          "UserId": user.id,
          "CategoryId": type.id,
          "link" :"https://www.youtube.com/watch?feature=player_detailpage&v=ZhfUv0spHCY#t=1870",
          "description": "NgModel Best Practice",
          "content" : "Always use dot syntax when using NgModel! Treat Scope as read-only in templates & write-only in controllers. The purpose of the scope is to refer to the model, not be the model. The model is your javascript objects. When doing bidirectional binding with ngModel make sure you don't bind directly to the scope properties. This will cause unexpected behavior in the child scopes.",
          "title" : "NgModel BP",
          "icon" : "basic info"
        });
      });
    });


    User.findOrCreate({
     "username": "AlyssaNicoll",
     "password": encrypt.encryptPassword('secret').encryptedPassword,
     "name": "Alyssa Nicoll",
     "bio": "Code School Teacher. Angular Lover. Scuba Diver.",
     "twitter_handle": "@AlyssaNicoll",
     "site": "alyssa.io"
    }).success(function(user){

      Category.findOrCreate({"name": "Code Snippet", "icon": "code"}).success(function(type){
       // Create notes for the Code Snippet note type

       Note.findOrCreate({
         "UserId": user.id,
         "CategoryId": type.id,
         "link" : "",
         "description" : "Link has *pre* & *post* functions. **Anything that manipulates the DOM goes here!**",
         "title" : "Link",
         "content" : "\
          \n`link: function(scope, element) {\
            \nscope.body = $sce.trustAsHtml(markdown.toHTML(scope.body));\
          \n}`\ ",
         "icon" : "question"
       });

       Note.findOrCreate({
         "UserId": user.id,
         "CategoryId": type.id,
         "link" : "https://docs.angularjs.org/api/ng#directive",
         "description" : "Markers on a **DOM element** that tell AngularJS's HTML compiler `$compile` to attach a specified behavior to that DOM element.",
         "title" : "Directives",
         "icon" : "code",
         "content": "Markers on a **DOM element**"
       });
      });

    });

   });
 }
};
