import Vue from 'vue'
import VueRouter from 'vue-router'
import EmitDocumentArs from "../views/pss/PssEmitDocument"
import PssHome from '../views/pss/PssHome'
import AffiliateHome from '../views/affiliate/AffiliateHome'
import AffiliateBrowseDocuments from '../views/affiliate/AffiliateBrowseDocuments'
import DocumentAccessListPersons from '../views/affiliate/AffiliateBrowseDocumentAccessPersons'
import AffiliateBrowseTrustedPersons from '../views/affiliate/AffiliateBrowseTrustedPersons'
import AffiliateAddTrustedPersons from '../views/affiliate/AffiliateAddTrustedPersons'
import PssBrowsePatient from '../views/pss/PssBrowsePatient'
import PssBrowseDocuments from '../views/pss/PssBrowseDocuments'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PssHome',
    component: PssHome,
    meta: {requiresAuth: true}
  },
  {
    path: '/affiliate/home',
    name: 'AffiliateHome',
    component: AffiliateHome,
    meta: {requiresAuth: true}
  },
  {
    path: '/pss/emitDocumentArs',
    name: 'EmitDocumentArs',
    component: EmitDocumentArs,
    meta: {requiresAuth: true}
  }, 
  {
    path: '/affiliate/documents',
    name: "Consulta de Documentos",
    component: AffiliateBrowseDocuments,
    meta: {requiresAuth: true}
  },
  {
    path: '/affiliate/accessListPersons',
    name: "DocumentAccessListPersons",
    component: DocumentAccessListPersons,
    meta: {requiresAuth: true}
  },
  {
    path: '/affiliate/browsetrustedpersons',
    name: "BrowseTrustedPersons",
    component: AffiliateBrowseTrustedPersons
  },
  {
    path: '/affiliate/addtrustedpersons',
    name: "AffiliateAddTrustedPersons",
    component: AffiliateAddTrustedPersons,
    meta: {requiresAuth: true}
  },
  {
    path: '/pss/affiliate/browse/affiliateselect',
    name: "PssBrowsePatient",
    component: PssBrowsePatient,
    meta: {requiresAuth: true}
  },
  {
    path: '/pss/affiliate/browse/documents',
    name: "PssBrowseDocuments",
    component: PssBrowseDocuments,
    meta: {requiresAuth: true}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
