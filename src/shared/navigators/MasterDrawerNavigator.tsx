import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'

import OrdersStackNavigator from './OrdersStackNavigator'
import SettingsStackNavigator from './SettingsStackNavigator'
import AboutStackNavigator from './AboutStackNavigator'

const MasterDrawerNavigator = createAppContainer(
    createDrawerNavigator({
        OrdersStackNavigator,
        SettingsStackNavigator,
        AboutStackNavigator
    })
)

export default MasterDrawerNavigator