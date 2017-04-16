/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PNGExportRangeEnum extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Exports all pages.
			 * @type {Adobe.Indesign.PNGExportRangeEnum}
			 * @readonly
			 */
			public static readonly EXPORT_ALL: Adobe.Indesign.PNGExportRangeEnum;
			/**
			 * Exports the page range specified in the page string 
			 * property.
			 * @type {Adobe.Indesign.PNGExportRangeEnum}
			 * @readonly
			 */
			public static readonly EXPORT_RANGE: Adobe.Indesign.PNGExportRangeEnum;
			/**
			 * Alias for EXPORT_ALL. Exports all pages.
			 * @type {Adobe.Indesign.PNGExportRangeEnum}
			 * @readonly
			 */
			public static readonly exportAll: Adobe.Indesign.PNGExportRangeEnum;
			/**
			 * Alias for EXPORT_RANGE. Exports the page range specified in 
			 * the page string property.
			 * @type {Adobe.Indesign.PNGExportRangeEnum}
			 * @readonly
			 */
			public static readonly exportRange: Adobe.Indesign.PNGExportRangeEnum;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}