exports.ids = [8];
exports.modules = {

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c3ae9ce0", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/adamrashid.2319a22.svg";

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_id_61f025e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_id_61f025e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_id_61f025e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_id_61f025e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_id_61f025e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".navbar[data-v-61f025e0]{background-color:transparent}.navbar-item[data-v-61f025e0]{color:#6f65ab;font-size:20px;text-transform:uppercase}@media screen and (max-width:1023px){.navbar-end .navbar-item[data-v-61f025e0]{color:#221284;padding:12px 24px;text-decoration:none}.navbar-end .navbar-item[data-v-61f025e0]:active,.navbar-end .navbar-item[data-v-61f025e0]:hover{background-color:#dedee9}.navbar-menu[data-v-61f025e0]{border-radius:6px}}.navbar-item[data-v-61f025e0]:focus,.navbar-item[data-v-61f025e0]:hover,.navbar-item[focus-within][data-v-61f025e0]{color:#221284;background-color:transparent;background-color:initial}.navbar-item[data-v-61f025e0]:focus,.navbar-item[data-v-61f025e0]:focus-within,.navbar-item[data-v-61f025e0]:hover{color:#221284;background-color:transparent;background-color:initial}nav[data-v-61f025e0]{padding-top:36px;padding-bottom:36px}a.nuxt-link-exact-active[data-v-61f025e0]{color:#221284;text-decoration:underline;text-underline-offset:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheNavbar.vue?vue&type=template&id=61f025e0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar",attrs:{"role":"navigation","aria-label":"main navigation"}},[_vm._ssrNode("<div class=\"navbar-brand\" data-v-61f025e0>","</div>",[_c('NuxtLink',{staticClass:"navbar-item",attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(42),"alt":"Site Logo"}})]),_vm._ssrNode(" <a role=\"button\" aria-label=\"menu\" aria-expanded=\"false\" data-target=\"navbarBasicExample\""+(_vm._ssrClass("navbar-burger",{ 'is-active': _vm.isVisible }))+" data-v-61f025e0><span aria-hidden=\"true\" data-v-61f025e0></span> <span aria-hidden=\"true\" data-v-61f025e0></span> <span aria-hidden=\"true\" data-v-61f025e0></span></a>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"navbarBasicExample\""+(_vm._ssrClass("navbar-menu",{ 'is-active': _vm.isVisible }))+" data-v-61f025e0>","</div>",[_vm._ssrNode("<div class=\"navbar-end\" data-v-61f025e0>","</div>",[_c('NuxtLink',{staticClass:"navbar-item",attrs:{"to":"/"}},[_c('strong',[_vm._v("Blog")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"navbar-item",attrs:{"to":"/projects"}},[_c('strong',[_vm._v("Projects")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"navbar-item",attrs:{"to":"/about"}},[_c('strong',[_vm._v("About")])])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheNavbar.vue?vue&type=template&id=61f025e0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheNavbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheNavbarvue_type_script_lang_js_ = ({
  data() {
    return {
      isVisible: false
    };
  },

  methods: {
    toggleMenu() {
      this.isVisible = !this.isVisible;
    }

  }
});
// CONCATENATED MODULE: ./components/TheNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheNavbarvue_type_script_lang_js_ = (TheNavbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheNavbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheNavbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "61f025e0",
  "19a49752"
  
)

/* harmony default export */ var TheNavbar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=the-navbar.js.map