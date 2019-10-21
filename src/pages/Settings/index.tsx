import React, {FunctionComponent} from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationStackProp} from 'react-navigation-stack'
import { ApplicationState } from 'store'
import { Dispatch, bindActionCreators } from 'redux'

import {ScreenProps} from 'interfaces/NavigationInterface'
import * as ApplicationStatusActions from 'store/ducks/applicationStatus/actions'
import { Languages } from 'store/ducks/applicationStatus/types'
import { connect } from 'react-redux'

interface StateProps {
    language: Languages
  }

interface NavigationProps {
    screenProps: ScreenProps
    navigation: NavigationStackProp
}

type Props = StateProps & NavigationProps

const Settings: FunctionComponent<Props> = props => {
    return (
        <ScrollView>
            <ListItem 
                title={props.screenProps.t('settingsOptions.language')}
                subtitle={props.language.name}
                onPress={() => props.navigation.navigate('LanguageSelect')}
                leftIcon={{name: 'language', type: 'entypo'}}
                bottomDivider
                />
        </ScrollView>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        language: state.applicationStatus.selectedLanguage,
    }
};
  
const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        ...ApplicationStatusActions,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
