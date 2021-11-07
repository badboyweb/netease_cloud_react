import React,{lazy} from "react";

import { Redirect } from "react-router-dom";

const Discovery = lazy(()=> import("../pages/discovery"));
const Recommend = lazy(()=> import("../pages/discovery/c-pages/recommend"));
const Ranking = lazy(()=> import("../pages/discovery/c-pages/ranking"));
const Songs = lazy(()=> import("../pages/discovery/c-pages/songs"));
const Djradio = lazy(()=> import("../pages/discovery/c-pages/djradio"));
const Artist = lazy(()=> import("../pages/discovery/c-pages/artist"));
const Album = lazy(()=> import("../pages/discovery/c-pages/album"));
const Friend = lazy(()=> import("../pages/friend"));
const Mine = lazy(()=> import("../pages/mine"));


const routes = [
  {
    path: "/",
    exact:true,
    render: () => (
        <Redirect to="/discovery"/>
    )
  },
  {
    path: "/discovery",
    component: Discovery,
    routes: [
      {
        path: "/discovery",
        exact:true,
        render: () => (
            <Redirect to="/discovery/recommend"/>
        )
      },
      {
        path: "/discovery/recommend",
        component: Recommend,
      },
      {
        path: "/discovery/ranking",
        component: Ranking,
      },
      {
        path: "/discovery/songs",
        component: Songs,
      },
      {
        path: "/discovery/djradio",
        component: Djradio,
      },
      {
        path: "/discovery/artist",
        component: Artist,
      },
      {
        path: "/discovery/album",
        component: Album,
      },
    ],
  },
  {
    path: "/friend",
    component: Friend,
  },
  {
    path: "/mine",
    component: Mine,
  },
];

export default routes;
