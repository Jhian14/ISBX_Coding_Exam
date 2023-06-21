import { React, useState, useEffect, } from 'react'
import { Form, Input, Button, Card, message } from 'antd'
import axios from "axios";

const CreateUser = () => {

    //Ref
    const [form] = Form.useForm();

    const handleCreate = async (value) => {
        console.log("value", value)

        const request = await axios.post(
            `/api/users/sign-up`,
            { ...value },
        ).then((res) => {
            form.resetFields()
            message.success("new user sucess")
        })
    }

    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: 30 }}>
            <Card style={{ width: 800 }}>
                <Form
                    form={form}
                    name="new_user_form"
                    onFinish={handleCreate}
                    labelCol={{
                        span: 8,
                    }}
                >
                    <Form.Item
                        label="Full name"
                        name="full_name"
                        rules={[{ required: true, message: 'Please input user full name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input new email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        typ
                        rules={[{ required: true, message: 'Please input new password!' }]}
                    >
                        <Input.Password />

                    </Form.Item>
                    <Button htmlType="submit" style={{ float: "right" }}>Submit</Button>
                </Form>
            </Card>
        </div>
    )
}

export default CreateUser