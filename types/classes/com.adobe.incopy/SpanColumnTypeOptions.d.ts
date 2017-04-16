/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SpanColumnTypeOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Paragraph is a single column
			 * @type {Adobe.Incopy.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly SINGLE_COLUMN: Adobe.Incopy.SpanColumnTypeOptions;
			/**
			 * Alias for SINGLE_COLUMN. Paragraph is a single column
			 * @type {Adobe.Incopy.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly singleColumn: Adobe.Incopy.SpanColumnTypeOptions;
			/**
			 * Paragraph spans the columns
			 * @type {Adobe.Incopy.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly SPAN_COLUMNS: Adobe.Incopy.SpanColumnTypeOptions;
			/**
			 * Alias for SPAN_COLUMNS. Paragraph spans the columns
			 * @type {Adobe.Incopy.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly spanColumns: Adobe.Incopy.SpanColumnTypeOptions;
			/**
			 * Paragraph splits the columns
			 * @type {Adobe.Incopy.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly SPLIT_COLUMNS: Adobe.Incopy.SpanColumnTypeOptions;
			/**
			 * Alias for SPLIT_COLUMNS. Paragraph splits the columns
			 * @type {Adobe.Incopy.SpanColumnTypeOptions}
			 * @readonly
			 */
			public static readonly splitColumns: Adobe.Incopy.SpanColumnTypeOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}