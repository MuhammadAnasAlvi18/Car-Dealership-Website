function toggleMenu(){
    const Menutoggle = document.querySelector('.toggle')
    const sidebar = document.querySelector('.sidebar')
    Menutoggle.classList.toggle('active')
    sidebar.classList.toggle('active')
}

function darklight(){
    const section = document.querySelector('.banner')
    const darklightBtn = document.querySelector('.darklight')
    darklightBtn.classList.toggle('active')
    section.classList.toggle('active')

}