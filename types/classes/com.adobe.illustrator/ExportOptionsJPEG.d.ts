/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when exporting a document as a 
		 * JPEG file
		 */
		class ExportOptionsJPEG extends Adobe.CsawlibIllustrator.IllustratorHostObject {
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
			 * blur the resulting image this much ( 0.0 - 2.0; default: 0.0 
			 * )
			 * @type {number}
			 */
			public blurAmount: number;
			/**
			 * horizontal scaling factor ( 0.0 - 776.19; default: 100.0 )
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
			 * should the image be optimized for web viewing ( default: 
			 * true )
			 * @type {boolean}
			 */
			public optimization: boolean;
			/**
			 * quality of resulting image ( 0 - 100; default: 30 )
			 * @type {number}
			 */
			public qualitySetting: number;
			/**
			 * should the resulting image be saved as HTML ( default: false 
			 * )
			 * @type {boolean}
			 */
			public saveAsHTML: boolean;
			/**
			 * vertical scaling factor ( 0.0 - 776.19; default: 100.0 )
			 * @type {number}
			 */
			public verticalScale: number;
		}
	}
}