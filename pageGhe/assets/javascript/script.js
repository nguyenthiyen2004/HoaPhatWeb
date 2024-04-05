// // ẩn voucher
function hideElement() {
    var element = document.getElementById("elementToHide");
    element.style.display = "none";
}

const button = document.getElementById('btnn');
const list = document.getElementById('list');
button.addEventListener('click', () => {
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
})

const button1 = document.getElementById('search-bar');
const list1 = document.getElementById('search-bar1');
button1.addEventListener('click', () => {
    if (list1.style.display === 'none') {
        list1.style.display = 'inline';
    } else {
        list1.style.display = 'none';
    }
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
