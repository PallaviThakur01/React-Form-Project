import { Input, Form, Row, Col } from "antd";
import TestButton from "../components/Button";
import InputField from "../components/Input";
function Login() {
  return (
    <div style={{ marginTop: "200px", marginLeft: "350px" }} className="App">
      <Form style={{ textAlign: "left", width: "800px" }}>
        <Row>
          <Col span={11} push={6}>
            <h1>Login </h1>
          </Col>
        </Row>

        <Row>
          <Col span={11} push={6}>
            <p style={{ fontWeight: "bold", color: "gray" }}>
              Please Enter your email address and password to login.{" "}
            </p>
          </Col>
        </Row>
        <Row style={{ marginBottom: "2px" }}>
          <Col span={11} push={6}>
            <InputField type="text" placeholder="Email" label="Email" />
          </Col>
        </Row>
        <Row>
          <Col span={11} push={6}>
            <Input type="password" placeholder="password" />
            <a href="#"> Forget your Password?</a>
            <br />
          </Col>
        </Row>

        <TestButton value={"Login"} type={"submit"}></TestButton>
      </Form>
    </div>
  );
}

export default Login;
