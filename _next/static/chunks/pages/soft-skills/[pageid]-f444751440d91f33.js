(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{291:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/soft-skills/[pageid]",function(){return __webpack_require__(6484)}])},7863:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{gG:function(){return ContentEditor_ContentEditor},$_:function(){return Footer},h4:function(){return Header},v2:function(){return Menu}});var jsx_runtime=__webpack_require__(1527);function Header(){return(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsx)(Menu,{})})}var react=__webpack_require__(959),next_link=__webpack_require__(5483),link_default=__webpack_require__.n(next_link),menu_module=__webpack_require__(7097),menu_module_default=__webpack_require__.n(menu_module);function Menu(){return(0,jsx_runtime.jsxs)("nav",{className:menu_module_default().root,children:[(0,jsx_runtime.jsx)(link_default(),{href:"/",children:"Главная"}),(0,jsx_runtime.jsx)(link_default(),{href:"/[[...all]]/test-works",children:"Тестовые задания"}),(0,jsx_runtime.jsx)(link_default(),{href:"/programming",children:"Программирование"}),(0,jsx_runtime.jsx)(link_default(),{href:"/infrastructure",children:"Деплой"}),(0,jsx_runtime.jsx)(link_default(),{href:"/soft-skills",children:"Софт-Скиллы"}),(0,jsx_runtime.jsx)(link_default(),{href:"/api/hello",children:"API"})]})}function Footer(){return(0,jsx_runtime.jsxs)("footer",{className:"footer",children:[(0,jsx_runtime.jsxs)("span",{className:"copyright footer__item",children:["2001 — ",new Date().getFullYear(),","," ","Учу программирование"]}),(0,jsx_runtime.jsx)("span",{className:"feedback footer__item",children:"Пишите"}),(0,jsx_runtime.jsxs)("span",{className:"footer__item",children:["Открытые исходники:",(0,jsx_runtime.jsx)("a",{href:"https://github.com/easy-deep-learning/personal-learn-path",target:"_blank",rel:"noreferrer",children:"github.com/easy-deep-learning/personal-learn-path"})]})]})}var Draft=__webpack_require__(9250);__webpack_require__(4537);let ContentEditor=param=>{let{onSave}=param,[editorState,setEditorState]=(0,react.useState)(Draft.EditorState.createWithContent(emptyContentState));return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Draft.Editor,{editorKey:"editorKey",editorState:editorState,onChange(data){console.log("data: ",data);let content=editorState.getCurrentContent();console.log("content: ",(0,Draft.convertToRaw)(content))}})})},emptyContentState=(0,Draft.convertFromRaw)({entityMap:{},blocks:[{text:"",key:"foo",type:"unstyled",entityRanges:[]}]});var ContentEditor_ContentEditor=ContentEditor},1076:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{k:function(){return PagesLayout}});var jsx_runtime=__webpack_require__(1527);__webpack_require__(959);var head=__webpack_require__(1454),head_default=__webpack_require__.n(head),components=__webpack_require__(7863),main=__webpack_require__(402),pageLayout_module=__webpack_require__(3707),pageLayout_module_default=__webpack_require__.n(pageLayout_module);function PagesLayout(param){let{children}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:pageLayout_module_default().container,children:[(0,jsx_runtime.jsxs)(head_default(),{children:[(0,jsx_runtime.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,jsx_runtime.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,jsx_runtime.jsx)("meta",{name:"description",content:main.W}),(0,jsx_runtime.jsx)("meta",{name:"og:title",content:main.T}),(0,jsx_runtime.jsx)("title",{children:main.T})]}),(0,jsx_runtime.jsx)(components.h4,{}),(0,jsx_runtime.jsx)("main",{children:children})]}),(0,jsx_runtime.jsx)(components.$_,{})]})}},6484:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return SoftSkillPage}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1527),next_head__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1454),next_head__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__),_layouts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1076),__N_SSG=!0;function SoftSkillPage(param){let{pagesData}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts__WEBPACK_IMPORTED_MODULE_2__.k,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_head__WEBPACK_IMPORTED_MODULE_1___default(),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title",{children:[pagesData.date,": ",pagesData.title]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1",{children:[pagesData.date,": ",pagesData.title]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{dangerouslySetInnerHTML:{__html:pagesData.html}})]})]})}},7097:function(module){module.exports={root:"menu_root__5qbU5",item:"menu_item___YTB6",item_active:"menu_item_active___Z85U"}},3707:function(module){module.exports={container:"pageLayout_container__tVnp5",header:"pageLayout_header__CYQ7N",headerImage:"pageLayout_headerImage__8gdjN",headerHomeImage:"pageLayout_headerHomeImage__3_nAO",backToHome:"pageLayout_backToHome__MV_og"}},402:function(module){"use strict";module.exports=JSON.parse('{"W":"My personal learning path","T":"My personal learning path"}')}},function(__webpack_require__){__webpack_require__.O(0,[543,774,888,179],function(){return __webpack_require__(__webpack_require__.s=291)}),_N_E=__webpack_require__.O()}]);