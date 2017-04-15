/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Flip extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for BOTH. Horizontal and vertical flip (same as rotate 
			 * 180)
			 */
			public static readonly both: Adobe.Indesign.Flip;
			/** Horizontal and vertical flip (same as rotate 180) */
			public static readonly BOTH: Adobe.Indesign.Flip;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for HORIZONTAL. Flips the printed image horizontally. */
			public static readonly horizontal: Adobe.Indesign.Flip;
			/** Flips the printed image horizontally. */
			public static readonly HORIZONTAL: Adobe.Indesign.Flip;
			/**
			 * Flips the printed image horizontally and vertically (same as 
			 * rotate 180).
			 */
			public static readonly HORIZONTAL_AND_VERTICAL: Adobe.Indesign.Flip;
			/**
			 * Alias for HORIZONTAL_AND_VERTICAL. Flips the printed image 
			 * horizontally and vertically (same as rotate 180).
			 */
			public static readonly horizontalAndVertical: Adobe.Indesign.Flip;
			/** Alias for NONE. The printed image is not flipped. */
			public static readonly none: Adobe.Indesign.Flip;
			/** The printed image is not flipped. */
			public static readonly NONE: Adobe.Indesign.Flip;
			/** Alias for VERTICAL. Flips the printed image vertically. */
			public static readonly vertical: Adobe.Indesign.Flip;
			/** Flips the printed image vertically. */
			public static readonly VERTICAL: Adobe.Indesign.Flip;
			/** Constructor */
			public constructor();
		}
	}
}