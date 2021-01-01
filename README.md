# Stamps Card App
<img src="./resources/img/stamps_card_logo.png " alt="drawing" style="width:200px;"/>
## Description
This project contains the source code to generate the iOS and APK of the **StampsCard** app. 

### What's StampsCard?
**StampsCard** it's a project started by [Ricard Bague](https://www.linkedin.com/in/ricard-bague-ponsa-527a863b), [Peter Joustra](https://www.linkedin.com/in/peter-joustra-49841b4/) and [Liliaan Dapaah](https://www.linkedin.com/in/lilian-dapaah-%E2%98%85-3009099/) in order to provide a tool for retailers to digitalize the stamps that since now were provided using an old fashioned paper cards.

The main idea is that the shop owner can generate a QR code that represents the purchase and the buyer will scan it later to collect the stamps for that purchase.

The project was presented in the acceleator program [PresentYourStartup](https://www.presentyourstartup.nl/) in order to find some external funding. You can find more details about our proposal in [here](https://www.presentyourstartup.nl/semifinalists-2019/2019/10/30/tickete-8zkyb-8xyjd-9xkyw-23jyr-gyfxb-4fm8t).


### What's the status of this project

We decided to abandone the project for now, and I wanted to share to the open source community my work done to implement the MVP, for the following reasons:
- Share the knowledge to the world and help people working with similar ideas.
- Find some contributors that are willing to help.
- Expose my work done for the first version.
  
### This is a prototype
Please keep in mind that this is a prototype, so the goal was to have something to show off as soon as possible with the limited time that I had. 

I didn't want to spend time to make a perfect and robust code but have a proof of concept to show to the investors.

### I want to contribute
Please, feel free to send me an email to `d.sola.03@gmail.com` and I will be glad to have a chat with you ;)


## Technology stack
- This app has been developed using [React Native](https://reactnative.dev/).
- You can use [Expo](https://expo.io/) to compile it and see a demo, but you won't be able to use the QR code scanner
- This app communicates with a [GrahpQL Server](https://github.com/dsola) to fetch the data.
- I used [Redux](https://redux.js.org/) to build up the GraphQL queries and mutations and transform the data for the UI components.
- I installed [NativeBase](https://nativebase.io/) to start from a UI-theme template.
- I used [this library](https://github.com/moaazsidat/react-native-qrcode-scanner) to set up the QR code scanner.

## Run the application

Run the application for Android.
```$bash
react-native run-android
```
Run the application for iOS.
```$bash
react-native run-ios
```
Test Deep Linking Android
```$bash
adb shell am start -a android.intent.action.VIEW -d "stampscard://customer/codeScanned/2" com.stampscardapp
```
Open remote debugger android
```$bash
adb shell input keyevent 82
```
Reset watcher
```$bash
watchman watch-del-all && rm -rf node_modules/ && yarn cache clean && yarn install && yarn start -- --reset-cache
```

## Generate APK
```$bash
# Generate Android bundle
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

# Generate Android APK
cd android
./gradlew assembleDebug
# Generate Android signed apk
cd android
./gradlew assembleRelease

# The apk is located in app/android/app/build/outputs/apk/debug
```

## Generate IPA
```$bash
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
```

## License
This project is covered by the [Apache License](https://opensource.org/licenses/Apache-2.0).