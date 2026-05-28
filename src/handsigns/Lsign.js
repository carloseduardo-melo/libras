import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const lSign = new GestureDescription('L');

// L (LIBRAS): polegar horizontal direita, indicador vertical — forma de L

//Thumb — horizontal/diagonal direita, o traço horizontal do L (corrigido: era Finger.Index)
lSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

//Index — vertical para cima, o traço vertical do L
lSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
lSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
lSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
lSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
lSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
lSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
lSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);
