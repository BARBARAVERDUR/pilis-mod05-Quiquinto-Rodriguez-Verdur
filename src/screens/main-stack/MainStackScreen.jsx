import { StyleSheet } from 'react-native'
import { EventsListScreen } from '../event-list/EventsListScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, SPACING } from '../../utils/theme'
import { Ionicons } from '@expo/vector-icons'
import { HomeScreen } from '../home/HomeScreen'
import { ProfileScreen } from '../profile/ProfileScreen'
import { SCREENS } from '../../utils'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  [SCREENS.HOME]: 'home',
  [SCREENS.PROFILE]: 'person',
  [SCREENS.SEARCH]: 'search'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]// TAB_ICON[Home]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar

  }
}
export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={SCREENS.HOME} options={{ title: 'Inicio' }} component={HomeScreen} />
      <Tab.Screen name={SCREENS.SEARCH} options={{ title: 'Explorar' }} component={EventsListScreen} />
      <Tab.Screen name={SCREENS.PROFILE} options={{ title: 'Perfil' }} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})