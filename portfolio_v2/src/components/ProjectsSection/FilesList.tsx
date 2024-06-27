import { ActionIcon, AspectRatio, Flex, Image, Overlay, Stack, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { FC, useEffect, useState } from "react";

interface Props {
    files: Array<File | string>
    deleteFile?: (index: number) => void
}


export const FilesList: FC<Props> = ({ files, deleteFile }) => {
    const [preview, setPreview] = useState<File | string | null>(null);
    const [previewIndex, setPreviewIndex] = useState(-1);

    const fileItem = (file: File | string, index: number) => {
        return (
            <AspectRatio key={index} ratio={1} w={56} style={{ border: "1px solid #E9ECEF", cursor: "pointer" }} onClick={() => setPreviewItem(index)} >
                <Image 
                    src={file instanceof File ? URL.createObjectURL(file) : file} 
                    alt={file instanceof File ? file.name : ''} 
                    maw="100%" 
                    mah="100%" 
                    radius="sm" 
                    fit="cover" />
            </AspectRatio>
        );
    }

    useEffect(() => {
        setPreviewItem(0);
    }, [files]);

    function setPreviewItem(index: number) {
        const file = files.at(index);
        if(file) {
            setPreview(file);
            setPreviewIndex(index);
        }else {
            setPreview(null);
            setPreviewIndex(-1);
        }
    }
    return(
        <Stack>
            {files.length === 0 && <Text c="dimmed" size="sm" pt={8} pb={8}>No screenshots.</Text>}
            {preview && 
            <AspectRatio ratio={16 / 9} w="100%" style={{ backgroundColor: '#E9ECEF' }} mt={12} pos="relative" >
                <div>
                    <Image 
                        src={preview instanceof File ? URL.createObjectURL(preview) : preview} 
                        alt={preview instanceof File ? preview.name : ''} 
                        w="100%" 
                        h="100%" 
                        radius="sm" 
                        fit="contain" />
                </div>
                {deleteFile &&
                <Overlay backgroundOpacity={0}>
                    <ActionIcon size="xl" radius="xl" pos="absolute" right={12} bottom={12} variant="white" color="red">
                        <IconTrash stroke={1.2} onClick={() => deleteFile(previewIndex)} />
                    </ActionIcon>
                </Overlay>}
            </AspectRatio>}
            {files.length >= 2 && <Flex gap={8} wrap="wrap">{files.map(fileItem)}</Flex>}
        </Stack>
    );
}