import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const oSign = new GestureDescription('O');

// O (LIBRAS): todos os dedos curvados formando um O com o polegar

//Thumb — estendido, diagonal direita (corrigido: era Finger.Index)
oSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
oSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

//Index
oSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
oSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
oSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
oSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring — HalfCurl (corrigido: era FullCurl — diferencia de C onde Ring é HalfCurl mas Thumb tem NoCurl)
oSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
oSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky — HalfCurl (corrigido: era FullCurl)
oSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
oSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);
