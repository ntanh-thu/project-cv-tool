import { Button, DatePicker, Form, Input } from "antd";

function EducationCreateCV() {
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
export default EducationCreateCV;
