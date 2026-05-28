import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const aSign = new GestureDescription('A');

// A (LIBRAS): punho fechado, polegar estendido ao lado (não sobre os dedos)

//Thumb — estendido, apontando diagonal para cima à direita
aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

//Index
aSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
aSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
aSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
aSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
aSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
