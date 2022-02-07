function phoneMenu() {
    // Grab the mobile_links div with query selector
    var menuLinks = document.querySelector(".mobile_links");
    //Debug ouput to make sure the correct element is grabbed
    console.log(menuLinks)

    //Checks if mobile links are displayed or not, if displayed, change to none
    if (menuLinks.style.display === 'block') {
        menuLinks.style.display = 'none';
        console.log("pressed?")
    } else {
        // If the mobile links are not display, change to displayed
        console.log("pressing?")
        menuLinks.style.display = 'block'
    }
}