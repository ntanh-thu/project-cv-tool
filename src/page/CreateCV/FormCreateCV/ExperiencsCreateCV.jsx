import { Button, DatePicker, Form, Input } from "antd";

function ExperiencsCreateCV() {
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

export default ExperiencsCreateCV;
