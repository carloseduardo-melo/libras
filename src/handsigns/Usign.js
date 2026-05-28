import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const uSign = new GestureDescription('U');

// U (LIBRAS): indicador e médio juntos e paralelos apontando para cima
// Diferença de R: ambos os dedos VerticalUp (paralelos), R tem diagonais opostas

//Thumb — semi-curvado, diagonal esquerda (corrigido: era Finger.Index)
uSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
uSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);

//Index — vertical (paralelo ao médio, distingue de R)
uSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
uSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle — vertical (paralelo ao indicador, distingue de R)
uSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
uSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
uSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
uSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
uSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
uSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);
