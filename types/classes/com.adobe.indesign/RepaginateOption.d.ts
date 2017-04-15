/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RepaginateOption extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Starts page numbers for each book content object at the next 
			 * even-numbered page after the last page of the previous book 
			 * content object.
			 */
			public static readonly NEXT_EVEN_PAGE: Adobe.Indesign.RepaginateOption;
			/**
			 * Starts page numbers for each book content object at the next 
			 * odd-numbered page after the last page of the previous book 
			 * content object.
			 */
			public static readonly NEXT_ODD_PAGE: Adobe.Indesign.RepaginateOption;
			/**
			 * Continues page numbers sequentially from the previous book 
			 * content object.
			 */
			public static readonly NEXT_PAGE: Adobe.Indesign.RepaginateOption;
			/**
			 * Alias for NEXT_EVEN_PAGE. Starts page numbers for each book 
			 * content object at the next even-numbered page after the last 
			 * page of the previous book content object.
			 */
			public static readonly nextEvenPage: Adobe.Indesign.RepaginateOption;
			/**
			 * Alias for NEXT_ODD_PAGE. Starts page numbers for each book 
			 * content object at the next odd-numbered page after the last 
			 * page of the previous book content object.
			 */
			public static readonly nextOddPage: Adobe.Indesign.RepaginateOption;
			/**
			 * Alias for NEXT_PAGE. Continues page numbers sequentially 
			 * from the previous book content object.
			 */
			public static readonly nextPage: Adobe.Indesign.RepaginateOption;
			/** Constructor */
			public constructor();
		}
	}
}