import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("@/home"));
const Explore = React.lazy(() => import("@/explore"));
const RouterPage = ({ initialRoute }) => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
);
export default RouterPage;
