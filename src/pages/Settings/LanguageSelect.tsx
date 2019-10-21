import React, { FunctionComponent } from 'react'
import { FlatList, AsyncStorage } from 'react-native'
import {ListItem} from 'react-native-elements'
import {NavigationStackProp} from 'react-navigation-stack'
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { ScreenProps } from 'interfaces/NavigationInterface';
import * as ApplicationStatusActions from 'store/ducks/applicationStatus/actions'
import { ApplicationState } from 'store';
import { Languages } from 'store/ducks/applicationStatus/types';

interface StateProps {
    selectedLanguage: Languages
    languages: Languages[]
  }
  
interface DispatchProps {
    changeLanguage(language: Languages): void
}

interface NavigationProps {
    screenProps: ScreenProps
    navigation: NavigationStackProp
}

type Props = StateProps & DispatchProps & NavigationProps

const LanguageSelect: FunctionComponent<Props> = props => {

    function onSelectLanguage(item: Languages) {
        AsyncStorage.setItem('selectedLanguage', item.id.toString()).then(() => {
            props.changeLanguage(item)
        })
    }
    
    return (
        <>
            <FlatList<Languages>
                data={props.languages}
                renderItem={({item}) => { 
                    return (
                    <ListItem 
                        title={`${item.name}`}
                        checkBox={{iconRight: true, checked: item.id === props.selectedLanguage.id}}
                        onPress={() => onSelectLanguage(item)}
                        bottomDivider
                    />
                )}}
                extraData={props.selectedLanguage}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        selectedLanguage: state.applicationStatus.selectedLanguage,
        languages: state.applicationStatus.Languages,
    }
};
  
const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        ...ApplicationStatusActions,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect)
