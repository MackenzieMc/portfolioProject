const app = {}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});


app.scrollAction = () => {
    
    window.onscroll = () => {
        let navBar = document.querySelector('.navContainer') 
        if(document.scrollingElement.scrollTop > 50) {
            navBar.classList.add('fixedBar')
        } else if (document.scrollingElement.scrollTop < 50) {
            navBar.classList.remove('fixedBar')
        }   
    }
    
}


app.init = () => {
    app.scrollAction();
}

app.init();