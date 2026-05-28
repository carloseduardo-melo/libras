import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const tSign = new GestureDescription('T');

// T (LIBRAS): polegar entre indicador e médio, demais fechados
// Diferença de A: polegar HalfCurl (entre dedos) em T, NoCurl (ao lado) em A

//Thumb — semi-curvado entre os dedos, vertical (corrigido: era NoCurl e Finger.Index)
tSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
tSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);

//Index — fechado sobre o polegar
tSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
tSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
tSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
tSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
tSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
tSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
tSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
tSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);
