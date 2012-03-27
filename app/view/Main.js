Ext.define("Sencha.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',

        // Ensure we require our split view
        'Sencha.view.SplitView'
    ],

    config: {
        tabBarPosition: 'bottom',

        items: [
    {
        xtype: 'splitview',
        title: 'SplitView',

        // This is the custom config we created in Splitview
        store: 'Items'
    },
            {
                title: 'Two',
                iconCls: 'action',
                html: 'Some HTML.'
            }
        ]
    }
});
