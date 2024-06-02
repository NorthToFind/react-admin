import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Form,Input,Checkbox,Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';  
import { increment, decrement } from '@/store/actions';  
import type { FormProps } from  "antd";
import styles from './index.module.less'
const Login:React.FC = () => {
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
      };
    const [info,setInfo]:FieldType = useState({
        username:"",
        password:"",
        remember:""
    })
    const infoData = useSelector((state) => state.info);  
    const dispatch = useDispatch();

    const navigte = useNavigate();
    // 提交表单
    const onFinish =(info) =>{
        console.log(info,"info")
        const data = dispatch(increment())
        console.log(data)

    }
    // 提交表单失败
    const onFinishFailed = () =>{}
    return (<>
        <div className={styles.login} >
            {infoData.age}
            <div className={styles.login_center}>
                <Form
                    name="basic"
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: 600,minWidth: '80%', }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label=""
                        name="username"
                        
                        rules={[{ required: true, message: '请输入账号!' }]}
                        >
                        <Input placeholder="请输入账号"/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label=""
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                        >
                        <Input.Password placeholder="请输入密码"/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 0, span: 16 }}
                        >
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                        <Button block type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </>)
}
export default Login