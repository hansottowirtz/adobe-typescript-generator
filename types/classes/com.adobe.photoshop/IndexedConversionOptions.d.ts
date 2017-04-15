/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
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