"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),_remote=require("@electron/remote"),_propTypes=_interopRequireDefault(require("prop-types")),_mobxReact=require("mobx-react"),_mobx=require("mobx"),_reactJss=_interopRequireDefault(require("react-jss")),_reactIntl=require("react-intl"),_lodash=require("lodash"),_index=require("../../components/ui/input/index"),_headline=require("../../components/ui/headline"),_Modal=_interopRequireDefault(require("../../components/ui/Modal")),_store=require("./store"),_ServicesStore=_interopRequireDefault(require("../../stores/ServicesStore")),_jsxRuntime=require("react/jsx-runtime");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const messages=(0,_reactIntl.defineMessages)({title:{id:"feature.quickSwitch.title",defaultMessage:[{type:0,value:"QuickSwitch"}]},search:{id:"feature.quickSwitch.search",defaultMessage:[{type:0,value:"Search..."}]},info:{id:"feature.quickSwitch.info",defaultMessage:[{type:0,value:"Select a service with TAB, ↑ and ↓. Open a service with ENTER."}]}}),styles=e=>({modal:{width:"80%",maxWidth:600,background:e.styleTypes.primary.contrast,paddingTop:30},headline:{fontSize:20,marginBottom:20,marginTop:-27},services:{width:"100%",maxHeight:"50vh",overflowX:"hidden",overflowY:"auto"},service:{background:e.styleTypes.primary.contrast,color:e.colorText,borderRadius:6,padding:"3px 25px",marginBottom:10,display:"flex",alignItems:"center","&:last-child":{marginBottom:0},"&:hover":{cursor:"pointer"}},activeService:{background:`${e.styleTypes.primary.accent} !important`,color:e.styleTypes.primary.contrast,cursor:"pointer"},serviceIcon:{width:50,height:50,paddingRight:20,objectFit:"contain"}});class QuickSwitchModal extends _react.Component{constructor(e){super(e),this.state={selected:0,search:"",wasPrevVisible:!1},this.ARROW_DOWN=40,this.ARROW_UP=38,this.ENTER=13,this.TAB=9,this.inputRef=(0,_react.createRef)(),this.serviceElements={},this._handleKeyDown=this._handleKeyDown.bind(this),this._handleSearchUpdate=this._handleSearchUpdate.bind(this),this._handleVisibilityChange=this._handleVisibilityChange.bind(this),this.openService=this.openService.bind(this),(0,_mobx.reaction)((()=>_store.state.isModalVisible),(()=>{this._handleVisibilityChange()}))}componentDidMount(){document.addEventListener("keydown",this._handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this._handleKeyDown)}services(){let e=[];if(this.state.search&&(0,_lodash.compact)((0,_lodash.invoke)(this.state.search,"match",/^[\da-z]/i)).length>0)e=this.props.stores.services.allDisplayed,e=e.filter((e=>-1!==e.name.toLowerCase().search(this.state.search.toLowerCase())));else if(this.props.stores.services.allDisplayed.length>0){const s=this.props.stores.services.active;s&&e.push(s);for(const s of this.props.stores.services.lastUsedServices){const t=this.props.stores.services.one(s);t&&!e.includes(t)&&e.push(t)}for(const s of this.props.stores.services.allDisplayed)e.includes(s)||e.push(s)}return e}openService(e){const s=this.services()[e];this.props.actions.service.setActive({serviceId:s.id}),this.setState({selected:0,search:""}),this.close()}changeSelected(e){this.setState((s=>{let t=s.selected+e;const i=this.services().length;s.selected<1&&-1===e?t=i-1:s.selected>=i-1&&1===e&&(t=0);const r=this.serviceElements[t];return r&&r.scrollIntoViewIfNeeded(!1),{selected:t}}))}_handleKeyDown(e){if(_store.state.isModalVisible)switch(e.keyCode){case this.ARROW_DOWN:this.changeSelected(1);break;case this.TAB:e.shiftKey?this.changeSelected(-1):this.changeSelected(1);break;case this.ARROW_UP:this.changeSelected(-1);break;case this.ENTER:this.openService(this.state.selected)}}_handleSearchUpdate(e){this.setState({search:e.target.value})}_handleVisibilityChange(){const{isModalVisible:e}=_store.state;e&&!this.state.wasPrevVisible?((0,_remote.getCurrentWindow)().blurWebView(),(0,_remote.getCurrentWindow)().webContents.focus(),setTimeout((()=>{this.inputRef.current&&this.inputRef.current.querySelectorAll("input")[0].focus()}),10),this.setState({wasPrevVisible:!0})):!e&&this.state.wasPrevVisible&&(setTimeout((()=>{this.inputRef.current&&this.inputRef.current.querySelectorAll("input")[0].blur()}),100),this.setState({wasPrevVisible:!1}))}close(){_store.state.isModalVisible=!1}render(){const{isModalVisible:e}=_store.state,{openService:s}=this,{classes:t}=this.props,i=this.services(),{intl:r}=this.props;return(0,_jsxRuntime.jsxs)(_Modal.default,{isOpen:e,className:`${t.modal} quick-switch`,shouldCloseOnOverlayClick:!0,close:this.close.bind(this),children:[(0,_jsxRuntime.jsx)(_headline.H1,{className:t.headline,children:r.formatMessage(messages.title)}),(0,_jsxRuntime.jsx)("div",{ref:this.inputRef,children:(0,_jsxRuntime.jsx)(_index.Input,{placeholder:r.formatMessage(messages.search),focus:!0,value:this.state.search,onChange:this._handleSearchUpdate})}),(0,_jsxRuntime.jsx)("div",{className:t.services,children:i.map(((e,i)=>(0,_jsxRuntime.jsxs)("div",{className:`${t.service} ${this.state.selected===i?`${t.activeService} active`:""} service`,onClick:()=>s(i),ref:e=>{this.serviceElements[i]=e},children:[(0,_jsxRuntime.jsx)("img",{src:e.icon,className:t.serviceIcon,alt:e.recipe.name}),(0,_jsxRuntime.jsx)("div",{children:e.name})]},e.id)))}),(0,_jsxRuntime.jsxs)("p",{children:[(0,_jsxRuntime.jsx)("br",{}),r.formatMessage(messages.info)]})]})}}QuickSwitchModal.propTypes={classes:_propTypes.default.object.isRequired},QuickSwitchModal.propTypes={stores:_propTypes.default.shape({services:_propTypes.default.instanceOf(_ServicesStore.default).isRequired}).isRequired,actions:_propTypes.default.shape({service:_propTypes.default.instanceOf(_ServicesStore.default).isRequired}).isRequired,classes:_propTypes.default.object.isRequired};var _default=(0,_reactIntl.injectIntl)((0,_reactJss.default)(styles,{injectTheme:!0})((0,_mobxReact.inject)("stores","actions")((0,_mobxReact.observer)(QuickSwitchModal))));exports.default=_default;