"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=require("tslib"),color_1=(0,tslib_1.__importDefault)(require("color")),lodash_1=require("lodash"),default_1=(0,tslib_1.__importDefault)(require("../default")),legacyStyles=(0,tslib_1.__importStar)(require("../legacy"));exports.default=e=>{const r=(0,default_1.default)(e),a=legacyStyles.darkThemeGrayDarkest,l=legacyStyles.darkThemeTextColor,o=legacyStyles.darkThemeGrayLightest,t=legacyStyles.themeGrayDark,c=`1px solid ${legacyStyles.darkThemeGrayLight}`,y=(0,color_1.default)(legacyStyles.darkThemeGrayLighter).lighten(.3).hex(),d=legacyStyles.darkThemeTextColor,s=o,g=(0,color_1.default)(a).lighten(.3).hex(),n=(0,lodash_1.merge)({},r.services,{listItems:{borderColor:legacyStyles.darkThemeGrayDarker,hoverBgColor:legacyStyles.darkThemeGrayDarker,disabled:{color:legacyStyles.darkThemeGray}}});return{...r,colorBackground:a,colorContentBackground:legacyStyles.darkThemeGrayDarkest,colorBackgroundSubscriptionContainer:legacyStyles.themeBrandInfo,colorHeadline:legacyStyles.darkThemeTextColor,colorText:legacyStyles.darkThemeTextColor,defaultContentBorder:legacyStyles.themeGrayDark,colorFullscreenLoaderSpinner:"#FFF",colorWebviewLoaderBackground:(0,color_1.default)(legacyStyles.darkThemeGrayDarkest).alpha(.5).rgb().string(),labelColor:legacyStyles.darkThemeTextColor,inputColor:o,inputBackground:t,inputBorder:c,inputPrefixColor:y,inputPrefixBackground:legacyStyles.darkThemeGray,inputDisabledOpacity:.5,inputScorePasswordBackground:legacyStyles.darkThemeGrayDark,inputModifierColor:(0,color_1.default)(legacyStyles.darkThemeGrayLighter).lighten(.3).hex(),inputPlaceholderColor:(0,color_1.default)(legacyStyles.darkThemeGrayLighter).darken(.1).hex(),toggleBackground:legacyStyles.darkThemeGray,toggleButton:legacyStyles.darkThemeGrayLighter,buttonPrimaryTextColor:legacyStyles.darkThemeTextColor,buttonSecondaryBackground:legacyStyles.darkThemeGrayLighter,buttonSecondaryTextColor:d,buttonDangerTextColor:legacyStyles.darkThemeTextColor,buttonWarningTextColor:legacyStyles.darkThemeTextColor,buttonLoaderColor:{primary:"#FFF",secondary:d,success:"#FFF",warning:"#FFF",danger:"#FFF",inverted:r.brandPrimary},selectBackground:t,selectBorder:c,selectColor:s,selectToggleColor:y,selectPopupBackground:legacyStyles.darkThemeGrayLight,selectOptionColor:"#FFF",selectOptionBorder:`1px solid ${(0,color_1.default)(legacyStyles.darkThemeGrayLight).darken(.2).hex()}`,selectOptionItemHover:(0,color_1.default)(legacyStyles.darkThemeGrayLight).darken(.2).hex(),selectOptionItemHoverColor:s,selectSearchColor:t,colorModalOverlayBackground:(0,color_1.default)(legacyStyles.darkThemeBlack).alpha(.9).rgb().string(),colorModalBackground:legacyStyles.darkThemeGrayDark,services:n,serviceIcon:(0,lodash_1.merge)({},r.serviceIcon,{isCustom:{border:`1px solid ${legacyStyles.darkThemeGrayDark}`}}),workspaces:(0,lodash_1.merge)({},r.workspaces,{settings:{listItems:(0,lodash_1.cloneDeep)(n.listItems)},drawer:{background:g,addButton:{color:legacyStyles.darkThemeGrayLighter,hoverColor:legacyStyles.darkThemeGraySmoke},listItem:{border:(0,color_1.default)(g).lighten(.2).hex(),hoverBackground:legacyStyles.darkThemeGrayDark,activeBackground:legacyStyles.darkThemeGrayDarker,name:{color:l,activeColor:"white"},services:{color:(0,color_1.default)(l).darken(.5).hex(),active:(0,color_1.default)(l).darken(.5).hex()}}}}),todos:(0,lodash_1.merge)({},r.todos,{todosLayer:{borderLeftColor:legacyStyles.darkThemeGrayDarker},toggleButton:{background:r.styleTypes.primary.accent,textColor:r.styleTypes.primary.contrast,shadowColor:"rgba(0, 0, 0, 0.2)"},dragIndicator:{background:legacyStyles.themeGrayLight}})}};