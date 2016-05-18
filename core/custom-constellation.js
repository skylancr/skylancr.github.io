

/**
 * ==============================
 * Constellation Initialize Code
 * ==============================
 */
$(document).ready(function(){
    
    'use strict';

    var onMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
    
    if( ( onMobile === false ) ) {

        // Dark Background Effect
        if( $('#background').hasClass('dark') ) {
            $('#background').constellation({
                star: {
                    color: 'rgba(255, 255, 255, 1)'
                },
                line: {
                    color: 'rgba(248, 98, 109, 0.85)'
                }
            });
        }
        else { // Light Background Effect
            $('#background').constellation({
                star: {
                    color: 'rgba(255, 255, 255, 1)'
                },
                line: {
                    color: 'whitesmoke'
                }
            });
        }
    } else {
            
            
        }
}); // End: Constellation Initialize Code