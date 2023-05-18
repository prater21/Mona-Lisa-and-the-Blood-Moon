import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main, { loader } from './components/pages/Main';
import Index from './components/pages/Index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Index />} />
      <Route path='main' element={<Main />} loader={loader}/>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
