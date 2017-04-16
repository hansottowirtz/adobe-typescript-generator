/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a GIF document */
		class GIFSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * number of colors in palette (only settable for some palette 
			 * types)
			 * @type {number}
			 */
			public colors: number;
			/**
			 * type of dither
			 * @type {Adobe.Photoshop.Dither}
			 */
			public dither: Adobe.Photoshop.Dither;
			/**
			 * amount of dither. Only valid for diffusion ( 1 - 100; 
			 * default: 75 )
			 * @type {number}
			 */
			public ditherAmount: number;
			/**
			 * @type {Adobe.Photoshop.ForcedColors}
			 */
			public forced: Adobe.Photoshop.ForcedColors;
			/**
			 * should rows be interlaced? ( default: false )
			 * @type {boolean}
			 */
			public interlaced: boolean;
			/**
			 * @type {Adobe.Photoshop.MatteType}
			 */
			public matte: Adobe.Photoshop.MatteType;
			/**
			 * ( default: Palette.LOCALSELECTIVE )
			 * @type {Adobe.Photoshop.Palette}
			 */
			public palette: Adobe.Photoshop.Palette;
			/**
			 * @type {boolean}
			 */
			public preserveExactColors: boolean;
			/**
			 * @type {boolean}
			 */
			public transparency: boolean;
		}
	}
}