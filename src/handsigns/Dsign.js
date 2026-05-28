import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const dSign = new GestureDescription('D');

// D (LIBRAS): indicador estendido para cima, polegar tocando o médio, demais fechados

//Thumb — semi-curvado tocando o médio (corrigido: era Finger.Index)
dSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
dSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);

//Index
dSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
dSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
dSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
dSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
dSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
dSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
dSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
dSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
