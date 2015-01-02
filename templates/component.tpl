define([
    'bur',
    'components/BaseComponent'
],
function(
        bur,
        BaseComponent
) {
    var $(name) = bur.Class({
        extends: BaseComponent,
        _construct: function () {
            $(name)._super(this);
        }
    });
    
    return $(name);
});

