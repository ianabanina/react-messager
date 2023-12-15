import { Form, Input, Spin } from "antd";
import { useAddMessageMutation } from "entities/messages/Messages.transport.ts";
import { IMessage } from "entities/messages/Messages.models.ts";
import moment from "moment";
import { CURRENT_USER } from "common/const/Base.const.ts";
import { LoadingOutlined, SendOutlined } from '@ant-design/icons';
import { useState } from "react";

interface ICreateMessageForm {
    text: string
}

export function CreateMessage() {
    const [form] = Form.useForm<ICreateMessageForm>();
    const [addMessage] = useAddMessageMutation()
    const [isLoading, setLoading] = useState<boolean>(false);

    const onFinish = (values: ICreateMessageForm) => {
        setLoading(true);

        // TODO: Should not send id and author info and date with real BE
        const messageData: IMessage = {
            ...values,
            date: moment().toISOString(),
            author: CURRENT_USER,
            id: moment().toISOString()
        }

        addMessage(messageData)
            .unwrap()
            .then(() => {
                form.resetFields();
            })
            .catch((error) => {
                alert(`Sorry, cannot send message. Error status: ${error.status.toString()}`)
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return <Form form={form} onFinish={onFinish} autoComplete="off">
        <Form.Item
            name="text"
            rules={[
                {required: true, message: 'Please input your message'},
                {max: 200, message: 'Please, use max 200 symbols'}
            ]}
        >
            <Input maxLength={200}
                   showCount
                   addonAfter={<Spin indicator={
                       isLoading
                           ? <LoadingOutlined style={{fontSize: 16}} spin/>
                           : <SendOutlined className="icon" />
                   }/>}
            />
        </Form.Item>
    </Form>
}
