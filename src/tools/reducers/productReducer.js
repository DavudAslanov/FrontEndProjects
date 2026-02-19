const initialState=[];

export const productReducer=( state = initialState, action)=>{
    switch(action.type){
        case"CREATE_PRODUCT":
        return [... state,action.product];

        case"FIND_PRODUCT":
        const productFind=state.find(p=>p.id==action.id)
        return productFind;

        // case"FILTER_PRODUCT":
        // constcategoryFilter=state.filter(p=>p.product==action.product)
        // return productFilter;

        case"DELETE_PRODUCT":
        const productDelete=state.filter(p=>p.id!==action.id)
        return productDelete;

        default:
        return state;

    }
    

    
}