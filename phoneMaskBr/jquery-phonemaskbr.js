/*!
 * jQuery Phone Mask Br Plugin v1.0
 *
 * code: https://github.com/uhtred/Micro-jQuery-Plugins/phoneMaskBr
 *
 * Copyright (C) 2012 Daniel França(drfranca.com.br)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Author: Daniel Ribeiro França
 */

(function($) {

    "use strict";

    $.fn.phoneMaskBr = function() {

        var rawValue,
            phoneWithMask,
            rNormalMask = /^(\d{2})(\d{0,4})(\d{0,4})?(.*)/,
            rSPMask = /^(\d{2})(\d{5})(\d{4})(.*)/,
            appliedRegex = rNormalMask;

        $(document.body).on('keyup', '.phoneMaskBr', applyPhoneMask);

        function applyPhoneMask(e) {
            if( e.which === 8 ) return true; // Backspace escape
            
            rawValue = $(this).val().replace(/\D/g, ''); // Just numbers
            
            if( rawValue.length === 11 && rawValue.substr(0,2) === '11' ) { // São Paulo rules
                apliedRegex = rSPMask;
            }

            phoneWithMask = rawValue.replace(appliedRegex, function(match, ddd, prefix, sufix, trash) {
                return '(' + ddd + ')' + prefix + (sufix ? '-' + sufix : '');
            });

            $(this).val(phoneWithMask);
        }

        return this.each(function() {
            $(this).addClass('phoneMaskBr');
        });
    };

})(jQuery);