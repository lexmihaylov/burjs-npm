define(['bur'], function(bur) {

    /**
     * BaseComponent shoud be extended by all application component
     * @class BaseComponent
     */
    var BaseComponent = bur.Class({
        extends: bur.Component,
        _construct: function(tag) {
            BaseComponent._super(this, [tag]);
        }
    });

    return BaseComponent;
});