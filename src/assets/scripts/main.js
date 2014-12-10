//push state
//server-side rendering vs client side rendering
//#! (hash bang), for old school browser
//routing, data storage, templates, models, views, controllers

//{{{}}} means to treat it as a string, escape characters

var portfolio=[{"id":"1","0":"1","title":"Emily Walkman","1":"Emily Walkman","profilePic":"piece1.png","2":"piece1.png"},{"id":"2","0":"2","title":"Ewaste Infographic","1":"Ewaste Infographic","profilePic":"piece3.png","2":"piece3.png"},{"id":"3","0":"3","title":"Marker","1":"Marker","profilePic":"piece4.png","2":"piece4.png"},{"id":"4","0":"4","title":"Not Far From the Tree","1":"Not Far From the Tree","profilePic":"piece2.png","2":"piece2.png"}];
var portfolioDetails=[{"id":"1","0":"1","title":"Emily Walkman","1":"Emily Walkman","profilePic":"piece1.png","2":"piece1.png","button1Link":"#","3":"#","button1Title":"Github","4":"Github","button2Title":"NA","5":"NA","button2Link":"#","6":"#","role":"Design and Developer","7":"Design and Developer","skills":"Javascript and Titanium Studio","8":"Javascript and Titanium Studio","content":"NA","9":"NA","desktopScreenshot":"http:\/\/placehold.it\/426x266","10":"http:\/\/placehold.it\/426x266","mobileScreenshot":"http:\/\/placehold.it\/95x152","11":"http:\/\/placehold.it\/95x152"},{"id":"2","0":"2","title":"Ewaste Infographic","1":"Ewaste Infographic","profilePic":"piece3.png","2":"piece3.png","button1Link":"#","3":"#","button1Title":"Github","4":"Github","button2Title":"Visit","5":"Visit","button2Link":"http:\/\/arielgelbard.com\/infographic","6":"http:\/\/arielgelbard.com\/infographic","role":"Design and Developer","7":"Design and Developer","skills":"HTML5, CSS3, Jquery","8":"HTML5, CSS3, Jquery","content":"NA","9":"NA","desktopScreenshot":"http:\/\/placehold.it\/426x266","10":"http:\/\/placehold.it\/426x266","mobileScreenshot":"http:\/\/placehold.it\/95x152","11":"http:\/\/placehold.it\/95x152"},{"id":"3","0":"3","title":"Marker","1":"Marker","profilePic":"piece4.png","2":"piece4.png","button1Link":"#","3":"#","button1Title":"Github","4":"Github","button2Title":"Visit","5":"Visit","button2Link":"http:\/\/tristandarwent.com\/portfolio-detail.php?id=5","6":"http:\/\/tristandarwent.com\/portfolio-detail.php?id=5","role":"Developer","7":"Developer","skills":"Objective C","8":"Objective C","content":"NA","9":"NA","desktopScreenshot":"http:\/\/placehold.it\/426x266","10":"http:\/\/placehold.it\/426x266","mobileScreenshot":"http:\/\/placehold.it\/95x152","11":"http:\/\/placehold.it\/95x152"},{"id":"4","0":"4","title":"Not Far From the Tree","1":"Not Far From the Tree","profilePic":"piece2.png","2":"piece2.png","button1Link":"#","3":"#","button1Title":"Github","4":"Github","button2Title":"Visit","5":"Visit","button2Link":"http:\/\/arielgelbard.com\/notfarfromthetree","6":"http:\/\/arielgelbard.com\/notfarfromthetree","role":"Development","7":"Development","skills":"HTML5, CSS3, Jquery, PHP, mySQL","8":"HTML5, CSS3, Jquery, PHP, mySQL","content":"A non-profit organization that speacalizes in picking and sharing excess fruit.","9":"A non-profit organization that speacalizes in picking and sharing excess fruit.","desktopScreenshot":"\/assets\/images\/pieces\/piece2-desktop.png","10":"\/assets\/images\/desktop-notfar.png","mobileScreenshot":"\/assets\/images\/pieces\/piece2-mobile.png","11":"images\/mobile-notfar.png"}]
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'portfolio' : 'portfolio',
      'portfolioDetail/:id' : 'portfolioDetail',
      'about': 'about',
      'contact': 'contact'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // Portfolio Route
    portfolio: function() {
      console.log('Navigating to Portfolio Page');
      App.views['portfolio'].render();
    },

    // Portfolio Detail Route
    portfolioDetail: function(id) {
      console.log('Navigating to Portfolio Detail Page');
      console.log(id);
      App.views['portfolioDetail'].render({id:id});
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      App.views['about'].render();
    },

    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      portfolio: new PortfolioView(),
      portfolioDetail: new PortfolioDetailView(),
      about: new AboutView(),
      contact: new ContactView()
    };

  };


function createView(page) {
var temp= Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#'+page,

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      var html = $(this.template).html();
      this.template = Handlebars.compile(html);
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1> '+page+' Page</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });
return temp;
}



  // -----------------------------
  // Home View
  // -----------------------------

   var HomeView = Backbone.View.extend({
   //=createView('home');

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      var html = $(this.template).html();
      this.template = Handlebars.compile(html);
      this.model = new Backbone.Model({});

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Portfolio View
  // -----------------------------

// var PortfolioView=createView('portfolio');

  var PortfolioView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#portfolio',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      var html = $(this.template).html();
      this.template = Handlebars.compile(html);
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        piece: portfolio
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);

    }

  });































  // -----------------------------
  // Portfolio View
  // -----------------------------

// var PortfolioDetailView=createView('portfolio');

  var PortfolioDetailView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#portfolioLanding',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      var html = $(this.template).html();
      this.template = Handlebars.compile(html);
      this.model = new Backbone.Model({});

    },

    // Our Render Function
    render: function(id) {
      var pPiece;

      for (piece in portfolioDetails){
        if (portfolioDetails[piece].id===id.id){
          pPiece=portfolioDetails[piece];
          break;
        }
      }

      console.log('h'+id);

      // Some page data
      this.model.set({
        title: pPiece.title,
        button1Title:pPiece.button1Title,
        button2Title:pPiece.button2Title,
        role:pPiece.role,
        content:pPiece.content,
        skills:pPiece.skills,
        mobileScreenshot:pPiece.mobileScreenshot,
        desktopScreenshot:pPiece.desktopScreenshot
      });


      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);

    }

  });

  // -----------------------------
  // About View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>About Page</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Contact View
  // -----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Contact Page</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ 
    pushState: true 
  });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  $(document).delegate('a', 'click', function(e) {
    e.preventDefault();
    App.router.navigate($(this).attr('href'), { trigger: true });

  });







});