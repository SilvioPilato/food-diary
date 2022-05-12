import { Depths, DetailsList, FontSizes, FontWeights, IColumn, NeutralColors, Rating, RatingSize } from '@fluentui/react';
import styled from 'styled-components';
import React from 'react';

export type Props = {
    mealName: string,
    food: FoodRecord[],
}

export type FoodRecord = {
    name: string;
    quantity: number;
    unitOfMeasure?: string;
    notes?: string;
}

const MealHeader = styled.div`
    font-size: ${FontSizes.size16};
    font-weight: ${FontWeights.semibold};
    text-transform: capitalize;
    border-bottom: 1px solid ${NeutralColors.gray80};
    height: 32px;
`;
const RatingWrapper = styled.div`
    font-size: ${FontSizes.size16};
    font-weight: ${FontWeights.regular};
    text-transform: capitalize;
`;

const MealWrapper = styled.div`
    box-shadow: ${Depths.depth8};
    > * {
        margin: 16px;
    }
`;

const MealView = (props: Props) => {
    const { food, mealName } = props;
    const data = food.map((item) => {
        return {
            name: item.name,
            quantity: `${item.quantity} ${item.unitOfMeasure ?? ""}`,
            notes: item.notes,
        }
    })
    const columns: IColumn[] = [
        {
            key: "col1",
            name: "Name",
            minWidth: 32,
            maxWidth: 250,
            fieldName: "name"
        },
        {
            key: "col2",
            name: "Quantity",
            minWidth: 32,
            maxWidth: 250,
            fieldName: "quantity"
        },
        {
            key: "col3",
            name: "Notes",
            minWidth: 32,
            maxWidth: 250,
            fieldName: "notes"
        },
    ]
    return (
        <MealWrapper>
            <MealHeader>
                {mealName}
            </MealHeader>
            <DetailsList columns={columns} items={data}></DetailsList>
            <RatingWrapper>
                <Rating
                    allowZeroStars
                    max={5}
                    size={RatingSize.Large}
                    defaultRating={1}
                    ariaLabel="Rating stars"
                    ariaLabelFormat="{0} of {1} stars"
                />
            </RatingWrapper>
        </MealWrapper>
        
    );
}

export default MealView;