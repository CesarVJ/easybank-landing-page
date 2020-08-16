function showMenu(){
    let menu = document.querySelector('nav');
    if(menu.style.getPropertyValue('display') == 'none'){
        menu.style.setProperty('display','block');
    }else{
        menu.style.setProperty('display','none');
    }
}