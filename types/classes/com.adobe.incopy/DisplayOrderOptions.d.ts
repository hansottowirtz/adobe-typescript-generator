/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DisplayOrderOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Order by columns. */
			public static readonly ORDER_BY_COLUMNS: Adobe.Incopy.DisplayOrderOptions;
			/** Order by rows. */
			public static readonly ORDER_BY_ROWS: Adobe.Incopy.DisplayOrderOptions;
			/** Alias for ORDER_BY_COLUMNS. Order by columns. */
			public static readonly orderByColumns: Adobe.Incopy.DisplayOrderOptions;
			/** Alias for ORDER_BY_ROWS. Order by rows. */
			public static readonly orderByRows: Adobe.Incopy.DisplayOrderOptions;
			/** Constructor */
			public constructor();
		}
	}
}