/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ExportOptionsPNG24 extends IllustratorHostObject {
			/** should the resulting image be antialiased ( default: true ) */
			public antiAliasing: boolean;
			/**
			 * should the resulting image be clipped to the artboard ( 
			 * default: false )
			 */
			public artBoardClipping: boolean;
			/** horizontal scaling factor ( default: 100.0 ) */
			public horizontalScale: number;
			/**
			 * should the artboard be matted with a color ( default: true )
			 */
			public matte: boolean;
			/** the color to use when matting the artboard (default: white) */
			public matteColor: RGBColor;
			/**
			 * should the resulting image be saved as HTML ( default: false 
			 * )
			 */
			public saveAsHTML: boolean;
			/**
			 * should the resulting image use transparency ( default: true 
			 * )
			 */
			public transparency: boolean;
			/** vertical scaling factor ( default: 100.0 ) */
			public verticalScale: number;
		}
	}
}