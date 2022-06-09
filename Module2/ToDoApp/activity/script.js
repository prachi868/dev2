let addTodoButton = document.querySelector(".add-todo");
let todoInput= document.querySelector(".todo-input");
let todosList=document.querySelector(".todos-list-container");


todoInput.addEventListener("keypress" , function(e){
    if(e.key== "Enter"){
        addTodo();
    }
}); 
addTodoButton.addEventListener("click" , function(){
    addTodo();
});
 function addTodo(){
     let todoInputValue = todoInput.value;
    
           if(todoInputValue){
               appendTodo(todoInputValue);
               //it will empty the todo value
               todoInput.value=" ";
            }
 }