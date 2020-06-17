import { useReducer, useCallback } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE' :
      return {
        ...state,
        [action.name]: action.value
      };
    case 'RESET' :
      return action.initialForm;
    default :
      throw new Error('UnExpected Action');
  }
}

const UseInput2 = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE',
      name,
      value
    })
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: 'RESET',
      initialForm
    })
  }, [initialForm]);

  return [state, onChange, reset];
};

export default UseInput2;