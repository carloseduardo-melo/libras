import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const rSign = new GestureDescription('R');

// R (LIBRAS): indicador e médio cruzados
// Diferença de U: dedos cruzados abrem levemente em diagonais opostas

//Thumb — semi-curvado (corrigido: era Finger.Index)
rSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index — ligeiramente diagonal direita pelo cruzamento (distingue de U que é VerticalUp)
rSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle — ligeiramente diagonal esquerda pelo cruzamento (distingue de U que é VerticalUp)
rSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
rSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
rSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
rSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
rSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
rSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
