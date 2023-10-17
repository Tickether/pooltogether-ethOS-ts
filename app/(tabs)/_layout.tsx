import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { TextEncoder, TextDecoder } from 'text-encoding'

// Add this line to use the TextEncoder polyfill
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveBackgroundColor: '#6538C1',
        tabBarActiveBackgroundColor: '#6538C1',
        tabBarInactiveTintColor: '#21064E',
        tabBarActiveTintColor: '#35F0D0',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Prizes',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
        }}
      />
      <Tabs.Screen
        name="vaults"
        options={{
          title: 'Vaults',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="bank" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#21064E', 
          },
          tabBarIcon: ({ color }) => <FontAwesome5 name="piggy-bank" size={28} color={color} />,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="gears"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
        
      />
    </Tabs>
  );
}
