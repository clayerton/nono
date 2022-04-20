import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("@/home"));
const Makert = React.lazy(() => import("@/market"));
const RouterPage = ({ initialRoute }) => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Makert />} />
    </Routes>
);
export default RouterPage;
