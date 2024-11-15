import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Contacts from "@/views/Contacts.vue";
import ProjectList from "@/views/ProjectList.vue";
import ProjectView from "@/views/ProjectView.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: { msg: "Bootstrap Modal" },
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: { layout: "MainLayout" },
  },
  {
    path: "/kontakt",
    name: "Contacts",
    component: Contacts,
    meta: { layout: "MainLayout" },
  },
  {
    path: "/projekte",
    name: "Projects",
    component: ProjectList,
    meta: { layout: "MainLayout" },
  },
  {
    path: "/project-details/:slug",
    name: "ProjectDetails",
    component: ProjectView,
    meta: { layout: "MainLayout" },
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
