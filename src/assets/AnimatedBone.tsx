import React, {useEffect} from 'react'
import {Animated, Easing, StyleProp, ImageStyle} from 'react-native'

interface Props {
  style?: StyleProp<ImageStyle>
}

export default function AnimatedBone(props: Props) {
    const RotateValueHolder = new Animated.Value(0);

    useEffect(() => {
      function animateBone() {
        RotateValueHolder.setValue(0);
          Animated.timing(RotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
          }).start(() => animateBone());
      }
      animateBone()
    }, [])
  
  
    const RotateData = RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  
    return (
      <Animated.Image style={[{transform: [{rotate: RotateData}]}]} source={require('assets/bone.png')} />
    )
}