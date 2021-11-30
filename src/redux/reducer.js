
const initialState = {
    data: [],
    loading:false,
    error:'',
    basketNumber:0,
    totalPrice:0,
    isEmpty:false
}

const cartReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'FETCH_DATA':
            return{
                ...state,
                loading:true
            }

        case 'FETCH_DATA_SUCCESS':
            return{
                ...state,
                loading:false,
                data:action.payload,
                error:''
            }

        case 'FETCH_DATA_FAILURE':
            return{
                ...state,
                loading:false,
                data:[],
                error:action.payload
            }

        case 'GET_TOTAL':
            let price=0;
            state.data.forEach((accu)=> price+= Number(accu.price));

            let basketNum = 0;
            state.data.forEach((item)=> basketNum += item.amount);

            return{
                ...state,
                totalPrice:price,
                basketNumber:basketNum,
                
            }

        case 'INCREMENT':
            let incIndex; 
            let incrementedData =state.data.map((item,index)=> {
                if(item.id === action.payload){
                    incIndex = index
                    return {...item,amount:item.amount+1}
                }
                return item;
            })
        
            return {
                ...state,
                data: incrementedData,
                basketNumber: state.basketNumber + 1,
                totalPrice: state.totalPrice + Number(incrementedData[incIndex].price)
            }

        case 'DECREMENT': 
            let decIndex;
            const decrementedData = state.data.map((item,index) => {
                if(item.id === action.payload){
                    decIndex = index;
                    return {...item, amount:item.amount -1}
                }
                return item;
            }).filter(item => item.amount !==0);

            return {
                ...state,
                data: decrementedData,
                basketNumber: state.basketNumber - 1,
                totalPrice: state.totalPrice - (Number(decrementedData[decIndex].price)* decrementedData[decIndex].amount)
            }

        case 'REMOVE_ITEM':
            const removedItem = state.data.find(item => item.id === action.payload)
            return{
                ...state,
                basketNumber:state.basketNumber - removedItem.amount,
                totalPrice:state.totalPrice - (removedItem.amount * removedItem.price),
                data:state.data.filter(item=> item.id !== action.payload)
            }
        
        case 'CLEAR_ALL':
            return{
                ...state,
                basketNumber:0,
                totalPrice:0,
                data:[],
                isEmpty:true
            }

        default: return state;
    }
}

export default cartReducer;