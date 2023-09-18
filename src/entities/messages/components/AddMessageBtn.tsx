import {Button, Form, Input, Modal} from "antd";
import {useState} from "react";
import {useAddMessageMutation} from "entities/messages/Messages.transport.ts";
import {IMessage} from "entities/messages/Messages.models.ts";
import moment from "moment";
import {CURRENT_USER} from "common/const/Base.const.ts";

interface INewMessageForm {
    text: string
}

export function AddMessageBtn() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm<INewMessageForm>();
    const [addMessage] = useAddMessageMutation()

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const onFinish = (values: INewMessageForm) => {
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
                setIsModalOpen(false);
            })
            .catch((error) => {
                alert(`Sorry, cannot send message. Error status: ${error.status.toString()}`)
            })
    }

    return <>
        <Button type={'primary'} onClick={showModal}>Add new message</Button>

        <Modal title="Create a new message" open={isModalOpen} onOk={form.submit} onCancel={handleCancel}>
            <Form form={form} onFinish={onFinish} autoComplete="off">
                <Form.Item
                    name="text"
                    rules={[
                        {required: true, message: 'Please input your message'},
                        {max: 200, message: 'Please, use max 200 symbols'}
                    ]}
                >
                    <Input.TextArea rows={4} maxLength={200} showCount/>
                </Form.Item>
            </Form>
        </Modal>
    </>
}
