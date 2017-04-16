/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FootnotePrefixSuffix extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Does not use a prefix or suffix. */
			public static readonly NO_PREFIX_SUFFIX: Adobe.Incopy.FootnotePrefixSuffix;
			/**
			 * Alias for NO_PREFIX_SUFFIX. Does not use a prefix or suffix.
			 */
			public static readonly noPrefixSuffix: Adobe.Incopy.FootnotePrefixSuffix;
			/**
			 * Places the prefix and/or suffix on both the the footnote 
			 * reference number in the main text and the footnote marker 
			 * number in the footnote text.
			 */
			public static readonly PREFIX_SUFFIX_BOTH: Adobe.Incopy.FootnotePrefixSuffix;
			/**
			 * Places the prefix and/or suffix on the footnote marker 
			 * number in the footnote text.
			 */
			public static readonly PREFIX_SUFFIX_MARKER: Adobe.Incopy.FootnotePrefixSuffix;
			/**
			 * Places the prefix and/or suffix on the footnote reference 
			 * number in the main text.
			 */
			public static readonly PREFIX_SUFFIX_REFERENCE: Adobe.Incopy.FootnotePrefixSuffix;
			/**
			 * Alias for PREFIX_SUFFIX_BOTH. Places the prefix and/or 
			 * suffix on both the the footnote reference number in the main 
			 * text and the footnote marker number in the footnote text.
			 */
			public static readonly prefixSuffixBoth: Adobe.Incopy.FootnotePrefixSuffix;
			/**
			 * Alias for PREFIX_SUFFIX_MARKER. Places the prefix and/or 
			 * suffix on the footnote marker number in the footnote text.
			 */
			public static readonly prefixSuffixMarker: Adobe.Incopy.FootnotePrefixSuffix;
			/**
			 * Alias for PREFIX_SUFFIX_REFERENCE. Places the prefix and/or 
			 * suffix on the footnote reference number in the main text.
			 */
			public static readonly prefixSuffixReference: Adobe.Incopy.FootnotePrefixSuffix;
			/** Constructor */
			public constructor();
		}
	}
}