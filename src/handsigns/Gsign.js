import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const gSign = new GestureDescription('G');

// G (LIBRAS): indicador horizontal, polegar para cima — forma de pistola

//Thumb — estendido para cima (corrigido: era Finger.Index)
gSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

//Index — horizontal, cano da pistola
gSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
gSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
gSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
gSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
gSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
gSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
gSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);
