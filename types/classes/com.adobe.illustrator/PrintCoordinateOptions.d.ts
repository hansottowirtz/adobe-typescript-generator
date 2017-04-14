/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintCoordinateOptions extends IllustratorHostObject {
			/** whether to flip artwork horizontally ( default: false ) */
			public emulsion: boolean;
			/**
			 * whether to proportionally scale the artwork to fit on the 
			 * page ( default: false )
			 */
			public fitToPage: boolean;
			/**
			 * the horizontal scaling factor expressed as a percentage (100 
			 * = 100%) ( 1.0 - 10000.0; default: 100.0 )
			 */
			public horizontalScale: number;
			/**
			 * the artwork orientation ( default: PrintOrientation.PORTRAIT 
			 * )
			 */
			public orientation: PrintOrientation;
			/**
			 * the artwork position on media ( default: 
			 * PrintPosition.TRANSLATECENTER )
			 */
			public position: PrintPosition;
			/**
			 * the page tiling mode ( default: 
			 * PrintTiling.TILESINGLEFULLPAGE )
			 */
			public tiling: PrintTiling;
			/**
			 * the vertical scaling factor expressed as a percentage (100 = 
			 * 100%) ( 1.0 - 10000.0; default: 100.0 )
			 */
			public verticalScale: number;
		}
	}
}