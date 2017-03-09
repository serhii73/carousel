(function ( $ ) {
    $.fn.rightUIEl = function() {
        this.click(function () {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
            };
        });
    };
}( jQuery ));
(function ( $ ) {
    $.fn.leftUIEl = function() {
        this.click(function () {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
            };
        });
    };
}( jQuery ));
