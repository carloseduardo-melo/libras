import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const xSign = new GestureDescription('X');

// X (LIBRAS): indicador curvado em gancho, demais fechados

//Thumb — semi-curvado, vertical (corrigido: era Finger.Index)
xSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
xSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);

//Index — curvado em gancho
xSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
xSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
xSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
xSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
xSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
xSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
xSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
