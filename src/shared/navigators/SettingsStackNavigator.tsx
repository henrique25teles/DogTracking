import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Settings from '../../pages/Settings'

const SettingsStackNavigator = createAppContainer(
    createStackNavigator({
        Settings
    })
)

export default SettingsStackNavigator