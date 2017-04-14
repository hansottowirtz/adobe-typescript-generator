/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorDestination extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * Converts all colors to the profile selected for Destination.
			 */
			public static readonly COLORDESTINATIONDOCCMYK: Adobe.Illustrator.ColorDestination;
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORDESTINATIONDOCRGB: Adobe.Illustrator.ColorDestination;
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORDESTINATIONPROFILE: Adobe.Illustrator.ColorDestination;
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORDESTINATIONWORKINGCMYK: Adobe.Illustrator.ColorDestination;
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORDESTINATIONWORKINGRGB: Adobe.Illustrator.ColorDestination;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** N/A. */
			public static readonly None: Adobe.Illustrator.ColorDestination;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}