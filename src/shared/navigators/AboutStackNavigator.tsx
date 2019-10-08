import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import About from '../../pages/About'

const AboutStackNavigator = createAppContainer(
    createStackNavigator({
        About
    })
)

export default AboutStackNavigator