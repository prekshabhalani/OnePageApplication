/*****To handle all the js entry point */
const router = async () => {
    const routers = [
        { path: "/", view: () => console.log("Dashboard view") },
        { path: "/posts", view: () => console.log("You mean post") },
        { path: "/settings", view: () => console.log("You mean settings") }

    ]

    const potentialMatch = routers.map(route => {
        return {
            route: route.path,
            content: route.view,
            isMatch: location.pathname === route.path
        }
    })
    let matchRoute = potentialMatch.find(match => match.isMatch)

    //Something like 404 if not match default routing set
    if (!matchRoute) {
        matchRoute = {
            route: routers[0].path,
            content: routers[0].view,
            isMatch: true
        }
    }

    console.table(matchRoute)//Match routing
    console.table(potentialMatch) //ALL routing
};

document.addEventListener("DOMContentLoaded", () => {
    router()
})