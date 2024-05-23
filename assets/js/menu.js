window.onload = function(){
    let menuState = false;

    if ( localStorage.getItem('menuState') )
        if(localStorage.getItem('menuState') === "1")
            menuState = true;
        else
            menuState = false;

    let doUpdate = false;
    let menuButton = document.getElementById("menu-button");
    let sidebar = document.getElementsByClassName("sidebar").item(0);
    let closedMenuIcon = document.getElementById("closed-menu-icon");
    let openMenuIcon = document.getElementById("open-menu-icon");
    let buttonTextArray = Array.from(document.getElementsByClassName("nav-button-text"));

    function menuUpdateFunc(){

        if(menuState){
            sidebar.classList.remove('closed');
            openMenuIcon.classList.add('hidden');
            closedMenuIcon.classList.remove('hidden');
            buttonTextArray.forEach(element => {
                element.classList.remove('hidden-animated');
            });
        } else {
            sidebar.classList.add('closed'); 
            closedMenuIcon.classList.add('hidden');
            openMenuIcon.classList.remove('hidden');
            buttonTextArray.forEach(element => {
                element.classList.add('hidden-animated');
            });
        }

        
        if(doUpdate != false)
            menuState = !menuState;

        if(menuState)
            localStorage.setItem('menuState', "1");
        else
            localStorage.setItem('menuState', "0");

        console.log(menuState);
        console.log(localStorage.getItem('menuState'));
    }

    menuUpdateFunc();
    doUpdate = true;
    menuButton.onclick = menuUpdateFunc;
};
 