/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class RasterizeOptions extends IllustratorHostObject {
			/**
			 * the type of antialiasing method ( default: 
			 * AntiAliasingMethod.ARTOPTIMIZED )
			 */
			public antiAliasingMethod: AntiAliasingMethod;
			/**
			 * should rasterize against a black background instead of white 
			 * ( default: false )
			 */
			public backgroundBlack: boolean;
			/**
			 * should a clipping mask be created for the resulting image ( 
			 * default: false )
			 */
			public clippingMask: boolean;
			/**
			 * The color model for the rasterization ( default: 
			 * RasterizationColorModel.DEFAULTCOLORMODEL )
			 */
			public colorModel: RasterizationColorModel;
			/**
			 * whether to convert all spot colors to process colors in the 
			 * resulting image ( default: false )
			 */
			public convertSpotColors: boolean;
			/**
			 * should all text be converted to outlines before 
			 * rasterization ( default: false )
			 */
			public convertTextToOutlines: boolean;
			/**
			 * should the resulting image incorporates the layer attributes 
			 * (such as opacity and blend mode) ( default: false )
			 */
			public includeLayers: boolean;
			/**
			 * the amount of white space (in points) to be added around the 
			 * object during rasterization ( default: 0.0 )
			 */
			public padding: number;
			/**
			 * The rasterization resolution in dots-per-inch (dpi) ( 72.0 - 
			 * 2400.0; default: 300.0 )
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