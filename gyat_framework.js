// Todo: Root, element creation, styling, events
// Todo: Custom lang/function for creating elements
// Todo: Routing, refreshing

// const url = window.location.href;
// window.location.assign(url + '/test')
// console.log(window.location.pathname.split('/')); // Get current routing for here...


class Root {
    constructor(rootID) {
        const rootElement = document.getElementById(rootID)?.nodeName == 'DIV' ? document.getElementById(rootID) : document.createElement('div');

        if(rootElement && rootElement.nodeName === 'DIV' ) {
            this.root = rootElement;
        } else {
            const newDiv = document.createElement('div');
            newDiv.setAttribute('id', rootID);
            this.root = newDiv; 
        }
        
        document.body.appendChild(this.root)
        console.log(this.root)
    }
}