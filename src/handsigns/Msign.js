import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const mSign = new GestureDescription('M');

// M (LIBRAS): três dedos (indicador, médio, anelar) dobrados sobre o polegar
// Diferença de N: anelar HalfCurl em M (participa do grupo), FullCurl em N

//Thumb — semi-curvado sob 3 dedos (corrigido: era Finger.Index)
mSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
mSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index — fechado sobre o polegar
mSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
mSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
mSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
mSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring — HalfCurl: participa cobrindo o polegar (distingue de N que tem FullCurl)
mSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
mSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
mSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
mSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
