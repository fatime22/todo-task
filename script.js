
document.addEventListener('DOMContentLoaded', function() {
    
    let todo = document.querySelector(".todo");    
    let clickedOnce = false;

    document.addEventListener('click', function(event) {
       
        let isClickedInsideTodo = todo.contains(event.target);

        if (isClickedInsideTodo) {
        
            if (clickedOnce) {
                todo.style.height = "900px"; 
                todo.style.width = "100%"; 
                clickedOnce = false; 
            } else {
                
                todo.style.height = "700px"; 
                todo.style.width = "80%"; 
                clickedOnce = true; 
            }
        }
    });
});



