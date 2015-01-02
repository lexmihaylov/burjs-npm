define(
[
    'bur'
],
function(kage) {
    var $(name) = bur.Class({
        extends: bur.Model,
        _construct: function() {
            $(name)._super(this);
        }
    });
    
    return $(name);
});
