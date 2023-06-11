import React from "react";
import { Radio, RadioGroup, useRadioGroup, Box } from '@chakra-ui/react'
import { useRadio } from '@chakra-ui/react'
function CustomRadio(props) {

    const { getInputProps, getRadioProps } = useRadio(props)
    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label' width={props.width}>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                width={'100%'}
                color={'var(--secondary-text-color)'}
                background={'#262C35'}
                height={'40px'}
                border={'2px solid var(--primary-border-color)'}
     
                boxShadow='md'
                _checked={{
                    bg: 'var(--primary-button-color)',
                    color: 'white',
                    borderColor: 'var(--primary-border-color)',
                }}
                _focus={{
                    boxShadow: 'none',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}
const styles={

}
export default CustomRadio;

