import React from "react";
import '../style.css';
import { useState, useRef } from 'react';
// Component import
import Line from './line';
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    List,
    ListItem,
    ListIcon,
    Button,
    useToast,
    Select,
    Flex,
    Spacer,
    Box,
    HStack,
    useRadioGroup,
    Radio,
    RadioGroup,
    Stack,
    RadioCard,
} from '@chakra-ui/react'
import CustomRadio from './customRadio';

import { FaCamera, FaCrosshairs, FaEye, FaMusic } from 'react-icons/fa';
import { WarningIcon, CheckIcon } from '@chakra-ui/icons'
import { Form } from "react-router-dom";



function VideoInfoCard() {
    const nadeTypes = ['Grenade', 'Molotov', 'Smoke', 'Flashbang', 'Decoy']
    const teams = ['Counter Terrorists', 'Terrorists', 'Both']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })

    const group = getRootProps()

    return (
        <div className="add-wrapper">
            <div className="form-background">
                <div className="form-wrapper">
                    <div className="form-title">
                        <p className="primary-text font-reg" style={styles.title}>LINE-UP INFORMATION</p>
                    </div>
                    <Line />
                </div>

                {/* Form with two sides (left and right*/}
                <div className="form-content-wrapper">
                    <div className="form-content-top">
                    <div className="form-content-left" style={styles.Cont}>
                        <FormControl>
                            <Box>
                                <FormLabel className="secondary-text font-bold" style={styles.label}>MAP</FormLabel>
                                <Select style={styles.input}>
                                    {/* These will be rendered dynamicaly later on */}
                                    <option value="0" disabled selected hidden>Select a map</option>
                                    <option value="1">Dust 2</option>
                                    <option value="2">Inferno</option>
                                    <option value="3">Mirage</option>
                                    <option value="4">Nuke</option>
                                    <option value="5">Overpass</option>
                                    <option value="6">Train</option>
                                    <option value="7">Vertigo</option>
                                </Select>
                            </Box>
                            <HStack marginTop={'10px'}>
                                <Box width={'49%'}>
                                    <FormLabel className="secondary-text font-bold" style={styles.label}>START POSITION</FormLabel>
                                    <Input style={styles.input} />
                                </Box>
                                <Spacer />
                                <Box width={'49%'}>
                                    <FormLabel className="secondary-text font-bold" style={styles.label}>END POSITION</FormLabel>
                                    <Input style={styles.input} />
                                </Box>
                            </HStack>
                            <Box marginTop={'10px'}>
                                <FormLabel className="secondary-text font-bold" style={styles.label}>MOVEMENT TYPE</FormLabel>
                                <Select style={styles.input}>
                                    {/* Default value that can not be selected*/}
                                    <option value="0" disabled selected hidden>Select a movement type</option>
                                    <option value="1">Walk</option>
                                    <option value="2">Run</option>
                                    <option value="3">Jump</option>
                                    <option value="4">Crouch</option>
                                    <option value="5">Crouch Walk</option>
                                </Select>
                            </Box>

                        </FormControl>
                    </div>


                    <div className="form-content-right" style={styles.Cont}>
                        <FormControl style={styles.rightCont}>
                            <Box>
                                <FormLabel className="secondary-text font-bold" style={styles.label}>NADE TYPE</FormLabel>
                                <Select style={styles.input}>
                                    {/* These will be rendered dynamicaly later on */}
                                    <option value="0" disabled selected hidden>Select a nade type</option>
                                    <option value="1">Grenade</option>
                                    <option value="2">Molotov</option>
                                    <option value="3">Smoke</option>
                                    <option value="4">Flashbang</option>
                                    <option value="5">Decoy</option>
                                </Select>
                            </Box>
                            <Box marginTop={'10px'}>
                                <FormLabel className="secondary-text font-bold" style={styles.label}>TEAM</FormLabel>
                                <Select style={styles.input}>
                                    {/* These will be rendered dynamicaly later on */}
                                    <option value="0" disabled selected hidden>Select a team</option>
                                    <option value='1'>Terrorists</option>
                                    <option value='2'>Counter Terrorists</option>
                                    <option value='3'>Both</option>
                                </Select>
                            </Box>
                            <Box marginTop={'10px'}>
                                <FormLabel className="secondary-text font-bold" style={styles.label}>TECHNIQUE</FormLabel>
                                <Select style={styles.input}>
                                    {/* These will be rendered dynamicaly later on */}
                                    <option value="0" disabled selected hidden>Select a technique</option>
                                    <option value='1'>Terrorists</option>
                                    <option value='2'>Counter Terrorists</option>
                                    <option value='3'>Both</option>
                                </Select>
                            </Box>
                        </FormControl>
                    </div>
                    </div>

                </div>





            </div>
        </div>
    );
}

const styles = {
    title: {
        fontSize: '20px',
    },
    label: {
        fontSize: '14px',
    },
    input: {
        width: '100%',
        height: '40px',
        borderRadius: '5px',
        backgroundColor: '#262C35',
        border: 'none',
        outline: 'none',
        padding: '0px 10px',
        fontSize: '14px',
        color: '#BBC1C8',
    },
    videoPreview: {
        width: '100%',
        height: '100%',
        marginTop: '20px',
    },
    videoTipCont: {
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        backgroundColor: '#262C35',
        border: 'none',
        outline: 'none',
        padding: '10px',
        fontSize: '14px',
        color: '#BBC1C8',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    tipText: {
        fontSize: '18px',

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
    copybtn: {
        backgroundColor: '#212836',
        border: '2px solid #3D4452',
        borderRadius: '5px',

    },
    Cont: {
        width: '50%',
    },
    rightCont: {
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '15px',


    },






}

export default VideoInfoCard;