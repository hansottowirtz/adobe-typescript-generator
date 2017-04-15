/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AnchorPosition extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Place the anchored object above the line of text that 
			 * contains the object.
			 */
			public static readonly ABOVE_LINE: Adobe.Incopy.AnchorPosition;
			/**
			 * Alias for ABOVE_LINE. Place the anchored object above the 
			 * line of text that contains the object.
			 */
			public static readonly aboveLine: Adobe.Incopy.AnchorPosition;
			/** Alias for ANCHORED. Custom anchor position. */
			public static readonly anchored: Adobe.Incopy.AnchorPosition;
			/** Custom anchor position. */
			public static readonly ANCHORED: Adobe.Incopy.AnchorPosition;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Align the anchored object with the baseline of the line that 
			 * contains the object.
			 */
			public static readonly INLINE_POSITION: Adobe.Incopy.AnchorPosition;
			/**
			 * Alias for INLINE_POSITION. Align the anchored object with 
			 * the baseline of the line that contains the object.
			 */
			public static readonly inlinePosition: Adobe.Incopy.AnchorPosition;
			/** Constructor */
			public constructor();
		}
	}
}