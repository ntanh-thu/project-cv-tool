import { Form, Radio, Select } from "antd";
import expand from "../../assets/icon/arrows-expand-svgrepo-com.svg";
import template from "../../assets/icon/template-svgrepo-com.svg";
import "./sidercreatecv.scss";

function MenuCreateCV({ title, children }) {
  return (
    <div className="menu-create-item">
      <div className="menu-create-item-title">{title}</div>
      {children}
    </div>
  );
}

function SiderCreateCV() {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.submit();
  };
  const MenuItems = [
    {
      title: "Tông màu",
      children: (
        <Radio.Group
          buttonStyle="solid"
          defaultValue={0}
          className="menu-create-item-child"
        >
          <Radio value={0}></Radio>
          <Radio value={1}></Radio>
          <Radio value={2}></Radio>
        </Radio.Group>
      ),
    },
    {
      title: "Font chữ",
      children: (
        <Select defaultValue={0} className="menu-create-item-child">
          <Select.Option value={0}>Roboto Condensed</Select.Option>
          <Select.Option value={1}>Roboto</Select.Option>
          <Select.Option value={2}>Open Sans</Select.Option>
          <Select.Option value={3}>Mitr</Select.Option>
        </Select>
      ),
    },
    {
      title: "Cỡ chữ",
      children: (
        <div className="menu-create-item-child">
          <div className="menu-create-item-child-size small active">A</div>
          <div className="menu-create-item-child-size mid">A</div>
          <div className="menu-create-item-child-size large">A</div>
        </div>
      ),
    },
    {
      title: "Cách dòng",
      children: (
        <div className="menu-create-item-child">
          <div className="menu-create-item-child-expand small active">
            <img src={expand} />
          </div>
          <div className="menu-create-item-child-expand mid">
            <img src={expand} />
          </div>
          <div className="menu-create-item-child-expand large">
            <img src={expand} />
          </div>
        </div>
      ),
    },
    {
      title: "Biểu mẫu",
      children: (
        <div className="menu-create-item-child">
          <img
            className="menu-create-item-child-temp"
            src={template}
            onClick={handleSave}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="menu-create">
      {MenuItems.map((menuitem, index) => (
        <MenuCreateCV
          title={menuitem.title}
          children={menuitem.children}
          key={index}
        />
      ))}
    </div>
  );
}

export default SiderCreateCV;
