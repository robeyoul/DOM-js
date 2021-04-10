// create Element

let newElement= document.createElement('div');


// add new class with newElement
newElement.setAttribute('class', 'myDiv')

document.body.appendChild(newElement)

console.log(newElement);

// replace attribute

let p= document.getElementById('myp')

p.setAttribute('class','para')

console.log(p);