/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreviewTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Does not save a preview image. */
			public static readonly none: Adobe.Indesign.PreviewTypes;
			/** Does not save a preview image. */
			public static readonly NONE: Adobe.Indesign.PreviewTypes;
			/**
			 * Saves the preview in PICT format. Note: Valid only for Mac 
			 * OS.
			 */
			public static readonly PICT_PREVIEW: Adobe.Indesign.PreviewTypes;
			/**
			 * Alias for PICT_PREVIEW. Saves the preview in PICT format. 
			 * Note: Valid only for Mac OS.
			 */
			public static readonly pictPreview: Adobe.Indesign.PreviewTypes;
			/** Saves the preview in TIFF format. */
			public static readonly TIFF_PREVIEW: Adobe.Indesign.PreviewTypes;
			/** Alias for TIFF_PREVIEW. Saves the preview in TIFF format. */
			public static readonly tiffPreview: Adobe.Indesign.PreviewTypes;
			/** Constructor */
			public constructor();
		}
	}
}