
let dataUser = [];

const getUser = async () => 
    await axios.get('https://62fdf0cb41165d66bfb4b14f.mockapi.io/Users')
        .then(response => {
            console.log(response.data);
            dataUser = response.data;
            displayTeacher(dataUser);
        })
        .catch(error => console.log(error))
getUser();

function displayTeacher(arrs) {
    let html = '';
    arrs.map((item, index) => {
        if (item.loaiND === 'GV') {
            return html +=
            `<div class="col-6 col-lg-3 mb-xl-5 mb-3 wow animate__animated animate__fadeIn" data-wow-delay = "0.3s">
                <div class="column">
                <span>
                    <img src="./img/${item.hinhAnh}" alt="">
                </span>
                <div>
                    <span>${item.ngonNgu}</span>
                    <h4>${item.hoTen}</h4>
                    <p>${item.moTa}.</p>
                </div>
                </div>
            </div>`
        }
    })
    document.querySelector('.team .content .row').innerHTML = html;
}


// scroll top-header

window.onscroll = (e) => {
    // console.log(document.documentElement.scrollTop.toFixed(2))
    if ( document.documentElement.scrollTop > 250) {
        document.getElementById('header').classList.add('scroll');
    } 
    else if ( document.documentElement.scrollTop < 250) {
        document.getElementById('header').classList.remove('scroll');
    }
}
// document.querySelector('.nav-button').addEventListener('click', ()=> {
// })

const openNav = () => {
    document.body.classList.toggle('sidebar-menu');
    document.querySelector('.header .nav__button').style.display = 'none'
}
const openNav2 = () => {
    document.body.classList.toggle('sidebar-menu');
    document.querySelector('.header .nav__button').style.display = 'block'
}
// button Menu-sideBar

let dropDown = document.querySelectorAll('.nav__item')
for (i = 0; i < dropDown.length; i++) {
    dropDown[i].addEventListener('click', (e) => {
        if (dropDown[i]) {
            console.log('click')
        }
    })
}

// sub-menu
let subMenu = document.querySelectorAll('.sub-menu');
let navLinkIcon = document.querySelectorAll('.nav__item .nav__link-icon-1');

for (let i = 0; i < subMenu.length; i++) {
    navLinkIcon[i].addEventListener('click', (e) => {
        subMenu[i].classList.toggle('show');
    })
}

// sub-menu-Child
let subMenuChild = document.querySelectorAll('.sub-menu-child');
let navLinkIconChild = document.querySelectorAll('.sub-menu-title .nav__link-icon-2');

for (let i = 0; i < subMenuChild.length; i++) {
    navLinkIconChild[i].addEventListener('click', (e) => {
        e.preventDefault(); // ngăn chặn sự kiên nổi bọt
        subMenuChild[i].classList.toggle('show');
    })

}   