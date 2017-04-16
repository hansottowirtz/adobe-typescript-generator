/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a GIF document */
		class GIFSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * number of colors in palette (only settable for some palette 
			 * types)
			 */
			public colors: number;
			/** type of dither */
			public dither: Adobe.Photoshop.Dither;
			/**
			 * amount of dither. Only valid for diffusion ( 1 - 100; 
			 * default: 75 )
			 */
			public ditherAmount: number;
			public forced: Adobe.Photoshop.ForcedColors;
			/** should rows be interlaced? ( default: false ) */
			public interlaced: boolean;
			public matte: Adobe.Photoshop.MatteType;
			/** ( default: Palette.LOCALSELECTIVE ) */
			public palette: Adobe.Photoshop.Palette;
			public preserveExactColors: boolean;
			public transparency: boolean;
		}
	}
}