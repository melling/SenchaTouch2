//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'Sencha',

    views: ['Main'],
    models: ['Item'],
    stores: ['Items'],

    launch: function() {
        // Initialize the main view
        Ext.Viewport.add(Ext.create('Sencha.view.Main'));
    }
});
