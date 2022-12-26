import { Button, Form, Input } from "antd";
import ActivityCreateCV from "./ActivityCreateCV";
import EducationCreateCV from "./EducationCreateCV";
import ExperiencsCreateCV from "./ExperiencsCreateCV";
import ProfileCreateCV from "./ProfileCreateCV";
import SkillGroupCreateCV from "./SkillGroupCreateCV";
import "./formcreatecv.scss";

function FormCreateCV() {
  const [form] = Form.useForm();
  return (
    <div className="form-content">
      <Form
        form={form}
        onFinish={(finish) => {
          console.log(finish);
        }}
        className="form-page"
      >
        <ProfileCreateCV />
        <EducationCreateCV />
        <ExperiencsCreateCV />
        <ActivityCreateCV />
        <SkillGroupCreateCV />
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
