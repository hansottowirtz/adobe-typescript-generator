/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ExportOptionsPNG8 extends IllustratorHostObject {
			/** should the resulting image be antialiased ( default: true ) */
			public antiAliasing: boolean;
			/**
			 * should the resulting image be clipped to the artboard ( 
			 * default: false )
			 */
			public artBoardClipping: boolean;
			/**
			 * number of colors in exported color table ( 2 - 256; default: 
			 * 128 )
			 */
			public colorCount: number;
			/**
			 * method used to dither colors ( default: 
			 * ColorDitherMethod.DIFFUSION )
			 */
			public colorDither: ColorDitherMethod;
			/**
			 * method used to reduce the number of colors ( default: 
			 * ColorReductionMethod.SELECTIVE )
			 */
			public colorReduction: ColorReductionMethod;
			/**
			 * how much should the colors be dithered ( 0 - 100; default: 
			 * 88 )
			 */
			public ditherPercent: number;
			/** horizontal scaling factor ( default: 100.0 ) */
			public horizontalScale: number;
			/** should the resulting image be interlaced ( default: false ) */
			public interlaced: boolean;
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
			/**
			 * how much should the color table be changed to match the web 
			 * palette ( 0 - 100; default: 0 )
			 */
			public webSnap: number;
		}
	}
}