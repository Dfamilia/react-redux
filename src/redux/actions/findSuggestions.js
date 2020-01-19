const findSuggestions = text =>{
    return {
        type: 'findSuggestions',
        payload:text

    }
}

export default findSuggestions;