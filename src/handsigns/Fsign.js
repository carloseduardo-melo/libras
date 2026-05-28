import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fSign = new GestureDescription('F');

// F (LIBRAS): polegar e indicador formam círculo, médio/anelar/mínimo estendidos

//Thumb — semi-curvado tocando o indicador (corrigido: era Finger.Index)
fSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

//Index — fechado tocando o polegar
fSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
fSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
fSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
fSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
fSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
fSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
