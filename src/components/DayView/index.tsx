import styled from 'styled-components';
import React from 'react';
import MealView, { FoodRecord } from '../MealView';
import { FontSizes, FontWeights } from '@fluentui/react';
import { format } from 'date-fns';

export type Meal = {
    mealName: string,
    food: FoodRecord[],
}

export type Props = {
    meals: Meal[],
    day: Date
}

const MealViewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    overflow: visible;
    > * {
        margin: 16px;
    }
`
const DayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DayHeader = styled.div`
    font-size: ${FontSizes.size32};
    font-weight: ${FontWeights.bold};
    text-transform: capitalize;
    margin-bottom: 16px;
`;

const DayView = (props: Props) => {
    const {meals, day} = props;
    return (
        <DayWrapper>
            <DayHeader>
                Day {format(day, "dd/MM/yyyy")}
            </DayHeader>
            <MealViewWrapper>
                {
                    meals.map(meal => <MealView food={meal.food} mealName={meal.mealName} />)
                }
            </MealViewWrapper>
        </DayWrapper>
    );
}

export default DayView;