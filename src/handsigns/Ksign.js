import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const kSign = new GestureDescription('K');

// K (LIBRAS): indicador e médio estendidos em V, polegar entre eles

//Thumb — entre os dedos, diagonal esquerda (corrigido: era Finger.Index)
kSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index — diagonal direita
kSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle — vertical
kSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
kSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
kSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
kSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
kSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
