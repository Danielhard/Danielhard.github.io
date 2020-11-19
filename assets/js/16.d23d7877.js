(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{216:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"资源加载过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#资源加载过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源加载过程")]),t._v(" "),r("p",[t._v("用一句话概括就是： JS 全阻塞，CSS 半阻塞。")]),t._v(" "),r("blockquote",[r("p",[t._v("JS 会阻塞后续 DOM 解析以及其它资源(如 CSS，JS 或图片资源)的加载。")])]),t._v(" "),r("blockquote",[r("p",[t._v("CSS 不会阻塞后续 DOM 结构的解析，不会阻塞其它资源(如图片)的加载，但是会阻塞 JS 文件的加载。\nJS 代码在执行前，浏览器必须保证在 JS 之前的所有 CSS 样式都解析完成，不然不就乱套了，前面的 CSS 样式可能会覆盖 JS 文件中定义的元素样式，这是 CSS 阻塞后续 JS 执行的根本原因。")])]),t._v(" "),r("p",[t._v("开发的时候应该尽可能地:\n1.将样式或 CSS 文件定义在 head 中，并且在处理此类请求的时候应该尽快能够响应(CDN 什么的)，如果像上面请求一个 CSS 文件都要 10s 的话，那你这页面估计没多少人有耐心等下去。\n2.将 JS 脚本文件放在 body 底部，让 DOM 结构能优先渲染出来，避免 DOM 被阻塞。\n当编写比较耗时的 JS 代码时候尽可能使用异步的方式进行加载，比如 setTimeout, ajax 等等，同样也是为了避免页面渲染耗时过长，影响用户体验。")]),t._v(" "),r("blockquote",[r("p",[t._v("现代浏览器很聪明，会进行 prefetch 优化，浏览器在获得 html 文档之后会对页面上引用的资源进行提前下载。(注意仅仅只是提前下载)")])]),t._v(" "),r("h2",{attrs:{id:"其他："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他：","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他：")]),t._v(" "),r("p",[t._v("上面介绍了 JS 会阻塞后续 DOM 解析以及其它资源(如 CSS，JS 或图片资源)的加载，这是在没有考虑到 defer, async 的情况下。")]),t._v(" "),r("p",[t._v("当浏览器碰到 script 脚本的时候：(不考虑浏览器的 prefetch)")]),t._v(" "),r("p",[t._v("没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，当然还得等待前面的 CSS 文件渲染完。\n"),r("script",{attrs:{async:"",src:"script.js"}})]),t._v(" "),r("p",[t._v("有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行(下载异步，执行同步)。\n"),r("script",{attrs:{defer:"",src:"script.js"}})]),t._v(" "),r("p",[t._v("有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。\n从使用的角度来看，首先把脚本丢到 body 底部是比较好的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。")]),t._v(" "),r("h2",{attrs:{id:"总结："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结：","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结：")]),t._v(" "),r("p",[t._v("由于现代浏览器都存在 prefetch，所以 defer, async 可能并没有太多的用途，可以作为了解扩展知识，仅仅将脚本文件放到 body 底部就可以起到很不错的优化效果。\ndefer 和 async 都是异步加载脚本文件。\n慎用 async，因为它完全不考虑依赖关系，只要下载完后就加载，不考虑此时页面样式先后的加载顺序，不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：Google Analytics。\n耗时较长的脚本代码可以使用 defer 来推迟执行。")])])}),[],!1,null,null,null);e.default=a.exports}}]);