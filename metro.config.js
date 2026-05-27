// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/private/defaults/exclusionList').default;

const defaultConfig = getDefaultConfig(__dirname);
const defaultBlockList = Array.isArray(defaultConfig.resolver.blockList)
  ? defaultConfig.resolver.blockList
  : [defaultConfig.resolver.blockList].filter(Boolean);

defaultConfig.resolver.assetExts.push('db');
defaultConfig.resolver.blockList = exclusionList([
  ...defaultBlockList,
  /(^|.*[\\/])android[\\/].*/,
  /(^|.*[\\/])node_modules[\\/]@react-native[\\/]gradle-plugin[\\/].*[\\/]build[\\/].*/,
  /(^|.*[\\/])node_modules[\\/].*[\\/]android[\\/]\.cxx[\\/].*/,
  /(^|.*[\\/])node_modules[\\/].*[\\/]android[\\/]build[\\/].*/
]);
defaultConfig.transformer.assetPlugins.push('expo-asset/tools/hashAssetFiles');
module.exports = defaultConfig;
