import { Box, Button, Group, Stack, TextInput, Textarea } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { FC, useState } from "react";

interface Props {
    close: () => void
}

export const ContactForm: FC<Props> = ({ close }) => {
    const [email, setEmail] = useInputState("");
    const [title, setTitle] = useInputState("");
    const [message, setMessage] = useInputState("");
    const [sending, setSending] = useState(false);
    async function send() {
        setSending(true);
        console.log("To: " + email);
        console.log("Re: " + title);
        console.log("Body: " + message);
        setSending(false);
    }

    function isValidEmailFormat() {
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        return emailRegex.test(email);
    }
    function resetFields() {
        setEmail("");
        setTitle("");
        setMessage("");
    }
    function cancel() {
        resetFields();
        close();
    }
    return(
        <Box px={32} pb={32} ff="var(--mantine-font-family)">
            <Stack gap={8}>
                <TextInput
                    label="Email"
                    value={email}
                    onChange={setEmail}
                />
                <TextInput 
                    label="Re:"
                    value={title}
                    onChange={setTitle}
                />
                <Textarea 
                    label="Message"
                    value={message}
                    onChange={setMessage}
                    autosize
                    minRows={4}
                    maxRows={4}
                />
                <Group justify="space-between">
                    <Button variant="default" onClick={cancel}>Cancel</Button>
                    <Button variant="default" loading={sending} disabled={!isValidEmailFormat() || title.trim().length === 0 || message.trim().length === 0} onClick={send}>Send</Button>
                </Group>
            </Stack>
        </Box>
    );
}