import {  Form, Row, Col } from "antd";
import TestButton from "../components/Button";
import InputField from "../components/Input";
function Login() {
  return (
    <div style={{ marginTop: "200px", marginLeft: "350px" }} className="App">
      <Form style={{ textAlign: "left", width: "800px" }}>
        <Row>
          <Col span={11} push={6}>
            <p style={{ textAlign: "center", color: "grey", fontSize: "16px" }}>
              {" "}
              Forget Your Password?
            </p>
            <p style={{ textAlign: "center", color: "grey" }}>
              Please Enter the email you use to sign in Gaize
            </p>
            <br />
          </Col>
        </Row>

        <Row style={{ marginBottom: "2px" }}>
          <Col span={11} push={6}>
            
           
            <InputField type="email" placeholder="Email" label="Email" />
          </Col>
        </Row>

        <TestButton value={"Send Reset Mail"} type={"submit"}>
          Send Reset Mail
        </TestButton>
      </Form>
    </div>
  );
}

export default Login;
