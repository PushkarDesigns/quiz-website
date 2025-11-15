import React from 'react'
import Quiz from './components/Quiz'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  return (
    <>
    <div className="">
      <Provider store={store}>
        <Quiz />
      </Provider>
    </div>
    </>
  )
}

export default App