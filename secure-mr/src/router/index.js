import Vue from 'vue'
import VueRouter from 'vue-router'
import EmitDocument from "../views/pss/PssEmitDocument"
import Home from "../views/common/Home"
import AffiliateBrowseDocuments from '../views/affiliate/AffiliateBrowseDocuments'
import DocumentAccessListPersons from '../views/affiliate/AffiliateBrowseDocumentAccessPersons'
import AffiliateBrowseTrustedPersons from '../views/affiliate/AffiliateBrowseTrustedPersons'
import AffiliateAddTrustedPersons from '../views/affiliate/AffiliateAddTrustedPersons'
import PssBrowsePatient from '../views/pss/PssBrowsePatient'
import PssBrowseDocuments from '../views/pss/PssBrowseDocuments'
import AffiliateAddContact from '../views/affiliate/AffiliateAddContact'

import PssBrowseContactRequest from '../views/pss/PssBrowseContactRequest'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: true},
  },
  {
    path: '/pss/emitDocument',
    name: 'EmitDocument',
    component: EmitDocument,
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
  {
    path: '/affiliate/addcontacts',
    name: "AffiliateAddContact",
    component: AffiliateAddContact
  },
  {
    path: '/pss/contacts/requests',
    name: "PssBrowseContactRequest",
    component: PssBrowseContactRequest
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
