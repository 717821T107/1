import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const BOOKSDETAILSPAGE = React.lazy(() => import("pages/BOOKSDETAILSPAGE"));
const EXPORINGBOOKSPAGE = React.lazy(() => import("pages/EXPORINGBOOKSPAGE"));
const BOOKSPAGE = React.lazy(() => import("pages/BOOKSPAGE"));
const SurfacePro8Six = React.lazy(() => import("pages/SurfacePro8Six"));
const Signuppage = React.lazy(() => import("pages/Signuppage"));
const HOMEPAGE = React.lazy(() => import("pages/HOMEPAGE"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<HOMEPAGE />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/surfacepro8six" element={<SurfacePro8Six />} />
          <Route path="/bookspage" element={<BOOKSPAGE />} />
          <Route path="/exporingbookspage" element={<EXPORINGBOOKSPAGE />} />
          <Route path="/booksdetailspage" element={<BOOKSDETAILSPAGE />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
