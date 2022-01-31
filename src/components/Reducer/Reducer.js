export const reducer = (state, action) => {
    switch (action.type) {
        case 'addCatAndDog':
            if (action.target === 'cats'){
                return {...state, cats: [...state.cats, action.payload]}
            }else if (action.target === 'dogs'){
                return {...state, dogs: [...state.dogs, action.payload]}
            }
        return state;
        case 'delete':
            if (action.target === 'cats'){
                console.log(action.payload);
                return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)};
            }else if (action.target === 'dogs') {
                return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)};
            }
            return state;
        default:
            throw new Error('Error')
    }
}