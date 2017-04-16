/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the print coordinate options */
		class PrintCoordinateOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * whether to flip artwork horizontally ( default: false )
			 * @type {boolean}
			 */
			public emulsion: boolean;
			/**
			 * whether to proportionally scale the artwork to fit on the 
			 * page ( default: false )
			 * @type {boolean}
			 */
			public fitToPage: boolean;
			/**
			 * the horizontal scaling factor expressed as a percentage (100 
			 * = 100%) ( 1.0 - 10000.0; default: 100.0 )
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * the artwork orientation ( default: PrintOrientation.PORTRAIT 
			 * )
			 * @type {Adobe.Illustrator.PrintOrientation}
			 */
			public orientation: Adobe.Illustrator.PrintOrientation;
			/**
			 * the artwork position on media ( default: 
			 * PrintPosition.TRANSLATECENTER )
			 * @type {Adobe.Illustrator.PrintPosition}
			 */
			public position: Adobe.Illustrator.PrintPosition;
			/**
			 * the page tiling mode ( default: 
			 * PrintTiling.TILESINGLEFULLPAGE )
			 * @type {Adobe.Illustrator.PrintTiling}
			 */
			public tiling: Adobe.Illustrator.PrintTiling;
			/**
			 * the vertical scaling factor expressed as a percentage (100 = 
			 * 100%) ( 1.0 - 10000.0; default: 100.0 )
			 * @type {number}
			 */
			public verticalScale: number;
		}
	}
}