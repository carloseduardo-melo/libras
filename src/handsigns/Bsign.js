import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const bSign = new GestureDescription('B');

// B (LIBRAS): quatro dedos estendidos para cima, polegar dobrado sobre a palma

//Thumb — dobrado em direção à palma (corrigido: era Finger.Index)
bSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
bSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index
bSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
bSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
bSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
bSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
bSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
bSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
bSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
bSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
