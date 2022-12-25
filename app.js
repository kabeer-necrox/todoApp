 var list = document.getElementById("list");
function addTodo(){
   var todo_items = document.getElementById("todo_items")
    
   
   // create li tage with text node
   var li = document.createElement("li")
   var litext = document.createTextNode(todo_items.value)
   li.appendChild(litext)

//    create delBTn............................
   var delBtn = document.createElement("button")
   var delText = document.createTextNode("Delete")
   delBtn.appendChild(delText)
   delBtn.setAttribute("class","btn")
   delBtn.setAttribute("onclick","deleteItem(this)")
   li.appendChild(delBtn)


   //.............edit button here.................


   var editBtn = document.createElement("button")
   var editText = document.createTextNode("Edit")
   editBtn.setAttribute("class","btn")
   editBtn.appendChild(editText)
   editBtn.setAttribute("onclick", "editItem(this)")

     list.appendChild(li)
     li.appendChild(editBtn)
     todo_items.value = ""

   console.log(li)
   
}

function deleteItem(e){

    e.parentNode.remove()
    

}
function deleteAll(){

list.innerHTML = ""


}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue = editValue

}





















