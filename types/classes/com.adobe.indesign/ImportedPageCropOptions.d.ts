/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImportedPageCropOptions extends Adobe.Csawlib.CSEnumBase {
			/** Places the page's bleed area. */
			public static readonly CROP_BLEED: Adobe.Indesign.ImportedPageCropOptions;
			/** Places the page's bounding box. */
			public static readonly CROP_CONTENT: Adobe.Indesign.ImportedPageCropOptions;
			/** Places the page's slug area. */
			public static readonly CROP_SLUG: Adobe.Indesign.ImportedPageCropOptions;
			/** Alias for CROP_BLEED. Places the page's bleed area. */
			public static readonly cropBleed: Adobe.Indesign.ImportedPageCropOptions;
			/** Alias for CROP_CONTENT. Places the page's bounding box. */
			public static readonly cropContent: Adobe.Indesign.ImportedPageCropOptions;
			/** Alias for CROP_SLUG. Places the page's slug area. */
			public static readonly cropSlug: Adobe.Indesign.ImportedPageCropOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}