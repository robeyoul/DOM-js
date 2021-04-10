

let list= document.getElementById('mylist');             
let addBefore= document.getElementById('addBefore')


let newLi= document.createElement('li')

newLi.textContent='Elora'

list.insertBefore(newLi, addBefore)

console.log(list.lastChild);

// opposite to append Child
/*
function addElement(parent, addItem){
   
   let firstChild= parent.firstChild
   
   parent.insertBefore(addItem,firstChild)
}

addElement(list,newLi)
*/