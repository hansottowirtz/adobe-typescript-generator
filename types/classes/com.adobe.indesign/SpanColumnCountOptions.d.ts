/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SpanColumnCountOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALL. Paragraph spans all columns
			 * @type {Adobe.Indesign.SpanColumnCountOptions}
			 * @readonly
			 */
			public static readonly all: Adobe.Indesign.SpanColumnCountOptions;
			/**
			 * Paragraph spans all columns
			 * @type {Adobe.Indesign.SpanColumnCountOptions}
			 * @readonly
			 */
			public static readonly ALL: Adobe.Indesign.SpanColumnCountOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}