/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImageExportOption extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** link to server. */
			public static readonly LINK_TO_SERVER: Adobe.Indesign.ImageExportOption;
			/** Alias for LINK_TO_SERVER. link to server. */
			public static readonly linkToServer: Adobe.Indesign.ImageExportOption;
			/** optimized image. */
			public static readonly OPTIMIZED_IMAGE: Adobe.Indesign.ImageExportOption;
			/** Alias for OPTIMIZED_IMAGE. optimized image. */
			public static readonly optimizedImage: Adobe.Indesign.ImageExportOption;
			/** original image. */
			public static readonly ORIGINAL_IMAGE: Adobe.Indesign.ImageExportOption;
			/** Alias for ORIGINAL_IMAGE. original image. */
			public static readonly originalImage: Adobe.Indesign.ImageExportOption;
			/** Constructor */
			public constructor();
		}
	}
}