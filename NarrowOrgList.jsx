/* eslint-disable no-restricted-imports */
/* eslint-disable react/prop-types */
import { clsx } from 'clsx'
import { Copy } from 'lucide-react'
import { useState } from 'react'

import { copyToClipboard, formatPhoneAndFax } from '@utils/helpers'

// Remaining Tasks : set the measurement values for Square ,Triangle and octagon 
//                 : Get the values which is used for identifing colour of border and replace it with dummy variable

// Note : We don't have proper color code of Yellow,Gray and light Red
//        I took Yellow=FFFF00 , Gray=808080 , Light Red=FFCCCB
 
import StarLtGreenRedBorder from '../../resources/colour1x/lightGreen/border/red/Star-LtGreen-RedBorder.svg'
import StarLtGreenPurpleBorder from '../../resources/colour1x/lightGreen/border/purple/Star-LtGreen-PurpleBorder.svg'
import StarLtGreenOrangeBorder from '../../resources/colour1x/lightGreen/border/orange/Star-LtGreen-OrangeBorder.svg'
import StarLtGreenBlackBorder from '../../resources/colour1x/lightGreen/border/black/Star-LtGreen-BlackBorder.svg'

import StarGreenRedBorder from '../../resources/colour1x/green/border/red/Star-Green-RedBorder.svg'
import StarGreenPurpleBorder from '../../resources/colour1x/green/border/purple/Star-Green-PurpleBorder.svg'
import StarGreenOrangeBorder from '../../resources/colour1x/green/border/orange/Star-Green-OrangeBorder.svg'
import StarGreenBlackBorder from '../../resources/colour1x/green/border/black/Star-Green-BlackBorder.svg'

import StarLtBlueRedBorder from '../../resources/colour1x/lightBlue/border/red/Star-LtBlue-RedBorder.svg'
import StarLtBluePurpleBorder from '../../resources/colour1x/lightBlue/border/purple/Star-LtBlue-PurpleBorder.svg'
import StarLtBlueOrangeBorder from '../../resources/colour1x/lightBlue/border/orange/Star-LtBlue-OrangeBorder.svg'
import StarLtBlueBlackBorder from '../../resources/colour1x/lightBlue/border/black/Star-LtBlue-BlackBorder.svg'

import StarTealRedBorder from '../../resources/colour1x/teal/border/red/Star-Teal-RedBorder.svg'
import StarTealPurpleBorder from '../../resources/colour1x/teal/border/purple/Star-Teal-PurpleBorder.svg'
import StarTealOrangeBorder from '../../resources/colour1x/teal/border/orange/Star-Teal-OrangeBorder.svg'
import StarTealBlackBorder from '../../resources/colour1x/teal/border/black/Star-Teal-BlackBorder.svg'

import StarDarkBlueRedBorder from '../../resources/colour1x/blue/border/red/Star-Blue-RedBorder.svg'
import StarDarkBluePurpleBorder from '../../resources/colour1x/blue/border/purple/Star-Blue-PurpleBorder.svg'
import StarDarkBlueOrangeBorder from '../../resources/colour1x/blue/border/orange/Star-Blue-OrangeBorder.svg'
import StarDarkBlueBlackBorder from '../../resources/colour1x/blue/border/black/Star-Blue-BlackBorder.svg'

import StarYellowRedBorder from '../../resources/colour1x/yellow/border/red/Star-Yellow-RedBorder.svg'
import StarYellowPurpleBorder from '../../resources/colour1x/yellow/border/purple/Star-Yellow-PurpleBorder.svg'
import StarYellowOrangeBorder from '../../resources/colour1x/yellow/border/orange/Star-Yellow-OrangeBorder.svg'
import StarYellowBlackBorder from '../../resources/colour1x/yellow/border/black/Star-Yellow-BlackBorder.svg'

import StarOrangeRedBorder from '../../resources/colour1x/orange/border/red/Star-Orange-RedBorder.svg'
import StarOrangePurpleBorder from '../../resources/colour1x/orange/border/purple/Star-Orange-PurpleBorder.svg'
import StarOrangeOrangeBorder from '../../resources/colour1x/orange/border/orange/Star-Orange-OrangeBorder.svg'
import StarOrangeBlackBorder from '../../resources/colour1x/orange/border/black/Star-Orange-BlackBorder.svg'

import StarLtRedRedBorder from '../../resources/colour1x/lightRed/border/red/Star-LtRed-RedBorder.svg'
import StarLtRedPurpleBorder from '../../resources/colour1x/lightRed/border/purple/Star-LtRed-PurpleBorder.svg'
import StarLtRedOrangeBorder from '../../resources/colour1x/lightRed/border/orange/Star-LtRed-OrangeBorder.svg'
import StarLtRedBlackBorder from '../../resources/colour1x/lightRed/border/black/Star-LtRed-BlackBorder.svg'

import StarRedRedBorder from '../../resources/colour1x/red/border/red/Star-Red-RedBorder.svg'
import StarRedPurpleBorder from '../../resources/colour1x/red/border/purple/Star-Red-PurpleBorder.svg'
import StarRedOrangeBorder from '../../resources/colour1x/red/border/orange/Star-Red-OrangeBorder.svg'
import StarRedBlackBorder from '../../resources/colour1x/red/border/black/Star-Red-BlackBorder.svg'

import StarBlackRedBorder from '../../resources/colour1x/black/border/red/Star-Black-RedBorder.svg'
import StarBlackPurpleBorder from '../../resources/colour1x/black/border/purple/Star-Black-PurpleBorder.svg'
import StarBlackOrangeBorder from '../../resources/colour1x/black/border/orange/Star-Black-OrangeBorder.svg'
import StarBlackBlackBorder from '../../resources/colour1x/black/border/black/Star-Black-BlackBorder.svg'

import StarGrayRedBorder from '../../resources/colour1x/gray/border/red/Star-Gray-RedBorder.svg'
import StarGrayPurpleBorder from '../../resources/colour1x/gray/border/purple/Star-Gray-PurpleBorder.svg'
import StarGrayOrangeBorder from '../../resources/colour1x/gray/border/orange/Star-Gray-OrangeBorder.svg'
import StarGrayBlackBorder from '../../resources/colour1x/gray/border/black/Star-Gray-BlackBorder.svg'


import DiamondLtGreenRedBorder from '../../resources/colour1x/lightGreen/border/red/Diamond-LtGreen-RedBorder.svg'
import DiamondLtGreenPurpleBorder from '../../resources/colour1x/lightGreen/border/purple/Diamond-LtGreen-PurpleBorder.svg'
import DiamondLtGreenOrangeBorder from '../../resources/colour1x/lightGreen/border/orange/Diamond-LtGreen-OrangeBorder.svg'
import DiamondLtGreenBlackBorder from '../../resources/colour1x/lightGreen/border/black/Diamond-LtGreen-BlackBorder.svg'

