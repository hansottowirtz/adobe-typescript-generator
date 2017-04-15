/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ImportedPageCropOptions extends Adobe.Csawlib.CSEnumBase {
			/** Places the page's bleed area. */
			public static readonly CROP_BLEED: Adobe.Incopy.ImportedPageCropOptions;
			/** Places the page's bounding box. */
			public static readonly CROP_CONTENT: Adobe.Incopy.ImportedPageCropOptions;
			/** Places the page's slug area. */
			public static readonly CROP_SLUG: Adobe.Incopy.ImportedPageCropOptions;
			/** Alias for CROP_BLEED. Places the page's bleed area. */
			public static readonly cropBleed: Adobe.Incopy.ImportedPageCropOptions;
			/** Alias for CROP_CONTENT. Places the page's bounding box. */
			public static readonly cropContent: Adobe.Incopy.ImportedPageCropOptions;
			/** Alias for CROP_SLUG. Places the page's slug area. */
			public static readonly cropSlug: Adobe.Incopy.ImportedPageCropOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}