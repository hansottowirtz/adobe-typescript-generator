/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ImportedPageCropOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Places the page's bleed area.
			 * @type {Adobe.Incopy.ImportedPageCropOptions}
			 * @readonly
			 */
			public static readonly CROP_BLEED: Adobe.Incopy.ImportedPageCropOptions;
			/**
			 * Places the page's bounding box.
			 * @type {Adobe.Incopy.ImportedPageCropOptions}
			 * @readonly
			 */
			public static readonly CROP_CONTENT: Adobe.Incopy.ImportedPageCropOptions;
			/**
			 * Places the page's slug area.
			 * @type {Adobe.Incopy.ImportedPageCropOptions}
			 * @readonly
			 */
			public static readonly CROP_SLUG: Adobe.Incopy.ImportedPageCropOptions;
			/**
			 * Alias for CROP_BLEED. Places the page's bleed area.
			 * @type {Adobe.Incopy.ImportedPageCropOptions}
			 * @readonly
			 */
			public static readonly cropBleed: Adobe.Incopy.ImportedPageCropOptions;
			/**
			 * Alias for CROP_CONTENT. Places the page's bounding box.
			 * @type {Adobe.Incopy.ImportedPageCropOptions}
			 * @readonly
			 */
			public static readonly cropContent: Adobe.Incopy.ImportedPageCropOptions;
			/**
			 * Alias for CROP_SLUG. Places the page's slug area.
			 * @type {Adobe.Incopy.ImportedPageCropOptions}
			 * @readonly
			 */
			public static readonly cropSlug: Adobe.Incopy.ImportedPageCropOptions;
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