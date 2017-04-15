/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class AutoKernType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Allows manual kerning. */
			public static readonly MANUAL: Adobe.Photoshop.AutoKernType;
			/**
			 * Uses kern pairs, which contain information about the spacing 
			 * of specific pairs of letters.
			 */
			public static readonly METRICS: Adobe.Photoshop.AutoKernType;
			/**
			 * Adjusts the spacing between adjacent characters based on 
			 * their shapes.
			 */
			public static readonly OPTICAL: Adobe.Photoshop.AutoKernType;
			/** Constructor */
			public constructor();
		}
	}
}