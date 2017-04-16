/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NumberedListExportOption extends Adobe.Csawlib.CSEnumBase {
			/** convert to text. */
			public static readonly AS_TEXT: Adobe.Indesign.NumberedListExportOption;
			/** Alias for AS_TEXT. convert to text. */
			public static readonly asText: Adobe.Indesign.NumberedListExportOption;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** map to html ordered list. */
			public static readonly ORDERED_LIST: Adobe.Indesign.NumberedListExportOption;
			/** Alias for ORDERED_LIST. map to html ordered list. */
			public static readonly orderedList: Adobe.Indesign.NumberedListExportOption;
			/** map to html static ordered list. */
			public static readonly STATIC_ORDERED_LIST: Adobe.Indesign.NumberedListExportOption;
			/**
			 * Alias for STATIC_ORDERED_LIST. map to html static ordered 
			 * list.
			 */
			public static readonly staticOrderedList: Adobe.Indesign.NumberedListExportOption;
			/** Constructor */
			public constructor();
		}
	}
}