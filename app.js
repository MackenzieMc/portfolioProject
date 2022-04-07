const app = {}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});


app.scrollAction = () => {
    window.onscroll = () => {
        let navBar = document.querySelector('.navContainer') 
        console.log(navBar);
        console.log(document.scrollingElement.scrollTop)
        if(document.scrollingElement.scrollTop > 200) {
            navBar.style.backgroundColor = '#051622'
        } else if (document.scrollingElement.scrollTop == 0) {
            navBar.style.backgroundColor = 'transparent'
        }
    
    }
    
}

app.projectImages = () => {
    let imgElement = document.querySelector('.selectedImage')
    let projectTitle = document.querySelectorAll('.titleText')

    projectTitle.forEach( (project) => {
        project.addEventListener('click', () => {
            imgElement.src = `./assets/${project.textContent}.png`
        })
    })

}

app.init = () => {
    app.projectImages();
    app.scrollAction();
}

app.init();