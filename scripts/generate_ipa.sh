######## References
# https://stackoverflow.com/questions/42110496/how-to-build-ipa-application-for-react-native-ios
# https://medium.com/@tunvirrahmantusher/create-ipa-and-apk-from-react-native-72fe53c6a8db
# https://wiki.genexus.com/commwiki/servlet/wiki?34616,HowTo%3A+Create+an+.ipa+file+from+XCode
####################

# Create JS bundle for IOS
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios

# Replace the code inside the AppDelegate.m file
jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@”index” fallbackResource:nil];
# to
jsCodeLocation = [[NSBundle mainBundle] URLForResource:@”main” withExtension:@”jsbundle”];

# Then, we need to edit the scheme and set as Release

# Archive the project, archive as Debug