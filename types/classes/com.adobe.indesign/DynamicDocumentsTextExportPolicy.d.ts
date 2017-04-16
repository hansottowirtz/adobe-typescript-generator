/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DynamicDocumentsTextExportPolicy extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LIVE. Text is exported as live text.
			 * @type {Adobe.Indesign.DynamicDocumentsTextExportPolicy}
			 * @readonly
			 */
			public static readonly live: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Text is exported as live text.
			 * @type {Adobe.Indesign.DynamicDocumentsTextExportPolicy}
			 * @readonly
			 */
			public static readonly LIVE: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Alias for RASTERIZE. Text is to be rasterized.
			 * @type {Adobe.Indesign.DynamicDocumentsTextExportPolicy}
			 * @readonly
			 */
			public static readonly rasterize: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Text is to be rasterized.
			 * @type {Adobe.Indesign.DynamicDocumentsTextExportPolicy}
			 * @readonly
			 */
			public static readonly RASTERIZE: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Alias for TLF. Text is exported as Text Layout Framework 
			 * text.
			 * @type {Adobe.Indesign.DynamicDocumentsTextExportPolicy}
			 * @readonly
			 */
			public static readonly tlf: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Text is exported as Text Layout Framework text.
			 * @type {Adobe.Indesign.DynamicDocumentsTextExportPolicy}
			 * @readonly
			 */
			public static readonly TLF: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Alias for VECTORIZE. Text is to be vectorized.
			 * @type {Adobe.Indesign.DynamicDocumentsTextExportPolicy}
			 * @readonly
			 */
			public static readonly vectorize: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Text is to be vectorized.
			 * @type {Adobe.Indesign.DynamicDocumentsTextExportPolicy}
			 * @readonly
			 */
			public static readonly VECTORIZE: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}