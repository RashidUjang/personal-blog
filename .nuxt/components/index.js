export { default as Bulma } from '../../components/Bulma.vue'
export { default as Button } from '../../components/Button.vue'
export { default as HeroIntroduction } from '../../components/HeroIntroduction.vue'
export { default as PostSnippet } from '../../components/PostSnippet.vue'
export { default as PostsList } from '../../components/PostsList.vue'
export { default as SocialLinksSmall } from '../../components/SocialLinksSmall.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheNavbar } from '../../components/TheNavbar.vue'
export { default as Tile } from '../../components/Tile.vue'
export { default as TileContainer } from '../../components/TileContainer.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
