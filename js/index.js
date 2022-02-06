function phoneMenu() {
    var menuLinks = document.querySelector(".mobile_links");
    console.log(menuLinks)
    if (menuLinks.style.display === 'block') {
        menuLinks.style.display = 'none';
        console.log("pressed?")
    } else {
        console.log("pressing?")
        menuLinks.style.display = 'block'
    }
}