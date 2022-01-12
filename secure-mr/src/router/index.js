import Vue from 'vue'
import VueRouter from 'vue-router'
import PssEmitDocument from "../views/pss/PssEmitDocument"
import PssHome from '../views/pss/PssHome'
import AffiliateHome from '../views/affiliate/AffiliateHome'
import AffiliateBrowseDocuments from '../views/affiliate/AffiliateBrowseDocuments'
import DocumentAccessListPersons from '../views/affiliate/AffiliateBrowseDocumentAccessPersons'
import AffiliateAddTrustedPersons from '../views/affiliate/AffiliateAddTrustedPersons'
import PssBrowsePatient from '../views/pss/PssBrowsePatient'
import PssBrowseDocuments from '../views/pss/PssBrowseDocuments'
//import Login from '../views/login/Login'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/login/',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/pss',
    name: 'PssHome',
    component: PssHome,
    meta: {requiresAuth: true},
    children: [
      {
        path: 'emitDocument',
        name: 'PssEmitDocument',
        component: PssEmitDocument,
      },
      {
        path: 'affiliate/browse/affiliateselect',
        name: "PssBrowsePatient",
        component: PssBrowsePatient,
      },
      {
        path: 'affiliate/browse/documents',
        name: "PssBrowseDocuments",
        component: PssBrowseDocuments,
      },
    ]
  },
  {
    path: "/affiliate",
    name: 'AffiliateHome',
    component: AffiliateHome,
    meta: {requiresAuth: true},
    children: [
      {
        path: 'documents',
        name: "Consulta de Documentos",
        component: AffiliateBrowseDocuments,
      },
      {
        path: 'accessListPersons',
        name: "DocumentAccessListPersons",
        component: DocumentAccessListPersons,
      },
      {
        path: 'addtrustedpersons',
        name: "AffiliateAddTrustedPersons",
        component: AffiliateAddTrustedPersons,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
