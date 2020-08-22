const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRotue = route === '/' ? route : '/:id';
        return validRotue
    }
    return `/${route}`; //about
}

export default resolveRoutes;