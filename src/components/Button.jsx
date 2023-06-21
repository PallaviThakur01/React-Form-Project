import React from "react";
import { Button, Row, Col } from "antd";
import "../App.css";
function TestButton({ value, onclick }) {
    return (
        <>
            <Button type="primary" htmlType="submit" onClick={onclick} className="login-form-button" > {value}
            </Button>

        </>

    );
}
export default TestButton;
