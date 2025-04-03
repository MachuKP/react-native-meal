import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import CategoriesScreen from './src/screens/CategoriesScreen';
import MealOverviewScreen from './src/screens/MealOverviewScreen';
import {RootStackParamList} from './src/navigation/types';
import MealDetailScreen from './src/screens/MealDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: styles.container,
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            initialRouteName="Categories">
            <Stack.Screen
              name="Categories"
              component={CategoriesScreen}
              options={{title: 'Meal Categories'}}
            />
            <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              // options={({route, navigation}) => {}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f2f25',
  },
});
