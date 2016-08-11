/**
 * Watch out! This is just a speed-coded functionnal experiment.
 *
 * @package jquery.autoscale
 * @author  Marceau Casals <marceau@casals.fr>
 * @doc     https://github.com/AkibaTech/jQuery.autoscale
 */
(function($) {

    $.fn.autoscale = function(options) {

        // Plugin apply on
        var $el = $(this);

        // Wrapper of the element
        var $wrapper = $el.parent();

        // Throttle implementation
        function throttle(callback, ttr) {
            var throttling = false;
            return function () {
                if (!throttling) {
                    callback.call();
                    throttling = true;
                    setTimeout(function () {
                        throttling = false;
                    }, ttr);
                }
            }
        };

        // Apply margins on element
        var applyMargins = function() {
            var marginLeft = $el.width() / 2,
                marginTop = $el.height() / 2;

            $el.css({
                'margin-left': '-' + marginLeft + 'px',
                'margin-top': '-' + marginTop + 'px',
            });
        };

        // Calculate the scale factor
        var scaleFactor = function() {
            var scalingWidth = $wrapper.outerWidth() / $el.outerWidth(),
                scalingHeight = $wrapper.outerHeight() / $el.outerHeight();

            return Math.min(scalingWidth, scalingHeight);
        };

        // Apply the new scale factor
        var applyScale = function() {
            $el.css({
                "transform": "scale(" + scaleFactor() + ")"
            });
        };

        // Capture resize
        $(window).resize(throttle(applyScale, 100));

        // Goo!
        applyMargins();
        applyScale();
    };

}(jQuery));