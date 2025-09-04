// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
import React from 'react';
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
View,
Image,
} from 'react-native';
function App() {
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Image source={require('./assets/images/icon.png')} style={styles.icon}></Image>
<Text style={styles.title}>Welcome to CPAN 213</Text>
<Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
</View>
<View style={styles.content}>
<Text style={styles.greeting}>Hello, I'm Tram !</Text>
<Text style={styles.info}>Student ID: N01724490</Text>
<Text style={styles.info}>Program: [Your Program]</Text>
<View style={styles.goals}>
<Text style={styles.sectionTitle}>My Course Goals:</Text>
<Text style={styles.goal}>• Learn React Native fundamentals</Text>
<Text style={styles.goal}>• Build cross-platform mobile apps</Text>
<Text style={styles.goal}>• Master state management with Redux</Text>
<Text style={styles.goal}>• Deploy apps to app stores</Text>
</View>
</View>
</SafeAreaView>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
backgroundColor: '#3498db',
padding: 20,
alignItems: 'center',
},
title: {
fontSize: 24,
fontWeight: 'bold',
color: 'white',
marginBottom: 5,
},
subtitle: {
fontSize: 16,
color: 'white',
fontStyle: 'italic',
},
content: {
flex: 1,
padding: 20,
},
greeting: {
fontSize: 22,
fontWeight: 'bold',
color: '#2c3e50',
textAlign: 'center',
marginBottom: 10,
},
info: {
fontSize: 16,
color: '#7f8c8d',
textAlign: 'center',
marginBottom: 5,
},
goals: {
marginTop: 30,
padding: 15,
backgroundColor: 'white',
borderRadius: 10,
elevation: 2,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 2,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#2c3e50',
marginBottom: 10,
},
goal: {
fontSize: 16,
color: '#34495e',
marginBottom: 5,
lineHeight: 22,
},
icon: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40,
},
});
export default App;