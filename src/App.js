import React from "react";
import Header from "./components/Header";
import { Layout } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCV from "./page/CreateCV/CreateCV";
import Home from "./page/Home/Home";

import "./App.scss";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <CreateCV />,
    },
  ]);
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
        <RouterProvider router={router} />
      </Layout.Content>
    </Layout>
  );
}

export default App;
F