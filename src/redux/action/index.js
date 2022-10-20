//for add to cart

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        Payload: product,
    }

}


//for delete item from cart

export const delCart = (product) => {
    return{
        type : "DELITEM",
        Payload : product,
    }

}