import DiamondGreenRedBorder from '../../resources/colour1x/green/border/red/Diamond-Green-RedBorder.svg'
import DiamondGreenPurpleBorder from '../../resources/colour1x/green/border/purple/Diamond-Green-PurpleBorder.svg'
import DiamondGreenOrangeBorder from '../../resources/colour1x/green/border/orange/Diamond-Green-OrangeBorder.svg'
import DiamondGreenBlackBorder from '../../resources/colour1x/green/border/black/Diamond-Green-BlackBorder.svg'

import DiamondLtBlueRedBorder from '../../resources/colour1x/lightBlue/border/red/Diamond-LtBlue-RedBorder.svg'
import DiamondLtBluePurpleBorder from '../../resources/colour1x/lightBlue/border/purple/Diamond-LtBlue-PurpleBorder.svg'
import DiamondLtBlueOrangeBorder from '../../resources/colour1x/lightBlue/border/orange/Diamond-LtBlue-OrangeBorder.svg'
import DiamondLtBlueBlackBorder from '../../resources/colour1x/lightBlue/border/black/Diamond-LtBlue-BlackBorder.svg'

import DiamondTealRedBorder from '../../resources/colour1x/teal/border/red/Diamond-Teal-RedBorder.svg'
import DiamondTealPurpleBorder from '../../resources/colour1x/teal/border/purple/Diamond-Teal-PurpleBorder.svg'
import DiamondTealOrangeBorder from '../../resources/colour1x/teal/border/orange/Diamond-Teal-OrangeBorder.svg'
import DiamondTealBlackBorder from '../../resources/colour1x/teal/border/black/Diamond-Teal-BlackBorder.svg'

import DiamondDarkBlueRedBorder from '../../resources/colour1x/blue/border/red/Diamond-Blue-RedBorder.svg'
import DiamondDarkBluePurpleBorder from '../../resources/colour1x/blue/border/purple/Diamond-Blue-PurpleBorder.svg'
import DiamondDarkBlueOrangeBorder from '../../resources/colour1x/blue/border/orange/Diamond-Blue-OrangeBorder.svg'
import DiamondDarkBlueBlackBorder from '../../resources/colour1x/blue/border/black/Diamond-Blue-BlackBorder.svg'

import DiamondYellowRedBorder from '../../resources/colour1x/yellow/border/red/Diamond-Yellow-RedBorder.svg'
import DiamondYellowPurpleBorder from '../../resources/colour1x/yellow/border/purple/Diamond-Yellow-PurpleBorder.svg'
import DiamondYellowOrangeBorder from '../../resources/colour1x/yellow/border/orange/Diamond-Yellow-OrangeBorder.svg'
import DiamondYellowBlackBorder from '../../resources/colour1x/yellow/border/black/Diamond-Yellow-BlackBorder.svg'

import DiamondOrangeRedBorder from '../../resources/colour1x/orange/border/red/Diamond-Orange-RedBorder.svg'
import DiamondOrangePurpleBorder from '../../resources/colour1x/orange/border/purple/Diamond-Orange-PurpleBorder.svg'
import DiamondOrangeOrangeBorder from '../../resources/colour1x/orange/border/orange/Diamond-Orange-OrangeBorder.svg'
import DiamondOrangeBlackBorder from '../../resources/colour1x/orange/border/black/Diamond-Orange-BlackBorder.svg'

import DiamondLtRedRedBorder from '../../resources/colour1x/lightRed/border/red/Diamond-LtRed-RedBorder.svg'
import DiamondLtRedPurpleBorder from '../../resources/colour1x/lightRed/border/purple/Diamond-LtRed-PurpleBorder.svg'
import DiamondLtRedOrangeBorder from '../../resources/colour1x/lightRed/border/orange/Diamond-LtRed-OrangeBorder.svg'
import DiamondLtRedBlackBorder from '../../resources/colour1x/lightRed/border/black/Diamond-LtRed-BlackBorder.svg'

import DiamondRedRedBorder from '../../resources/colour1x/red/border/red/Diamond-Red-RedBorder.svg'
import DiamondRedPurpleBorder from '../../resources/colour1x/red/border/purple/Diamond-Red-PurpleBorder.svg'
import DiamondRedOrangeBorder from '../../resources/colour1x/red/border/orange/Diamond-Red-OrangeBorder.svg'
import DiamondRedBlackBorder from '../../resources/colour1x/red/border/black/Diamond-Red-BlackBorder.svg'

import DiamondBlackRedBorder from '../../resources/colour1x/black/border/red/Diamond-Black-RedBorder.svg'
import DiamondBlackPurpleBorder from '../../resources/colour1x/black/border/purple/Diamond-Black-PurpleBorder.svg'
import DiamondBlackOrangeBorder from '../../resources/colour1x/black/border/orange/Diamond-Black-OrangeBorder.svg'
import DiamondBlackBlackBorder from '../../resources/colour1x/black/border/black/Diamond-Black-BlackBorder.svg'

import DiamondGrayRedBorder from '../../resources/colour1x/gray/border/red/Diamond-Gray-RedBorder.svg'
import DiamondGrayPurpleBorder from '../../resources/colour1x/gray/border/purple/Diamond-Gray-PurpleBorder.svg'
import DiamondGrayOrangeBorder from '../../resources/colour1x/gray/border/orange/Diamond-Gray-OrangeBorder.svg'
import DiamondGrayBlackBorder from '../../resources/colour1x/gray/border/black/Diamond-Gray-BlackBorder.svg'


import CircleLtGreenRedBorder from '../../resources/colour1x/lightGreen/border/red/Circle-LtGreen-RedBorder.svg'
import CircleLtGreenPurpleBorder from '../../resources/colour1x/lightGreen/border/purple/Circle-LtGreen-PurpleBorder.svg'
import CircleLtGreenOrangeBorder from '../../resources/colour1x/lightGreen/border/orange/Circle-LtGreen-OrangeBorder.svg'
import CircleLtGreenBlackBorder from '../../resources/colour1x/lightGreen/border/black/Circle-LtGreen-BlackBorder.svg'

import CircleGreenRedBorder from '../../resources/colour1x/green/border/red/Circle-Green-RedBorder.svg'
import CircleGreenPurpleBorder from '../../resources/colour1x/green/border/purple/Circle-Green-PurpleBorder.svg'
import CircleGreenOrangeBorder from '../../resources/colour1x/green/border/orange/Circle-Green-OrangeBorder.svg'
import CircleGreenBlackBorder from '../../resources/colour1x/green/border/black/Circle-Green-BlackBorder.svg'

