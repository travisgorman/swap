import Backbone from 'backbone'
import Marionette from 'backbone-marionette'

MyModel = Backbone.Model.extend({
    urlRoot : `https://baas.kinvey.com/appdata/${settings.appKey}/assetCollection`
});

MyCollection = Backbone.Collection.extend({
    url : urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/assetCollection`,
    model : MyModel
});

MyItemView = Marionette.ItemView.extend({
    template : itemTemplate
});

MyCompositeView = Marionette.CompositeView.extend({
    template : compositeTemplate,
    className : 'table-content'
    itemView : MyItemView
});

myCollection = new MyCollection();
myCollection.fetch({
    success : function(myCollection, response, options) {
        myCompositeView = new MyCompositeView({ collection: myCollection });
        app.myRegion.show(myCompositeView);
    }
});

export default myCollection;
