import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userChoice : null,
    computerChoice : null,
    result: null,
    score: 0,
}
const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setUserChoice(state, action){
            state.userChoice = action.payload;
        },
        setComputerChoice(state, action){
            state.computerChoice = action.payload;
        },
        setResult(state, action){
            state.result = action.payload;
            if(action.payload === "win"){
                state.score +=1;
            } else if(action.payload === "lose") {
                state.score -= 1;
            } else {
                state.score += 0;
            }
        },
    },
});

export const {
    setUserChoice,
    setComputerChoice,
    setResult,
  } = gameSlice.actions;
  
  export const selectScore = (state) => state.game.score;
  
  export default gameSlice.reducer;