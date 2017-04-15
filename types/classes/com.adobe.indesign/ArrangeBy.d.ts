/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ArrangeBy extends Adobe.Csawlib.CSEnumBase {
			/** Arranges records by column. */
			public static readonly COLUMNS_FIRST: Adobe.Indesign.ArrangeBy;
			/** Alias for COLUMNS_FIRST. Arranges records by column. */
			public static readonly columnsFirst: Adobe.Indesign.ArrangeBy;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Arranges records by row. */
			public static readonly ROWS_FIRST: Adobe.Indesign.ArrangeBy;
			/** Alias for ROWS_FIRST. Arranges records by row. */
			public static readonly rowsFirst: Adobe.Indesign.ArrangeBy;
			/** Constructor */
			public constructor();
		}
	}
}