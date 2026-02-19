export const productAddAction = ({ id, title, price ,category}) => ({
  type: "CREATE_PRODUCT",
  product: {
    id,
    title,
    price,
    category
  }
})

export const productFind=(id)=>({
    type:"FIND_PRODUCT",
    id
});

export const productFilter=(category)=>({
    type:"FILTER_PRODUCT",
    category
})

export const productDelete=(id)=>({
    type:"DELETE_PRODUCT",
    id
})
