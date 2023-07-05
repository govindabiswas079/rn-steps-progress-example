import React from 'react';
import { View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'rn-steps-progress';

const ProgressScreen = () => {

    const buttonTextStyle = {
        color: '#393939'
    };

    return (
        <View style={{ flex: 1 }}>
            <ProgressSteps>
                <ProgressStep label="First Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 1!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

export default ProgressScreen