const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = "([^\\/]+)";

const extractUrlParams = (route: any, windowHash: any) => {
  const params: any = {};

  if (route.params.length === 0) {
    return params;
  }

  const matches = windowHash.match(route.regex);

  matches.shift();

  matches.forEach((paramValue: any, index: number) => {
    const paramName: string = route.params[index];
    params[paramName] = paramValue;
  });

  return params;
};

export default () => {
  const routes: any[] = [];
  let notFound = () => {};

  const router: any = {};

  const checkRoutes = () => {
    const { hash } = window.location;

    const currentRoute = routes.find((route) => {
      const { regex } = route;
      return regex.test(hash);
    });

    if (!currentRoute) {
      notFound();
      return;
    }

    const urlParams = extractUrlParams(currentRoute, hash);

    currentRoute.component(urlParams);
  };

  router.addRouter = (fragment: string, component: any) => {
    const params: any[] = [];

    const parsedFragment = fragment
      .replace(ROUTE_PARAMETER_REGEXP, (match: any, paramName: string) => {
        params.push(paramName);
        return URL_FRAGMENT_REGEXP;
      })
      .replace(/\//g, "\\/");

    routes.push({ regex: new RegExp(`^${parsedFragment}`), component, params });

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