import CircleLtBlueRedBorder from '../../resources/colour1x/lightBlue/border/red/Circle-LtBlue-RedBorder.svg'
import CircleLtBluePurpleBorder from '../../resources/colour1x/lightBlue/border/purple/Circle-LtBlue-PurpleBorder.svg'
import CircleLtBlueOrangeBorder from '../../resources/colour1x/lightBlue/border/orange/Circle-LtBlue-OrangeBorder.svg'
import CircleLtBlueBlackBorder from '../../resources/colour1x/lightBlue/border/black/Circle-LtBlue-BlackBorder.svg'

import CircleTealRedBorder from '../../resources/colour1x/teal/border/red/Circle-Teal-RedBorder.svg'
import CircleTealPurpleBorder from '../../resources/colour1x/teal/border/purple/Circle-Teal-PurpleBorder.svg'
import CircleTealOrangeBorder from '../../resources/colour1x/teal/border/orange/Circle-Teal-OrangeBorder.svg'
import CircleTealBlackBorder from '../../resources/colour1x/teal/border/black/Circle-Teal-BlackBorder.svg'

import CircleDarkBlueRedBorder from '../../resources/colour1x/blue/border/red/Circle-Blue-RedBorder.svg'
import CircleDarkBluePurpleBorder from '../../resources/colour1x/blue/border/purple/Circle-Blue-PurpleBorder.svg'
import CircleDarkBlueOrangeBorder from '../../resources/colour1x/blue/border/orange/Circle-Blue-OrangeBorder.svg'
import CircleDarkBlueBlackBorder from '../../resources/colour1x/blue/border/black/Circle-Blue-BlackBorder.svg'

import CircleYellowRedBorder from '../../resources/colour1x/yellow/border/red/Circle-Yellow-RedBorder.svg'
import CircleYellowPurpleBorder from '../../resources/colour1x/yellow/border/purple/Circle-Yellow-PurpleBorder.svg'
import CircleYellowOrangeBorder from '../../resources/colour1x/yellow/border/orange/Circle-Yellow-OrangeBorder.svg'
import CircleYellowBlackBorder from '../../resources/colour1x/yellow/border/black/Diamond-Yellow-BlackBorder.svg'

import CircleOrangeRedBorder from '../../resources/colour1x/orange/border/red/Circle-Orange-RedBorder.svg'
import CircleOrangePurpleBorder from '../../resources/colour1x/orange/border/purple/Circle-Orange-PurpleBorder.svg'
import CircleOrangeOrangeBorder from '../../resources/colour1x/orange/border/orange/Circle-Orange-OrangeBorder.svg'
import CircleOrangeBlackBorder from '../../resources/colour1x/orange/border/black/Circle-Orange-BlackBorder.svg'

import CircleLtRedRedBorder from '../../resources/colour1x/lightRed/border/red/Circle-LtRed-RedBorder.svg'
import CircleLtRedPurpleBorder from '../../resources/colour1x/lightRed/border/purple/Circle-LtRed-PurpleBorder.svg'
import CircleLtRedOrangeBorder from '../../resources/colour1x/lightRed/border/orange/Circle-LtRed-OrangeBorder.svg'
import CircleLtRedBlackBorder from '../../resources/colour1x/lightRed/border/black/Circle-LtRed-BlackBorder.svg'

import CircleRedRedBorder from '../../resources/colour1x/red/border/red/Circle-Red-RedBorder.svg'
import CircleRedPurpleBorder from '../../resources/colour1x/red/border/purple/Circle-Red-PurpleBorder.svg'
import CircleRedOrangeBorder from '../../resources/colour1x/red/border/orange/Circle-Red-OrangeBorder.svg'
import CircleRedBlackBorder from '../../resources/colour1x/red/border/black/Circle-Red-BlackBorder.svg'

import CircleBlackRedBorder from '../../resources/colour1x/black/border/red/Circle-Black-RedBorder.svg'
import CircleBlackPurpleBorder from '../../resources/colour1x/black/border/purple/Circle-Black-PurpleBorder.svg'
import CircleBlackOrangeBorder from '../../resources/colour1x/black/border/orange/Circle-Black-OrangeBorder.svg'
import CircleBlackBlackBorder from '../../resources/colour1x/black/border/black/Circle-Black-BlackBorder.svg'

import CircleGrayRedBorder from '../../resources/colour1x/gray/border/red/Circle-Gray-RedBorder.svg'
import CircleGrayPurpleBorder from '../../resources/colour1x/gray/border/purple/Circle-Gray-PurpleBorder.svg'
import CircleGrayOrangeBorder from '../../resources/colour1x/gray/border/orange/Circle-Gray-OrangeBorder.svg'
import CircleGrayBlackBorder from '../../resources/colour1x/gray/border/black/Circle-Gray-BlackBorder.svg'


import SquareLtGreenRedBorder from '../../resources/colour1x/lightGreen/border/red/Square-LtGreen-RedBorder.svg'
import SquareLtGreenPurpleBorder from '../../resources/colour1x/lightGreen/border/purple/Square-LtGreen-PurpleBorder.svg'
import SquareLtGreenOrangeBorder from '../../resources/colour1x/lightGreen/border/orange/Square-LtGreen-OrangeBorder.svg'
import SquareLtGreenBlackBorder from '../../resources/colour1x/lightGreen/border/black/Square-LtGreen-BlackBorder.svg'

import SquareGreenRedBorder from '../../resources/colour1x/green/border/red/Square-Green-RedBorder.svg'
import SquareGreenPurpleBorder from '../../resources/colour1x/green/border/purple/Square-Green-PurpleBorder.svg'
import SquareGreenOrangeBorder from '../../resources/colour1x/green/border/orange/Square-Green-OrangeBorder.svg'
import SquareGreenBlackBorder from '../../resources/colour1x/green/border/black/Square-Green-BlackBorder.svg'

import SquareLtBlueRedBorder from '../../resources/colour1x/lightBlue/border/red/Square-LtBlue-RedBorder.svg'
import SquareLtBluePurpleBorder from '../../resources/colour1x/lightBlue/border/purple/Square-LtBlue-PurpleBorder.svg'
import SquareLtBlueOrangeBorder from '../../resources/colour1x/lightBlue/border/orange/Square-LtBlue-OrangeBorder.svg'
import SquareLtBlueBlackBorder from '../../resources/colour1x/lightBlue/border/black/Square-LtBlue-BlackBorder.svg'

import SquareTealRedBorder from '../../resources/colour1x/teal/border/red/Square-Teal-RedBorder.svg'
import SquareTealPurpleBorder from '../../resources/colour1x/teal/border/purple/Square-Teal-PurpleBorder.svg'
import SquareTealOrangeBorder from '../../resources/colour1x/teal/border/orange/Square-Teal-OrangeBorder.svg'
import SquareTealBlackBorder from '../../resources/colour1x/teal/border/black/Square-Teal-BlackBorder.svg'

