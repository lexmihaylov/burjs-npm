define(
[
    'libs/kage'
],
function(kage) {
    var $(name) = kage.Class({
        extends: kage.Model,
        _construct: function() {
            $(name)._super(this);
        }
    });
    
    return $(name);
});
