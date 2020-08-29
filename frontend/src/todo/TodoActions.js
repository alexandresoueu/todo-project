import axios from 'axios'

const URL = 'http://localhost:3030/api/todos'

const changeDescription = event => (
  {
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  }
)

const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)

  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

const addTask = (description) => {

  return dispatch => {
    axios.post(URL, { description })
      .then(response => dispatch({ type: 'TODO_ADDED', payload: response.data}))
      .then(response => dispatch(search()))
  }
}

export {
  changeDescription,
  search,
  addTask
}