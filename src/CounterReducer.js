const counterReducer = (state, action) => {

    switch (action) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        case 'RESET':
            return state - state;
    }

}

export default counterReducer; 