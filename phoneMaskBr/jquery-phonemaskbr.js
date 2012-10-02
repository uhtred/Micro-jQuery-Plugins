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
(function( $ ){

  $.fn.phoneMaskBr = function() {
      
      var self , raw, phone, value, phoneWithMask ;
      
      $(document.body)
        .on('keyup', '.phonemask', applyPhoneMask ) ;      
      
      function applyPhoneMask(){
        value = $(this).val();
        raw = value.replace(/\D/g, '');
  
        phoneWithMask = raw.replace(/^\d{2}/, function($1){ return '('+$1+')'; });
        if(raw.length > 6 && raw.length < 11 ) {
          phoneWithMask = phoneWithMask.replace(/^.{8}/, function($1){ return $1+'-';});
        } else {
          phoneWithMask = phoneWithMask.replace(/^.{9}/, function($1){ return $1+'-';});  
        }
        
        $(this).val( phoneWithMask.substr(0,14) );
      }
      
      return this.each(function(){
        $(this).addClass('phonemask');
      });
  };
  
})( jQuery );