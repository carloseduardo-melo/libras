import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const iSign = new GestureDescription('I');

// I (LIBRAS): apenas o mínimo estendido para cima, demais fechados

//Thumb — semi-curvado, diagonal esquerda (corrigido: era Finger.Index)
iSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
iSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index
iSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
iSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
iSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
iSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
iSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
iSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky — único dedo estendido
iSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
iSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
