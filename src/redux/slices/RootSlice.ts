import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        car_brand: "Car Brand",
        car_model: "Car Model",
        car_transmission: "Car Transmission",
        car_year: "Car Year",
        //car_condition: "Car Condition",
    },
    reducers: {
        chooseCarBrand: (state, action) => { state.car_brand = action.payload},
        chooseCarModel: (state, action) => { state.car_model = action.payload},
        chooseCarTransmission: (state, action) => { state.car_transmission = action.payload},
        chooseCarYear: (state, action) => { state.car_year = action.payload}
        //chooseCarCondition: (state, action) => { state.car_condition = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCarBrand, chooseCarModel, chooseCarTransmission, chooseCarYear} = rootSlice.actions