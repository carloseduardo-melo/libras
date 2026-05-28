import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const eSign = new GestureDescription('E');

// E (LIBRAS): todos os dedos fechados, pontas curvadas, polegar dobrado sob os dedos

//Thumb — dobrado sob os dedos, diagonal esquerda (corrigido: era Finger.Index)
eSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
eSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index
eSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
eSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
eSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
eSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
eSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
eSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
eSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
eSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
