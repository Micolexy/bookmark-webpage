const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel')

console.log(tabs)

// tab menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
    //delete all tab border
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-b-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })

    //hide panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    //create a new tab and nael based on the data target
    e.target.classList.add('border-b-softRed', 'border-b-4')

    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
};


//menu

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
   

    if(menu.classList.contains('flex')){
        logo.setAttribute('src', './img/logo-bookmark-footer.svg')
    }
    else {
        logo.setAttribute('src', './img/logo-bookmark.svg')
    }
}
