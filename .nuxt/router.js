import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8af3ed32 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _3527277c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _97eb0a4a = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _54df0241 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7bb14388 = () => interopDefault(import('../pages/-post.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _8af3ed32,
    name: "404"
  }, {
    path: "/about",
    component: _3527277c,
    name: "about"
  }, {
    path: "/projects",
    component: _97eb0a4a,
    name: "projects"
  }, {
    path: "/",
    component: _54df0241,
    name: "index"
  }, {
    path: "/posts/:postName",
    component: _7bb14388,
    props: true,
    name: "posts"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
