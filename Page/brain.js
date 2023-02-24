let isHideNav = false;
function HideOrCloseNav(button) {
    switch (isHideNav) {
        case false:
            document.getElementById('NavHide').className = "NavHide";
            document.getElementById('NavOpen').style.display = "none";
            button.value = '\\/';
            isHideNav = true;
            break;
        case true:
            document.getElementById('NavHide').className = "NavHideClick";
            document.getElementById('NavOpen').style.display = "flex";
            button.value = '/\\';
            isHideNav = false;
            break;
        default:
            alert('Ошибка: 801 (Сервер)');
            break;
    }
}


function Scroll(whoblock) {
    switch (whoblock) {
        case 'block1':
            document.getElementById('n1').scrollIntoView();
            break;
        case 'block2':
            document.getElementById('n2Start').scrollIntoView({block: "end"});
            break;
        case 'block3':
            document.getElementById('n2').scrollIntoView();
            break;
        case 'block3B':
            document.getElementById('n3').scrollIntoView();
            break;
        case 'block4':
            document.getElementById('n4').scrollIntoView();
            break;
        case 'block5':
            document.getElementById('n5').scrollIntoView();
            break;
    
        default:
            break;
    }
}
function Start(buttonStart) {
    buttonStart.style.display = 'none';
    document.getElementById('Notiitit').style.display = 'block';
    document.getElementById('Alllll').style.display = 'block';
    document.getElementById('n2Start').scrollIntoView({block: "end"});
}