//Call Woman Collection
//Woman Model
var Woman = Backbone.Model.extend({
    defaults : {
        id : {'$t': ''},
        gsx$name : {'$t': ''},
        gsx$field: {'$t': ''},
        gsx$thingsshesdone: {'$t': ''},
        gsx$arbitaryratingofbadassery: {'$t': ''},
        gsx$wikipage: {'$t': ''},
        gsx$funfact: {'$t': ''},
        gsx$imageforvisualizationpurposes: {'$t': ''}

    }
});
//Collection
var WomanCollection = Backbone.Collection.extend({
  model: Woman
  //url: '//spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values?alt=json-in-script',
  // url: 'path/data.json',
  //   parse: function(response){
  //      return response;
  //   }

});

//View
        var WomanView = Backbone.View.extend({
            tagName: 'ul',

            render: function() {
                //filter through all items in a collection
                this.collection.each(function(woman){
                    var womanView = new WomanView({model: Woman});
                    this.$el.append(womanView.render().el);
                    console.log(woman);
                }, this);

                return this;
            }
        });

        var WomanView = Backbone.View.extend({
            tagName: 'li',

            template: _.template($('#womanTemplate').html()),

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

//Woman Collection
var womanCollection = new WomanCollection([
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cokwr"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Wendy Davis"
        },
        "content": {
          "type": "text",
          "$t": "field: Politics, thingsshesdone: Texas State Senator, Democratic Nominee for Governor of Texas, arbitaryratingofbadassery: 100, wikipage: http://en.wikipedia.org/wiki/Wendy_Davis_(politician), imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Wendy_Davis_2013.jpeg/220px-Wendy_Davis_2013.jpeg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cokwr"
          }
        ],
        "gsx$name": {
          "$t": "Wendy Davis"
        },
        "gsx$field": {
          "$t": "Politics"
        },
        "gsx$thingsshesdone": {
          "$t": "Texas State Senator, Democratic Nominee for Governor of Texas"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "100"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Wendy_Davis_(politician)"
        },
        "gsx$funfact": {
          "$t": ""
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Wendy_Davis_2013.jpeg/220px-Wendy_Davis_2013.jpeg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cpzh4"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Peggy Hamberg"
        },
        "content": {
          "type": "text",
          "$t": "field: Health, Obama Administration, thingsshesdone: FDA Commissioner, NYC Health Commissioner, arbitaryratingofbadassery: 86, wikipage: http://en.wikipedia.org/wiki/Margaret_Hamburg, funfact: When her child was born, she was list in two places on her birth certificate- as mother and commissioner, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Margaret_Hamburg_official_portrait.jpg/220px-Margaret_Hamburg_official_portrait.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cpzh4"
          }
        ],
        "gsx$name": {
          "$t": "Peggy Hamberg"
        },
        "gsx$field": {
          "$t": "Health, Obama Administration"
        },
        "gsx$thingsshesdone": {
          "$t": "FDA Commissioner, NYC Health Commissioner"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "86"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Margaret_Hamburg"
        },
        "gsx$funfact": {
          "$t": "When her child was born, she was list in two places on her birth certificate- as mother and commissioner"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Margaret_Hamburg_official_portrait.jpg/220px-Margaret_Hamburg_official_portrait.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cre1l"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Megan Smith"
        },
        "content": {
          "type": "text",
          "$t": "field: Tech, Obama Administration, thingsshesdone: Head of Google X, U.S. Chief Technology Officer, arbitaryratingofbadassery: 625, wikipage: http://en.wikipedia.org/wiki/File:Megan_Smith.jpg, funfact: She was building touch screens over 20 years ago, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Megan_Smith.jpg/220px-Megan_Smith.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cre1l"
          }
        ],
        "gsx$name": {
          "$t": "Megan Smith"
        },
        "gsx$field": {
          "$t": "Tech, Obama Administration"
        },
        "gsx$thingsshesdone": {
          "$t": "Head of Google X, U.S. Chief Technology Officer"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "625"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/File:Megan_Smith.jpg"
        },
        "gsx$funfact": {
          "$t": "She was building touch screens over 20 years ago"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Megan_Smith.jpg/220px-Megan_Smith.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/chk2m"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Alice Paul"
        },
        "content": {
          "type": "text",
          "$t": "field: Politics, Women's Rights, thingsshesdone: Suffragist, arbitaryratingofbadassery: 75, wikipage: http://en.wikipedia.org/wiki/Alice_Paul, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Alice_Paul1915.jpg/275px-Alice_Paul1915.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/chk2m"
          }
        ],
        "gsx$name": {
          "$t": "Alice Paul"
        },
        "gsx$field": {
          "$t": "Politics, Women's Rights"
        },
        "gsx$thingsshesdone": {
          "$t": "Suffragist"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "75"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Alice_Paul"
        },
        "gsx$funfact": {
          "$t": ""
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Alice_Paul1915.jpg/275px-Alice_Paul1915.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/ciyn3"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Sacagawea"
        },
        "content": {
          "type": "text",
          "$t": "field: Explorer , thingsshesdone: Led Lewis and Clark through the American West, arbitaryratingofbadassery: 800, wikipage: http://en.wikipedia.org/wiki/Sacagawea, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sakakawea-statue-bismarck-nd-2004.jpg/220px-Sakakawea-statue-bismarck-nd-2004.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/ciyn3"
          }
        ],
        "gsx$name": {
          "$t": "Sacagawea"
        },
        "gsx$field": {
          "$t": "Explorer "
        },
        "gsx$thingsshesdone": {
          "$t": "Led Lewis and Clark through the American West"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "800"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Sacagawea"
        },
        "gsx$funfact": {
          "$t": ""
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sakakawea-statue-bismarck-nd-2004.jpg/220px-Sakakawea-statue-bismarck-nd-2004.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/ckd7g"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Grace Hopper"
        },
        "content": {
          "type": "text",
          "$t": "field: Computer Science, thingsshesdone: Naval Rear Admiral, Develped COBOL programing language, arbitaryratingofbadassery: 92, wikipage: http://en.wikipedia.org/wiki/Grace_Hopper, funfact: She gave a great David Letterman interview in the 1980s on the nanosecond: https://www.youtube.com/watch?v\u003d1-vcErOPofQ, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/220px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/ckd7g"
          }
        ],
        "gsx$name": {
          "$t": "Grace Hopper"
        },
        "gsx$field": {
          "$t": "Computer Science"
        },
        "gsx$thingsshesdone": {
          "$t": "Naval Rear Admiral, Develped COBOL programing language"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "92"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Grace_Hopper"
        },
        "gsx$funfact": {
          "$t": "She gave a great David Letterman interview in the 1980s on the nanosecond: https://www.youtube.com/watch?v\u003d1-vcErOPofQ"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/220px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/clrrx"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Betty Friedan"
        },
        "content": {
          "type": "text",
          "$t": "field: Women's Rights, thingsshesdone: Writer of the Feminine Mystique, arbitaryratingofbadassery: 72, wikipage: http://en.wikipedia.org/wiki/Betty_Friedan, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Betty_Friedan_1960.jpg/220px-Betty_Friedan_1960.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/clrrx"
          }
        ],
        "gsx$name": {
          "$t": "Betty Friedan"
        },
        "gsx$field": {
          "$t": "Women's Rights"
        },
        "gsx$thingsshesdone": {
          "$t": "Writer of the Feminine Mystique"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "72"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Betty_Friedan"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Betty_Friedan_1960.jpg/220px-Betty_Friedan_1960.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cyevm"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Gloria Steinem"
        },
        "content": {
          "type": "text",
          "$t": "field: Publishing, Media, Women's Rights, thingsshesdone: Founder of Ms. Magazine, New York Magazine Columnist, arbitaryratingofbadassery: 94, wikipage: http://en.wikipedia.org/wiki/Gloria_Steinem, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/G_steinem_2011.jpg/300px-G_steinem_2011.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cyevm"
          }
        ],
        "gsx$name": {
          "$t": "Gloria Steinem"
        },
        "gsx$field": {
          "$t": "Publishing, Media, Women's Rights"
        },
        "gsx$thingsshesdone": {
          "$t": "Founder of Ms. Magazine, New York Magazine Columnist"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "94"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Gloria_Steinem"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/G_steinem_2011.jpg/300px-G_steinem_2011.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cztg3"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Shirley Chisholm"
        },
        "content": {
          "type": "text",
          "$t": "field: Politics, thingsshesdone: U.S. Congresswoman, NY, Presidential Candidate , arbitaryratingofbadassery: 400, wikipage: http://en.wikipedia.org/wiki/Shirley_Chisholm, funfact: 1st African American Congress Woman, Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Shirley_Chisholm.jpg/220px-Shirley_Chisholm.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cztg3"
          }
        ],
        "gsx$name": {
          "$t": "Shirley Chisholm"
        },
        "gsx$field": {
          "$t": "Politics"
        },
        "gsx$thingsshesdone": {
          "$t": "U.S. Congresswoman, NY, Presidential Candidate "
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "400"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Shirley_Chisholm"
        },
        "gsx$funfact": {
          "$t": "1st African American Congress Woman, Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Shirley_Chisholm.jpg/220px-Shirley_Chisholm.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d180g"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Sojouner Truth"
        },
        "content": {
          "type": "text",
          "$t": "field: Abolitionist, thingsshesdone: Performed \"Ain't I a Woman?\" speak, arbitaryratingofbadassery: 590, wikipage: http://en.wikipedia.org/wiki/Sojourner_Truth, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sojourner_truth_c1870.jpg/220px-Sojourner_truth_c1870.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d180g"
          }
        ],
        "gsx$name": {
          "$t": "Sojouner Truth"
        },
        "gsx$field": {
          "$t": "Abolitionist"
        },
        "gsx$thingsshesdone": {
          "$t": "Performed \"Ain't I a Woman?\" speak"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "590"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Sojourner_Truth"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sojourner_truth_c1870.jpg/220px-Sojourner_truth_c1870.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d2mkx"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Rachel Carson"
        },
        "content": {
          "type": "text",
          "$t": "field: Environmentalist, thingsshesdone: Wrote Silent Spring, U.S. Burea of Fisheries Aquatic Biologist, arbitaryratingofbadassery: 300, wikipage: http://en.wikipedia.org/wiki/Rachel_Carson, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Rachel-Carson.jpg/200px-Rachel-Carson.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d2mkx"
          }
        ],
        "gsx$name": {
          "$t": "Rachel Carson"
        },
        "gsx$field": {
          "$t": "Environmentalist"
        },
        "gsx$thingsshesdone": {
          "$t": "Wrote Silent Spring, U.S. Burea of Fisheries Aquatic Biologist"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "300"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Rachel_Carson"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Rachel-Carson.jpg/200px-Rachel-Carson.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cssly"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Rosa Parks"
        },
        "content": {
          "type": "text",
          "$t": "field: Civil Rights, thingsshesdone: Resisted segregationist busing policies, arbitaryratingofbadassery: 499, wikipage: http://en.wikipedia.org/wiki/Rosa_Parks, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosaparks.jpg/220px-Rosaparks.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cssly"
          }
        ],
        "gsx$name": {
          "$t": "Rosa Parks"
        },
        "gsx$field": {
          "$t": "Civil Rights"
        },
        "gsx$thingsshesdone": {
          "$t": "Resisted segregationist busing policies"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "499"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Rosa_Parks"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosaparks.jpg/220px-Rosaparks.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cu76f"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Barbara Jordan"
        },
        "content": {
          "type": "text",
          "$t": "field: Civil Rights, Politics, thingsshesdone: Texas State Senator, arbitaryratingofbadassery: 100, wikipage: http://en.wikipedia.org/wiki/Barbara_Jordan, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rep._Barbara_Jordan.jpg/220px-Rep._Barbara_Jordan.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cu76f"
          }
        ],
        "gsx$name": {
          "$t": "Barbara Jordan"
        },
        "gsx$field": {
          "$t": "Civil Rights, Politics"
        },
        "gsx$thingsshesdone": {
          "$t": "Texas State Senator"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": "100"
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Barbara_Jordan"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rep._Barbara_Jordan.jpg/220px-Rep._Barbara_Jordan.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cvlqs"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Margaret Sanger"
        },
        "content": {
          "type": "text",
          "$t": "field: Women's Rights, Women's Reproductive Rights, thingsshesdone: Founder of American Birth Control League, wikipage: http://en.wikipedia.org/wiki/Margaret_Sanger, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/MargaretSanger-Underwood.LOC.jpg/220px-MargaretSanger-Underwood.LOC.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cvlqs"
          }
        ],
        "gsx$name": {
          "$t": "Margaret Sanger"
        },
        "gsx$field": {
          "$t": "Women's Rights, Women's Reproductive Rights"
        },
        "gsx$thingsshesdone": {
          "$t": "Founder of American Birth Control League"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Margaret_Sanger"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/MargaretSanger-Underwood.LOC.jpg/220px-MargaretSanger-Underwood.LOC.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cx0b9"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Patsy Mink"
        },
        "content": {
          "type": "text",
          "$t": "field: Politics, thingsshesdone: U.S Congresswoman, Hawaii, wikipage: http://en.wikipedia.org/wiki/Patsy_Mink, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Patsymink.jpg/200px-Patsymink.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/cx0b9"
          }
        ],
        "gsx$name": {
          "$t": "Patsy Mink"
        },
        "gsx$field": {
          "$t": "Politics"
        },
        "gsx$thingsshesdone": {
          "$t": "U.S Congresswoman, Hawaii"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Patsy_Mink"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Patsymink.jpg/200px-Patsymink.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d9ney"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Clara Barton"
        },
        "content": {
          "type": "text",
          "$t": "field: Nurse, thingsshesdone: Founder of American Red Cross, wikipage: http://en.wikipedia.org/wiki/Clara_Barton, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Clara_Barton_1904.jpg/220px-Clara_Barton_1904.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d9ney"
          }
        ],
        "gsx$name": {
          "$t": "Clara Barton"
        },
        "gsx$field": {
          "$t": "Nurse"
        },
        "gsx$thingsshesdone": {
          "$t": "Founder of American Red Cross"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Clara_Barton"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Clara_Barton_1904.jpg/220px-Clara_Barton_1904.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/db1zf"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Harriet Tubman"
        },
        "content": {
          "type": "text",
          "$t": "field: Abolitionist, thingsshesdone: Founder of Underground Railroad, Union Spy, wikipage: http://en.wikipedia.org/wiki/Harriet_Tubman, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Frances_Perkins_cph.3a04983.jpg/220px-Frances_Perkins_cph.3a04983.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/db1zf"
          }
        ],
        "gsx$name": {
          "$t": "Harriet Tubman"
        },
        "gsx$field": {
          "$t": "Abolitionist"
        },
        "gsx$thingsshesdone": {
          "$t": "Founder of Underground Railroad, Union Spy"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Harriet_Tubman"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Frances_Perkins_cph.3a04983.jpg/220px-Frances_Perkins_cph.3a04983.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/dcgjs"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Frances Perkins"
        },
        "content": {
          "type": "text",
          "$t": "field: Consumer Advocate, Labor Activist, thingsshesdone: U.S. Secretary of Labor, wikipage: http://en.wikipedia.org/wiki/Frances_Perkins, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Frances_Perkins_cph.3a04983.jpg/220px-Frances_Perkins_cph.3a04983.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/dcgjs"
          }
        ],
        "gsx$name": {
          "$t": "Frances Perkins"
        },
        "gsx$field": {
          "$t": "Consumer Advocate, Labor Activist"
        },
        "gsx$thingsshesdone": {
          "$t": "U.S. Secretary of Labor"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Frances_Perkins"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Frances_Perkins_cph.3a04983.jpg/220px-Frances_Perkins_cph.3a04983.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/ddv49"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Susan B. Anthony"
        },
        "content": {
          "type": "text",
          "$t": "field: Feminist, Suffragist, Abolitionist, thingsshesdone: Founder of Women's Loyal National League, State Agent for the American Anti-Slavery Society, wikipage: http://en.wikipedia.org/wiki/Susan_B._Anthony, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Susan_B_Anthony_c1855.png/220px-Susan_B_Anthony_c1855.png"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/ddv49"
          }
        ],
        "gsx$name": {
          "$t": "Susan B. Anthony"
        },
        "gsx$field": {
          "$t": "Feminist, Suffragist, Abolitionist"
        },
        "gsx$thingsshesdone": {
          "$t": "Founder of Women's Loyal National League, State Agent for the American Anti-Slavery Society"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Susan_B._Anthony"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Susan_B_Anthony_c1855.png/220px-Susan_B_Anthony_c1855.png"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d415a"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Eleanor Roosevelt"
        },
        "content": {
          "type": "text",
          "$t": "wikipage: http://en.wikipedia.org/wiki/Eleanor_Roosevelt, funfact: Woman on 20s Candidate, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/0/06/Anna_Eleanor_Roosevelt.png"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d415a"
          }
        ],
        "gsx$name": {
          "$t": "Eleanor Roosevelt"
        },
        "gsx$field": {
          "$t": ""
        },
        "gsx$thingsshesdone": {
          "$t": ""
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Eleanor_Roosevelt"
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/0/06/Anna_Eleanor_Roosevelt.png"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d5fpr"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Elizabeth Cady Stanton"
        },
        "content": {
          "type": "text",
          "$t": "funfact: Woman on 20s Candidate"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d5fpr"
          }
        ],
        "gsx$name": {
          "$t": "Elizabeth Cady Stanton"
        },
        "gsx$field": {
          "$t": ""
        },
        "gsx$thingsshesdone": {
          "$t": ""
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": ""
        },
        "gsx$funfact": {
          "$t": "Woman on 20s Candidate"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": ""
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d6ua4"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Condoleezza Rice"
        },
        "content": {
          "type": "text",
          "$t": "field: National Defense, thingsshesdone: National Security Advisor, Secretary of State, wikipage: http://en.wikipedia.org/wiki/Condoleezza_Rice, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Condoleezza_Rice_cropped.jpg/220px-Condoleezza_Rice_cropped.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d6ua4"
          }
        ],
        "gsx$name": {
          "$t": "Condoleezza Rice"
        },
        "gsx$field": {
          "$t": "National Defense"
        },
        "gsx$thingsshesdone": {
          "$t": "National Security Advisor, Secretary of State"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Condoleezza_Rice"
        },
        "gsx$funfact": {
          "$t": ""
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Condoleezza_Rice_cropped.jpg/220px-Condoleezza_Rice_cropped.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d88ul"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Marissa Mayer"
        },
        "content": {
          "type": "text",
          "$t": "field: Tech, thingsshesdone: CEO of Yahoo!, wikipage: http://en.wikipedia.org/wiki/Marissa_Mayer, imageforvisualizationpurposes: http://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Marissa_Mayer_May_2014_%28cropped%29.jpg/220px-Marissa_Mayer_May_2014_%28cropped%29.jpg"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/d88ul"
          }
        ],
        "gsx$name": {
          "$t": "Marissa Mayer"
        },
        "gsx$field": {
          "$t": "Tech"
        },
        "gsx$thingsshesdone": {
          "$t": "CEO of Yahoo!"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": "http://en.wikipedia.org/wiki/Marissa_Mayer"
        },
        "gsx$funfact": {
          "$t": ""
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Marissa_Mayer_May_2014_%28cropped%29.jpg/220px-Marissa_Mayer_May_2014_%28cropped%29.jpg"
        }
      },
      {
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/dkvya"
        },
        "updated": {
          "$t": "2015-03-05T07:42:02.851Z"
        },
        "category": [
          {
            "scheme": "http://schemas.google.com/spreadsheets/2006",
            "term": "http://schemas.google.com/spreadsheets/2006#list"
          }
        ],
        "title": {
          "type": "text",
          "$t": "Mary Shaw"
        },
        "content": {
          "type": "text",
          "$t": "field: Tech, Computer Science, Education, thingsshesdone: National Medal of Technology and Innovation, funfact: Developed the computer science cirrculum that most universities use today"
        },
        "link": [
          {
            "rel": "self",
            "type": "application/atom+xml",
            "href": "https://spreadsheets.google.com/feeds/list/1xLH5V66pBxx404hKcg98B1_axM0GPdnZZo8IUMmBWKU/od6/public/values/dkvya"
          }
        ],
        "gsx$name": {
          "$t": "Mary Shaw"
        },
        "gsx$field": {
          "$t": "Tech, Computer Science, Education"
        },
        "gsx$thingsshesdone": {
          "$t": "National Medal of Technology and Innovation"
        },
        "gsx$arbitaryratingofbadassery": {
          "$t": ""
        },
        "gsx$wikipage": {
          "$t": ""
        },
        "gsx$funfact": {
          "$t": "Developed the computer science cirrculum that most universities use today"
        },
        "gsx$imageforvisualizationpurposes": {
          "$t": ""
        }
      }
    ]);

var womanView = new WomanView({collection:womanCollection, model:new Woman()});
 $(document.body).append(womanView.render().el);

window.Router = Backbone.Router.extend({

    routes: {
        "": "home"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.render().el);

        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.homeView.el);
        //this.headerView.select('home-menu');
    }

});

templateLoader.load(["HomeView", "HeaderView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });