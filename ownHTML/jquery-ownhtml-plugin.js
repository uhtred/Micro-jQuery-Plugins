/**
 * jQuery ownHTML Plugin
 */
(function( $ ){

  $.fn.ownHTML = function() {

    return $('<div>').append( this.clone() ).html();
    
  };
})( jQuery );