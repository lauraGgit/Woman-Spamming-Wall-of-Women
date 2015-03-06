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
                    field: oItem['gsx$field']['$t'],
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
            //console.log(person);
            var womanView = new WomanView({model:woman});
            this.$el.append(womanView.render().el);
        },this);
        // apend the element to body if not exists
        $(this.$el).appendTo('#content');
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
        //console.log(this.model)
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
    //console.log("hey you're hovering!");
    },
    mouseoutCard: function(event) {
        $(event.currentTarget).removeClass('hover');
        $(event.currentTarget).children('.slide-up').hide();
    }

});

var modelwoman = new Woman();
var viewwoman = new WomanView({model : modelwoman});





//Initialize Views
womenCall = new Women();
womenCall.fetch()
            .fail(function() {
                debugger;
                //console.log("fail");
            })
            .done(function() {
                /* on successfully loading the data, create a new instance of the main layout view,
                    and feed the model into it. */
                //var layout = new module.GardenLayoutView({model: baseModel});
                /* show the layout in the region we created at the top of this file */
                //app.appRegion.show(layout);
                var womensCollection = new WomanCollection(womenCall.get('dataset'));
                womensCollection.reset(womensCollection.shuffle(), {silent:true});
                //initCollection = womensCollection.first(5);
                //console.log(womensCollection.first(5));
                var wv = new womenView ({collection: womensCollection});
                wv.render();
            });

