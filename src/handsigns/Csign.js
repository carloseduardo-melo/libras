import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const cSign = new GestureDescription('C');

// C (LIBRAS): mão curvada formando um C, todos os dedos semi-fechados

//Thumb — estendido, diagonal para cima (corrigido: era Finger.Index)
cSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
cSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

//Index — semi-curvado (corrigido: era NoCurl)
cSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
cSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
cSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
cSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
cSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky
cSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
cSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);
