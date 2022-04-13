"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),_propTypes=_interopRequireDefault(require("prop-types")),_mobxReact=require("mobx-react"),_reactIntl=require("react-intl"),_reactJss=_interopRequireDefault(require("react-jss")),_classnames=_interopRequireDefault(require("classnames")),_index=require("../ui/input/index"),_index2=require("../ui/button/index"),_badge=require("../ui/badge"),_Modal=_interopRequireDefault(require("../ui/Modal")),Infobox=_interopRequireWildcard(require("../ui/Infobox")),_Appear=_interopRequireDefault(require("../ui/effects/Appear")),_globalMessages=_interopRequireDefault(require("../../i18n/globalMessages")),_config=require("../../config"),_jsxRuntime=require("react/jsx-runtime");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:s})(e)}function _interopRequireWildcard(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(s);if(t&&t.has(e))return t.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var n=a?Object.getOwnPropertyDescriptor(e,r):null;n&&(n.get||n.set)?Object.defineProperty(i,r,n):i[r]=e[r]}return i.default=e,t&&t.set(e,i),i}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const SLACK_ID="slack",messages=(0,_reactIntl.defineMessages)({headline:{id:"setupAssistant.headline",defaultMessage:[{type:0,value:"Let's get started"}]},subHeadline:{id:"setupAssistant.subheadline",defaultMessage:[{type:0,value:"Choose from our most used services and get back on top of your messaging now."}]},submitButtonLabel:{id:"setupAssistant.submit.label",defaultMessage:[{type:0,value:"Let's go"}]},inviteSuccessInfo:{id:"invite.successInfo",defaultMessage:[{type:0,value:"Invitations sent successfully"}]}});let transition="none";window&&window.matchMedia("(prefers-reduced-motion: no-preference)")&&(transition="all 0.25s");const styles=e=>({root:{width:"500px !important",textAlign:"center",padding:20,"& h1":{}},servicesGrid:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},serviceContainer:{background:e.colorBackground,position:"relative",width:"32%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:20,borderRadius:e.borderRadius,marginBottom:10,opacity:.5,transition:transition,border:[3,"solid","transparent"],"& h2":{margin:[10,0,0],color:e.colorText},"&:hover":{border:[3,"solid",e.brandPrimary],"& $serviceIcon":{}}},selected:{border:[3,"solid",e.brandPrimary],background:`${e.brandPrimary}47`,opacity:1},serviceIcon:{width:50,transition:transition},slackModalContent:{textAlign:"center","& img":{width:50,marginBottom:20}},modalActionContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},ctaCancel:{background:"none !important"},slackBadge:{position:"absolute",bottom:4,height:"auto",padding:"0px 4px",borderRadius:e.borderRadiusSmall,margin:0,display:"flex",overflow:"hidden"},clearSlackWorkspace:{background:e.inputPrefixColor,marginLeft:5,height:"100%",color:e.colorText,display:"inline-flex",justifyContent:"center",alignItems:"center",marginRight:-4,padding:[0,5]}});class SetupAssistant extends _react.Component{constructor(...e){super(...e),this.state={services:[{id:"whatsapp"},{id:"messenger"},{id:"gmail"}],isSlackModalOpen:!1,slackWorkspace:""}}slackWorkspaceHandler(){const{slackWorkspace:e="",services:s}=this.state,t=e.trim().replace(/^https?:\/\//,"");if(t){if(-1===s.findIndex((e=>"slack"===e.id))){const e=s;e.push({id:"slack",team:t}),this.setState({services:e})}}this.setState({isSlackModalOpen:!1,slackWorkspace:t})}render(){const{intl:e}=this.props,{classes:s,isInviteSuccessful:t,onSubmit:i,services:a,isSettingUpServices:r}=this.props,{isSlackModalOpen:n,slackWorkspace:o,services:c}=this.state;return(0,_jsxRuntime.jsxs)("div",{className:`auth__container ${s.root}`,children:[this.state.showSuccessInfo&&t&&(0,_jsxRuntime.jsx)(_Appear.default,{children:(0,_jsxRuntime.jsx)(Infobox,{type:"success",icon:"checkbox-marked-circle-outline",dismissable:!0,children:e.formatMessage(messages.inviteSuccessInfo)})}),(0,_jsxRuntime.jsx)("img",{src:"./assets/images/logo.svg",className:"auth__logo",alt:""}),(0,_jsxRuntime.jsx)("h1",{children:e.formatMessage(messages.headline)}),(0,_jsxRuntime.jsx)("h2",{children:e.formatMessage(messages.subHeadline)}),(0,_jsxRuntime.jsx)("div",{className:(0,_classnames.default)("grid",s.servicesGrid),children:Object.keys(a).map((e=>{const t=a[e];return(0,_jsxRuntime.jsxs)("button",{className:(0,_classnames.default)({[s.serviceContainer]:!0,[s.selected]:-1!==this.state.services.findIndex((s=>s.id===e))}),onClick:()=>{const s=this.state.services.findIndex((s=>s.id===e));-1===s?"slack"===e?this.setState({isSlackModalOpen:!0}):c.push({id:e}):(c.splice(s,1),"slack"===e&&this.setState({slackWorkspace:""})),this.setState({services:c})},type:"button",children:[(0,_jsxRuntime.jsx)("img",{src:`${_config.CDN_URL}/recipes/dist/${e}/src/icon.svg`,className:s.serviceIcon,alt:""}),(0,_jsxRuntime.jsx)("h2",{children:t.name}),"slack"===e&&o&&(0,_jsxRuntime.jsxs)(_badge.Badge,{type:"secondary",className:s.slackBadge,children:[o,(0,_jsxRuntime.jsx)("button",{type:"button",className:s.clearSlackWorkspace,onClick:()=>{this.setState({slackWorkspace:""})},children:"x"})]})]},e)}))}),(0,_jsxRuntime.jsx)(_Modal.default,{isOpen:n,close:()=>this.setState({isSlackModalOpen:!1}),children:(0,_jsxRuntime.jsxs)("div",{className:s.slackModalContent,children:[(0,_jsxRuntime.jsx)("img",{src:`${_config.CDN_URL}/recipes/dist/slack/src/icon.svg`,alt:""}),(0,_jsxRuntime.jsx)("h1",{children:"Create your first Slack workspace"}),(0,_jsxRuntime.jsxs)("form",{onSubmit:e=>{e.preventDefault(),this.slackWorkspaceHandler()},children:[(0,_jsxRuntime.jsx)(_index.Input,{suffix:".slack.com",placeholder:"workspace-url",onChange:e=>this.setState({slackWorkspace:e.target.value}),value:o}),(0,_jsxRuntime.jsxs)("div",{className:s.modalActionContainer,children:[(0,_jsxRuntime.jsx)(_index2.Button,{type:"submit",label:e.formatMessage(_globalMessages.default.save)}),(0,_jsxRuntime.jsx)(_index2.Button,{type:"link",buttonType:"secondary",label:e.formatMessage(_globalMessages.default.cancel),className:s.ctaCancel,onClick:()=>this.setState({slackWorkspace:""})})]})]})]})}),(0,_jsxRuntime.jsx)(_index2.Button,{type:"button",className:"auth__button",label:e.formatMessage(messages.submitButtonLabel),onClick:()=>i(this.state.services),busy:r,disabled:r||0===c.length})]})}}SetupAssistant.propTypes={classes:_propTypes.default.object.isRequired,onSubmit:_propTypes.default.func.isRequired,isInviteSuccessful:_propTypes.default.bool,services:_propTypes.default.object.isRequired,isSettingUpServices:_propTypes.default.bool.isRequired},SetupAssistant.defaultProps={isInviteSuccessful:!1};var _default=(0,_reactIntl.injectIntl)((0,_reactJss.default)(styles,{injectTheme:!0})((0,_mobxReact.observer)(SetupAssistant)));exports.default=_default;