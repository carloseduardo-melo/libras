import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const nSign = new GestureDescription('N');

// N (LIBRAS): dois dedos (indicador, médio) dobrados sobre o polegar
// Diferença de M: anelar FullCurl em N (não participa), HalfCurl em M

//Thumb — semi-curvado sob 2 dedos (corrigido: era Finger.Index)
nSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
nSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index — fechado sobre o polegar
nSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
nSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
nSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
nSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring — FullCurl: não participa cobrindo o polegar (distingue de M que tem HalfCurl)
nSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
nSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
nSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
nSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);
