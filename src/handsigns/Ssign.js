import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sSign = new GestureDescription('S');

// S (LIBRAS): punho fechado, polegar sobre os dedos dobrados
// Diferença de A: polegar HalfCurl (sobre o punho) em S, NoCurl (ao lado) em A

//Thumb — sobre os dedos, horizontal (corrigido: era Finger.Index e direção VerticalUp)
sSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.75);

//Index
sSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
sSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
sSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
sSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
sSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
sSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
sSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
sSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);
