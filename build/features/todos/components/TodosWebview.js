"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),_propTypes=_interopRequireDefault(require("prop-types")),_mobxReact=require("mobx-react"),_reactJss=_interopRequireDefault(require("react-jss")),_reactElectronWebView=_interopRequireDefault(require("react-electron-web-view")),_classnames=_interopRequireDefault(require("classnames")),_config=require("../../../config"),_jsxRuntime=require("react/jsx-runtime");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const styles=e=>({root:{background:e.colorBackground,position:"relative",borderLeft:[1,"solid",e.todos.todosLayer.borderLeftColor],zIndex:300,transform:({isVisible:e,width:s,isTodosServiceActive:t})=>`translateX(${e||t?0:s}px)`,"& webview":{height:"100%"}},resizeHandler:{position:"absolute",left:0,marginLeft:-5,width:10,zIndex:400,cursor:"col-resize"},dragIndicator:{position:"absolute",left:0,width:5,zIndex:400,background:e.todos.dragIndicator.background},isTodosServiceActive:{width:"calc(100% - 368px)",position:"absolute",right:0,zIndex:0,borderLeftWidth:0},hidden:{borderLeftWidth:0}});class TodosWebview extends _react.Component{constructor(...e){super(...e),this.state={isDragging:!1,width:300},this.startResize=e=>{this.setState({isDragging:!0,initialPos:e.clientX,delta:0})}}componentDidMount(){this.setState({width:this.props.width}),this.node.addEventListener("mousemove",this.resizePanel.bind(this)),this.node.addEventListener("mouseup",this.stopResize.bind(this)),this.node.addEventListener("mouseleave",this.stopResize.bind(this))}resizePanel(e){const{minWidth:s}=this.props,{isDragging:t,initialPos:i}=this.state;if(t&&Math.abs(e.clientX-window.innerWidth)>s){const s=e.clientX-i;this.setState({delta:s})}}stopResize(){const{resize:e,minWidth:s}=this.props,{isDragging:t,delta:i,width:r}=this.state;if(t){let t=r+(i<0?Math.abs(i):-Math.abs(i));t<s&&(t=s),this.setState({isDragging:!1,delta:0,width:t}),e(t)}}startListeningToIpcMessages(){const{handleClientMessage:e}=this.props;this.webview&&this.webview.addEventListener("ipc-message",(s=>{e({channel:s.channel,message:s.args[0]})}))}render(){const{classes:e,isTodosServiceActive:s,isVisible:t,userAgent:i,todoUrl:r,isTodoUrlValid:o}=this.props,{width:a,delta:d,isDragging:n}=this.state;let l=t?a:0;return s&&(l=null),(0,_jsxRuntime.jsxs)("div",{className:(0,_classnames.default)({[e.root]:!0,[e.isTodosServiceActive]:s,"todos__todos-panel--expanded":s,[e.hidden]:!t}),style:{width:l},onMouseUp:()=>this.stopResize(),ref:e=>{this.node=e},id:"todos-panel",children:[(0,_jsxRuntime.jsx)("div",{className:e.resizeHandler,style:{left:d,...n?{width:600,marginLeft:-200}:{}},onMouseDown:e=>this.startResize(e)}),n&&(0,_jsxRuntime.jsx)("div",{className:e.dragIndicator,style:{left:d}}),o&&(0,_jsxRuntime.jsx)(_reactElectronWebView.default,{className:e.webview,onDidAttach:()=>{const{setTodosWebview:e}=this.props;e(this.webview),this.startListeningToIpcMessages()},partition:_config.TODOS_PARTITION_ID,preload:"./features/todos/preload.js",ref:e=>{this.webview=e?e.view:null},useragent:i,src:r})]})}}TodosWebview.propTypes={classes:_propTypes.default.object.isRequired,isTodosServiceActive:_propTypes.default.bool.isRequired,isVisible:_propTypes.default.bool.isRequired,handleClientMessage:_propTypes.default.func.isRequired,setTodosWebview:_propTypes.default.func.isRequired,resize:_propTypes.default.func.isRequired,width:_propTypes.default.number.isRequired,minWidth:_propTypes.default.number.isRequired,userAgent:_propTypes.default.string.isRequired,todoUrl:_propTypes.default.string.isRequired,isTodoUrlValid:_propTypes.default.bool.isRequired};var _default=(0,_reactJss.default)(styles,{injectTheme:!0})((0,_mobxReact.observer)(TodosWebview));exports.default=_default;