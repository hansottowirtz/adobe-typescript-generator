/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FootnoteMarkerPositioning extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the position defined in the character style applied to 
			 * footnote reference numbers. For information, see footnote 
			 * marker style.
			 */
			public static readonly NORMAL_MARKER: Adobe.Incopy.FootnoteMarkerPositioning;
			/**
			 * Alias for NORMAL_MARKER. Uses the position defined in the 
			 * character style applied to footnote reference numbers. For 
			 * information, see footnote marker style.
			 */
			public static readonly normalMarker: Adobe.Incopy.FootnoteMarkerPositioning;
			/** Gives the marker ruby style positioning. */
			public static readonly RUBY_MARKER: Adobe.Incopy.FootnoteMarkerPositioning;
			/**
			 * Alias for RUBY_MARKER. Gives the marker ruby style 
			 * positioning.
			 */
			public static readonly rubyMarker: Adobe.Incopy.FootnoteMarkerPositioning;
			/** Subscripts footnote reference numbers. */
			public static readonly SUBSCRIPT_MARKER: Adobe.Incopy.FootnoteMarkerPositioning;
			/**
			 * Alias for SUBSCRIPT_MARKER. Subscripts footnote reference 
			 * numbers.
			 */
			public static readonly subscriptMarker: Adobe.Incopy.FootnoteMarkerPositioning;
			/** Superscripts footnote reference numbers. */
			public static readonly SUPERSCRIPT_MARKER: Adobe.Incopy.FootnoteMarkerPositioning;
			/**
			 * Alias for SUPERSCRIPT_MARKER. Superscripts footnote 
			 * reference numbers.
			 */
			public static readonly superscriptMarker: Adobe.Incopy.FootnoteMarkerPositioning;
			/** Constructor */
			public constructor();
		}
	}
}