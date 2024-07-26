import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("@/home"));
const Deploy = React.lazy(() => import("@/deploy"));
const FameScan = React.lazy(() => import("@/fameScan"));
const Market = React.lazy(() => import("@/market"));
const RouterPage = ({ initialRoute }) => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deploy" element={<Deploy />} />
      <Route path="/fameScan" element={<FameScan />} />
      <Route path="/market" element={<Market />} />
    </Routes>
);
export default RouterPage;
