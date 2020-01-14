
//prevent top nav from reloading page using preventDefault
const stopButton = document.querySelector('.nav-link');

stopButton.addEventListener('click', (event) => {
event.preventDefault();
})

// made main content images grow on mouse in shrink on mouse out


document.querySelectorAll('.img-content').forEach(el => {
el.addEventListener('mouseenter', ()=> {
    el.style.transform= 'scale(1.2)';
    el.style.transition= "transform 0.3s"
   })
})


document.querySelectorAll('.img-content').forEach(el => {
    el.addEventListener('mouseleave', ()=> {
        el.style.transform= 'scale(1)';
       })
    })

const colorChange = document.querySelector('.logo-heading');

colorChange.addEventListener('click', () =>{
    colorChange.style.color='blue'
})

const billNye = document.querySelector('.content-destination img');
    billNye.addEventListener('mousedown', () =>{
        billNye.src='https://cdn.geekwire.com/wp-content/uploads/2019/08/A9_06020-630x420.jpg'
    })

const billNye2 = document.querySelector('.content-destination img');
    billNye2.addEventListener('mouseup', () => {
        billNye.src='img/destination.jpg'
    })

const doubleMe = document.querySelector('.intro img');
    doubleMe.addEventListener('dblclick', () =>{
        doubleMe.src='img/deadpoolme.jpg'
    })

    const page = document.querySelector('html')
    const subTitle = document.querySelector('h2')
    page.addEventListener('keydown', () => {
        subTitle.textContent = 'The bus does not like you and ran away!'
    })
    page.addEventListener('keyup', () =>{
        subTitle.textContent = 'Welcome to the Fun Bus!'
    })
    

document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('click', ()=> {
        el.style.backgroundColor = 'pink';
        event.stopPropagation();
       })
    })