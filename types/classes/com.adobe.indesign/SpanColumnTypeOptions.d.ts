/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SpanColumnTypeOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Paragraph is a single column
			 * @type {Adobe.Indesign.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly SINGLE_COLUMN: Adobe.Indesign.SpanColumnTypeOptions;
			/**
			 * Alias for SINGLE_COLUMN. Paragraph is a single column
			 * @type {Adobe.Indesign.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly singleColumn: Adobe.Indesign.SpanColumnTypeOptions;
			/**
			 * Paragraph spans the columns
			 * @type {Adobe.Indesign.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly SPAN_COLUMNS: Adobe.Indesign.SpanColumnTypeOptions;
			/**
			 * Alias for SPAN_COLUMNS. Paragraph spans the columns
			 * @type {Adobe.Indesign.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly spanColumns: Adobe.Indesign.SpanColumnTypeOptions;
			/**
			 * Paragraph splits the columns
			 * @type {Adobe.Indesign.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly SPLIT_COLUMNS: Adobe.Indesign.SpanColumnTypeOptions;
			/**
			 * Alias for SPLIT_COLUMNS. Paragraph splits the columns
			 * @type {Adobe.Indesign.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly splitColumns: Adobe.Indesign.SpanColumnTypeOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}