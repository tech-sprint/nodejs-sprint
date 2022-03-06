const cssHtml = '<span class="token property">width</span><span class="token punctuation">:</span> 7.63rem<span class="token punctuation">;</span>\n<span class="token property">height</span><span class="token punctuation">:</span> 1.25rem<span class="token punctuation">;</span>\n<span class="token property">font-size</span><span class="token punctuation">:</span> 0.88rem<span class="token punctuation">;</span>\n<span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Regular<span class="token punctuation">,</span> PingFang SC<span class="token punctuation">;</span>\n<span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>\n<span class="token property">color</span><span class="token punctuation">:</span> #FBCFE8<span class="token punctuation">;</span>\n<span class="token property">line-height</span><span class="token punctuation">:</span> 1.25rem<span class="token punctuation">;</span>\n'

function exactTransformByConfig(source, config) {
  if (!source) return ''
  return source.replace(/[\d\.]+(rem)|(px)|(vw)|(%)|(ch)/, m => {
    return config[m] || m
  })
}

/** 所有的 rule 都要实现下面两个函数 */
class BaseRule {
  isMatched(cssProperty) {
    return true
  }

  transform(cssProperty) {
    return cssProperty.source
  }
}

class ColorRule extends BaseRule {
  ruleConfig = {
    '#FDF2F8': 'pink-50',
    '#FCE7F3': 'pink-100',
    '#FBCFE8': 'pink-200',
    '#F9A8D4': 'pink-300',
    '#F472B6': 'pink-400',
  }

  isMatched(cssProperty) {
    return ['color', 'border-color', 'border'].includes(cssProperty.property)
  }

  transform(cssProperty) {
    if (cssProperty.source) {
      return cssProperty.source.replace(/#[ABCDEF\d]{6}/, m => {
        return this.ruleConfig[m] || this.ruleConfig[m.toLowerCase()] || m
      })
    }
    return ''
  }
}

const SizeProperties = ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height']

class SizeNamedRemRule extends BaseRule {
  ruleConfig = {
    '100%': 'full',
    '100vw': 'screen',
    '65ch': 'prose',
    '20rem': 'xs',
    '24rem': 'sm',
    '28rem': 'md',
    '32rem': 'lg',
    '36rem': 'xl',
    '42rem': '2xl',
    '48rem': '3xl',
    '640px': 'screen-sm',
    '768px': 'screen-md',
    '1024px': 'screen-lg',
    '1280px': 'screen-xl',
    '1536px': 'screen-2xl',
  }

  isMatched(cssProperty) {
    return SizeProperties.includes(cssProperty.property)
  }

  transform(cssProperty) {
    return exactTransformByConfig(cssProperty.source, this.ruleConfig)
  }
}

class BorderRadiusNamedRule extends BaseRule {
  ruleConfig = {
    '0px': 'none',
    '0.125rem': 'sm',
    '0.25rem': 'default',
    '0.375rem': 'md',
    '0.5rem': 'lg',
    '0.75rem': 'xl',
    '1rem': '2xl',
    '1.5rem': '3xl',
    '2rem': '4xl',
    '50%': '1/2',
  }

  isMatched(cssProperty) {
    return ['border-radius'].includes(cssProperty.property)
  }

  transform(cssProperty) {
    return exactTransformByConfig(cssProperty.source, this.ruleConfig)
  }
}

class NumberRemRule extends BaseRule {
  isMatched(cssProperty) {
    return true
  }

  transform(cssProperty) {
    if (cssProperty.source) {
      const source = cssProperty.source.replace(/([\d\.]+)rem/, (m, g1) => {
        return g1 / 0.25
      })
      return source
      // TODO: 百分比小数转分数
      // return source.replace(/([\d\.]?)%/, (m, g1) => {
      //   return g1 / 0.25
      // })
    }
    return ''
  }
}

const Rules = [
  new ColorRule(),
  new SizeNamedRemRule(),
  new BorderRadiusNamedRule(),
  // 因为会对所有 rem 值转化，所以优先级最低，放在最后
  new NumberRemRule(),
]

// <span class="token punctuation">;</span>\n 行拆分
const Separator = '<span class="token punctuation">;</span>\n'
/** 单个 CSS 属性 */
// <span class="token property">width</span><span class="token punctuation">:</span> 7.63rem<span class="token punctuation">;\n
class CssProperty {
  constructor(source) {
    this.source = `${source}${Separator}`
    const matched = this.source.match(/\<span class="token property"\>([\w-]+)\<\/span\>/)
    if (matched) {
      this.property = matched[1]
    }
    this.rules = Rules.filter(rule => rule.isMatched(this))
  }

  transform() {
    this.rules.forEach(rule => {
      this.source = rule.transform(this)
    })
  }
}

function transform(cssHtml) {
  // parser
  const cssPropertyList = cssHtml.split(Separator).filter(e => e).map(e => new CssProperty(e))

  // transform
  cssPropertyList.forEach(cssProperty => {
    cssProperty.transform()
  })
  const rt = cssPropertyList.map(e => e.source).join('')
  return rt
}

const transformedSource = transform(cssHtml)

console.log(transformedSource)
