import React from "react";
import { Button,Row, Col } from "antd";
import "../App.css";

function TestButton({value, type}){
    return(
        <>
        <Row style={{ marginTop: "22px" }} >
        <Col span={11} push={6}>
        <Button type="primary" htmlType="submit" className="login-form-button" > {value}
        </Button>
        </Col>
        </Row>
        </>

    );

    
}
export default TestButton;
