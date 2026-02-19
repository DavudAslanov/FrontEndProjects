export const categoryAddAction = ({ id, title, price ,category}) => ({
  type: "CREATE_CATEGORY",
  category: {
    id,
    title,
    price,
    category
  }
})

export const categoryFind=(id)=>({
    type:"FIND_CATEGORY",
    id
});

export const categoryFilter=(category)=>({
    type:"FILTER_CATEGORY",
    category
})

export const categoryDelete=(id)=>({
    type:"DELETE_CATEGORY",
    id
})
