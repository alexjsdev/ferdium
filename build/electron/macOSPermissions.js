"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.askFormacOSPermissions=void 0;const tslib_1=require("tslib"),electron_1=require("electron"),fs_extra_1=require("fs-extra"),macos_version_1=(0,tslib_1.__importDefault)(require("macos-version")),path_1=require("path"),node_mac_permissions_1=require("node-mac-permissions"),environment_remote_1=require("../environment-remote"),debug=require("debug")("Ferdi:macOSPermissions"),isExplicitScreenCapturePermissionReqd=macos_version_1.default.isGreaterThanOrEqualTo("10.15");debug(`Should check explicitly for screen-capture permissions: ${isExplicitScreenCapturePermissionReqd}`);const filePath=(0,environment_remote_1.userDataPath)(".has-app-requested-screen-capture-permissions");function hasPromptedForScreenCapturePermission(){return!!isExplicitScreenCapturePermissionReqd&&(debug("Checking if status file exists"),filePath&&(0,fs_extra_1.pathExistsSync)(filePath))}function hasScreenCapturePermissionAlreadyBeenGranted(){if(!isExplicitScreenCapturePermissionReqd)return!0;const e=electron_1.systemPreferences.getMediaAccessStatus("screen");return debug(`screen-capture permissions status: ${e}`),"granted"===e}function createStatusFile(){try{(0,fs_extra_1.writeFileSync)(filePath,"")}catch(e){throw"ENOENT"===e.code&&((0,fs_extra_1.mkdirSync)((0,path_1.dirname)(filePath)),(0,fs_extra_1.writeFileSync)(filePath,"")),e}}const askFormacOSPermissions=async e=>{if(debug("Checking camera & microphone permissions"),electron_1.systemPreferences.askForMediaAccess("camera"),electron_1.systemPreferences.askForMediaAccess("microphone"),hasScreenCapturePermissionAlreadyBeenGranted())return debug("Already obtained screen-capture permissions - writing status file"),void createStatusFile();if(!hasPromptedForScreenCapturePermission()){debug("Checking screen capture permissions");const{response:s}=await electron_1.dialog.showMessageBox(e,{type:"info",message:"Enable Screen Sharing",detail:"To enable screen sharing for some services, Ferdi needs the permission to record your screen.",buttons:["Allow screen sharing","No","Ask me later"],defaultId:0,cancelId:2});0===s?(debug("Asking for access"),(0,node_mac_permissions_1.askForScreenCaptureAccess)(),createStatusFile()):1===s&&(debug("Don't ask again"),createStatusFile())}};exports.askFormacOSPermissions=askFormacOSPermissions;