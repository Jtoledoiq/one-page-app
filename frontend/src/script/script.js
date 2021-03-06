import Dashboard from "./views/Dashboard.js"
import Clock from "./views/Clock.js"
import Drum from "./views/Drum.js"


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path: "/", view: Dashboard},
        {path: "/clock", view: Clock},
        {path: "/drum",view: Drum},
    ];

    //Test each route for potential match

    const potentialMatches = routes.map(route => {
        return{
            route:route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();



    console.log(potentialMatches);
};


window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click", e =>{
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            console.log("matchinggggggggg")
            navigateTo(e.target.href)
        }
    })

    router();
})



