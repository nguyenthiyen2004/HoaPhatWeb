// ẩn voucher
function hideElement() {
    var element = document.getElementById("elementToHide");
    element.style.display = "none";
}

const products = document.querySelectorAll('.slider .productt');
let counter = 0;

function left() {
    if (counter == 0) {
        counter = products.length / 3 - 1;
    } else {
        counter--;
    }
    scroll();
}

function right() {
    if (counter == products.length / 3 - 1) {
        counter = 0;
    } else {
        counter++;
    }
    scroll();
}

function scroll() {
    products.forEach(function (item) {
        item.style.transform = `translateX(${-counter * 915}px)`;
    })
}

let button1 = document.getElementById('btnn1');
let list1 = document.getElementById('list1');

button1.addEventListener('click', () => {
    if (list1.style.display === 'none') {
        list1.style.display = 'block';
    } else {
        list1.style.display = 'none';
    }
})
list1.addEventListener('click', () => {
    list1.style.display = 'none';
})

let button2 = document.getElementById('btnn2');
let list2 = document.getElementById('list2');
button2.addEventListener('click', () => {
    if (list2.style.display === 'none') {
        list2.style.display = 'block';
    } else {
        list2.style.display = 'none';
    }
})
list2.addEventListener('click', () => {
    list2.style.display = 'none';
})

let button3 = document.getElementById('btnn3');
let list3 = document.getElementById('list3');
button3.addEventListener('click', () => {
    if (list3.style.display === 'none') {
        list3.style.display = 'block';
    } else {
        list3.style.display = 'none';
    }
})
list3.addEventListener('click', () => {
    list3.style.display = 'none';
})

let button4 = document.getElementById('btnn4');
let list4 = document.getElementById('list4');
button4.addEventListener('click', () => {
    if (list4.style.display === 'none') {
        list4.style.display = 'block';
    } else {
        list4.style.display = 'none';
    }
})
list4.addEventListener('click', () => {
    list4.style.display = 'none';
})

let button5 = document.getElementById('btnn5');
let list5 = document.getElementById('list5');
button5.addEventListener('click', () => {
    if (list5.style.display === 'none') {
        list5.style.display = 'block';
    } else {
        list5.style.display = 'none';
    }
})
list5.addEventListener('click', () => {
    list5.style.display = 'none';
})


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
  
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
  
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
  }
  
  showMenu('nav-toggle','nav-menu')

  function toggle() {
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

    function toggle2() {
        var blur=document.getElementById('blur2');
        blur.classList.toggle('active');
        var popup = document.getElementById('popup2');
        popup.classList.toggle('active');
    }