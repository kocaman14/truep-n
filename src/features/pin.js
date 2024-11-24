import { createSlice } from "@reduxjs/toolkit";
const pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const truePin = [1, 3, 3, 2];
const initialState = {
  pins: pins,
  truePin: truePin,
  showTryPin: "",
  checkPın: 0,
  lastControl: 0,
};

export const pinSlice = createSlice({
  name: "truePins",
  initialState,
  reducers: {
    clickPin: (state, action) => {
      if (state.showTryPin.length < 4) {
        state.showTryPin = [...state.showTryPin, action.payload];

        if (
          state.showTryPin[state.checkPın] === state.truePin[state.checkPın]
        ) {
          state.lastControl += 1;
          state.checkPın += 1;
        } else {
          state.checkPın += 1;
        }
        if (state.lastControl === 4 && state.checkPın === 4) {
          console.log("şifre dogru");
          state.pins = [];
        } else if (state.checkPın === 4 && state.lastControl !== 4) {
          alert("yanlıs kombinasyon");
          state.showTryPin = [];
          state.lastControl = 0;
          state.checkPın = 0;
        } else {
          console.log(`4 /${state.checkPın} tuş `);
        }
      }

      console.log(state.showTryPin);
      console.log(state.lastControl);
      console.log(state.checkPın);
    },
  },
});

export const { clickPin } = pinSlice.actions;
export default pinSlice.reducer;
