/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Raster artwork item */
		class RasterItem extends Adobe.Illustrator.PageItem {
			/**
			 * the number of bits per channel
			 * @type {number}
			 * @readonly
			 */
			public readonly bitsPerChannel: number;
			/**
			 * dimensions of raster art object regardless of 
			 * transformations
			 * @type {any[]}
			 */
			public boundingBox: any[];
			/**
			 * the number of image channels
			 * @type {number}
			 * @readonly
			 */
			public readonly channels: number;
			/**
			 * list of colorant names
			 * @type {any[]}
			 * @readonly
			 */
			public readonly colorants: any[];
			/**
			 * is the raster art a colorized grayscale image?
			 * @type {boolean}
			 * @readonly
			 */
			public readonly colorizedGrayscale: boolean;
			/**
			 * the content variable bound to this raster art object
			 * @type {any}
			 */
			public contentVariable: any;
			/**
			 * is the raster art embedded within the illustration?
			 * @type {boolean}
			 */
			public embedded: boolean;
			/**
			 * the file containing the raster artwork
			 * @type {File}
			 * @readonly
			 */
			public readonly file: File;
			/**
			 * the color space of the raster image
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 * @readonly
			 */
			public readonly imageColorSpace: Adobe.Illustrator.ImageColorSpace;
			/**
			 * The transformation matrix of the raster art object
			 * @type {Adobe.Illustrator.Matrix}
			 */
			public matrix: Adobe.Illustrator.Matrix;
			/**
			 * is the raster art overprinting?
			 * @type {boolean}
			 */
			public overprint: boolean;
			/**
			 * status of the linked image
			 * @type {Adobe.Illustrator.RasterLinkState}
			 * @readonly
			 */
			public readonly status: Adobe.Illustrator.RasterLinkState;
			/**
			 * is the raster art transparent?
			 * @type {boolean}
			 * @readonly
			 */
			public readonly transparent: boolean;
			/**
			 * Colorize the RasterItem with a CMYK or RGB Color
			 * @param {Adobe.Illustrator.Color} rasterColor the color to 
			 * use for coloring the TIFF image
			 * @returns {void}
			 */
			public colorize(rasterColor: Adobe.Illustrator.Color): void;
			/**
			 * Trace this raster object using default options.  Reorders 
			 * this raster to the source art.
			 * @returns {Adobe.Illustrator.PluginItem}
			 */
			public trace(): Adobe.Illustrator.PluginItem;
		}
	}
}