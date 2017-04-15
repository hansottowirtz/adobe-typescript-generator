/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DisplayOrderOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Order by columns. */
			public static readonly ORDER_BY_COLUMNS: Adobe.Indesign.DisplayOrderOptions;
			/** Order by rows. */
			public static readonly ORDER_BY_ROWS: Adobe.Indesign.DisplayOrderOptions;
			/** Alias for ORDER_BY_COLUMNS. Order by columns. */
			public static readonly orderByColumns: Adobe.Indesign.DisplayOrderOptions;
			/** Alias for ORDER_BY_ROWS. Order by rows. */
			public static readonly orderByRows: Adobe.Indesign.DisplayOrderOptions;
			/** Constructor */
			public constructor();
		}
	}
}