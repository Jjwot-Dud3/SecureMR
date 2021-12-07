import Vue from 'vue'
import VueRouter from 'vue-router'
import EmitDocumentArs from "../views/pss/PssEmitDocument"
import PssHome from '../views/pss/PssHome'
import AffiliateHome from '../views/affiliate/AffiliateHome'
import AffiliateBrowseDocuments from '../views/affiliate/AffiliateBrowseDocuments'
import DocumentAccessListPersons from '../views/affiliate/AffiliateBrowseDocumentAccessPersons'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pss/home',
    name: 'PssHome',
    component: PssHome
  },
  {
    path: '/affiliate/home',
    name: 'AffiliateHome',
    component: AffiliateHome
  },
  {
    path: '/pss/emitDocumentArs',
    name: 'EmitDocumentArs',
    component: EmitDocumentArs
    
  }, 
  {
    path: '/affiliate/documents',
    name: "Consulta de Documentos",
    component: AffiliateBrowseDocuments
  },
  {
    path: '/affiliate/accessListPersons',
    name: "DocumentAccessListPersons",
    component: DocumentAccessListPersons
  },
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
