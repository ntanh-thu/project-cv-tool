import { Button, Col, Form, Input, Row, DatePicker, Select } from 'antd';
import './formcreatecv.scss';

function FormCreateCV() {
    const [form] = Form.useForm();
    return (
        <div className="form-content">
            <Row className="form-content-row">
                <Col span={18} className="form-content-row-col">
                    <Form
                        form={form}
                        onFinish={(finish) => {
                            console.log(finish);
                        }}
                        className="form-content-row-col-page"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 19 }}
                    >
                        <Row className="form-content-row-col-page-row">
                            <Col span={18}>
                                <div>Thông tin liên hệ</div>
                                <Form.Item name="fullName" label="Họ và tên ">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="dateOfBirth" label="Ngày sinh">
                                    <DatePicker style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item name="sex" label="Giới tính">
                                    <Select>
                                        <Select.Option value={0}>Nam</Select.Option>
                                        <Select.Option value={1}>Nữ</Select.Option>
                                        <Select.Option value={2}>Khác</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="phone" label="Số điện thoại">
                                    <Input type="phone" />
                                </Form.Item>
                                <Form.Item name="email" label="Email">
                                    <Input type="email" />
                                </Form.Item>
                                <Form.Item name="address" label="Địa chỉ">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="website" label="Website">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <div style={{ border: '1px solid black', margin: '10%' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" style={{ width: '100%', height: '100%' }} />
                                    <input type="file" />
                                </div>
                            </Col>
                        </Row>
                        <div>Học Vấn</div>
                        <Form.List name="education">
                            {(fields, { add, remove }) => {
                                return (
                                    <div>
                                        {fields.map((field, index) => (
                                            <div key={field.key}>
                                                <Form.Item name={[index, 'timeEducation']} label="Từ ngày - đến ngày">
                                                    <DatePicker.RangePicker style={{ width: '100%' }} />
                                                </Form.Item>
                                                <Form.Item name={[index, 'school']} label="Tên trường học">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item name={[index, 'branch']} label="Ngành học">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item name={[index, 'description']} label="Mô tả chi tiết">
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
                        <div>Kinh Nghiệm Làm Việc</div>
                        <Form.List name="experience">
                            {(fields, { add, remove }) => {
                                return (
                                    <div>
                                        {fields.map((field, index) => (
                                            <div key={field.key}>
                                                <Form.Item name={[index, 'timeExperience']} label="Từ ngày - đến ngày" style={{ width: '100%' }}>
                                                    <DatePicker.RangePicker />
                                                </Form.Item>
                                                <Form.Item name={[index, 'company']} label="Công ty">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item name={[index, 'position']} label="Vị trí làm việc">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item name={[index, 'description']} label="Mô tả chi tiết">
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
                        <div>Hoạt động</div>
                        <Form.List name="experience">
                            {(fields, { add, remove }) => {
                                return (
                                    <div>
                                        {fields.map((field, index) => (
                                            <div key={field.key}>
                                                <Form.Item name={[index, 'timeExperience']} label="Từ ngày - đến ngày">
                                                    <DatePicker.RangePicker />
                                                </Form.Item>
                                                <Form.Item name={[index, 'company']} label="Công ty">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item name={[index, 'position']} label="Vị trí làm việc">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item name={[index, 'description']} label="Mô tả chi tiết">
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
                        <div>Các kỹ năng</div>
                        <Form.List name="skilgroup">
                            {(fields, { add, remove }) => {
                                return (
                                    <div>
                                        {fields.map((field, index) => (
                                            <div key={field.key}>
                                                <Input.Group>
                                                    <Input name={[index, 'skillName']} />
                                                    <Select name={[index, 'skillName']}>
                                                        <Select.Option></Select.Option>
                                                        <Select.Option></Select.Option>
                                                        <Select.Option></Select.Option>
                                                    </Select>
                                                    <Input name={[index, 'skillDescription']} />
                                                </Input.Group>
                                                <Button onClick={() => remove(field.name)}>Remove</Button>
                                            </div>
                                        ))}
                                        <Button onClick={() => add()}>Add</Button>
                                    </div>
                                );
                            }}
                        </Form.List>
                        <div>Sở thích</div>
                        <Form.Item name="hoodie">
                            <Input.TextArea />
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={6} className="form-content-row-col">
                    <Button
                        onClick={() => {
                            form.submit();
                        }}
                    >
                        Submit
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default FormCreateCV;
