Ext.define('Sencha.view.SplitView', {
    extend: 'Ext.Container',
    xtype: 'splitview',

        config: {
            /**
             * We create a custom config called store here so we can pass the store from this component
             * (SplitView) down into the nested list when it updates. Checkout {@link #updateStore}
             * @type {Ext.data.Store}
             */
            store: null
        },

    initialize: function() {
        // When we initialize the Splitview component, we want to add two items:

        // Firstly the detail container. It will container the detailCard for the nested list
        this.detailContainer = Ext.create('Ext.Container', {
            cls: 'detail-container'
        });

        // And then the nested list.
        this.nestedList = Ext.create('Ext.NestedList', {
            // Dock it to the left of the Splitview component and give it a fixed width
            docked: 'left',
            width: 300,

            // Set the store of this nested list to the store config of this component (Splitview)
            store: this.getStore(),

            // Tell the nested list to have a detail card and put it inside our new detailContinaer
            detailCard: true,
            detailContainer: this.detailContainer,

            // And finally add a listener so we know when to update the detail card
            listeners: {
                scope: this,
                leafitemtap: this.onLeafItemTap
            }
        });

        // Then we add these two new items into the splitview.
        this.setItems([this.detailContainer, this.nestedList]);
    },

    /**
     * This is called when the {@link #store} config has been updated.
     * We simply check if the nested list has been created, and if it has, set the store
     * on it with the new value.
     */
    updateStore: function(newStore) {
        if (this.nestedList) {
            this.nestedList.setStore(newStore);
        }
    },

        /**
         * This is called when a leaf item is tapped in the nested list, or when the detail card
         * should be updated. In here, we just get the record which was tapped and then set the HTML
         * of the detail card.
         */
        onLeafItemTap: function(nestedList, list, index, node, record, e) {
            var detailCard = nestedList.getDetailCard();
            detailCard.setHtml(record.get('text'));
        }
});
