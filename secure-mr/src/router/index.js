import Vue from 'vue'
import VueRouter from 'vue-router'
import EmitDocument from "../views/pss/PssEmitDocument"
import PssHome from '../views/pss/PssHome'
import AffiliateHome from '../views/affiliate/AffiliateHome'
import AffiliateBrowseDocuments from '../views/affiliate/AffiliateBrowseDocuments'
import DocumentAccessListPersons from '../views/affiliate/AffiliateBrowseDocumentAccessPersons'
import AffiliateAddTrustedPersons from '../views/affiliate/AffiliateAddTrustedPersons'
import PssBrowsePatient from '../views/pss/PssBrowsePatient'
import PssBrowseDocuments from '../views/pss/PssBrowseDocuments'
import PssEmitDocumentSelectArs from '../views/pss/PssEmitDocumentSelectArs'
import PssEmitDocumentSelectAffiliate from '../views/pss/PssEmitDocumentSelectAffiliate'
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
    path: '/pss/documents/emit',
    name: 'EmitDocument',
    component: EmitDocument
    
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
  {
    path: '/affiliate/addtrustedpersons',
    name: "AffiliateAddTrustedPersons",
    component: AffiliateAddTrustedPersons
  },
  {
    path: '/pss/affiliate/browse/affiliateselect',
    name: "PssBrowsePatient",
    component: PssBrowsePatient
  },
  {
    path: '/pss/affiliate/browse/documents',
    name: "PssBrowseDocuments",
    component: PssBrowseDocuments
  },
  {
    path: '/pss/documents/create/arsselect',
    name: "PssEmitDocumentSelectArs",
    component: PssEmitDocumentSelectArs
  },
  {
    path: '/pss/documents/create/affiliateselect',
    name: "PssEmitDocumentSelectAffiliate",
    component: PssEmitDocumentSelectAffiliate
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
