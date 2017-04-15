/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class RasterItem extends Adobe.Illustrator.PageItem {
			/** The number of bits per channel. */
			public readonly bitsPerChannel: number;
			/**
			 * Dimensions of raster art object regardless of 
			 * transformations.
			 */
			public boundingBox: any[];
			/** The number of image channels. */
			public readonly channels: number;
			/** List of colorant names. */
			public readonly colorants: any;
			/** Is the raster art a colorized grayscale image? */
			public readonly colorizedGrayscale: boolean;
			/** The content variable bound to this raster art object. */
			public contentVariable: any;
			/** Is the raster art embedded within the illustration? */
			public embedded: boolean;
			/** The file containing the raster artwork. */
			public readonly file: File;
			/** The color space of the raster image. */
			public readonly imageColorSpace: Adobe.Illustrator.ImageColorSpace;
			/** The transformation matrix of the raster art object. */
			public matrix: Adobe.Illustrator.Matrix;
			/** Is the raster art overprinting? */
			public overprint: boolean;
			/** Status of the linked image. */
			public readonly status: Adobe.Illustrator.RasterLinkState;
			/** Is the raster art transparent? */
			public readonly transparent: boolean;
			/**
			 * Colorize the RasterItem with a CMYK or RGB Color.
			 * @param {Adobe.Illustrator.Color} rasterColor - The color to 
			 * use for coloring the TIFF image.
			 */
			public colorize(rasterColor: Adobe.Illustrator.Color): void;
			/**
			 * Trace this raster object using default options. Reorders 
			 * this raster to the source art.
			 */
			public trace(): Adobe.Illustrator.PluginItem;
		}
	}
}