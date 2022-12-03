import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/todo-list/",
    name: "todo-list",
    children: [
      {
        path: "",
        component: () => import("../views/ListView.vue"),
      },
      {
        path: ":id",
        component: () => import("../views/ListView.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "e404",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
