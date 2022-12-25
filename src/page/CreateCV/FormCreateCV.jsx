import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import RowList from "./RowList";

function ProfileCV() {
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
        <div>
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" /> */}
        </div>
      </Col>
    </Row>
  );
}

function EducationCV() {
  return (
    <>
      <div>Học Vấn</div>
      <Form.List name="education">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <div key={field.key}>
                  <Form.Item
                    name={[index, "timeEducation"]}
                    label="Từ ngày - đến ngày"
                  >
                    <DatePicker.RangePicker />
                  </Form.Item>
                  <Form.Item name={[index, "school"]} label="Tên trường học">
                    <Input />
                  </Form.Item>
                  <Form.Item name={[index, "branch"]} label="Ngành học">
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={[index, "description"]}
                    label="Mô tả chi tiết"
                  >
                    <Input.TextArea />
                  </Form.Item>
                  <Button onClick={() => remove(field.name)}>Remove</Button>
                </div>
              ))}
              <Button onClick={() => add()}>Add</Button>
            </div>
          );
        }}
      </Form.List>
    </>
  );
}

function ExperienceCV() {
  return (
    <>
      <div>Kinh nghiệm làm việc</div>
      <Form.List name="experience">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <div key={field.key}>
                  <Form.Item
                    name={[index, "timeExperience"]}
                    label="Từ ngày - đến ngày"
                  >
                    <DatePicker.RangePicker />
                  </Form.Item>
                  <Form.Item name={[index, "company"]} label="Công ty">
                    <Input />
                  </Form.Item>
                  <Form.Item name={[index, "position"]} label="Vị trí làm việc">
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={[index, "description"]}
                    label="Mô tả chi tiết"
                  >
                    <Input.TextArea />
                  </Form.Item>
                  <Button onClick={() => remove(field.name)}>Remove</Button>
                </div>
              ))}
              <Button onClick={() => add()}>Add</Button>
            </div>
          );
        }}
      </Form.List>
    </>
  );
}

function ActivityCV() {
  return (
    <>
      <div>Hoạt động</div>
      <Form.List name="experience">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <div key={field.key}>
                  <Form.Item
                    name={[index, "timeExperience"]}
                    label="Từ ngày - đến ngày"
                  >
                    <DatePicker.RangePicker />
                  </Form.Item>
                  <Form.Item name={[index, "company"]} label="Công ty">
                    <Input />
                  </Form.Item>
                  <Form.Item name={[index, "position"]} label="Vị trí làm việc">
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={[index, "description"]}
                    label="Mô tả chi tiết"
                  >
                    <Input.TextArea />
                  </Form.Item>
                  <Button onClick={() => remove(field.name)}>Remove</Button>
                </div>
              ))}
              <Button onClick={() => add()}>Add</Button>
            </div>
          );
        }}
      </Form.List>
    </>
  );
}
function SkillGroupCV() {
  return (
    <>
      <div>Các kỹ năng</div>
      <Form.List name="skilgroup">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <div key={field.key}>
                  <Input.Group>
                    <Input name={[index, "skillName"]} />
                    <Select name={[index, "skillName"]}>
                      <Select.Option></Select.Option>
                      <Select.Option></Select.Option>
                      <Select.Option></Select.Option>
                    </Select>
                    <Input name={[index, "skillDescription"]} />
                  </Input.Group>
                  <Button onClick={() => remove(field.name)}>Remove</Button>
                </div>
              ))}
              <Button onClick={() => add()}>Add</Button>
            </div>
          );
        }}
      </Form.List>
    </>
  );
}

function FormCreateCV() {
  const [form] = Form.useForm();
  return (
    <div>
      <Form
        form={form}
        onFinish={(finish) => {
          console.log(finish);
        }}
      >
        <ProfileCV />
        <EducationCV />
        <ExperienceCV />
        <ActivityCV />
        <SkillGroupCV />
        <div>Sở thích</div>
        <Form.Item name="hoodie">
          <Input.TextArea />
        </Form.Item>
      </Form>
      <Button
        onClick={() => {
          form.submit();
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default FormCreateCV;
