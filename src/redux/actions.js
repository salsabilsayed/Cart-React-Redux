import axios from "axios";

export const fetchData = () => {
    return {
        type: 'FETCH_DATA'
    }
}

const fetchDataSuccess = (data) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload:data
    }
}

const fetchDataFailure = (error) => {
    return {
        type: 'FETCH_DATA_FAILURE',
        payload:error
    }
}


export const getData = (data) => {
    return {
        type: 'GET_DATA',
        payload: data
    }
}

export const getTotal = () => {
    return {
        type: 'GET_TOTAL'
    }
}

export const increment = (id) => {
    return {
        type: 'INCREMENT',
        payload: id
    }
}

export const decrement = (id) => {
    return {
        type: 'DECREMENT',
        payload: id
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}

export const clearAll = (id) => {
    return {
        type: 'CLEAR_ALL',
        payload: id
    }
}

export const fetchItems = () =>{
    return (dispatch)=>{
        dispatch(fetchData())

        axios.get('https://course-api.com/react-useReducer-cart-project')
        .then(res =>{
            const items = res.data
            dispatch(fetchDataSuccess(items));
            dispatch(getTotal());
        })
        .catch(error =>{
            const errorMsg = error.message;
            dispatch(fetchDataFailure(errorMsg));
        })
    }
}