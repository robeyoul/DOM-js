

const list=document.getElementById('mylist')

const newLi= document.createElement('li')

newLi.textContent='Banana'

function addTop(parent, additem){
   let firstChild= parent.firstChild
   parent.insertBefore(additem,firstChild)
   
}

addTop(list,newLi)