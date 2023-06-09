import React from "react";
import '../style.css';
import { useState, useEffect } from 'react';
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
} from '@chakra-ui/react'

import { FaCamera, FaCrosshairs, FaEye, FaMusic } from 'react-icons/fa';
import { WarningIcon, CheckIcon } from '@chakra-ui/icons'
import CopyButton from './copyButton';
import { get } from "mongoose";



function VideoInfoCard() {

    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [isValidUrl, setIsValidUrl] = useState(false);
    const [videoId, setVideoId] = useState('');

    const handleInputChange = (event) => {
        const url = event.target.value;
        // Perform URL validation & grab video id
        const isValid = validateUrl(url);
        setIsValidUrl(isValid);
    };

    // todo: see if the video actually exists on youtube
    const validateUrl = (url) => {
        const youtubeRegex = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=.+$/;
        // get the video id from the url
        const regex = /[?&]v=([^&#]*)/;
        const match = url.match(regex);

        if (match && match[1]) {
            setVideoId(match[1]);
        } else {
            return;
        }
        return youtubeRegex.test(url);

    };


    // useEfect fucntion to update the iframe src when the video id changes
    useEffect(() => {
        setYoutubeUrl(`https://www.youtube.com/embed/${videoId}`);
    }, [videoId]);





    return (
        <div className="add-wrapper">
            <div className="form-background">
                <div className="form-wrapper">
                    <div className="form-title">
                        <p className="primary-text font-reg" style={styles.title}>VIDEO DETAILS</p>
                    </div>
                    <Line />
                </div>

                {/* Form with two sides (left and right*/}
                <div className="form-content-wrapper">

                    <div className="form-content-left">
                        <FormControl>
                            <FormLabel className="font-bold secondary-text" style={styles.label}>VIDEO URL</FormLabel>
                            <InputGroup>
                                <Input type='text' className="form-input" style={styles.input} placeholder="https://www.youtube.com/watch?v=1vuzqudync8" onChange={handleInputChange} required />
                                <InputRightElement>
                                    {!isValidUrl ? <WarningIcon color="red.500" /> : <CheckIcon color="green.500" />}
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <div style={styles.videoPreview}>

                            <iframe width="100%" height="100%"
                                src={youtubeUrl}>
                            </iframe>
                        </div>
                    </div>

                    {/* Video preview */}


                    <div className="form-content-right">
                        <FormLabel className="font-bold secondary-text" style={styles.label}>VIDEO REQUIRMENTS</FormLabel>
                        <div style={styles.videoTipCont}>
                            <p className="font-reg secondary-text" style={styles.tipText}>
                                To ensure your nade throw is accepted, please follow our requirments when recording
                                and uploading your video to YouTube.
                            </p>
                            <br />
                            <List spacing={3}>
                                <ListItem className="font-reg secondary-text" style={styles.tipText}>
                                    <ListIcon as={FaCamera} color='262C35' />
                                    <span className="font-bold">Aspect Ratio:</span> Maintain a 16:9 aspect ratio to allow for the best viewing experience.
                                </ListItem>
                                <ListItem className="font-reg secondary-text" style={styles.tipText}>
                                    <ListIcon as={FaCrosshairs} color='262C35' />
                                    <span className="font-bold">Crosshair:</span> Use a low visibility crosshair to allow viewers to see the line up clearly. We suggest the one listed below
                                </ListItem>
                                <ListItem>
                                    <CopyButton text="CSGO-aNKFP-FzteR-6uRz5-4WP64-X6urD" />
                                </ListItem>

                                <ListItem className="font-reg secondary-text" style={styles.tipText}>
                                    <ListIcon as={FaEye} color='262C35' />
                                    <span className="font-bold">Hide HUD:</span> Remove any HUD elements that may obstruct the line up. You can achieve this by typing the provided command in your console.
                                </ListItem>
                                <ListItem>

                                    <CopyButton text="cl_draw_only_deathnotices 1; net_graph 0;" />
                                </ListItem>
                                <ListItem className="font-reg secondary-text" style={styles.tipText}>
                                    <ListIcon as={FaMusic} color='262C35' />
                                    <span className="font-bold">Remove Sound:</span> Record your video without any background music or game sound.
                                </ListItem>

                            </List>
                            <br />

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



}

export default VideoInfoCard;