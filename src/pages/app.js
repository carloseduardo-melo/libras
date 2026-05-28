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

// Minimum absolute confidence score the winning gesture must reach.
// Max possible per gesture = 5 dedos × (curl 1.0 + direction 0.70) = 8.5
const MIN_GESTURE_CONFIDENCE = 7.5;

// Quantos frames consecutivos o mesmo gesto deve aparecer para ser confirmado.
const REQUIRED_CONSECUTIVE_FRAMES = 3;

// Tempo de segurada (ms) para adicionar a letra à palavra.
const WORD_HOLD_MS = 2000;

export default function App() {


    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [camState,
        setCamState] = useState("on");

    const [sign, setSign] = useState(null);
    const [word, setWord] = useState('');
    const [holdProgress, setHoldProgress] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    // GestureEstimator criado uma única vez, não a cada frame.
    const geRef = useRef(null);

    // Buffer dos últimos N nomes de gesto detectados (ou null se nenhum).
    const gestureHistoryRef = useRef([]);

    // Controle de hold para formação de palavra.
    const holdSignRef = useRef(null);
    const holdStartRef = useRef(null);
    const letterAddedRef = useRef(false);

    // Impede que múltiplas chamadas async de detect se sobreponham.
    const detectingRef = useRef(false);

    // Última dimensão conhecida do canvas — evita apagar o canvas a cada frame.
    const canvasSizeRef = useRef({width: 0, height: 0});

    let signList = [];
    let currentSign = 0;

    let gamestate = 'started';

    async function runHandpose() {
        const net = await handpose.load();

        geRef.current = new fp.GestureEstimator([
            fp.Gestures.ThumbsUpGesture,
            Handsigns.aSign, Handsigns.bSign, Handsigns.cSign, Handsigns.dSign, Handsigns.eSign, Handsigns.fSign, Handsigns.gSign,
            Handsigns.hSign, Handsigns.iSign, Handsigns.jSign, Handsigns.kSign, Handsigns.lSign, Handsigns.mSign, Handsigns.nSign,
            Handsigns.oSign, Handsigns.pSign, Handsigns.qSign, Handsigns.rSign, Handsigns.sSign, Handsigns.tSign, Handsigns.uSign,
            Handsigns.vSign, Handsigns.wSign, Handsigns.xSign, Handsigns.ySign, Handsigns.zSign
        ]);

        _signList();

        setInterval(() => {
            detect(net);
        }, 100);
    };


    function _signList(){
        signList = generateSigns();
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

    // Retorna o gesto confirmado se os últimos REQUIRED_CONSECUTIVE_FRAMES
    // registros no buffer forem todos o mesmo nome não-nulo; caso contrário null.
    function getConfirmedGesture() {
        const history = gestureHistoryRef.current;
        if (history.length < REQUIRED_CONSECUTIVE_FRAMES) return null;
        const recent = history.slice(-REQUIRED_CONSECUTIVE_FRAMES);
        const first = recent[0];
        if (first !== null && recent.every(g => g === first)) return first;
        return null;
    }

    function pushGestureHistory(gestureName) {
        gestureHistoryRef.current.push(gestureName);
        if (gestureHistoryRef.current.length > REQUIRED_CONSECUTIVE_FRAMES) {
            gestureHistoryRef.current.shift();
        }
    }

    function resetHold() {
        holdSignRef.current = null;
        holdStartRef.current = null;
        letterAddedRef.current = false;
        setHoldProgress(0);
    }

    async function detect(net) {
        // Bug fix: impede chamadas concorrentes (TF.js pode levar >100ms por frame).
        if (detectingRef.current) return;
        detectingRef.current = true;

        try {
            if (typeof webcamRef.current === "undefined" || webcamRef.current === null || webcamRef.current.video.readyState !== 4) return;

            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Bug fix: só redefine as dimensões do canvas quando mudam.
            // Atribuir canvas.width/height apaga o canvas mesmo passando o mesmo valor.
            if (canvasSizeRef.current.width !== videoWidth || canvasSizeRef.current.height !== videoHeight) {
                canvasRef.current.width = videoWidth;
                canvasRef.current.height = videoHeight;
                canvasSizeRef.current = {width: videoWidth, height: videoHeight};
            }

            const hand = await net.estimateHands(video);

            if (hand.length > 0) {
                const estimatedGestures = await geRef.current.estimate(hand[0].landmarks, 6.5);

                if (gamestate === 'started') {
                    document
                        .querySelector('#app-title')
                        .innerText = "Faça um gesto 👍 com a mão para começar";
                }

                if (estimatedGestures.gestures !== undefined && estimatedGestures.gestures.length > 0) {
                    const confidence = estimatedGestures.gestures.map(p => p.confidence);
                    const maxIdx = confidence.indexOf(Math.max(...confidence));
                    const topGesture = estimatedGestures.gestures[maxIdx];

                    if (topGesture.confidence >= MIN_GESTURE_CONFIDENCE) {
                        pushGestureHistory(topGesture.name);
                    } else {
                        pushGestureHistory(null);
                    }

                    const confirmed = getConfirmedGesture();

                    if (confirmed === 'thumbs_up' && gamestate !== 'played') {
                        _signList();
                        gamestate = 'played';
                        setGameStarted(true);
                        document
                            .getElementById('emojimage')
                            .classList
                            .add('play');
                        document
                            .querySelector('.tutor-text')
                            .innerText = "Segure uma letra por 2s para adicioná-la à palavra • 👍 limpa";
                    } else if (gamestate === 'played') {
                        document
                            .querySelector('#app-title')
                            .innerText = "";

                        if (confirmed === 'thumbs_up') {
                            setWord('');
                            resetHold();
                            setSign(null);
                        } else {
                            // Bug fix: removido o `return` prematuro que pulava drawHand.
                            if (currentSign === signList.length) {
                                _signList();
                                currentSign = 0;
                            }

                            if (confirmed !== null) {
                                setSign(confirmed);

                                if (signList[currentSign] && signList[currentSign].alt === confirmed) {
                                    currentSign++;
                                }

                                // Hold para formação de palavra
                                if (holdSignRef.current !== confirmed) {
                                    holdSignRef.current = confirmed;
                                    holdStartRef.current = Date.now();
                                    letterAddedRef.current = false;
                                    setHoldProgress(0);
                                } else if (!letterAddedRef.current) {
                                    const elapsed = Date.now() - holdStartRef.current;
                                    const progress = Math.min(100, (elapsed / WORD_HOLD_MS) * 100);
                                    setHoldProgress(progress);
                                    if (elapsed >= WORD_HOLD_MS) {
                                        setWord(prev => prev + confirmed);
                                        letterAddedRef.current = true;
                                    }
                                }
                            } else {
                                setSign(null);
                                resetHold();
                            }
                        }
                    }
                    // gamestate === 'finished': não faz nada, mas drawHand ainda é chamado.
                } else {
                    pushGestureHistory(null);
                    setSign(null);
                    resetHold();
                }
            } else {
                // Mão saiu do frame
                gestureHistoryRef.current = [];
                setSign(null);
                resetHold();
            }

            // Limpa o canvas antes de redesenhar — sem isso os pontos acumulam.
            const ctx = canvasRef.current.getContext("2d");
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            drawHand(hand, ctx);
        } finally {
            // Garante que a flag seja liberada mesmo se ocorrer um erro.
            detectingRef.current = false;
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
                                style={{ height: 250 }}/>
                            {holdProgress > 0 && holdProgress < 100 && (
                                <Box mt={2} bg="whiteAlpha.400" borderRadius="full" h="6px" w="100%">
                                    <Box
                                        bg="green.300"
                                        h="6px"
                                        borderRadius="full"
                                        style={{
                                            width: `${holdProgress}%`,
                                            transition: 'width 0.1s linear'
                                        }}
                                    />
                                </Box>
                            )}
                        </div>
                        )
                        : (" ")}
                </Box>

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

                {gameStarted && (
                    <Box
                        style={{
                            position: 'fixed',
                            bottom: '100px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 11,
                            background: 'rgba(0,0,0,0.55)',
                            borderRadius: '16px',
                            padding: '10px 28px',
                            textAlign: 'center',
                            minWidth: '200px',
                            backdropFilter: 'blur(6px)',
                        }}
                    >
                        <Text color="gray.300" fontSize="xs" mb={1} letterSpacing="wider" textTransform="uppercase">
                            Palavra
                        </Text>
                        <Text color="white" fontSize="3xl" fontWeight="bold" letterSpacing="widest" minH="44px">
                            {word || '—'}
                        </Text>
                    </Box>
                )}

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


