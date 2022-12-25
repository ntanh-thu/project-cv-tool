import { Layout } from "antd";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ContentCreateCV from "./ContentCreateCV";
import FormCreateCV from "./FormCreateCV";
import SiderCreateCV from "./SiderCreateCV";

function CreateCV() {
  return (
    <>
      <Layout>
        <Layout.Sider>
          <SiderCreateCV />
        </Layout.Sider>
        <Layout.Content>
          <FormCreateCV />
        </Layout.Content>
      </Layout>
    </>
  );
}

export default CreateCV;
