/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreviewTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not save a preview image.
			 * @type {Adobe.Indesign.PreviewTypes}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.PreviewTypes;
			/**
			 * Does not save a preview image.
			 * @type {Adobe.Indesign.PreviewTypes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.PreviewTypes;
			/**
			 * Saves the preview in TIFF format.
			 * @type {Adobe.Indesign.PreviewTypes}
			 * @readonly
			 */
			public static readonly TIFF_PREVIEW: Adobe.Indesign.PreviewTypes;
			/**
			 * Alias for TIFF_PREVIEW. Saves the preview in TIFF format.
			 * @type {Adobe.Indesign.PreviewTypes}
			 * @readonly
			 */
			public static readonly tiffPreview: Adobe.Indesign.PreviewTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}