/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when exporting a document as 
		 * an 24 bit PNG file
		 */
		class ExportOptionsPNG24 extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * should the resulting image be antialiased ( default: true )
			 * @type {boolean}
			 */
			public antiAliasing: boolean;
			/**
			 * should the resulting image be clipped to the artboard ( 
			 * default: false )
			 * @type {boolean}
			 */
			public artBoardClipping: boolean;
			/**
			 * horizontal scaling factor ( default: 100.0 )
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * should the artboard be matted with a color ( default: true )
			 * @type {boolean}
			 */
			public matte: boolean;
			/**
			 * the color to use when matting the artboard (default: white)
			 * @type {Adobe.Illustrator.RGBColor}
			 */
			public matteColor: Adobe.Illustrator.RGBColor;
			/**
			 * should the resulting image be saved as HTML ( default: false 
			 * )
			 * @type {boolean}
			 */
			public saveAsHTML: boolean;
			/**
			 * should the resulting image use transparency ( default: true 
			 * )
			 * @type {boolean}
			 */
			public transparency: boolean;
			/**
			 * vertical scaling factor ( default: 100.0 )
			 * @type {number}
			 */
			public verticalScale: number;
		}
	}
}