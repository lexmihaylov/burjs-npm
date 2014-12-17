define(['kage'], function(kage) {

    /**
     * BaseComponent shoud be extended by all application component
     * @class BaseComponent
     */
    var BaseComponent = kage.Class({
        extends: kage.Component,
        _construct: function(tag) {
            BaseComponent._super(this, [tag]);
        }
    });

    return BaseComponent;
});