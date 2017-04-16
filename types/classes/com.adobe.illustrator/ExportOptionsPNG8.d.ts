/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when exporting a document as 
		 * an 8 bit PNG file
		 */
		class ExportOptionsPNG8 extends Adobe.CsawlibIllustrator.IllustratorHostObject {
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
			 * number of colors in exported color table ( 2 - 256; default: 
			 * 128 )
			 * @type {number}
			 */
			public colorCount: number;
			/**
			 * method used to dither colors ( default: 
			 * ColorDitherMethod.DIFFUSION )
			 * @type {Adobe.Illustrator.ColorDitherMethod}
			 */
			public colorDither: Adobe.Illustrator.ColorDitherMethod;
			/**
			 * method used to reduce the number of colors ( default: 
			 * ColorReductionMethod.SELECTIVE )
			 * @type {Adobe.Illustrator.ColorReductionMethod}
			 */
			public colorReduction: Adobe.Illustrator.ColorReductionMethod;
			/**
			 * how much should the colors be dithered ( 0 - 100; default: 
			 * 88 )
			 * @type {number}
			 */
			public ditherPercent: number;
			/**
			 * horizontal scaling factor ( default: 100.0 )
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * should the resulting image be interlaced ( default: false )
			 * @type {boolean}
			 */
			public interlaced: boolean;
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
			/**
			 * how much should the color table be changed to match the web 
			 * palette ( 0 - 100; default: 0 )
			 * @type {number}
			 */
			public webSnap: number;
		}
	}
}