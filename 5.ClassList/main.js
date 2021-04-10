let para= document.getElementById('mypara')
// using add

para.classList.add('bold','text-size','bg-red')

console.log(para.classList);

// using remove

para.classList.remove('bold')

// using replace

para.classList.replace('bg-red','bg-gray')

// using contains
console.log(para.classList.contains('bg-gray'));

// using toggle
/* 
   1st time using toggle bg-gray will
   remove ,2nd time toggle bg-gray will
   add
*/
para.classList.toggle('bg-gray') // remove
para.classList.toggle('bg-gray') // add
// entries

para.classList.entries(123)