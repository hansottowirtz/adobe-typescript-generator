/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EpubCover extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Use external image as cover image. */
			public static readonly EXTERNAL_IMAGE: Adobe.Indesign.EpubCover;
			/**
			 * Alias for EXTERNAL_IMAGE. Use external image as cover image.
			 */
			public static readonly externalImage: Adobe.Indesign.EpubCover;
			/** Rasterize first page as cover image. */
			public static readonly FIRST_PAGE: Adobe.Indesign.EpubCover;
			/** Alias for FIRST_PAGE. Rasterize first page as cover image. */
			public static readonly firstPage: Adobe.Indesign.EpubCover;
			/** Alias for NONE. no cover image. */
			public static readonly none: Adobe.Indesign.EpubCover;
			/** no cover image. */
			public static readonly NONE: Adobe.Indesign.EpubCover;
			/** Constructor */
			public constructor();
		}
	}
}