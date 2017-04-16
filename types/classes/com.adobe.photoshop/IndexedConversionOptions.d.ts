/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to changing the document mode to Indexed */
		class IndexedConversionOptions extends Adobe.Photoshop.DocumentConversionOptions {
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
			 * amount of dither. Only valid for diffusion ( 1 - 100 )
			 * @type {number}
			 */
			public ditherAmount: number;
			/**
			 * @type {Adobe.Photoshop.ForcedColors}
			 */
			public forced: Adobe.Photoshop.ForcedColors;
			/**
			 * @type {Adobe.Photoshop.MatteType}
			 */
			public matte: Adobe.Photoshop.MatteType;
			/**
			 * Type of palette ( default: Palette.EXACT )
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