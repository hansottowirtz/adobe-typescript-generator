/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Raster artwork item */
		class RasterItem extends Adobe.Illustrator.PageItem {
			/** the number of bits per channel */
			public readonly bitsPerChannel: number;
			/**
			 * dimensions of raster art object regardless of 
			 * transformations
			 */
			public boundingBox: any[];
			/** the number of image channels */
			public readonly channels: number;
			/** list of colorant names */
			public readonly colorants: any[];
			/** is the raster art a colorized grayscale image? */
			public readonly colorizedGrayscale: boolean;
			/** the content variable bound to this raster art object */
			public contentVariable: any;
			/** is the raster art embedded within the illustration? */
			public embedded: boolean;
			/** the file containing the raster artwork */
			public readonly file: File;
			/** the color space of the raster image */
			public readonly imageColorSpace: Adobe.Illustrator.ImageColorSpace;
			/** The transformation matrix of the raster art object */
			public matrix: Adobe.Illustrator.Matrix;
			/** is the raster art overprinting? */
			public overprint: boolean;
			/** status of the linked image */
			public readonly status: Adobe.Illustrator.RasterLinkState;
			/** is the raster art transparent? */
			public readonly transparent: boolean;
			/**
			 * Colorize the RasterItem with a CMYK or RGB Color
			 * @param {Adobe.Illustrator.Color} rasterColor the color to 
			 * use for coloring the TIFF image
			 */
			public colorize(rasterColor: Adobe.Illustrator.Color): void;
			/**
			 * Trace this raster object using default options.  Reorders 
			 * this raster to the source art.
			 */
			public trace(): Adobe.Illustrator.PluginItem;
		}
	}
}