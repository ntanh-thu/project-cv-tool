import { Button, Form, Input, Select } from "antd";

function SkillGroupCreateCV() {
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

export default SkillGroupCreateCV;
