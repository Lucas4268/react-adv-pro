import React, { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";


type JSXC = () => JSX.Element

interface Routes {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXC> | JSXC;
  name: string;
}


const LazyLayout = lazy(() => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

export const routes: Routes[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy Layout - Dash'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },
]