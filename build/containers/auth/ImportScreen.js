"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),_propTypes=_interopRequireDefault(require("prop-types")),_mobxReact=require("mobx-react"),_mobxReactRouter=require("mobx-react-router"),_Import=_interopRequireDefault(require("../../components/auth/Import")),_UserStore=_interopRequireDefault(require("../../stores/UserStore")),_jsxRuntime=require("react/jsx-runtime");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}class ImportScreen extends _react.Component{render(){const{actions:e,stores:r}=this.props;return r.user.isImportLegacyServicesCompleted&&r.router.push(r.user.inviteRoute),(0,_jsxRuntime.jsx)(_Import.default,{services:r.user.legacyServices,onSubmit:e.user.importLegacyServices,isSubmitting:r.user.isImportLegacyServicesExecuting,inviteRoute:r.user.inviteRoute})}}ImportScreen.propTypes={actions:_propTypes.default.shape({user:_propTypes.default.instanceOf(_UserStore.default).isRequired}).isRequired,stores:_propTypes.default.shape({user:_propTypes.default.instanceOf(_UserStore.default).isRequired,router:_propTypes.default.instanceOf(_mobxReactRouter.RouterStore).isRequired}).isRequired};var _default=(0,_mobxReact.inject)("stores","actions")((0,_mobxReact.observer)(ImportScreen));exports.default=_default;