import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main, { loader } from './components/Main';
import Index from './components/Index';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Index />} />
      <Route path='/main' element={<Main />} loader={loader}/>
    </Route>
  )
  , { basename: "/MonaLisaandtheBloodMoon" }
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
