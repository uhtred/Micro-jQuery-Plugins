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
        
        var value = '';

        $( document.body ).on( 'keyup', '.phoneMaskBr', function(){
            applyPhoneMask( $( this ) );
        });

        function applyPhoneMask( $el ) {
            
            setTimeout(function(){

                value = $el.val();

                value = value.replace( /\D/g, "" );
                value = value.replace( /^(\d{2})(\d)/g, "($1) $2" );
                value = value.replace( /(\d)(\d{4})$/, "$1-$2" );

                $el.val( value );

            }, 1 );
        }

        return this.each(function() {
            $( this ).addClass( 'phoneMaskBr' );
        });
    };

})( jQuery );
