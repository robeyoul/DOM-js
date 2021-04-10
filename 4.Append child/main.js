const list= document.getElementById('mylist')

fruitsList=['Banana','Mango','Orange','Tomato']

for (fruits of fruitsList){
   let li= document.createElement('li')
   li.textContent= fruits;
   
   list.appendChild(li)
}