/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorDestination extends IllustratorEnumBase {
			/**
			 * Converts all colors to the profile selected for Destination.
			 */
			public static readonly COLORDESTINATIONDOCCMYK: ColorDestination;
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORDESTINATIONDOCRGB: ColorDestination;
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORDESTINATIONPROFILE: ColorDestination;
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORDESTINATIONWORKINGCMYK: ColorDestination;
			/**
			 * Preserves color numbers for untagged content in the same 
			 * color space as the destination profile. Not available with 
			 * CMS off.
			 */
			public static readonly COLORDESTINATIONWORKINGRGB: ColorDestination;
			public static readonly enumCache: CSEnumSharedCache;
			/** N/A. */
			public static readonly None: ColorDestination;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}