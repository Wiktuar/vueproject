import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/components/common/HomePage";
import BlogComponent from "@/components/BlogComponent";
import ProjectsComponent from "@/components/ProjectsComponent";
import BlogDetailsComp from "@/components/BlogDetailsComp";
import NotFoundComp from "@/components/NotFoundComp";
import ProjectDetailsComp from "@/components/ProjectDetailsComp";

const routes = [
    {path: '/', name: 'homePage', component: HomePage},
    {path: '/home', name: 'homePage', component: HomePage},
    {path: '/project', name: 'project page', component: ProjectsComponent},
    {path: '/blog', name: 'site blog', component: BlogComponent},
    {path: '/blogdetails', name: 'single blog', component: BlogDetailsComp},
    {path: '/projectdetails', name: 'single blog', component: ProjectDetailsComp},
    {path: '/:notfound', name: '404', component: NotFoundComp}
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(){
        return {
            top: 0
        }
    }
})

export default router;