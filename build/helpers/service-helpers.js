"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getServiceIdsFromPartitions=exports.removeServicePartitionDirectory=exports.getServicePartitionsDirectory=void 0;const fs_extra_1=require("fs-extra"),environment_remote_1=require("../environment-remote");function getServicePartitionsDirectory(...e){return(0,environment_remote_1.userDataPath)("Partitions",...[e].flat())}function removeServicePartitionDirectory(e="",r=!1){const t=getServicePartitionsDirectory(`${r?"service-":""}${e}`);return(0,fs_extra_1.removeSync)(t)}async function getServiceIdsFromPartitions(){return(0,fs_extra_1.readdirSync)(getServicePartitionsDirectory()).filter((e=>"__chrome_extension"!==e))}exports.getServicePartitionsDirectory=getServicePartitionsDirectory,exports.removeServicePartitionDirectory=removeServicePartitionDirectory,exports.getServiceIdsFromPartitions=getServiceIdsFromPartitions;