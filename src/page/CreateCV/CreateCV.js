import { Layout } from "antd";
import SiderCreateCV from "../../components/SiderCreateCV";

function CreateCV() {
  return (
    <>
      <Layout>
        <Layout.Sider>
          <SiderCreateCV />
        </Layout.Sider>
        <Layout.Content></Layout.Content>
      </Layout>
    </>
  );
}

export default CreateCV;
