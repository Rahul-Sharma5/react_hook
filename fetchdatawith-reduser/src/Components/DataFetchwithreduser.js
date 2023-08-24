import React, {useState, useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: { }
}

const reduser = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error:'Something Wrong!'
            }
        default:
            return state
    }
}

const DataFetchwithreduser = () => {
    const [state, dispatch]= useReducer(reduser, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR'})
            })
    }, [])

    return (
        <div>
            {state.loading ? 'loading' : state.post.title }
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchwithreduser