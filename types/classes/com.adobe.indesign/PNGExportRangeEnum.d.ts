/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PNGExportRangeEnum extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Exports all pages. */
			public static readonly EXPORT_ALL: Adobe.Indesign.PNGExportRangeEnum;
			/**
			 * Exports the page range specified in the page string 
			 * property.
			 */
			public static readonly EXPORT_RANGE: Adobe.Indesign.PNGExportRangeEnum;
			/** Alias for EXPORT_ALL. Exports all pages. */
			public static readonly exportAll: Adobe.Indesign.PNGExportRangeEnum;
			/**
			 * Alias for EXPORT_RANGE. Exports the page range specified in 
			 * the page string property.
			 */
			public static readonly exportRange: Adobe.Indesign.PNGExportRangeEnum;
			/** Constructor */
			public constructor();
		}
	}
}