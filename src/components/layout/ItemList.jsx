import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../redux/actions';

import Item from './Item';

const ItemList = ({fetchItems, data}) => {
  
      useEffect(()=>{
        fetchItems();
      },[fetchItems]);

    return (
         <React.Fragment>
           <ul>
                {data.map(item=> <Item 
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    amount={item.amount}
                    id={item.id}
                />)}
            </ul>

        </React.Fragment>
    )
}

const mapStateToProps = state => {
  return {
    data:state.data
  }
};

const mapDispatchToProps = dispatch => {
  return{
    fetchItems:()=> dispatch(fetchItems())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ItemList)

