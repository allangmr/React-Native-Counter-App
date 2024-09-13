import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
// import { useCounterStore } from '../store/counter-store';


const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  // const count = useCounterStore( state => state.count);
  return (
      <Tab.Navigator
        screenOptions={{
            // headerShown: false,
            tabBarLabelStyle: {
                marginBottom: 5,
            },
            headerStyle: {
                elevation: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent',
            },
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        {/* <Tab.Screen name="Home" options={{ headerTitle: 'Home'}} component={HomeScreen} />
        <Tab.Screen name="Profile" options={{ headerTitle: 'Profile'}} component={ProfileScreen} />
        <Tab.Screen name="Settings" options={{ headerTitle: `Count: ${count}`}} component={SettingsScreen} /> */}
      </Tab.Navigator>
  );
};

