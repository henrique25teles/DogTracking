import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Theme from '../../pages/Theme'

const ThemeStackNavigator = createAppContainer(
    createStackNavigator({
        Theme
    })
)

export default ThemeStackNavigator