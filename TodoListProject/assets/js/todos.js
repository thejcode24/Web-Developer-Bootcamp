
$(document).ready(function() {

    // Check off specific todo by clicking
    $("li").click(function() {
        $(this).toggleClass("completed");
    });

    // Click on X to delete todo
    $("span").click(function(event) {
        
        // Get parent jquery element which is li in this case
        $(this).parent().fadeOut(500, function() {

            // This refers to li, not to span because fadeOut 
            // is called on parent which is li
            $(this).remove();
        });

        // Prevents event bubbling which means click is going
        // through all layers of DOM down to html
        event.stopPropagation();

    })

});

