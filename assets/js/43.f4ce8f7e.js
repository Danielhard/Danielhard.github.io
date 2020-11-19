(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{244:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"reacthooks16-13分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reacthooks16-13分析","aria-hidden":"true"}},[t._v("#")]),t._v(" ReactHooks16.13分析")]),t._v(" "),a("h2",{attrs:{id:"为什么会有hooks？解决了什么样的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会有hooks？解决了什么样的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么会有hooks？解决了什么样的问题")]),t._v(" "),a("p",[t._v("react组件中，function组件只能作为UI组件，没有生命周期等功能。没有"),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/react-api.html#reactcomponent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Component")]),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("的功能全面，所以出现了hooks。")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("Hook")]),t._v(" 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。")])]),t._v(" "),a("p",[a("strong",[t._v("Hook 使你在非 class 的情况下可以使用更多的 React 特性。")]),t._v(" 从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。Hook 提供了问题的解决方案，无需学习复杂的函数式或响应式编程技术。")]),t._v(" "),a("h2",{attrs:{id:"hooks的基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks的基本用法","aria-hidden":"true"}},[t._v("#")]),t._v(" Hooks的基本用法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  useState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义state")]),t._v("\n  useEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生命周期")]),t._v("\n  useCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对你的函数做一个缓存")]),t._v("\n  useMemo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对值缓存")]),t._v("\n  useRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ref功能")]),t._v("\n  useContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// context api")]),t._v("\n  useReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// redux把它内置了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n")])])]),a("h3",{attrs:{id:"usestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usestate","aria-hidden":"true"}},[t._v("#")]),t._v(" useState")]),t._v(" "),a("p",[a("code",[t._v("useState")]),t._v(" 就是一个 "),a("em",[t._v("Hook")]),t._v(" （等下我们会讲到这是什么意思）。通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。"),a("code",[t._v("useState")]),t._v(" 会返回一对值："),a("strong",[t._v("当前")]),t._v("状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 "),a("code",[t._v("this.setState")]),t._v("，但是它不会把新的 state 和旧的 state 进行合并。（我们会在"),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-state.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 State Hook"),a("OutboundLink")],1),t._v(" 里展示一个对比 "),a("code",[t._v("useState")]),t._v(" 和 "),a("code",[t._v("this.state")]),t._v(" 的例子）。")]),t._v(" "),a("p",[a("strong",[t._v("可以在一个组件中多次使用 State Hook:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExampleWithManyStates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明多个 state 变量！")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fruit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setFruit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'banana'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("todos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setTodos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Learn Hooks'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring",target:"_blank",rel:"noopener noreferrer"}},[t._v("数组解构"),a("OutboundLink")],1),t._v("的语法让我们在调用 "),a("code",[t._v("useState")]),t._v(" 时可以给 state 变量取不同的名字。当然，这些名字并不是 "),a("code",[t._v("useState")]),t._v(" API 的一部分。React 假设当你多次调用 "),a("code",[t._v("useState")]),t._v(" 的时候，你能保证每次渲染时它们的调用顺序是不变的。后面我们会再次解释它是如何工作的以及在什么场景下使用。")]),t._v(" "),a("h4",{attrs:{id:"usestate的3个阶段："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usestate的3个阶段：","aria-hidden":"true"}},[t._v("#")]),t._v(" useState的3个阶段：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("mountState")])]),t._v(" "),a("li",[a("p",[t._v("dispatchAction")])]),t._v(" "),a("li",[a("p",[t._v("updateState")])])]),t._v(" "),a("h4",{attrs:{id:"mountstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mountstate","aria-hidden":"true"}},[t._v("#")]),t._v(" mountState")]),t._v(" "),a("p",[t._v("第一次执行函数体的时候，调用useState会执行mountState，它主要做了以下几件事情：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("默认值是function，执行function，\n得到初始state")])]),t._v(" "),a("li",[a("p",[t._v("state是存放在memoizedState属性中")])]),t._v(" "),a("li",[a("p",[t._v("新建一个quene")])]),t._v(" "),a("li",[a("p",[t._v("把queue传递给dispatch")])]),t._v(" "),a("li",[a("p",[t._v("返回默认值和dispatch")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/sourceCode/reactHooks/1599015103659_26FDC7F7-864A-4822-B79D-B5A271DD6169.png",alt:"1599015103659_26FDC7F7-864A-4822-B79D-B5A271DD6169"}})]),t._v(" "),a("h4",{attrs:{id:"调用dispatch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用dispatch","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用dispatch")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建一个update")])]),t._v(" "),a("li",[a("p",[t._v("update添加到quene里")])]),t._v(" "),a("li",[a("p",[t._v("如果当前有时间，提前计算出最新的state， 保存在eagerState")])]),t._v(" "),a("li",[a("p",[t._v("调用一次scheduleWork")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/sourceCode/reactHooks/1599015195278_7F137358-D3DA-46A6-A6AC-2D717F437365.png",alt:"1599015195278_7F137358-D3DA-46A6-A6AC-2D717F437365"}})]),t._v(" "),a("p",[t._v("调用一次scheduleWork，执行render")]),t._v(" "),a("p",[a("img",{attrs:{src:"/sourceCode/reactHooks/1599015201853_E4A8CDB2-819B-4C0E-AC15-8DFEDC7AC9B6.png",alt:"1599015201853_E4A8CDB2-819B-4C0E-AC15-8DFEDC7AC9B6"}})]),t._v(" "),a("h4",{attrs:{id:"updatestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updatestate","aria-hidden":"true"}},[t._v("#")]),t._v(" updateState")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("递归执行quene里的update")])]),t._v(" "),a("li",[a("p",[t._v("计算最新的state，赋值给memoizedState")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/sourceCode/reactHooks/1599015303487_BDCB348F-C494-4130-A570-1C27B8CDDEA3.png",alt:"1599015303487_BDCB348F-C494-4130-A570-1C27B8CDDEA3"}})]),t._v(" "),a("h3",{attrs:{id:"useeffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useeffect","aria-hidden":"true"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),a("p",[t._v("你之前可能已经在 React 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”。")]),t._v(" "),a("p",[a("code",[t._v("useEffect")]),t._v(" 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 "),a("code",[t._v("componentDidMount")]),t._v("、"),a("code",[t._v("componentDidUpdate")]),t._v(" 和 "),a("code",[t._v("componentWillUnmount")]),t._v(" 具有相同的用途，只不过被合并成了一个 API。（我们会在"),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-effect.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Effect Hook"),a("OutboundLink")],1),t._v(" 里展示对比 "),a("code",[t._v("useEffect")]),t._v(" 和这些方法的例子。）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// didMount + didUpdate + willUnMount 3个生命周期的结合")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只有第一次执行App()函数的时候才会执行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// didMount")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onScroll")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onScroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return一个函数==>willUnMount")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onScroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每次重新render的时候都会执行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不建议这么写")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// didMount + name变化，didUpdate")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只有第一次执行App()函数的时候才会执行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// age变化的时候，回调才会执行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// didUpdate")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只有第一次执行App()函数的时候才会执行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// age变化的时候，回调才会执行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// didUpdate")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"useeffect的2个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useeffect的2个阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" useEffect的2个阶段")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("MountEffect")])]),t._v(" "),a("li",[a("p",[t._v("UpdateEffect")])])]),t._v(" "),a("h4",{attrs:{id:"mounteffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounteffect","aria-hidden":"true"}},[t._v("#")]),t._v(" MountEffect")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("处理依赖数组")])]),t._v(" "),a("li",[a("p",[t._v("设置effectTag")])]),t._v(" "),a("li",[a("p",[t._v("新增一个Effect到currentlyRenderingFiber .updateQueue 中参与到 compleleRoot中")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/sourceCode/reactHooks/1599016353014_11EC65D1-CA96-4A83-A77A-40519A5A749D.png",alt:"1599016353014_11EC65D1-CA96-4A83-A77A-40519A5A749D"}})]),t._v(" "),a("p",[t._v("deps传值null，或者不传，每次都会调用。一定要写依赖数组。")]),t._v(" "),a("h4",{attrs:{id:"mounteffect执行时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounteffect执行时机","aria-hidden":"true"}},[t._v("#")]),t._v(" MountEffect执行时机")]),t._v(" "),a("p",[t._v("在commitRoot =>commitLayoutEffects => commitLifeCycles =>commitHookEffectListMount里执行MountEffect")]),t._v(" "),a("p",[a("img",{attrs:{src:"/sourceCode/reactHooks/1599030681636_00AB68AD-1F33-4B3F-81E1-C9995B501408.png",alt:"1599030681636_00AB68AD-1F33-4B3F-81E1-C9995B501408"}})]),t._v(" "),a("h4",{attrs:{id:"updateeffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updateeffect","aria-hidden":"true"}},[t._v("#")]),t._v(" UpdateEffect")]),t._v(" "),a("ol",[a("li",[t._v("设置EffectTag")]),t._v(" "),a("li",[t._v("对比依赖是否发生变化， 如不一样，则重新push一个新的Effect")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/sourceCode/reactHooks/1599030758962_63054D50-089A-45FA-A6A3-F39647392454.png",alt:"1599030758962_63054D50-089A-45FA-A6A3-F39647392454"}})]),t._v(" "),a("h4",{attrs:{id:"distory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distory","aria-hidden":"true"}},[t._v("#")]),t._v(" distory")]),t._v(" "),a("p",[t._v("在commitUnmount阶段卸载组件，这时distory方法会被调用")]),t._v(" "),a("p",[a("img",{attrs:{src:"/sourceCode/reactHooks/1599030851066_EAFE4139-0460-4B3E-B82F-B9B4234D4DED.png",alt:"1599030851066_EAFE4139-0460-4B3E-B82F-B9B4234D4DED"}})]),t._v(" "),a("h2",{attrs:{id:"hooks遇到的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks遇到的坑","aria-hidden":"true"}},[t._v("#")]),t._v(" hooks遇到的坑")]),t._v(" "),a("ol",[a("li",[t._v("capture value。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ageRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("改变age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("code",[t._v("output")]),t._v("==>20。是js的闭包导致的，不是react hooks产生的问题")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("死循环")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("addCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("解决方法==>get,断掉多重依赖")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 既可以传值，也可以传函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("怎么避免子组件无意义的渲染")])]),t._v(" "),a("p",[t._v("function没有shouldComponentUpdate方法子组件")]),t._v(" "),a("p",[t._v("React.memo + useCallback包裹传递的function")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("memo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("同时调setName， setAge，会render两次，怎么解决这个问题")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" unstable_batchedUpdates "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" batchedUpdates "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-dom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//强制批处理")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("batchedUpdates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4545")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ddd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("怎么完全分离 didMount 和 didUpdate?")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isUpdate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isUpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      isUpdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ******")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);