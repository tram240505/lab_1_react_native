React Native Environment Setup Documentation

1. System Specifications

- Operating System: Windows 11, 64-bit
- Processor: 13th Gen Intel(R) Core(TM) i7-13620H (2.40 GHz)
- RAM: 16 GB

2. Software Versions Installed
   Software | Version
   Node.js | v20.17.0
   npm | 11.6.0
   React Native | 0.81.1
   Android Studio | 21.0.7+-13880790-b1038.58 amd64
   Java JDK | 22.0.2
   VS Code | 1.103.2
3. Setup Steps Followed
   3.1. Install Node.js
   - Downloaded from Node.js official website
   - Verified versions: `node -v`, `npm -v`
   - Time taken:10 minutes
     3.2. Install React Native CLI
   - Ran command: `npx @react-native-community/cli init EnvironmentTest`
   - Verified project creation
   - Time taken:25 minutes

3.3. Install Android Studio

- Downloaded and installed Android Studio
- Installed Android SDK, Emulator, and required tools
- Created an Android Virtual Device (AVD)
- Time taken: 25 minutes

4. Set up VS Code

   - Added recommended extensions: React Native Tools, ES7+ React/Redux/React-Native snippets,..
   - Opened project folder
   - Time taken:5 minutes

5. Run the project
   - Started emulator from Android Studio
   - Ran project: `npx react-native run-android`
   - Time taken: 10 minutes
6. Deviations from Lab Instructions

- Instead of `npx react-native init EnvironmentTest`, used:
  npx @react-native-community/cli init EnvironmentTest
