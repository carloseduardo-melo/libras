import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const zSign = new GestureDescription('Z');

// Z (LIBRAS): letra dinâmica — pose estática: indicador estendido diagonal esquerda
// (Z envolve traçado; esta pose captura o início do movimento)

//Thumb — estendido, horizontal esquerda (corrigido: era Finger.Index)
zSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
zSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.70);

//Index — diagonal esquerda (início do traçado do Z)
zSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
zSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
zSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
zSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);

//Ring
zSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
zSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);

//Pinky
zSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
zSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);
