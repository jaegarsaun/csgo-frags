import React, { useRef } from 'react';
import {

    Input,
    InputGroup,
    InputRightElement,

    Button,
    useToast,
} from '@chakra-ui/react'

const CopyButton = ({ text }) => {
    const inputRef = useRef(null);
    const Toast = useToast();

    const handleCopyClick = () => {
        inputRef.current.select();
        document.execCommand('copy');


        // show toast saying copied

        Toast({
            title: 'Copied to clipboard',
            status: "success",
            isClosable: true,
            duration: 3000,
        })

    };

    return (


        <InputGroup>
            <Input
                pr='4.5rem'
                type='text'
                value={text}
                style={styles.copybox}
                readOnly
                ref={inputRef}
            />
            <InputRightElement width='4.5rem'>
                <Button
                    h='1.75rem'
                    size='sm'
                    onClick={handleCopyClick}
                    style={styles.copybtn}
                    className="font-reg secondary-text"
                >
                    Copy
                </Button>
            </InputRightElement>
        </InputGroup>

    );
};

const styles = {
    copybtn: {
        backgroundColor: '#212836',
        border: '2px solid #3D4452',
        borderRadius: '5px',

    },
    copybox: {
        width: '100%',
        height: '40px',
        borderRadius: '5px',
        backgroundColor: '#121927',
        border: 'none',
        outline: 'none',
        padding: '0px 10px',
        fontSize: '14px',
        color: '#BBC1C8',
    },
};

export default CopyButton;
