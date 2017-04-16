/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FootnoteMarkerPositioning extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the position defined in the character style applied to 
			 * footnote reference numbers. For information, see footnote 
			 * marker style.
			 * @type {Adobe.Indesign.FootnoteMarkerPositioning}
			 * @readonly
			 */
			public static readonly NORMAL_MARKER: Adobe.Indesign.FootnoteMarkerPositioning;
			/**
			 * Alias for NORMAL_MARKER. Uses the position defined in the 
			 * character style applied to footnote reference numbers. For 
			 * information, see footnote marker style.
			 * @type {Adobe.Indesign.FootnoteMarkerPositioning}
			 * @readonly
			 */
			public static readonly normalMarker: Adobe.Indesign.FootnoteMarkerPositioning;
			/**
			 * Gives the marker ruby style positioning.
			 * @type {Adobe.Indesign.FootnoteMarkerPositioning}
			 * @readonly
			 */
			public static readonly RUBY_MARKER: Adobe.Indesign.FootnoteMarkerPositioning;
			/**
			 * Alias for RUBY_MARKER. Gives the marker ruby style 
			 * positioning.
			 * @type {Adobe.Indesign.FootnoteMarkerPositioning}
			 * @readonly
			 */
			public static readonly rubyMarker: Adobe.Indesign.FootnoteMarkerPositioning;
			/**
			 * Subscripts footnote reference numbers.
			 * @type {Adobe.Indesign.FootnoteMarkerPositioning}
			 * @readonly
			 */
			public static readonly SUBSCRIPT_MARKER: Adobe.Indesign.FootnoteMarkerPositioning;
			/**
			 * Alias for SUBSCRIPT_MARKER. Subscripts footnote reference 
			 * numbers.
			 * @type {Adobe.Indesign.FootnoteMarkerPositioning}
			 * @readonly
			 */
			public static readonly subscriptMarker: Adobe.Indesign.FootnoteMarkerPositioning;
			/**
			 * Superscripts footnote reference numbers.
			 * @type {Adobe.Indesign.FootnoteMarkerPositioning}
			 * @readonly
			 */
			public static readonly SUPERSCRIPT_MARKER: Adobe.Indesign.FootnoteMarkerPositioning;
			/**
			 * Alias for SUPERSCRIPT_MARKER. Superscripts footnote 
			 * reference numbers.
			 * @type {Adobe.Indesign.FootnoteMarkerPositioning}
			 * @readonly
			 */
			public static readonly superscriptMarker: Adobe.Indesign.FootnoteMarkerPositioning;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}