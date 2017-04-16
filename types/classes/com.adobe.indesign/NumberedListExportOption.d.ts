/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NumberedListExportOption extends Adobe.Csawlib.CSEnumBase {
			/**
			 * convert to text.
			 * @type {Adobe.Indesign.NumberedListExportOption}
			 * @readonly
			 */
			public static readonly AS_TEXT: Adobe.Indesign.NumberedListExportOption;
			/**
			 * Alias for AS_TEXT. convert to text.
			 * @type {Adobe.Indesign.NumberedListExportOption}
			 * @readonly
			 */
			public static readonly asText: Adobe.Indesign.NumberedListExportOption;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * map to html ordered list.
			 * @type {Adobe.Indesign.NumberedListExportOption}
			 * @readonly
			 */
			public static readonly ORDERED_LIST: Adobe.Indesign.NumberedListExportOption;
			/**
			 * Alias for ORDERED_LIST. map to html ordered list.
			 * @type {Adobe.Indesign.NumberedListExportOption}
			 * @readonly
			 */
			public static readonly orderedList: Adobe.Indesign.NumberedListExportOption;
			/**
			 * map to html static ordered list.
			 * @type {Adobe.Indesign.NumberedListExportOption}
			 * @readonly
			 */
			public static readonly STATIC_ORDERED_LIST: Adobe.Indesign.NumberedListExportOption;
			/**
			 * Alias for STATIC_ORDERED_LIST. map to html static ordered 
			 * list.
			 * @type {Adobe.Indesign.NumberedListExportOption}
			 * @readonly
			 */
			public static readonly staticOrderedList: Adobe.Indesign.NumberedListExportOption;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}