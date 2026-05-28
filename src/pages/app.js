import React, {useRef, useState, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHand} from '../components/handposeutil';
import * as fp from 'fingerpose';
import Handsigns from '../handsigns';

import {
    Text,
    Heading,
    Button,
    Image,
    Stack,
    Container,
    Box,
    VStack,
    ChakraProvider
} from '@chakra-ui/react'

import {Signimage, Signpass} from '../handimage';

import About from '../components/about'
import Metatags from '../components/metatags'

import '../styles/App.css'

import '@tensorflow/tfjs-backend-webgl';

import {RiCameraFill, RiCameraOffFill} from "react-icons/ri";

export default function App() {

    
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [camState,
        setCamState] = useState("on");

    const [sign, setSign] = useState(null);
    const [currentWord, setCurrentWord] = useState("");

    const signListRef = useRef([]);
    const currentSignRef = useRef(0);
    const gameStateRef = useRef('started');
    const lastDetectedLetterRef = useRef(null);
    const lastAppendedLetterRef = useRef(null);
    const stableStartTimeRef = useRef(null);

    // let net;

    async function runHandpose() {
        const net = await handpose.load();
        _signList();

        // window.requestAnimationFrame(loop);

        setInterval(() => {
            detect(net);
        }, 100);
    };


    function _signList(){
        signListRef.current = generateSigns();
        currentSignRef.current = 0;
    }


    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function generateSigns(){
        const password = shuffle(Signpass);
        return password;
    }
    

    async function detect(net) {
        // Check data is available
        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // Make Detections
            const hand = await net.estimateHands(video);

            if (hand.length > 0) {
                //loading the fingerpose model
                const GE = new fp.GestureEstimator([
                    fp.Gestures.ThumbsUpGesture,
                    Handsigns.aSign, Handsigns.bSign, Handsigns.cSign, Handsigns.dSign, Handsigns.eSign, Handsigns.fSign, Handsigns.gSign,
                    Handsigns.hSign, Handsigns.iSign, Handsigns.jSign, Handsigns.kSign, Handsigns.lSign, Handsigns.mSign, Handsigns.nSign,
                    Handsigns.oSign, Handsigns.pSign, Handsigns.qSign, Handsigns.rSign, Handsigns.sSign, Handsigns.tSign, Handsigns.uSign,
                    Handsigns.vSign, Handsigns.wSign, Handsigns.xSign, Handsigns.ySign, Handsigns.zSign
                ]);

                const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
                // document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);


                if (gameStateRef.current === 'started') {
                    document
                        .querySelector('#app-title')
                        .innerText = "Faça um gesto 👍 com a mão para começar";
                }

                if (estimatedGestures.gestures !== undefined && estimatedGestures.gestures.length > 0) {
                    const confidence = estimatedGestures
                        .gestures
                        .map((p) => p.confidence);
                    const maxConfidence = confidence.indexOf(Math.max.apply(undefined, confidence));
                    const gestureName = estimatedGestures.gestures[maxConfidence].name;
                    const gestureConfidence = confidence[maxConfidence];
                    const confidenceThreshold = 0.8;
                    const isLetter = /^[A-Z]$/.test(gestureName);
                    const highConfidence = gestureConfidence >= confidenceThreshold;

                    if (gestureName === 'thumbs_up') {
                        _signList();
                        currentSignRef.current = 0;
                        gameStateRef.current = 'played';
                        setCurrentWord("");
                        setSign(null);
                        lastDetectedLetterRef.current = null;
                        lastAppendedLetterRef.current = null;
                        stableStartTimeRef.current = null;
                        document
                            .getElementById('emojimage')
                            .classList
                            .add('play');
                        document
                            .querySelector('.tutor-text')
                            .innerText = "faça um gesto com a mão com base na letra mostrada abaixo";
                    } else if (gameStateRef.current === 'played') {
                        document
                            .querySelector('#app-title')
                            .innerText = "";

                        if (currentSignRef.current === signListRef.current.length) {
                            _signList();
                            currentSignRef.current = 0;
                            setSign(null);
                            return;
                        }

                        if (isLetter && highConfidence) {
                            if (lastDetectedLetterRef.current === gestureName) {
                                if (!stableStartTimeRef.current) {
                                    stableStartTimeRef.current = Date.now();
                                } else if (Date.now() - stableStartTimeRef.current >= 2000 && lastAppendedLetterRef.current !== gestureName) {
                                    setCurrentWord((word) => word + gestureName);
                                    lastAppendedLetterRef.current = gestureName;
                                }
                            } else {
                                lastDetectedLetterRef.current = gestureName;
                                stableStartTimeRef.current = Date.now();
                                lastAppendedLetterRef.current = null;
                            }

                            if (signListRef.current[currentSignRef.current]?.alt === gestureName) {
                                currentSignRef.current++;
                            }

                            setSign(gestureName);
                        } else {
                            setSign(null);
                            lastDetectedLetterRef.current = null;
                            stableStartTimeRef.current = null;
                            lastAppendedLetterRef.current = null;
                        }
                        
                    } else if (gameStateRef.current === 'finished') {
                        return;
                    }
                } else {
                    setSign(null);
                    lastDetectedLetterRef.current = null;
                    stableStartTimeRef.current = null;
                    lastAppendedLetterRef.current = null;
                }
            } else {
                setSign(null);
                lastDetectedLetterRef.current = null;
                stableStartTimeRef.current = null;
                lastAppendedLetterRef.current = null;
            }
            // Draw hand lines
            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };

    useEffect(() => {
        runHandpose();
    },[]);

    function turnOffCamera() {
        if (camState === "on") {
            setCamState('off');
        } else {
            setCamState('on');
        }
    }
    

    return (
        <ChakraProvider>
            <Metatags />
            <Box bgColor="#5784BA">
            <Container centerContent maxW="xl" height="100vh" pt="0" pb="0">
                <VStack spacing={4} align="center">
                    <Box h="20px"></Box>
                    <Heading as="h3" size="md" className="tutor-text" color="white" textAlign="center"></Heading>
                    <Box h="20px"></Box>
                </VStack>

                <Heading as="h1" size="lg" id="app-title" color="white" textAlign="center">Tradutor de Libras</Heading>

                <Box id="webcam-container">
                    {camState === 'on'
                        ? <Webcam id="webcam" ref={webcamRef}/>
                        : <div id="webcam" background="black"></div>}

                    {sign 
                        ? (<div style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            right: "calc(50% - 50px)",
                            bottom: 100,
                            textAlign: "-webkit-center",}}>
                            <Text color="white" fontSize="sm" mb={1}>Detectando Gestos</Text>
                            <img alt="signImage"
                                src={Signimage[sign]}
                                style={{
                                height: 250
                            }}/>
                            {currentWord && (
                                <Text color="white" fontSize="lg" mt={2} fontWeight="bold">
                                    {currentWord}
                                </Text>
                            )}
                        </div>
                        )
                        : (" ")}
                </Box>

                {currentWord && (
                    <Box textAlign="center" mt={4}>
                        <Text color="white" fontSize="sm" mb={1}>Palavra formada</Text>
                        <Text color="white" fontSize="2xl" fontWeight="bold">{currentWord}</Text>
                    </Box>
                )}

                <canvas id="gesture-canvas" ref={canvasRef} style={{}}/>

                <Box
                    id="singmoji"
                    style={{
                    zIndex: 9,
                    position: 'fixed',
                    top: '50px',
                    right: '30px'
                }}></Box>

                <Image h="30px" objectFit="cover"  id='emojimage'/> 
{/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}

            </Container>

            <Stack id="start-button" spacing={4} direction="row" align="center">
                {/* <Button leftIcon={camState === 'on'
                            ? <RiCameraFill size={20}/>
                            : <RiCameraOffFill size={20}/>} onClick={turnOffCamera} colorScheme="orange">Camera</Button> */}
                <About />
            </Stack>
            </Box>
        </ChakraProvider>
    )
}


