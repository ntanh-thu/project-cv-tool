import { Button, Radio, Select } from "antd";
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
        <div className="menu-create-item-child child-size">
          <div className="menu-create-item-child-item small">A</div>
          <div className="menu-create-item-child-item mid">A</div>
          <div className="menu-create-item-child-item large">A</div>
        </div>
      ),
    },
    {
      title: "Cách dòng",
      children: (
        <div className="menu-create-item-child">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ),
    },
    {
      title: "Font chữ",
      children: <Button />,
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
