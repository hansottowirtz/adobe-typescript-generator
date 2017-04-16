/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SpanColumnTypeOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Paragraph is a single column */
			public static readonly SINGLE_COLUMN: Adobe.Incopy.SpanColumnTypeOptions;
			/** Alias for SINGLE_COLUMN. Paragraph is a single column */
			public static readonly singleColumn: Adobe.Incopy.SpanColumnTypeOptions;
			/** Paragraph spans the columns */
			public static readonly SPAN_COLUMNS: Adobe.Incopy.SpanColumnTypeOptions;
			/** Alias for SPAN_COLUMNS. Paragraph spans the columns */
			public static readonly spanColumns: Adobe.Incopy.SpanColumnTypeOptions;
			/** Paragraph splits the columns */
			public static readonly SPLIT_COLUMNS: Adobe.Incopy.SpanColumnTypeOptions;
			/** Alias for SPLIT_COLUMNS. Paragraph splits the columns */
			public static readonly splitColumns: Adobe.Incopy.SpanColumnTypeOptions;
			/** Constructor */
			public constructor();
		}
	}
}