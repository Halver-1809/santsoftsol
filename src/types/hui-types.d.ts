export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface RoutesType {
    // required props
    name: string;
    path: string;
    // optional props
    icon?: JSX.Element;
    secondary?: boolean;
    layout?: string;
    component?: JSX.Element;
    collapse?: boolean;
    protected?: boolean;
    roles?: string[];
    children?: RoutesType[];
    items?: {
      // required props
      name: string;
      path: string;
      // optional props
      secondary?: boolean;
      icon?: JSX.Element;
      layout?: string;
      component?: JSX.Element;
      collapse?: boolean;
      roles?: string[];
      children?: RoutesType[];
      items?: {
        // required props
        name: string;
        layout: string;
        path: string;
        component: JSX.Element;
        // optional props
        secondary?: boolean;

        roles?: string[];
        children?: RoutesType[];
      }[];
    }[];
  }
  interface NavbarCollapseType {
    // required props
    name: string;
    path: string;
    // optional props
    secondary?: boolean;
    layout?: string;
    component?: () => JSX.Element;
    collapse?: boolean;
    roles?: string[];
    children?: RoutesType[];
    items?: {
      // required props
      name: string;
      path: string;
      // optional props
      secondary?: boolean;
      icon?: JSX.Element;
      layout?: string;
      component?: JSX.Element;
      collapse?: boolean;
      roles?: string[];
      children?: RoutesType[];
      items?: {
        // required props
        name: string;
        layout: string;
        path: string;
        component: JSX.Element;
        // optional props
        secondary?: boolean;

        roles?: string[];
        children?: RoutesType[];
      }[];
    }[];
  }
  interface NavbarLinksType {
    // required props
    name: string;
    layout: string;
    path: string;
    component: () => JSX.Element;
    // optional props
    secondary?: boolean;
    roles?: string[];
    children?: RoutesType[];
    items?: {
      // required props
      name: string;
      path: string;
      // optional props
      secondary?: boolean;
      icon?: JSX.Element;
      layout?: string;
      component?: JSX.Element;
      collapse?: boolean;
      roles?: string[];
      children?: RoutesType[];
      items?: {
        // required props
        name: string;
        layout: string;
        path: string;
        component: JSX.Element;
        // optional props
        secondary?: boolean;

        roles?: string[];
        children?: RoutesType[];
      }[];
    }[];
  }
}
