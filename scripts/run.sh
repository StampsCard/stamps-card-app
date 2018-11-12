# Run android
react-native run-android

# Run IOS
react-native run-ios

# Test Deep Linking Android
adb shell am start -a android.intent.action.VIEW -d "stampscard://customer/codeScanned/2" com.stampscardapp

# Open remote debugger android
adb shell input keyevent 82

# Reset watcher
watchman watch-del-all && rm -rf node_modules/ && yarn cache clean && yarn install && yarn start -- --reset-cache
