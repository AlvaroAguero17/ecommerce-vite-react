import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { ProductPage } from "./pages/ProductPage";
import { SearchPage } from "./pages/SearchPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products/*" element={<ProductPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
