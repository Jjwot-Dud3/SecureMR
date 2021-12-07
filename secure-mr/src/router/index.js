import Vue from 'vue'
import VueRouter from 'vue-router'
import EmitDocumentArs from "../views/EmitDocumentArs.vue"
import PssHome from '../views/PssHome.vue'
import AffiliateBrowseDocuments from '../views/AffiliateBrowseDocuments'
import AffiliateBrowseTrustedUsers from '../views/AffiliateBrowseTrustedUsers'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PssHome',
    component: PssHome
  },
  {
    path: '/Pss/EmitDocumentArs',
    name: 'EmitDocumentArs',
    component: EmitDocumentArs
    
  }, 
  {
    path: '/affiliate/documents',
    name: "Consulta de Documentos",
    component: AffiliateBrowseDocuments
  }
  ,
  {
    path: '/affiliate/trustedusers',
    name: "Listado de Personas de Confianza",
    component: AffiliateBrowseTrustedUsers
  }
  //{
    //path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
