const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = "([^\\/]+)";
const TICK_TIME = 250;
const NAV_A_SELECTOR = "a[data-navigation]";

const extractUrlParams = (route: any, pathname: any) => {
  if (route.params.length === 0) {
    return {};
  }

  const params: any = {};

  const matches = pathname.match(route.regex);

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
  let lastPathname: string;

  const router: any = {};

  const checkRoutes = () => {
    const { pathname } = window.location;
    if (lastPathname === pathname) {
      return;
    }

    const currentRoute = routes.find((route) => {
      const { regex } = route;
      return regex.test(pathname);
    });

    if (!currentRoute) {
      notFound();
      return;
    }

    const urlParams = extractUrlParams(currentRoute, pathname);

    currentRoute.component(urlParams);
  };

  router.addRouter = (path: string, component: any) => {
    const params: any[] = [];

    const parsedFragment = path
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

  router.navigate = (path: string) => {
    window.history.pushState(null, "", path);
  };

  router.start = () => {
    checkRoutes();
    window.setInterval(checkRoutes, TICK_TIME);

    document.body.addEventListener("click", (evt: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches(NAV_A_SELECTOR)) {
        evt.preventDefault();
        const path = target.getAttribute("href");
        router.navigate(path);
      }
    });

    return router;
  };

  return router;
};
