/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DynamicDocumentsTextExportPolicy extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for LIVE. Text is exported as live text. */
			public static readonly live: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/** Text is exported as live text. */
			public static readonly LIVE: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/** Alias for RASTERIZE. Text is to be rasterized. */
			public static readonly rasterize: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/** Text is to be rasterized. */
			public static readonly RASTERIZE: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Alias for TLF. Text is exported as Text Layout Framework 
			 * text.
			 */
			public static readonly tlf: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/** Text is exported as Text Layout Framework text. */
			public static readonly TLF: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/** Alias for VECTORIZE. Text is to be vectorized. */
			public static readonly vectorize: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/** Text is to be vectorized. */
			public static readonly VECTORIZE: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/** Constructor */
			public constructor();
		}
	}
}