export default () => {
  const routes: any[] = [];
  let notFound = () => {};

  const router: any = {};

  const checkRoutes = () => {
    const currentRoute = routes.find((route) => route.fragment === window.location.hash);

    if (!currentRoute) {
      notFound();
      return;
    }

    currentRoute.component();
  };

  router.addRouter = (fragment: string, component: any) => {
    routes.push({ fragment, component });

    return router;
  };

  router.setNotFound = (cb: any) => {
    notFound = cb;
    return router;
  };

  router.navigate = (fragment: string) => {
    window.location.hash = fragment;
  };

  router.start = () => {
    window.addEventListener("hashchange", checkRoutes);
    if (!window.location.hash) {
      window.location.hash = "#/";
    }

    checkRoutes();
  };

  return router;
};