import SquareDarkBlueRedBorder from '../../resources/colour1x/blue/border/red/Square-Blue-RedBorder.svg'
import SquareDarkBluePurpleBorder from '../../resources/colour1x/blue/border/purple/Square-Blue-PurpleBorder.svg'
import SquareDarkBlueOrangeBorder from '../../resources/colour1x/blue/border/orange/Square-Blue-OrangeBorder.svg'
import SquareDarkBlueBlackBorder from '../../resources/colour1x/blue/border/black/Square-Blue-BlackBorder.svg'

import SquareYellowRedBorder from '../../resources/colour1x/yellow/border/red/Square-Yellow-RedBorder.svg'
import SquareYellowPurpleBorder from '../../resources/colour1x/yellow/border/purple/Square-Yellow-PurpleBorder.svg'
import SquareYellowOrangeBorder from '../../resources/colour1x/yellow/border/orange/Square-Yellow-OrangeBorder.svg'
import SquareYellowBlackBorder from '../../resources/colour1x/yellow/border/black/Square-Yellow-BlackBorder.svg'

import SquareOrangeRedBorder from '../../resources/colour1x/orange/border/red/Square-Orange-RedBorder.svg'
import SquareOrangePurpleBorder from '../../resources/colour1x/orange/border/purple/Square-Orange-PurpleBorder.svg'
import SquareOrangeOrangeBorder from '../../resources/colour1x/orange/border/orange/Square-Orange-OrangeBorder.svg'
import SquareOrangeBlackBorder from '../../resources/colour1x/orange/border/black/Square-Orange-BlackBorder.svg'

import SquareLtRedRedBorder from '../../resources/colour1x/lightRed/border/red/Square-LtRed-RedBorder.svg'
import SquareLtRedPurpleBorder from '../../resources/colour1x/lightRed/border/purple/Square-LtRed-PurpleBorder.svg'
import SquareLtRedOrangeBorder from '../../resources/colour1x/lightRed/border/orange/Square-LtRed-OrangeBorder.svg'
import SquareLtRedBlackBorder from '../../resources/colour1x/lightRed/border/black/Square-LtRed-BlackBorder.svg'

import SquareRedRedBorder from '../../resources/colour1x/red/border/red/Square-Red-RedBorder.svg'
import SquareRedPurpleBorder from '../../resources/colour1x/red/border/purple/Square-Red-PurpleBorder.svg'
import SquareRedOrangeBorder from '../../resources/colour1x/red/border/orange/Square-Red-OrangeBorder.svg'
import SquareRedBlackBorder from '../../resources/colour1x/red/border/black/Square-Red-BlackBorder.svg'

import SquareBlackRedBorder from '../../resources/colour1x/black/border/red/Square-Black-RedBorder.svg'
import SquareBlackPurpleBorder from '../../resources/colour1x/black/border/purple/Square-Black-PurpleBorder.svg'
import SquareBlackOrangeBorder from '../../resources/colour1x/black/border/orange/Square-Black-OrangeBorder.svg'
import SquareBlackBlackBorder from '../../resources/colour1x/black/border/black/Square-Black-BlackBorder.svg'

import SquareGrayRedBorder from '../../resources/colour1x/gray/border/red/Square-Gray-RedBorder.svg'
import SquareGrayPurpleBorder from '../../resources/colour1x/gray/border/purple/Square-Gray-PurpleBorder.svg'
import SquareGrayOrangeBorder from '../../resources/colour1x/gray/border/orange/Square-Gray-OrangeBorder.svg'
import SquareGrayBlackBorder from '../../resources/colour1x/gray/border/black/Square-Gray-BlackBorder.svg'


import TriangleLtGreenRedBorder from '../../resources/colour1x/lightGreen/border/red/Triangle-LtGreen-RedBorder.svg'
import TriangleLtGreenPurpleBorder from '../../resources/colour1x/lightGreen/border/purple/Triangle-LtGreen-PurpleBorder.svg'
import TriangleLtGreenOrangeBorder from '../../resources/colour1x/lightGreen/border/orange/Triangle-LtGreen-OrangeBorder.svg'
import TriangleLtGreenBlackBorder from '../../resources/colour1x/lightGreen/border/black/Triangle-LtGreen-BlackBorder.svg'

import TriangleGreenRedBorder from '../../resources/colour1x/green/border/red/Triangle-Green-RedBorder.svg'
import TriangleGreenPurpleBorder from '../../resources/colour1x/green/border/purple/Triangle-Green-PurpleBorder.svg'
import TriangleGreenOrangeBorder from '../../resources/colour1x/green/border/orange/Triangle-Green-OrangeBorder.svg'
import TriangleGreenBlackBorder from '../../resources/colour1x/green/border/black/Triangle-Green-BlackBorder.svg'

import TriangleLtBlueRedBorder from '../../resources/colour1x/lightBlue/border/red/Triangle-LtBlue-RedBorder.svg'
import TriangleLtBluePurpleBorder from '../../resources/colour1x/lightBlue/border/purple/Triangle-LtBlue-PurpleBorder.svg'
import TriangleLtBlueOrangeBorder from '../../resources/colour1x/lightBlue/border/orange/Triangle-LtBlue-OrangeBorder.svg'
import TriangleLtBlueBlackBorder from '../../resources/colour1x/lightBlue/border/black/Triangle-LtBlue-BlackBorder.svg'

import TriangleTealRedBorder from '../../resources/colour1x/teal/border/red/Triangle-Teal-RedBorder.svg'
import TriangleTealPurpleBorder from '../../resources/colour1x/teal/border/purple/Triangle-Teal-PurpleBorder.svg'
import TriangleTealOrangeBorder from '../../resources/colour1x/teal/border/orange/Triangle-Teal-OrangeBorder.svg'
import TriangleTealBlackBorder from '../../resources/colour1x/teal/border/black/Triangle-Teal-BlackBorder.svg'

import TriangleDarkBlueRedBorder from '../../resources/colour1x/blue/border/red/Triangle-Blue-RedBorder.svg'
import TriangleDarkBluePurpleBorder from '../../resources/colour1x/blue/border/purple/Triangle-Blue-PurpleBorder.svg'
import TriangleDarkBlueOrangeBorder from '../../resources/colour1x/blue/border/orange/Triangle-Blue-OrangeBorder.svg'
import TriangleDarkBlueBlackBorder from '../../resources/colour1x/blue/border/black/Triangle-Blue-BlackBorder.svg'

import TriangleYellowRedBorder from '../../resources/colour1x/yellow/border/red/Triangle-Yellow-RedBorder.svg'
import TriangleYellowPurpleBorder from '../../resources/colour1x/yellow/border/purple/Triangle-Yellow-PurpleBorder.svg'
import TriangleYellowOrangeBorder from '../../resources/colour1x/yellow/border/orange/Triangle-Yellow-OrangeBorder.svg'
import TriangleYellowBlackBorder from '../../resources/colour1x/yellow/border/black/Triangle-Yellow-BlackBorder.svg'

