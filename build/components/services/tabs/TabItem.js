"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _class,_descriptor,_descriptor2,_class2,_temp,_remote=require("@electron/remote"),_react=require("react"),_reactIntl=require("react-intl"),_propTypes=_interopRequireDefault(require("prop-types")),_mobxReact=require("mobx-react"),_classnames=_interopRequireDefault(require("classnames")),_reactSortableHoc=require("react-sortable-hoc"),_reactJss=_interopRequireDefault(require("react-jss")),_ms=_interopRequireDefault(require("ms")),_mobx=require("mobx"),_js=require("@mdi/js"),_Service=_interopRequireDefault(require("../../../models/Service")),_environment=require("../../../environment"),_globalMessages=_interopRequireDefault(require("../../../i18n/globalMessages")),_SettingsStore=_interopRequireDefault(require("../../../stores/SettingsStore")),_icon=require("../../ui/icon"),_jsxRuntime=require("react/jsx-runtime");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _initializerDefineProperty(e,s,t,i){t&&Object.defineProperty(e,s,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(i):void 0})}function _applyDecoratedDescriptor(e,s,t,i,a){var r={};return Object.keys(i).forEach((function(e){r[e]=i[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=t.slice().reverse().reduce((function(t,i){return i(e,s,t)||t}),r),a&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(a):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,s,r),r=null),r}function _initializerWarningHelper(e,s){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}const IS_SERVICE_DEBUGGING_ENABLED=(localStorage.getItem("debug")||"").includes("Ferdi:Service"),messages=(0,_reactIntl.defineMessages)({reload:{id:"tabs.item.reload",defaultMessage:[{type:0,value:"Reload"}]},disableNotifications:{id:"tabs.item.disableNotifications",defaultMessage:[{type:0,value:"Disable notifications"}]},enableNotifications:{id:"tabs.item.enableNotification",defaultMessage:[{type:0,value:"Enable notifications"}]},disableAudio:{id:"tabs.item.disableAudio",defaultMessage:[{type:0,value:"Disable audio"}]},enableAudio:{id:"tabs.item.enableAudio",defaultMessage:[{type:0,value:"Enable audio"}]},enableDarkMode:{id:"tabs.item.enableDarkMode",defaultMessage:[{type:0,value:"Enable Dark mode"}]},disableDarkMode:{id:"tabs.item.disableDarkMode",defaultMessage:[{type:0,value:"Disable Dark mode"}]},disableService:{id:"tabs.item.disableService",defaultMessage:[{type:0,value:"Disable service"}]},enableService:{id:"tabs.item.enableService",defaultMessage:[{type:0,value:"Enable service"}]},hibernateService:{id:"tabs.item.hibernateService",defaultMessage:[{type:0,value:"Hibernate service"}]},wakeUpService:{id:"tabs.item.wakeUpService",defaultMessage:[{type:0,value:"Wake up service"}]},deleteService:{id:"tabs.item.deleteService",defaultMessage:[{type:0,value:"Delete service"}]},confirmDeleteService:{id:"tabs.item.confirmDeleteService",defaultMessage:[{type:0,value:"Do you really want to delete the "},{type:1,value:"serviceName"},{type:0,value:" service?"}]}});let pollIndicatorTransition="none",polledTransition="none",pollAnsweredTransition="none";window&&window.matchMedia("(prefers-reduced-motion: no-preference)")&&(pollIndicatorTransition="background 0.5s",polledTransition="background 0.1s",pollAnsweredTransition="background 0.1s");const styles={pollIndicator:{position:"absolute",bottom:2,width:10,height:10,borderRadius:5,background:"gray",transition:pollIndicatorTransition},pollIndicatorPoll:{left:2},pollIndicatorAnswer:{left:14},polled:{background:"yellow !important",transition:polledTransition},pollAnswered:{background:"green !important",transition:pollAnsweredTransition},stale:{background:"red !important"}};let TabItem=(_temp=_class2=class extends _react.Component{constructor(e){super(e),_initializerDefineProperty(this,"isPolled",_descriptor,this),_initializerDefineProperty(this,"isPollAnswered",_descriptor2,this),this.handleShortcutIndex=(e,s=!0)=>{"Shift"===e.key&&this.setState({showShortcutIndex:s})},this.checkForLongPress=e=>{e&&(document.addEventListener("keydown",(e=>{this.handleShortcutIndex(e)})),document.addEventListener("keyup",(e=>{this.handleShortcutIndex(e,!1)})))},this.state={showShortcutIndex:!1},(0,_mobx.reaction)((()=>this.props.stores.settings.app.enableLongPressServiceHint),(()=>{this.checkForLongPress(this.props.stores.settings.app.enableLongPressServiceHint)}))}componentDidMount(){const{service:e,stores:s}=this.props;IS_SERVICE_DEBUGGING_ENABLED&&(0,_mobx.autorun)((()=>{Date.now()-e.lastPoll<(0,_ms.default)("0.2s")&&(this.isPolled=!0,setTimeout((()=>{this.isPolled=!1}),(0,_ms.default)("1s"))),Date.now()-e.lastPollAnswer<(0,_ms.default)("0.2s")&&(this.isPollAnswered=!0,setTimeout((()=>{this.isPollAnswered=!1}),(0,_ms.default)("1s")))})),this.checkForLongPress(s.settings.app.enableLongPressServiceHint)}render(){const{classes:e,service:s,clickHandler:t,shortcutIndex:i,reload:a,toggleNotifications:r,toggleAudio:n,toggleDarkMode:l,deleteService:o,disableService:c,enableService:d,hibernateService:u,wakeUpService:p,openSettings:m,showMessageBadgeWhenMutedSetting:b,showServiceNameSetting:_,showMessageBadgesEvenWhenMuted:f}=this.props,{intl:g}=this.props,v=[{label:s.name||s.recipe.name,enabled:!1},{type:"separator"},{label:g.formatMessage(messages.reload),click:a,accelerator:`${(0,_environment.cmdOrCtrlShortcutKey)()}+R`,enabled:s.isEnabled},{label:g.formatMessage(_globalMessages.default.edit),click:()=>m({path:`services/edit/${s.id}`})},{type:"separator"},{label:s.isNotificationEnabled?g.formatMessage(messages.disableNotifications):g.formatMessage(messages.enableNotifications),click:()=>r(),accelerator:`${(0,_environment.cmdOrCtrlShortcutKey)()}+${(0,_environment.altKey)()}+N`,enabled:s.isEnabled},{label:s.isMuted?g.formatMessage(messages.enableAudio):g.formatMessage(messages.disableAudio),click:()=>n(),accelerator:`${(0,_environment.cmdOrCtrlShortcutKey)()}+${(0,_environment.shiftKey)()}+A`,enabled:s.isEnabled},{label:s.isDarkModeEnabled?g.formatMessage(messages.disableDarkMode):g.formatMessage(messages.enableDarkMode),click:()=>l(),accelerator:`${(0,_environment.shiftKey)()}+${(0,_environment.altKey)()}+D`,enabled:s.isEnabled},{label:g.formatMessage(s.isEnabled?messages.disableService:messages.enableService),click:()=>s.isEnabled?c():d(),accelerator:`${(0,_environment.cmdOrCtrlShortcutKey)()}+${(0,_environment.shiftKey)()}+S`},{label:g.formatMessage(s.isHibernating?messages.wakeUpService:messages.hibernateService),click:()=>s.isHibernating?p():u(),enabled:s.isEnabled&&s.canHibernate},{type:"separator"},{label:g.formatMessage(messages.deleteService),click:()=>{0===_remote.dialog.showMessageBoxSync(_remote.app.mainWindow,{type:"question",message:g.formatMessage(messages.deleteService),detail:g.formatMessage(messages.confirmDeleteService,{serviceName:s.name||s.recipe.name}),buttons:[g.formatMessage(_globalMessages.default.yes),g.formatMessage(_globalMessages.default.no)]})&&o()}}],h=_remote.Menu.buildFromTemplate(v);let S=null;(b||s.isNotificationEnabled)&&f&&s.isBadgeEnabled&&(S=(0,_jsxRuntime.jsxs)("span",{children:[s.unreadDirectMessageCount>0&&(0,_jsxRuntime.jsx)("span",{className:"tab-item__message-count",children:s.unreadDirectMessageCount}),s.unreadIndirectMessageCount>0&&0===s.unreadDirectMessageCount&&s.isIndirectMessageBadgeEnabled&&(0,_jsxRuntime.jsx)("span",{className:"tab-item__message-count is-indirect",children:"•"}),s.isHibernating&&(0,_jsxRuntime.jsx)("span",{className:"tab-item__message-count hibernating",children:"•"})]}));let y=null;return s.isError&&(y=(0,_jsxRuntime.jsx)(_icon.Icon,{icon:_js.mdiExclamation,className:"tab-item__error-icon"})),(0,_jsxRuntime.jsxs)("li",{className:(0,_classnames.default)({[e.stale]:IS_SERVICE_DEBUGGING_ENABLED&&s.lostRecipeConnection,"tab-item":!0,"is-active":s.isActive,"has-custom-icon":s.hasCustomIcon,"is-disabled":!s.isEnabled,"is-label-enabled":_}),onClick:t,onContextMenu:()=>h.popup(),"data-tip":`${s.name} ${i<=9?`(${(0,_environment.cmdOrCtrlShortcutKey)(!1)}+${i})`:""}`,children:[_?(0,_jsxRuntime.jsxs)("div",{children:[(0,_jsxRuntime.jsx)("img",{src:s.icon,className:"tab-item__icon",alt:""}),(0,_jsxRuntime.jsx)("span",{className:"tab-item__label",children:s.name})]}):(0,_jsxRuntime.jsx)("img",{src:s.icon,className:"tab-item__icon",alt:""}),S,y,IS_SERVICE_DEBUGGING_ENABLED&&(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)("div",{className:(0,_classnames.default)({[e.pollIndicator]:!0,[e.pollIndicatorPoll]:!0,[e.polled]:this.isPolled})}),(0,_jsxRuntime.jsx)("div",{className:(0,_classnames.default)({[e.pollIndicator]:!0,[e.pollIndicatorAnswer]:!0,[e.pollAnswered]:this.isPollAnswered})})]}),i<=9&&this.state.showShortcutIndex&&(0,_jsxRuntime.jsx)("span",{className:"tab-item__shortcut-index",children:i})]})}},_class2.propTypes={classes:_propTypes.default.object.isRequired,service:_propTypes.default.instanceOf(_Service.default).isRequired,clickHandler:_propTypes.default.func.isRequired,shortcutIndex:_propTypes.default.number.isRequired,reload:_propTypes.default.func.isRequired,toggleNotifications:_propTypes.default.func.isRequired,toggleAudio:_propTypes.default.func.isRequired,toggleDarkMode:_propTypes.default.func.isRequired,openSettings:_propTypes.default.func.isRequired,deleteService:_propTypes.default.func.isRequired,disableService:_propTypes.default.func.isRequired,enableService:_propTypes.default.func.isRequired,hibernateService:_propTypes.default.func.isRequired,wakeUpService:_propTypes.default.func.isRequired,showMessageBadgeWhenMutedSetting:_propTypes.default.bool.isRequired,showServiceNameSetting:_propTypes.default.bool.isRequired,showMessageBadgesEvenWhenMuted:_propTypes.default.bool.isRequired,stores:_propTypes.default.shape({settings:_propTypes.default.instanceOf(_SettingsStore.default).isRequired}).isRequired},_descriptor=_applyDecoratedDescriptor((_class=_temp).prototype,"isPolled",[_mobx.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,"isPollAnswered",[_mobx.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),_class);var _default=(0,_reactIntl.injectIntl)((0,_reactSortableHoc.SortableElement)((0,_reactJss.default)(styles,{injectTheme:!0})((0,_mobxReact.inject)("stores")((0,_mobxReact.observer)(TabItem)))));exports.default=_default;