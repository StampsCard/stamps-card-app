# Run android
react-native run-android

# Run IOS
react-native run-ios

# Test Deep Linking Android
adb shell am start -a android.intent.action.VIEW -d "stampscard://customer/codeScanned/2" com.stampscardapp

# Open remote debugger android
adb shell input keyevent 82

# Generate Android signed apk
cd android
./gradlew assembleRelease

# Generate Android debug APK
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

# another opetion to generate Android debug apk
./gradlew assembleDebug
