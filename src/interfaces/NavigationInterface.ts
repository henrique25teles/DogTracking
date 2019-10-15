import {NavigationTabProp, NavigationMaterialTabOptions} from 'react-navigation-tabs'
import {NavigationStackProp, NavigationStackOptions} from 'react-navigation-stack'
import {NavigationDrawerProp, NavigationDrawerOptions} from 'react-navigation-drawer'
import {NavigationScreenConfigProps, NavigationRoute, NavigationParams} from 'react-navigation'

export interface ScreenProps {
    t?: (scope: string, options?: any) => string,
    language?: string,
    setLanguage?: (languageToSet: string) => void
}

export interface TabNavOptions extends NavigationScreenConfigProps<NavigationTabProp<NavigationRoute<NavigationParams>, any>, ScreenProps> {
    navigationOptions: NavigationMaterialTabOptions
}
export interface StackNavOptions extends NavigationScreenConfigProps<NavigationStackProp<NavigationRoute<NavigationParams>, any>, ScreenProps> {
    navigationOptions: NavigationStackOptions
}
export interface DrawerNavOptions extends NavigationScreenConfigProps<NavigationDrawerProp<NavigationRoute<NavigationParams>, any>, ScreenProps> {
    navigationOptions: NavigationDrawerOptions
}