import TriangleOrangeRedBorder from '../../resources/colour1x/orange/border/red/Triangle-Orange-RedBorder.svg'
import TriangleOrangePurpleBorder from '../../resources/colour1x/orange/border/purple/Triangle-Orange-PurpleBorder.svg'
import TriangleOrangeOrangeBorder from '../../resources/colour1x/orange/border/orange/Triangle-Orange-OrangeBorder.svg'
import TriangleOrangeBlackBorder from '../../resources/colour1x/orange/border/black/Triangle-Orange-BlackBorder.svg'

import TriangleLtRedRedBorder from '../../resources/colour1x/lightRed/border/red/Triangle-LtRed-RedBorder.svg'
import TriangleLtRedPurpleBorder from '../../resources/colour1x/lightRed/border/purple/Triangle-LtRed-PurpleBorder.svg'
import TriangleLtRedOrangeBorder from '../../resources/colour1x/lightRed/border/orange/Triangle-LtRed-OrangeBorder.svg'
import TriangleLtRedBlackBorder from '../../resources/colour1x/lightRed/border/black/Triangle-LtRed-BlackBorder.svg'

import TriangleRedRedBorder from '../../resources/colour1x/red/border/red/Triangle-Red-RedBorder.svg'
import TriangleRedPurpleBorder from '../../resources/colour1x/red/border/purple/Triangle-Red-PurpleBorder.svg'
import TriangleRedOrangeBorder from '../../resources/colour1x/red/border/orange/Triangle-Red-OrangeBorder.svg'
import TriangleRedBlackBorder from '../../resources/colour1x/red/border/black/Triangle-Red-BlackBorder.svg'

import TriangleBlackRedBorder from '../../resources/colour1x/black/border/red/Triangle-Black-RedBorder.svg'
import TriangleBlackPurpleBorder from '../../resources/colour1x/black/border/purple/Triangle-Black-PurpleBorder.svg'
import TriangleBlackOrangeBorder from '../../resources/colour1x/black/border/orange/Triangle-Black-OrangeBorder.svg'
import TriangleBlackBlackBorder from '../../resources/colour1x/black/border/black/Triangle-Black-BlackBorder.svg'

import TriangleGrayRedBorder from '../../resources/colour1x/gray/border/red/Triangle-Gray-RedBorder.svg'
import TriangleGrayPurpleBorder from '../../resources/colour1x/gray/border/purple/Triangle-Gray-PurpleBorder.svg'
import TriangleGrayOrangeBorder from '../../resources/colour1x/gray/border/orange/Triangle-Gray-OrangeBorder.svg'
import TriangleGrayBlackBorder from '../../resources/colour1x/gray/border/black/Triangle-Gray-BlackBorder.svg'


import OctagonLtGreenRedBorder from '../../resources/colour1x/lightGreen/border/red/Octagon-LtGreen-RedBorder.svg'
import OctagonLtGreenPurpleBorder from '../../resources/colour1x/lightGreen/border/purple/Octagon-LtGreen-PurpleBorder.svg'
import OctagonLtGreenOrangeBorder from '../../resources/colour1x/lightGreen/border/orange/Octagon-LtGreen-OrangeBorder.svg'
import OctagonLtGreenBlackBorder from '../../resources/colour1x/lightGreen/border/black/Octagon-LtGreen-BlackBorder.svg'

import OctagonGreenRedBorder from '../../resources/colour1x/green/border/red/Octagon-Green-RedBorder.svg'
import OctagonGreenPurpleBorder from '../../resources/colour1x/green/border/purple/Octagon-Green-PurpleBorder.svg'
import OctagonGreenOrangeBorder from '../../resources/colour1x/green/border/orange/Octagon-Green-OrangeBorder.svg'
import OctagonGreenBlackBorder from '../../resources/colour1x/green/border/black/Octagon-Green-BlackBorder.svg'

import OctagonLtBlueRedBorder from '../../resources/colour1x/lightBlue/border/red/Octagon-LtBlue-RedBorder.svg'
import OctagonLtBluePurpleBorder from '../../resources/colour1x/lightBlue/border/purple/Octagon-LtBlue-PurpleBorder.svg'
import OctagonLtBlueOrangeBorder from '../../resources/colour1x/lightBlue/border/orange/Octagon-LtBlue-OrangeBorder.svg'
import OctagonLtBlueBlackBorder from '../../resources/colour1x/lightBlue/border/black/Octagon-LtBlue-BlackBorder.svg'

import OctagonTealRedBorder from '../../resources/colour1x/teal/border/red/Octagon-Teal-RedBorder.svg'
import OctagonTealPurpleBorder from '../../resources/colour1x/teal/border/purple/Star-Teal-PurpleBorder.svg'
import OctagonTealOrangeBorder from '../../resources/colour1x/teal/border/orange/Octagon-Teal-OrangeBorder.svg'
import OctagonTealBlackBorder from '../../resources/colour1x/teal/border/black/Octagon-Teal-BlackBorder.svg'

import OctagonDarkBlueRedBorder from '../../resources/colour1x/blue/border/red/Octagon-Blue-RedBorder.svg'
import OctagonDarkBluePurpleBorder from '../../resources/colour1x/blue/border/purple/Octagon-Blue-PurpleBorder.svg'
import OctagonDarkBlueOrangeBorder from '../../resources/colour1x/blue/border/orange/Octagon-Blue-OrangeBorder.svg'
import OctagonDarkBlueBlackBorder from '../../resources/colour1x/blue/border/black/Octagon-Blue-BlackBorder.svg'

import OctagonYellowRedBorder from '../../resources/colour1x/yellow/border/red/Octagon-Yellow-RedBorder.svg'
import OctagonYellowPurpleBorder from '../../resources/colour1x/yellow/border/purple/Octagon-Yellow-PurpleBorder.svg'
import OctagonYellowOrangeBorder from '../../resources/colour1x/yellow/border/orange/Octagon-Yellow-OrangeBorder.svg'
import OctagonYellowBlackBorder from '../../resources/colour1x/yellow/border/black/Octagon-Yellow-BlackBorder.svg'

import OctagonOrangeRedBorder from '../../resources/colour1x/orange/border/red/Octagon-Orange-RedBorder.svg'
import OctagonOrangePurpleBorder from '../../resources/colour1x/orange/border/purple/Octagon-Orange-PurpleBorder.svg'
import OctagonOrangeOrangeBorder from '../../resources/colour1x/orange/border/orange/Octagon-Orange-OrangeBorder.svg'
import OctagonOrangeBlackBorder from '../../resources/colour1x/orange/border/black/Octagon-Orange-BlackBorder.svg'

