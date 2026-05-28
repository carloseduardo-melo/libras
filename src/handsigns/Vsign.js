import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const vSign = new GestureDescription('V');

// V (LIBRAS): indicador e médio abertos em V (sinal de paz/vitória)

//Thumb — semi-curvado, diagonal esquerda (corrigido: era Finger.Index)
vSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
vSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index — diagonal direita (abre o V)
vSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle — vertical (fecha o V)
vSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
vSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
vSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
vSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
vSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
vSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);
