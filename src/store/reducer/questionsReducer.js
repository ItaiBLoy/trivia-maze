const { INCREASE_CURRENT_QUESTION } = require("../actions/questionsAction");

export function questionsReducer(state, action){
    switch (action.type){
        case INCREASE_CURRENT_QUESTION:{
            state.currentQuestions +=1;
            return state;
        }
        default: {
            return state;
        }
    }
}
