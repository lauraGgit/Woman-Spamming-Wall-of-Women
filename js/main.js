//Woman Model for WomenCollections
var Woman = Backbone.Model.extend({
    defaults: {
        name: 'Shero',
        id : 'file',
        field: 'field',
        accomplishments: 'All the Things',
        rating: 1000,
        wiki: 'link',
        funfact: '',
        imgUrl: 'http://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Wendy_Davis_2013.jpeg/220px-Wendy_Davis_2013.jpeg'

    },

    initialize : function(){
        this.on("invalid",function(model,error){
            alert(error);
        });
    }

});// End Woman Model

var spreadsheetKey = '1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU'; // a sample spreadsheet in google docs
var spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/{{KEY}}/od6/public/values?alt=json-in-script&callback=?';
 

var Women = Backbone.Model.extend({
    //model: Woman,
    url: spreadsheetURL.split('{{KEY}}').join(spreadsheetKey),
parse: function(data) {
            var parsedArray = [];
 
            /* use Underscore to iterate through each item in the feed,
                and pull out the necessary fields and put them in an
                array of anonymous objects which will be returned
                as the main model for this application */
            _.each(data.feed.entry,function(oItem) {
                parsedArray.push({
                    id: oItem['id']['$t'],
                    name: oItem['gsx$name']['$t'],
                    field: oItem['gsx$field']['$t'].split(', '),
                    accomplishments: oItem['gsx$thingsshesdone']['$t'],
                    rating: parseInt(oItem['gsx$arbitaryratingofbadassery']['$t'], 10),
                    wiki: oItem['gsx$wikipage']['$t'],
                    funfact: oItem['gsx$funfact']['$t'],
                    imgUrl: oItem['gsx$imageforvisualizationpurposes']['$t']
                });
            });
            return ({dataset:parsedArray});
        }
   });

var WomanCollection = Backbone.Collection.extend({
    model: Woman
});

//Create the lst of women
var womenView = Backbone.View.extend({
    tagName: 'ul',
    className: 'women-list',
    render: function(){
        //filter through all the items in a collections
        //for each, create a new PersonView
        //append it to root element
        this.collection.each(function(woman){
            var womanView = new WomanView({model:woman});
            this.$el.append($(womanView.render().el).hide().fadeIn("2000"));
        },this);
        // apend the element to body if not exists
        $(this.$el).appendTo('#content');

        var app_view = new fieldLinkClick({
                  el: '.field-link',
                  collection: this.options.fc,
                  });
    }
});

// The view for a Woman
var WomanView = Backbone.View.extend({
    tagName : 'li',
    className : 'woman col-md-4',
    id : 'woman-id',
    template: _.template( $('#womanTemplate').html() ),
    initialize : function(){
        _.bindAll(this,'render');
        this.render();
    },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'mouseover': 'mouseovercard',
        'mouseout' : 'mouseoutCard'
    },
    mouseovercard: function(event) {
    $(event.currentTarget).addClass('hover');
    $(event.currentTarget).children('.slide-up').show();
    },
    mouseoutCard: function(event) {
        $(event.currentTarget).removeClass('hover');
        $(event.currentTarget).children('.slide-up').hide();
    }

});

//Additional Women
var womenAddView = Backbone.View.extend({

    render: function(){
        console.log("womenAddView");
        clone = _.clone(this.collection);
        //clone2 = _.clone(this.collection);
        clone.reset(clone.rest(this.options.lm), {silent:true});
        clone.reset(clone.first(9), {silent:true});
        //console.log(clone2.toJSON());
        clone.each(function(woman){
            var womanView = new WomanView({model:woman});
            $('.women-list').append($(womanView.render().el).hide().fadeIn("2000"));
        },this);
                var app_view = new fieldLinkClick({
                  el: '.field-link',
                  collection: this.collection,
                  });
    }
});


//Filter from Field
var filteredView = Backbone.View.extend({
    render: function(){
        $('.women-list').fadeOut("2000").delay("2000").remove();
        filt = this.options.filter;
        //Clone Collection
        filtCol = _.clone(this.collection);
        //Filter Clone on field
        filtCol.reset(filtCol.filter(function(wom){ return ($.inArray(filt, wom.get('field'))) > -1;}));
        //console.log(filtCol.length);
        //Render New List
        filterWomen = new womenView ({collection: filtCol, fc: this.collection});
        filterWomen.render();

    }
});

var fieldLinkClick = Backbone.View.extend({
    events: {
              'click': 'resort'
          },
          resort: function(ev){
            $( ".field-link").unbind( "click" );
            reload = true;
            wMFlow = false;
            ev.preventDefault();
            currFilter = $(ev.currentTarget).data('filter');
              var filterView = new filteredView({filter: currFilter, collection: this.collection});
              filterView.render();
              //alert("clickit or ticket");

          }

});

var allClick = Backbone.View.extend({
    events: {
              'click': 'rebuild'
          },
          rebuild: function(ev){
            ev.preventDefault();
            if (reload === true){
                wMFlow = true;

            $('.women-list').fadeOut("2000").delay("2000").remove();
               loadmore = 9;

               console.log("reset loadmore");
               var cv = new womenView ({collection: initCollection});
             cv.render();
            }
            //
            
              
              //alert("clickit or ticket");

          }

});





//Initialize Views
var loadmore = 9;
var wMFlow = true;
womenCall = new Women();
womenCall.fetch()
            .fail(function() {
                debugger;
                //console.log("fail");
            })
            .done(function() {

                var womensCollection = new WomanCollection(womenCall.get('dataset'));
                womensCollection.reset(womensCollection.shuffle(), {silent:true});
                initCollection = _.clone(womensCollection);
                initCollection.reset(initCollection.first(loadmore), {silent:true});
                var wv = new womenView ({collection: initCollection, fc: womensCollection});
                wv.render();
                // Add more on scroll
                $(window).scroll(function() {
                       if($(window).scrollTop() + $(window).height() == $(document).height()) {
                        if (loadmore < (womensCollection.length)) {
                        //socket.emit('get older posts', skipNum);
                        //skipNum += 10;
                        console.log("scroll");
                        //Add new women
                        if(wMFlow){               
                        var moreWomen = new womenAddView ({collection: womensCollection, lm: loadmore});
                         moreWomen.render();
                        loadmore += 9;
                        }

                    }
                       }
                    });// End Scroll

                // Filtering
                 // var app_view = new fieldLinkClick({
                 // el: '.field-link',
                 // collection: womensCollection,
                 // });

                var all_view = new allClick({
                el: '#all',
                collection: womensCollection
                });
                
            });

