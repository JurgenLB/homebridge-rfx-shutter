const { PLATFORM_NAME } = require('./platform/RFXShutterDynamicPlatform');

const { API } = require('homebridge');

const RFXShutterDynamicPlatform = require('./platform/RFXShutterDynamicPlatform');

/*
 * Initializer function called when the plugin is loaded.
 */
export default (api: typeof API): void => {
  api.registerPlatform({ PLATFORM_NAME }, RFXShutterDynamicPlatform);
};
