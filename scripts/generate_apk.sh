# Generate Android bundle
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

# Generate Android APK
cd android
./gradlew assembleDebug
# Generate Android signed apk
cd android
./gradlew assembleRelease

# The apk is located in app/android/app/build/outputs/apk/debug
