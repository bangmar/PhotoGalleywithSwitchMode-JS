const mainImg  = document.getElementById('mainImg')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const active = document.querySelectorAll('.imagesId a')
const caption = document.querySelector('.images #caption')


let aktif = 1
const captions = ["Beach", "Plateau", "Forest", "Family", "Coins"]


function switchImg(el){
    aktif = el;
    active[el-1].classList.add('visited')
    showImage(el)
    
}

function showImage(el){
    let path = `img/${el}.jpg`
    mainImg.src = path
    caption.innerHTML = `in frame : ${captions[el-1]}`
}

next.addEventListener('click', ()=>{
    aktif ++
    
    if ( aktif == 6){
        aktif = 1
    }
    showImage(aktif)

})

prev.addEventListener('click', ()=>{
    aktif --
    
    if ( aktif == 0 || aktif == -1){
        aktif = 5
    }
    showImage(aktif);

})



if (localStorage.getItem('theme') == 'dark'){
    changeMode()
}

function changeMode(){
    let isDark = document.body.classList.toggle('dark')
    let btnText = ''

    if(isDark){
        btnText = 'Light Mode'
        localStorage.setItem('theme', 'dark')
    
    }else { 
        localStorage.removeItem('theme')

        btnText = 'Dark Mode'
    }

    document.getElementById('mode').innerHTML = btnText
}





