import {createRouter, createWebHistory} from "vue-router"

import Homepage from "./../components/Homepage.vue"
import OurMenu from "./../components/OurMenu.vue"
import AboutUs from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"

const routes =[ 
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },

     {
     path: '/ourmenu',
     name: 'ourmenu',
     component: OurMenu,
    },

    {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs,
    },

    {
    path: '/contactus',
    name: 'contactus',
    component: ContactUs,
    },
  ]

const router= createRouter({
   history: createWebHistory(),
   routes,
})
 export default router

