/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Options which may be supplied when rasterizing the artwork */
		class RasterizeOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the type of antialiasing method ( default: 
			 * AntiAliasingMethod.ARTOPTIMIZED )
			 * @type {Adobe.Illustrator.AntiAliasingMethod}
			 */
			public antiAliasingMethod: Adobe.Illustrator.AntiAliasingMethod;
			/**
			 * should rasterize against a black background instead of white 
			 * ( default: false )
			 * @type {boolean}
			 */
			public backgroundBlack: boolean;
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
			 * should all text be converted to outlines before 
			 * rasterization ( default: false )
			 * @type {boolean}
			 */
			public convertTextToOutlines: boolean;
			/**
			 * should the resulting image incorporates the layer attributes 
			 * (such as opacity and blend mode) ( default: false )
			 * @type {boolean}
			 */
			public includeLayers: boolean;
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