import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Main from './pages/Main';
import Repositories from './pages/Repositories';
import CreateRepository from './pages/CreateRepository';
import InfoRepository from './pages/InfoRepository';

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Main" options={{ title: "Perfil" }} component={Main} />
                <Tab.Screen name="Repositories" component={Repositories} />
                <Tab.Screen name="CreateRepository" options={{ title: "Criar Repositório" }} component={CreateRepository} />
                <Tab.Screen name="InfoRepository" options={{ title: "Repositório Info" }} component={InfoRepository} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}