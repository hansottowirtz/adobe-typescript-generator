/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ImageCaptureOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * should the resulting image be antialiased ( default: false )
			 */
			public antiAliasing: boolean;
			/**
			 * should the artboard be matted with a color ( default: false 
			 * )
			 */
			public matte: boolean;
			/** the color to use when matting the artboard (default: white) */
			public matteColor: Adobe.Illustrator.RGBColor;
			/**
			 * The resolution of the captured image file ( 72.0 - 2400.0; 
			 * default: 150.0 )
			 */
			public resolution: number;
			/**
			 * should the resulting image use transparency ( default: false 
			 * )
			 */
			public transparency: boolean;
		}
	}
}