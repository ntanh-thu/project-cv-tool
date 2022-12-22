import React from "react";
import Header from "./components/Header";
import { Layout } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCV from "./page/CreateCV/CreateCV";
import Home from "./page/Home/Home";

import "antd/dist/reset.css";
import "./App.css";

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
