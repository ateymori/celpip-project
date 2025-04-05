// import { createBrowserRouter } from "react-router-dom";
// import HomePage from "./HomePage";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
// ]);

// export default router;

import AnimatedRoutes from './AnimatedRoutes';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '*',
    element: <AnimatedRoutes />,
  },
]);

export default router;
