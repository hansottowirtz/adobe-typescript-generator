/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The document raster effects settings */
		class RasterEffectOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * should the resulting image be antialiased ( default: false )
			 * @type {boolean}
			 */
			public antiAliasing: boolean;
			/**
			 * should a clipping mask be created for the resulting image ( 
			 * default: false )
			 * @type {boolean}
			 */
			public clippingMask: boolean;
			/**
			 * The color model for the rasterization ( default: 
			 * RasterizationColorModel.DEFAULTCOLORMODEL )
			 * @type {Adobe.Illustrator.RasterizationColorModel}
			 */
			public colorModel: Adobe.Illustrator.RasterizationColorModel;
			/**
			 * whether to convert all spot colors to process colors in the 
			 * resulting image ( default: false )
			 * @type {boolean}
			 */
			public convertSpotColors: boolean;
			/**
			 * the amount of white space (in points) to be added around the 
			 * object during rasterization ( default: 0.0 )
			 * @type {number}
			 */
			public padding: number;
			/**
			 * The rasterization resolution in dots-per-inch (dpi) ( 72.0 - 
			 * 2400.0; default: 300.0 )
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