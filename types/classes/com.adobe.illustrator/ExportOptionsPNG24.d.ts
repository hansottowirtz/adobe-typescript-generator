/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when exporting a document as 
		 * an 24 bit PNG file
		 */
		class ExportOptionsPNG24 extends Adobe.CsawlibIllustrator.IllustratorHostObject {
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
			public matteColor: Adobe.Illustrator.RGBColor;
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