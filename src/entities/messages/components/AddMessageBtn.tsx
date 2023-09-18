import {Button, Form, Input, Modal} from "antd";
import {useState} from "react";

export function AddMessageBtn() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm<{ message: string; }>();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const onFinish = () => {
        setIsModalOpen(false);
        form.resetFields();
        // TODO: Add message to collection
    }

    return <>
        <Button type={'primary'} onClick={showModal}>Add new message</Button>

        <Modal title="Create a new message" open={isModalOpen} onOk={form.submit} onCancel={handleCancel}>
            <Form form={form} onFinish={onFinish} autoComplete="off">
                <Form.Item
                    name="message"
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
