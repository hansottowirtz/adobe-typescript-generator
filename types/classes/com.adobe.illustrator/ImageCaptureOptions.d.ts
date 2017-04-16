/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when capturing a portion of 
		 * the artwork as an 24 bit PNG file
		 */
		class ImageCaptureOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * should the resulting image be antialiased ( default: false )
			 * @type {boolean}
			 */
			public antiAliasing: boolean;
			/**
			 * should the artboard be matted with a color ( default: false 
			 * )
			 * @type {boolean}
			 */
			public matte: boolean;
			/**
			 * the color to use when matting the artboard (default: white)
			 * @type {Adobe.Illustrator.RGBColor}
			 */
			public matteColor: Adobe.Illustrator.RGBColor;
			/**
			 * The resolution of the captured image file ( 72.0 - 2400.0; 
			 * default: 150.0 )
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * should the resulting image use transparency ( default: false 
			 * )
			 * @type {boolean}
			 */
			public transparency: boolean;
		}
	}
}