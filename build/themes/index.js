"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.theme=exports.ThemeType=void 0;const tslib_1=require("tslib"),dark_1=(0,tslib_1.__importDefault)(require("./dark")),default_1=(0,tslib_1.__importDefault)(require("./default")),legacy_1=require("./legacy");var ThemeType;function theme(e,t=legacy_1.themeBrandPrimary){return e===ThemeType.dark?(0,dark_1.default)(t):(0,default_1.default)(t)}!function(e){e.default="default",e.dark="dark"}(ThemeType=exports.ThemeType||(exports.ThemeType={})),exports.theme=theme;const defaultThemeConfigWithDefaultAccentColor=(0,default_1.default)(legacy_1.themeBrandPrimary);