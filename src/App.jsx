import Quiz from './components/Quiz'
import { Provider } from 'react-redux'
import { store } from './store/store'
import bgImage from '../src/assets/background.png';

const App = () => {
  return (
    <>
    <div className="min-h-screen p-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bgImage})` }}>
      <Provider store={store}>
        <Quiz />
      </Provider>
    </div>
    </>
  )
}

export default App;