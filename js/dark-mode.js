const btnDark = document.querySelector('.btn-dark-mode');

btnDark.addEventListener('click',()=>{
    console.log('Click ...')
    document.body.classList.toggle('dark-mode');
    if(document.body.className === 'dark-mode'){
        btnDark.innerHTML = `
        <i class="fas fa-sun"></i> Light Mode
    `
    
    }else{
        btnDark.innerHTML = `
        <i class="far fa-moon"></i> Dark Mode
    `
    }
})