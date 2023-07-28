const shorten = (title) => {
    const splittitle = title.split(" ");
    const newtitle = `${splittitle[0]}` + `${splittitle[1]}`;
    return newtitle;
}


const easeIncart = (state, id) =>{
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

const quantitiyCount = (state,id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}

export {shorten, easeIncart, quantitiyCount};

