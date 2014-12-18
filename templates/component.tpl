define([
    'kage',
    'components/BaseComponent'
],
function(
        kage,
        BaseComponent
) {
    var $(name) = kage.Class({
        extends: BaseComponent,
        _construct: function () {
            $(name)._super(this);
        }
    });
    
    return $(name);
});

