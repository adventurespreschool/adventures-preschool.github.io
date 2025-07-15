// Custom JavaScript for Adventures Preschool
$(document).ready(function() {
    // Fix for slick animation if it's not defined
    if (typeof $.fn.slickAnimation === 'undefined') {
        $.fn.slickAnimation = function() {
            return this;
        };
    }
});