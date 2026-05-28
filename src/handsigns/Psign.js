import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pSign = new GestureDescription('P');

// P (LIBRAS): como K mas apontando para baixo — indicador e médio para baixo

//Thumb — estendido, horizontal (corrigido: era Finger.Index)
pSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.75);

//Index — horizontal
pSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle — semi-curvado, diagonal para baixo
pSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
pSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.70);

//Ring
pSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
pSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
pSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
pSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);
