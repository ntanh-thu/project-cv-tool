import { Col, Form, Input, Row } from "antd";

function ProfileCreateCV() {
  return (
    <Row>
      <Col span={18}>
        <Form.Item name="fullName" label="Họ và tên ">
          <Input />
        </Form.Item>
        <Form.Item name="dateOfBirth" label="Ngày sinh">
          <Input />
        </Form.Item>
        <Form.Item name="sex" label="Giới tính">
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Số điện thoại">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ">
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Website">
          <Input />
        </Form.Item>
      </Col>
      <Col span={6}>
        <div style={{ border: "1px solid black", margin: "10%" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            style={{ width: "100%", height: "100%" }}
          />
          <input type="file" />
        </div>
      </Col>
    </Row>
  );
}

export default ProfileCreateCV;
