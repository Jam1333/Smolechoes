import Excursions from "./components/pagesComponents/ExcursionsComponent/Excursions";
import Home from "./components/pagesComponents/HomeComponent/Home"

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/excursions', 
    element: <Excursions />
  }
];

export default AppRoutes;
