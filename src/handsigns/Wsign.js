import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const wSign = new GestureDescription('W');

// W (LIBRAS): três dedos abertos — indicador, médio e anelar estendidos

//Thumb — semi-curvado (corrigido: era Finger.Index)
wSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
wSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index
wSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
wSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
wSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
wSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
wSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
wSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.70);

//Pinky
wSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
wSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);
