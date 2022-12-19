import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    Property_type: "",
    location: "",
    price: {
        min: 0,
        max: 10000000,
    },
    amenities: [],
    Furniture_status: "",
    bathrooms: "",
    bedrooms: "",
    garages: "",
    yearBuilt: "",
    area: {
        min: "",
        max: "",
    },
    length: 0,
    Property_for : ""
    
};

export const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
        addKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        addProperty_for: (state, action) => {
            state.Property_for = action.payload;
        },
        addProperty_type: (state, action) => {
            state.Property_type = action.payload;
        },
        addLocation: (state, action) => {
            state.location = action.payload;
        },
        addPrice: (state, action) => {
            state.price.min = action.payload.min;
            state.price.max = action.payload.max;
        },
        addAmenities: (state, action) => {
            const isExist = state.amenities.some(
                (item) => item === action.payload
            );
            if (!isExist) {
                state.amenities.push(action.payload);
            } else {
                state.amenities = state.amenities.filter(
                    (item) => item !== action.payload
                );
            }
        },
        resetAmenities: (state, action) => {
            state.amenities = [];
        },
        addStatus: (state, action) => {
            state.Furniture_status = action.payload;
        },
        addBathrooms: (state, action) => {
            state.bathrooms = action.payload;
        },
        addBedrooms: (state, action) => {
            state.bedrooms = action.payload;
        },
        addGarages: (state, action) => {
            state.garages = action.payload;
        },
        addYearBuilt: (state, action) => {
            state.yearBuilt = action.payload;
        },
        addAreaMin: (state, action) => {
            state.area.min = action.payload;
        },
        addAreaMax: (state, action) => {
            state.area.max = action.payload;
        },
        addLength: (state, action) => {
            state.length = action.payload;
        },
    },
});

export const {
    addKeyword,
    addProperty_type,
    addLocation,
    addPrice,
    addAmenities,
    addStatus,
    addBathrooms,
    addBedrooms,
    addGarages,
    addYearBuilt,
    addAreaMin,
    addAreaMax,
    addLength,
    resetAmenities,
    addProperty_for
} = propertiesSlice.actions;
export default propertiesSlice.reducer;
