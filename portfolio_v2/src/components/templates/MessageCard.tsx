import { Stack, Text } from "@mantine/core";
import { FC } from "react";

interface Props {
    open?: () => void
}

export const MessageCard: FC<Props> = ({ open }) => {

    return(
        <Stack ta="center" px={32} py={64} ml="auto" mr="auto" gap={8} maw={520} ff="'Delicious Handrawn', cursive" c="#484949">
            <Text fz={28}>Thank you for visiting my web portfolio!</Text>
            <Text fz={28}>Feel free to contact me by email or linkedin, and have a great rest of your day!</Text>
            {open ? 
                <>
                    <Text size="md" c="var(--theme-green)">P.S. Click on my name to send a message </Text>
                    <Text fz={28} ta="right" onClick={open}  style={{ cursor: "pointer" }}>Risa</Text>
                </>:
                <Text fz={28} ta="right">Risa</Text>}
        </Stack>
    );
}