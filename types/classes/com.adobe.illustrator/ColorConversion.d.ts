/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ColorConversion extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORCONVERSIONREPURPOSE: Adobe.Illustrator.ColorConversion;
			/**
			 * Converts all colors to the profile selected for Destination.
			 */
			public static readonly COLORCONVERSIONTODEST: Adobe.Illustrator.ColorConversion;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Preserves color data as is. */
			public static readonly None: Adobe.Illustrator.ColorConversion;
			/** Constructor */
			public constructor();
		}
	}
}