import { Input, Form, Row, Col } from "antd";
import TestButton from "../components/Button";

const validator = {
  require: {
    required: true,
    message: "Enter First Name",
  },
};

const validator1 = {
  require: {
    required: true,

    type: "email",

    message: "Enter a valid email address!",
  },
};

const validator2 = {
  require: {
    required: true,
    pattern: `[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`,
    message: "Enter valid Phone Number",
  },
};

function Register() {
  return (
    <div style={{ marginLeft: "25%" }} className="App">
      <Form style={{ textAlign: "left", width: "800px" }}>
        <Row>
          <Col span={11} push={6}>
            <h1>Lets Create an account</h1>
          </Col>
        </Row>
        <Row>
          <Col span={5} push={5} offset={1}>
            <label style={{ fontWeight: "bold" }}>First Name</label>
            <Form.Item name="name" rules={[validator.require]} hasFeedback>
              <Input />
            </Form.Item>
          </Col>

          <Col span={5} push={5} offset={1}>
            <label style={{ fontWeight: "bold" }}>Last Name</label>

            <Input type="text" placeholder="Last Name" label="Last Name" />
          </Col>
        </Row>
        <Row>
          <Col span={11} push={6}>
            <label style={{ fontWeight: "bold" }}>Email</label>
            <Form.Item name="email" rules={[validator1.require]} hasFeedback>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11} push={6}>
            <label style={{ fontWeight: "bold" }}>Phone Number</label>
            <Form.Item
              name="phone number"
              rules={[validator2.require]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11} push={6}>
            <label style={{ fontWeight: "bold" }}>Password</label>
            <Input type="password" placeholder="password" />

            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col span={11} push={6}>
            By registering, you to Gaize
            <a href=""> Terms of use and Privacy Policy</a>
          </Col>
        </Row>

        <TestButton value={"Register"} type={"submit"}></TestButton>
        <Row>
          <Col span={11} push={6}>
            <br />
            <br />
            Already have an account?<a href=""> Sign in</a>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default Register;
