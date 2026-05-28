import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const jSign = new GestureDescription('J');

// J (LIBRAS): letra dinâmica — pose estática: mínimo estendido diagonal/horizontal
// (J envolve movimento; esta pose captura o início do traçado)

//Thumb — estendido, diagonal direita (corrigido: era Finger.Index)
jSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
jSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

//Index
jSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
jSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
jSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
jSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
jSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
jSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky — estendido e diagonal, diferente de I (que é VerticalUp)
jSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
jSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);
