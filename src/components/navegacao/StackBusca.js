import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaBusca from './BuscaCliente'
import TelaLista from './ListaDadosCliente'
import TelaCartoes from './CartoesCliente'

const Stack = createStackNavigator()

export default function StackFunc (props){
    return(
        <Stack.Navigator initialRouteName="Busca"
            screenOptions={{headerShown: true}}> 
            <Stack.Screen name="Busca" 
                options={{title:"Busca cliente por ID"}} 
                component={TelaBusca}>
                </Stack.Screen>
            <Stack.Screen name="Lista" 
                component={TelaLista}/>
            <Stack.Screen name="Cartoes"
                component={TelaCartoes}/>
        </Stack.Navigator>
    );
}