import OctagonLtRedRedBorder from '../../resources/colour1x/lightRed/border/red/Octagon-LtRed-RedBorder.svg'
import OctagonLtRedPurpleBorder from '../../resources/colour1x/lightRed/border/purple/Octagon-LtRed-PurpleBorder.svg'
import OctagonLtRedOrangeBorder from '../../resources/colour1x/lightRed/border/orange/Octagon-LtRed-OrangeBorder.svg'
import OctagonLtRedBlackBorder from '../../resources/colour1x/lightRed/border/black/Octagon-LtRed-BlackBorder.svg'

import OctagonRedRedBorder from '../../resources/colour1x/red/border/red/Octagon-Red-RedBorder.svg'
import OctagonRedPurpleBorder from '../../resources/colour1x/red/border/purple/Octagon-Red-PurpleBorder.svg'
import OctagonRedOrangeBorder from '../../resources/colour1x/red/border/orange/Octagon-Red-OrangeBorder.svg'
import OctagonRedBlackBorder from '../../resources/colour1x/red/border/black/Octagon-Red-BlackBorder.svg'

import OctagonBlackRedBorder from '../../resources/colour1x/black/border/red/Octagon-Black-RedBorder.svg'
import OctagonBlackPurpleBorder from '../../resources/colour1x/black/border/purple/Octagon-Black-PurpleBorder.svg'
import OctagonBlackOrangeBorder from '../../resources/colour1x/black/border/orange/Octagon-Black-OrangeBorder.svg'
import OctagonBlackBlackBorder from '../../resources/colour1x/black/border/black/Octagon-Black-BlackBorder.svg'

import OctagonGrayRedBorder from '../../resources/colour1x/gray/border/red/Octagon-Gray-RedBorder.svg'
import OctagonGrayPurpleBorder from '../../resources/colour1x/gray/border/purple/Octagon-Gray-PurpleBorder.svg'
import OctagonGrayOrangeBorder from '../../resources/colour1x/gray/border/orange/Octagon-Gray-OrangeBorder.svg'
import OctagonGrayBlackBorder from '../../resources/colour1x/gray/border/black/Octagon-Gray-BlackBorder.svg'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@common/drop-down/index'
import { Checkbox } from '@components/common/checkbox/index'

export const SORTORDER = {
  ASC: 'ASC',
  DSC: 'DSC',
}

export const SORTBY = {
  DOS: 'Date of service',
  ORDERID: 'Order Id',
  PATIENTNAME: "Patient's name",
  PATIENTCITY: "Patient's city",
  PATIENTREGION: "Patient's region",
  PATIENTZIP: "Patient's zip",
  ORDERTYPE: 'Order type',
  ORDERSTEPNUM: 'Order step number',
  ORDERSTATUS: 'Order status',
  ASSIGNEDTECH: 'Assigned technician',
}

const strChunk = (val, noComma = false) =>
  // eslint-disable-next-line no-nested-ternary
  val ? (noComma ? val : `${val}, `) : ''


