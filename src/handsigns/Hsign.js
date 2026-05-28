import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const hSign = new GestureDescription('H');

// H (LIBRAS): indicador e médio estendidos horizontalmente juntos

//Thumb — estendido, horizontal (corrigido: era Finger.Index)
hSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.75);

//Index
hSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
hSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
hSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
hSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
hSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
hSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);
