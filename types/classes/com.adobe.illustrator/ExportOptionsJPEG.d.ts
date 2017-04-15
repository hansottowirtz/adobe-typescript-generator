/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ExportOptionsJPEG extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** should the resulting image be antialiased ( default: true ) */
			public antiAliasing: boolean;
			/**
			 * should the resulting image be clipped to the artboard ( 
			 * default: false )
			 */
			public artBoardClipping: boolean;
			/**
			 * blur the resulting image this much ( 0.0 - 2.0; default: 0.0 
			 * )
			 */
			public blurAmount: number;
			/** horizontal scaling factor ( 0.0 - 776.19; default: 100.0 ) */
			public horizontalScale: number;
			/**
			 * should the artboard be matted with a color ( default: true )
			 */
			public matte: boolean;
			/** the color to use when matting the artboard (default: white) */
			public matteColor: Adobe.Illustrator.RGBColor;
			/**
			 * should the image be optimized for web viewing ( default: 
			 * true )
			 */
			public optimization: boolean;
			/** quality of resulting image ( 0 - 100; default: 30 ) */
			public qualitySetting: number;
			/**
			 * should the resulting image be saved as HTML ( default: false 
			 * )
			 */
			public saveAsHTML: boolean;
			/** vertical scaling factor ( 0.0 - 776.19; default: 100.0 ) */
			public verticalScale: number;
		}
	}
}