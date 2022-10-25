import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import { routes } from './Routes/Routes/Routes';


function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
