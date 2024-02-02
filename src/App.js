import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css'
import Body from './components/Body'
import Head from './components/Head';
import WatchPage from './components/WatchPage';
import store from './utils/store';
import { createBrowserRouter } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
function App() {
  const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[{
      path:"/",
      element:<VideoContainer/>
    },
  {
    path:"/watch",
    element:<WatchPage/>
  }]
  }])
  return (
    <Provider store={store}>
    <div className="App">
      <Head></Head>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
