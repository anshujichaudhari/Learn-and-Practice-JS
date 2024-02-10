//IMP Q. difference bet. innerText and  textContent
//innerText -->  It returns the visible text contained in a node.
//textContent --> It returns the full text along with spacing and hidden part also.

// console.log(document);
// console.dir(document);
// console.log(document.URL);      //http://127.0.0.1:5500/index02.html
//console.dir(document.domain);    //127.0.0.1
//console.dir(document.body);
// console.dir(document.head);
// console.dir(document.all);
//console.dir(document.all[5]);     //script

//document.title = 'changeNameOfTitleOfDocument';

//const body = document.body;


// add text

// add lement using .append() and .appendChild()

//body.append('hello', 'My name is Anshu Chaudhary');




//create element by using createElement('');

//const div = document.createElement('div');

//adding text to the element

//div.innerText = 'Javascript';
//div.textContent = 'Javascript';


// body.append(div);
//body.appendChild(div);
// console.log(div);

//OR
// const div = document.querySelector('div');
// console.log(div.innerText);
// console.log(div.textContent);


// exercise - create a div which contains strong text into body tag .

// const body = document.body;
// const div = document.createElement('div');
// const strong = document.createElement('strong');
//strong.innerText = "This is a bold text";
// div.appendChild(strong);
// body.append(div);


//OR

// const div = document.createElement('div');
// div.innerHTML = '<strong> <p> This is a bold text </p> </strong>';
// body.append(div);



//remove elements

// const div = document.querySelector('div');
// const spanOne = document.getElementById('one');
// const spanTwo = document.getElementById('two');


//spanTwo.remove();

//div.removeChild(spanOne);



//attributes property and methods

// console.log(spanOne.getAttributes('name'));
// spanOne.setAttribute('name','abcde');
// spanOne.removeAttribute('name');







//id

// spanOne.id = 'xyzmnop';




//classes methods or properties

// spanTwo.classList.add('new-class');
// spanTwo.classList.remove('new-class');

// spanTwo.className = 'new-name';

// spanTwo.className = 'new-name a b c d e';

// spanOne.classList.toggle('new-class')




//style

// spanOne.style.setProperty('color','green');
// spanOne.style.background = 'tomato';
// spanOne.style.color = 'green';






