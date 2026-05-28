import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ySign = new GestureDescription('Y');

// Y (LIBRAS): polegar e mínimo estendidos — sinal de "joia" / hang loose

//Thumb — estendido, diagonal direita (corrigido: era Finger.Index)
ySign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ySign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

//Index
ySign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
ySign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
ySign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ySign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
ySign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ySign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky — estendido, diagonal esquerda
ySign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
ySign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);
