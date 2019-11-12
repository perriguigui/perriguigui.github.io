class Route {
    constructor(path, queryName) {
        this.path = path;
        this.name = queryName.slice(1);
        this.element = document.querySelector(queryName);
    }
}

class Router {
    constructor(routes, options) {
        if (options && Object.entries(options).length >= 0 && options.constructor === Object) {
            this.options = options;
        }
        else {
            this.options = {
                muted: true, // If false message at each redirect.
            };
        }
        this.routes = routes;
        this.current;
    }

    addRoute(route) {
        this.routes.push(route);
    }

    location() {
        return window.location.hash;
    }

    redirect(path) {
        if (!this.current || path !== this.current.path) {
            let found = false;
            for (let route of this.routes) {
                if (route.path === path) {
                    found = true;
                    for (let r of this.routes) {
                        r.element.style.display = "none";
                        r.element.classList.remove("active");
                    }
                    route.element.style.display = "block";
                    route.element.classList.add("active");
                    this.current = route;
                    window.location.hash = path;
                    var event = new CustomEvent('redirected', { detail: { route: this.current }});
                    document.dispatchEvent(event);
                    if (!this.options.muted) {
                        console.log("Redirected from router :", this);
                    }
                }
            }
            if (!found && !this.options.muted) {
                console.log("Cannot find route in routes :", this.routes);
            }
        }
    }

    // redirect(name) {
        
    // }
}

let routes = [
    new Route("", "#home"),
    new Route("#", "#home"),
    new Route("#home", "#home"),
    new Route("#about", "#about"),
    new Route("#history", "#history"),
    new Route("#portfolio", "#portfolio"),
    new Route("#contact", "#contact"),
]

let router = new Router(routes, {muted: true});

window.onload = function () {

    router.redirect(router.location());

    // Handeling link clicks :
    var links = document.querySelectorAll(".sidebar-item-wrapper");
    for(let l of links) {
        l.addEventListener('click', function() {
            router.redirect(l.dataset.route);
        });
    }

    var closeBtns = document.querySelectorAll(".btn-close");

    for(let btn of closeBtns) {
        btn.addEventListener('click', function() {
            router.redirect("");
        });
    }
};

window.onhashchange = function() {
    router.redirect(router.location());
};

// Event on received redirect:
document.addEventListener('redirected', function(e) {
    console.log("Received redirected event", e.detail.route);
})