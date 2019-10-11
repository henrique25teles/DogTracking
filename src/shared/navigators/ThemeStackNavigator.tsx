import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Theme from '../../pages/Theme'
import HeaderLeftProps from '../interfaces/HeaderLeftProps'
import { createHeaderLeftToggle } from '../components/HeaderLeft'
import Color from '../../models/enums/Color'

export default function ThemeStackNavigator(props: HeaderLeftProps){
    const createNavigator = createStackNavigator({
        ThemeHome: {
            screen: Theme,
            navigationOptions: ({navigation}) => ({
                title: 'Themes',
                headerLeft: createHeaderLeftToggle(props),
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerTintColor: Color.GhostWhite,
            })
        }
    })

    const Navigator = createAppContainer(createNavigator)

    return <Navigator />;
}
