/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to changing the document mode to Indexed */
		class IndexedConversionOptions extends Adobe.Photoshop.DocumentConversionOptions {
			/**
			 * number of colors in palette (only settable for some palette 
			 * types)
			 */
			public colors: number;
			/** type of dither */
			public dither: Adobe.Photoshop.Dither;
			/** amount of dither. Only valid for diffusion ( 1 - 100 ) */
			public ditherAmount: number;
			public forced: Adobe.Photoshop.ForcedColors;
			public matte: Adobe.Photoshop.MatteType;
			/** Type of palette ( default: Palette.EXACT ) */
			public palette: Adobe.Photoshop.Palette;
			public preserveExactColors: boolean;
			public transparency: boolean;
		}
	}
}