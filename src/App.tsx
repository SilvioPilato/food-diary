import { createTheme } from '@fluentui/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import DayView, { Meal } from './components/DayView';

const theme = createTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  }});

const meals: Meal[] = [
  {
    mealName: "breakfast",
    food: [
      {
        name: "Milk",
        quantity: 200,
        unitOfMeasure: 'ml'
      },
      {
        name: "Biscuits",
        quantity: 50,
        unitOfMeasure: 'gr'
      },
    ]
  },
  {
    mealName: "lunch",
    food: [
      {
        name: "Pasta",
        quantity: 100,
        unitOfMeasure: 'gr'
      },
      {
        name: "Tomato sauce",
        quantity: 200,
        unitOfMeasure: 'gr'
      },
    ]
  },
  {
    mealName: "dinner",
    food: []
  }
];


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <DayView meals={meals} day={new Date()}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
