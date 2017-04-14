/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorConversion extends IllustratorEnumBase {
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORCONVERSIONREPURPOSE: ColorConversion;
			/**
			 * Converts all colors to the profile selected for Destination.
			 */
			public static readonly COLORCONVERSIONTODEST: ColorConversion;
			public static readonly enumCache: CSEnumSharedCache;
			/** Preserves color data as is. */
			public static readonly None: ColorConversion;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}