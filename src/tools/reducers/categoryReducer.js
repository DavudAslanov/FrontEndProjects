const initialState=[];

export const categoryReducer=( state = initialState, action)=>{
    switch(action.type){
        case"CREATE_CATEGORY":
        return [... state,action.product];

        case"FIND_CATEGORY":
        const categoryFind=state.find(p=>p.id==action.id)
        return categoryFind;

        // case"FILTER_CATEGORY":
        // constcategoryFilter=state.filter(p=>p.category==action.category)
        // returncategoryFilter;

        case"DELETE_CATEGORY":
        const categoryDelete=state.filter(p=>p.id!==action.id)
        return categoryDelete;

        default:
        return state;

    }
    

    
}