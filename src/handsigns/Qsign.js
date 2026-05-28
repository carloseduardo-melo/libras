import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const qSign = new GestureDescription('Q');

// Q (LIBRAS): como G mas apontando para baixo — polegar e indicador para baixo

//Thumb — estendido, diagonal para baixo (corrigido: era Finger.Index)
qSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
qSign.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.75);

//Index — semi-curvado, horizontal
qSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
qSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
qSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
qSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
qSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
qSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
qSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
qSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);