export const GetIconUrl = (itemlongDesc, itemorgSubStatus) => {
  // console.log('item', itemlongDesc, itemorgSubStatus)
  let url
  url = SquareLtGreenBlackBorder
  let dummy

  if (itemlongDesc == 'Mobile Physician') {
    if (itemorgSubStatus == 'Prospect') {
      if (dummy == 'urgent Request') {
        url = StarLtGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarLtGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarLtGreenOrangeBorder
      } else {
        //No visit >60 Days
        url = StarLtGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Contacted') {
      if (dummy == 'urgent Request') {
        url = StarGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarGreenOrangeBorder
      } else {
        url = StarGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Pending Order') {
      if (dummy == 'urgent Request') {
        url = StarLtBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarLtBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarLtBlueOrangeBorder
      } else {
        url = StarLtBlueBlackBorder
      }
    } else if (itemorgSubStatus == 'New Client') {
      if (dummy == 'urgent Request') {
        url = StarTealRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarTealPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarTealOrangeBorder
      } else {
        url = StarTealBlackBorder
      }

    }
    else if (itemorgSubStatus == 'Client') {
      if (dummy == 'urgent Request') {
        url = StarDarkBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarDarkBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarDarkBlueOrangeBorder
      } else {
        url = StarDarkBlueBlackBorder
      }

    } else if (itemorgSubStatus == 'VIP') {
      if (dummy == 'urgent Request') {
        url = StarYellowRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarYellowPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarYellowOrangeBorder
      } else {
        url = StarYellowBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Flagged') {
      if (dummy == 'urgent Request') {
        url = StarOrangeRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarOrangePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarOrangeOrangeBorder
      } else {
        url = StarOrangeBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Banned') {
      if (dummy == 'urgent Request') {
        url = StarLtRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarLtRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarLtRedOrangeBorder
      } else {
        url = StarLtRedBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Lost') {
      if (dummy == 'urgent Request') {
        url = StarRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarRedOrangeBorder
      } else {
        url = StarRedBlackBorder
      }
    } else if (itemorgSubStatus == 'Dead') {
      if (dummy == 'urgent Request') {
        url = StarBlackRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarBlackPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarBlackOrangeBorder
      } else {
        url = StarBlackBlackBorder
      }
    } else if (itemorgSubStatus == 'Not A Prospect') {
      if (dummy == 'urgent Request') {
        url = StarGrayRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = StarGrayPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = StarGrayOrangeBorder
      } else {
        url = StarGrayBlackBorder
      }
    }
  }else if (itemlongDesc == 'Physician Practice') {
    if (itemorgSubStatus == 'Prospect') {
      if (dummy == 'urgent Request') {
        url = DiamondLtGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondLtGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondLtGreenOrangeBorder
      } else {
        //No visit >60 Days
        url = DiamondLtGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Contacted') {
      if (dummy == 'urgent Request') {
        url = DiamondGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondGreenOrangeBorder
      } else {
        url = DiamondGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Pending Order') {
      if (dummy == 'urgent Request') {
        url = DiamondLtBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondLtBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondLtBlueOrangeBorder
      } else {
        url = DiamondLtBlueBlackBorder
      }
    } else if (itemorgSubStatus == 'New Client') {
      if (dummy == 'urgent Request') {
        url = DiamondTealRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondTealPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondTealOrangeBorder
      } else {
        url = DiamondTealBlackBorder
      }

    }
    else if (itemorgSubStatus == 'Client') {
      if (dummy == 'urgent Request') {
        url = DiamondDarkBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondDarkBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondDarkBlueOrangeBorder
      } else {
        url = DiamondDarkBlueBlackBorder
      }

    } else if (itemorgSubStatus == 'VIP') {
      if (dummy == 'urgent Request') {
        url = DiamondYellowRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondYellowPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondYellowOrangeBorder
      } else {
        url = DiamondYellowBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Flagged') {
      if (dummy == 'urgent Request') {
        url = DiamondOrangeRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondOrangePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondOrangeOrangeBorder
      } else {
        url = DiamondOrangeBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Banned') {
      if (dummy == 'urgent Request') {
        url = DiamondLtRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondLtRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondLtRedOrangeBorder
      } else {
        url = DiamondLtRedBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Lost') {
      if (dummy == 'urgent Request') {
        url = DiamondRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondRedOrangeBorder
      } else {
        url = DiamondRedBlackBorder
      }
    } else if (itemorgSubStatus == 'Dead') {
      if (dummy == 'urgent Request') {
        url = DiamondBlackRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondBlackPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondBlackOrangeBorder
      } else {
        url = DiamondBlackBlackBorder
      }
    } else if (itemorgSubStatus == 'Not A Prospect') {
      if (dummy == 'urgent Request') {
        url = DiamondGrayRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = DiamondGrayPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = DiamondGrayOrangeBorder
      } else {
        url = DiamondGrayBlackBorder
      }
    }
  }else if (itemlongDesc == 'HHA') {
    if (itemorgSubStatus == 'Prospect') {
      if (dummy == 'urgent Request') {
        url = CircleLtGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleLtGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleLtGreenOrangeBorder
      } else {
        //No visit >60 Days
        url = CircleLtGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Contacted') {
      if (dummy == 'urgent Request') {
        url = CircleGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleGreenOrangeBorder
      } else {
        url = CircleGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Pending Order') {
      if (dummy == 'urgent Request') {
        url = CircleLtBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleLtBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleLtBlueOrangeBorder
      } else {
        url = CircleLtBlueBlackBorder
      }
    } else if (itemorgSubStatus == 'New Client') {
      if (dummy == 'urgent Request') {
        url = CircleTealRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleTealPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleTealOrangeBorder
      } else {
        url = CircleTealBlackBorder
      }

    }
    else if (itemorgSubStatus == 'Client') {
      if (dummy == 'urgent Request') {
        url = CircleDarkBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleDarkBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleDarkBlueOrangeBorder
      } else {
        url = CircleDarkBlueBlackBorder
      }

    } else if (itemorgSubStatus == 'VIP') {
      if (dummy == 'urgent Request') {
        url = CircleYellowRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleYellowPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleYellowOrangeBorder
      } else {
        url = CircleYellowBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Flagged') {
      if (dummy == 'urgent Request') {
        url = CircleOrangeRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleOrangePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleOrangeOrangeBorder
      } else {
        url = CircleOrangeBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Banned') {
      if (dummy == 'urgent Request') {
        url = CircleLtRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleLtRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleLtRedOrangeBorder
      } else {
        url = CircleLtRedBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Lost') {
      if (dummy == 'urgent Request') {
        url = CircleRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleRedOrangeBorder
      } else {
        url = CircleRedBlackBorder
      }
    } else if (itemorgSubStatus == 'Dead') {
      if (dummy == 'urgent Request') {
        url = CircleBlackRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleBlackPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleBlackOrangeBorder
      } else {
        url = CircleBlackBlackBorder
      }
    } else if (itemorgSubStatus == 'Not A Prospect') {
      if (dummy == 'urgent Request') {
        url = CircleGrayRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = CircleGrayPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = CircleGrayOrangeBorder
      } else {
        url = CircleGrayBlackBorder
      }
    }
  }else if (itemlongDesc == 'Hospice') {
    if (itemorgSubStatus == 'Prospect') {
      if (dummy == 'urgent Request') {
        url = SquareLtGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareLtGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareLtGreenOrangeBorder
      } else {
        //No visit >60 Days
        url = SquareLtGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Contacted') {
      if (dummy == 'urgent Request') {
        url = SquareGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareGreenOrangeBorder
      } else {
        url = SquareGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Pending Order') {
      if (dummy == 'urgent Request') {
        url = SquareLtBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareLtBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareLtBlueOrangeBorder
      } else {
        url = SquareLtBlueBlackBorder
      }
    } else if (itemorgSubStatus == 'New Client') {
      if (dummy == 'urgent Request') {
        url = SquareTealRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareTealPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareTealOrangeBorder
      } else {
        url = SquareTealBlackBorder
      }

    }
    else if (itemorgSubStatus == 'Client') {
      if (dummy == 'urgent Request') {
        url = SquareDarkBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareDarkBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareDarkBlueOrangeBorder
      } else {
        url = SquareDarkBlueBlackBorder
      }

    } else if (itemorgSubStatus == 'VIP') {
      if (dummy == 'urgent Request') {
        url = SquareYellowRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareYellowPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareYellowOrangeBorder
      } else {
        url = SquareYellowBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Flagged') {
      if (dummy == 'urgent Request') {
        url = SquareOrangeRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareOrangePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareOrangeOrangeBorder
      } else {
        url = SquareOrangeBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Banned') {
      if (dummy == 'urgent Request') {
        url = SquareLtRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareLtRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareLtRedOrangeBorder
      } else {
        url = SquareLtRedBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Lost') {
      if (dummy == 'urgent Request') {
        url = SquareRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareRedOrangeBorder
      } else {
        url = SquareRedBlackBorder
      }
    } else if (itemorgSubStatus == 'Dead') {
      if (dummy == 'urgent Request') {
        url = SquareBlackRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareBlackPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareBlackOrangeBorder
      } else {
        url = SquareBlackBlackBorder
      }
    } else if (itemorgSubStatus == 'Not A Prospect') {
      if (dummy == 'urgent Request') {
        url = SquareGrayRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = SquareGrayPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = SquareGrayOrangeBorder
      } else {
        url = SquareGrayBlackBorder
      }
    }
  }else if (itemlongDesc == 'RCFE') {
    if (itemorgSubStatus == 'Prospect') {
      if (dummy == 'urgent Request') {
        url = TriangleLtGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleLtGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleLtGreenOrangeBorder
      } else {
        //No visit >60 Days
        url = TriangleLtGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Contacted') {
      if (dummy == 'urgent Request') {
        url = TriangleGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleGreenOrangeBorder
      } else {
        url = TriangleGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Pending Order') {
      if (dummy == 'urgent Request') {
        url = TriangleLtBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleLtBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleLtBlueOrangeBorder
      } else {
        url = TriangleLtBlueBlackBorder
      }
    } else if (itemorgSubStatus == 'New Client') {
      if (dummy == 'urgent Request') {
        url = TriangleTealRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleTealPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleTealOrangeBorder
      } else {
        url = TriangleTealBlackBorder
      }

    }
    else if (itemorgSubStatus == 'Client') {
      if (dummy == 'urgent Request') {
        url = TriangleDarkBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleDarkBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleDarkBlueOrangeBorder
      } else {
        url = TriangleDarkBlueBlackBorder
      }

    } else if (itemorgSubStatus == 'VIP') {
      if (dummy == 'urgent Request') {
        url = TriangleYellowRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleYellowPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleYellowOrangeBorder
      } else {
        url = TriangleYellowBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Flagged') {
      if (dummy == 'urgent Request') {
        url = TriangleOrangeRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleOrangePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleOrangeOrangeBorder
      } else {
        url = TriangleOrangeBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Banned') {
      if (dummy == 'urgent Request') {
        url = TriangleLtRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleLtRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleLtRedOrangeBorder
      } else {
        url = TriangleLtRedBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Lost') {
      if (dummy == 'urgent Request') {
        url = TriangleRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleRedOrangeBorder
      } else {
        url = TriangleRedBlackBorder
      }
    } else if (itemorgSubStatus == 'Dead') {
      if (dummy == 'urgent Request') {
        url = TriangleBlackRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleBlackPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleBlackOrangeBorder
      } else {
        url = TriangleBlackBlackBorder
      }
    } else if (itemorgSubStatus == 'Not A Prospect') {
      if (dummy == 'urgent Request') {
        url = TriangleGrayRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = TriangleGrayPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = TriangleGrayOrangeBorder
      } else {
        url = TriangleGrayBlackBorder
      }
    }
  }else{
    // other
    if (itemorgSubStatus == 'Prospect') {
      if (dummy == 'urgent Request') {
        url = OctagonLtGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonLtGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonLtGreenOrangeBorder
      } else {
        //No visit >60 Days
        url = OctagonLtGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Contacted') {
      if (dummy == 'urgent Request') {
        url = OctagonGreenRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonGreenPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonGreenOrangeBorder
      } else {
        url = OctagonGreenBlackBorder
      }
    } else if (itemorgSubStatus == 'Pending Order') {
      if (dummy == 'urgent Request') {
        url = OctagonLtBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonLtBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonLtBlueOrangeBorder
      } else {
        url = OctagonLtBlueBlackBorder
      }
    } else if (itemorgSubStatus == 'New Client') {
      if (dummy == 'urgent Request') {
        url = OctagonTealRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonTealPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonTealOrangeBorder
      } else {
        url = OctagonTealBlackBorder
      }

    }
    else if (itemorgSubStatus == 'Client') {
      if (dummy == 'urgent Request') {
        url = OctagonDarkBlueRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonDarkBluePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonDarkBlueOrangeBorder
      } else {
        url = OctagonDarkBlueBlackBorder
      }

    } else if (itemorgSubStatus == 'VIP') {
      if (dummy == 'urgent Request') {
        url = OctagonYellowRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonYellowPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonYellowOrangeBorder
      } else {
        url = OctagonYellowBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Flagged') {
      if (dummy == 'urgent Request') {
        url = OctagonOrangeRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonOrangePurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonOrangeOrangeBorder
      } else {
        url = OctagonOrangeBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Banned') {
      if (dummy == 'urgent Request') {
        url = OctagonLtRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonLtRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonLtRedOrangeBorder
      } else {
        url = OctagonLtRedBlackBorder
      }
    }
    else if (itemorgSubStatus == 'Lost') {
      if (dummy == 'urgent Request') {
        url = OctagonRedRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonRedPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonRedOrangeBorder
      } else {
        url = OctagonRedBlackBorder
      }
    } else if (itemorgSubStatus == 'Dead') {
      if (dummy == 'urgent Request') {
        url = OctagonBlackRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonBlackPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonBlackOrangeBorder
      } else {
        url = OctagonBlackBlackBorder
      }
    } else if (itemorgSubStatus == 'Not A Prospect') {
      if (dummy == 'urgent Request') {
        url = OctagonGrayRedBorder
      } else if (dummy == 'Client Requesting info') {
        url = OctagonGrayPurpleBorder
      } else if (dummy == 'No order >30 days') {
        url = OctagonGrayOrangeBorder
      } else {
        url = OctagonGrayBlackBorder
      }
    }
  }
  
  return url;
}

export default function NarrowOrgList({ list, clickedOrg, setClickedOrg }) {
  const [sortOrder, setSortOrder] = useState(undefined)
  const [sortBy, setSortBy] = useState(undefined)
  return (
    <div className="flex flex-col h-full">
      <div className="bg-[#E6E6E6] border-b border-b-slate-600 p-2 flex justify-between items-center">
        <Checkbox className="h-5 w-5" />
        <Select
          value={sortBy}
          onValueChange={(value) => {
            setSortBy(value)
          }}
        >
          <SelectTrigger className="mx-8 h-8 bg-[#E6E6E6] border-slate-600 focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select a field to sort by" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(SORTBY).map(([key, label]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div>
          {sortOrder === SORTORDER.ASC ? (
            <svg
              className="OrderListContainer__svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setSortOrder(SORTORDER.DSC)
              }}
            >
              <path
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="OrderListContainer__svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setSortOrder(SORTORDER.ASC)
              }}
            >
              <path
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="overflow-y-auto">
        {list.map((item) => (
          <div
            key={item.id}
            className={clsx({
              'flex gap-5 p-2': true,
              'border-[5px] border-solid border-[blue]':
                item.id === clickedOrg?.id,
              'border-b border-b-black': !(item.id === clickedOrg?.id),
            })}
            onClick={() => {
              if (item.id === clickedOrg?.id) {
                setClickedOrg(undefined)
              } else {
                setClickedOrg(item)
              }
            }}
          >
            <Checkbox />
            <div className="flex flex-col">
              <div>{item?.orgName}</div>
              <div>{`${strChunk(item?.mainAddress?.addressLine)}${strChunk(
                item?.mainAddress?.addressLine2
              )}${strChunk(item?.mainAddress?.city)}${strChunk(
                item?.mainAddress?.province
              )}${strChunk(item?.mainAddress?.geoRegionName)}`}</div>
              <div className="inline-flex gap-2 items-center">
                {strChunk(formatPhoneAndFax(item?.mainContactPhone), true)}
                {item?.mainContactPhone && (
                  <Copy
                    className="cursor-pointer h-4 w-4"
                    onClick={(e) => {
                      e.stopPropagation()
                      copyToClipboard(item?.mainContactPhone)
                    }}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col ml-auto items-end">
              {/* <GetIconUrl
                itemlongDesc={strChunk(item?.subtype?.longDesc, true)}
                itemorgSubStatus={strChunk(item?.orgSubStatus, true)}
              /> */}
              <img alt="" src={GetIconUrl(strChunk(item?.subtype?.longDesc, true), strChunk(item?.orgSubStatus, true))} />
              <div>{strChunk(item?.subtype?.longDesc, true)}</div>
              <div>{strChunk(item?.orgSubStatus, true)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

