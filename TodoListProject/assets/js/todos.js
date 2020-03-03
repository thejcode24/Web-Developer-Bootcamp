// Load jQuery when Dom is safe to manipulate
$(function() {

    // Event delegation used to prevent event propagation or "bubbling"
    // Set event listener on the whole list ul, then pass "li"as second
    // argument and if clicked element is a "li", run function

    // Check off specific todo by clicking
    $("ul").on("click", "li", function() {
        $(this).toggleClass("completed");
    });

    // Click on X to delete todo
    $("ul").on("click", "span", function(event) {
        
        // Get parent jquery element which is li in this case
        $(this).parent().fadeOut(500, function() {

            // This refers to li, not to span because fadeOut 
            // is called on parent which is li
            $(this).remove();
        });

        // Prevents event bubbling which means click is going
        // through all layers of DOM down to html
        event.stopPropagation();
    });

    // Get input from text input box
    $("input[type='text']").keypress(function(event) {

        // Check if Enter key is pressed
        if(event.which===13) {

            // Get text input 
            var textInput = $(this).val();

            // Clear input
            $(this).val("");

            // Create a new li and add to ul
            $("ul").append("<li><span>x</span> "+ textInput + "</li>");
        }  
    })
});

