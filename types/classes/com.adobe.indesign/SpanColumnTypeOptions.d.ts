/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SpanColumnTypeOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Paragraph is a single column */
			public static readonly SINGLE_COLUMN: Adobe.Indesign.SpanColumnTypeOptions;
			/** Alias for SINGLE_COLUMN. Paragraph is a single column */
			public static readonly singleColumn: Adobe.Indesign.SpanColumnTypeOptions;
			/** Paragraph spans the columns */
			public static readonly SPAN_COLUMNS: Adobe.Indesign.SpanColumnTypeOptions;
			/** Alias for SPAN_COLUMNS. Paragraph spans the columns */
			public static readonly spanColumns: Adobe.Indesign.SpanColumnTypeOptions;
			/** Paragraph splits the columns */
			public static readonly SPLIT_COLUMNS: Adobe.Indesign.SpanColumnTypeOptions;
			/** Alias for SPLIT_COLUMNS. Paragraph splits the columns */
			public static readonly splitColumns: Adobe.Indesign.SpanColumnTypeOptions;
			/** Constructor */
			public constructor();
		}
	}
}