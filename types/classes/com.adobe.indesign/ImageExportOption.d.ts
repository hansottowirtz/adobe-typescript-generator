/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImageExportOption extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * link to server.
			 * @type {Adobe.Indesign.ImageExportOption}
			 * @readonly
			 */
			public static readonly LINK_TO_SERVER: Adobe.Indesign.ImageExportOption;
			/**
			 * Alias for LINK_TO_SERVER. link to server.
			 * @type {Adobe.Indesign.ImageExportOption}
			 * @readonly
			 */
			public static readonly linkToServer: Adobe.Indesign.ImageExportOption;
			/**
			 * optimized image.
			 * @type {Adobe.Indesign.ImageExportOption}
			 * @readonly
			 */
			public static readonly OPTIMIZED_IMAGE: Adobe.Indesign.ImageExportOption;
			/**
			 * Alias for OPTIMIZED_IMAGE. optimized image.
			 * @type {Adobe.Indesign.ImageExportOption}
			 * @readonly
			 */
			public static readonly optimizedImage: Adobe.Indesign.ImageExportOption;
			/**
			 * original image.
			 * @type {Adobe.Indesign.ImageExportOption}
			 * @readonly
			 */
			public static readonly ORIGINAL_IMAGE: Adobe.Indesign.ImageExportOption;
			/**
			 * Alias for ORIGINAL_IMAGE. original image.
			 * @type {Adobe.Indesign.ImageExportOption}
			 * @readonly
			 */
			public static readonly originalImage: Adobe.Indesign.ImageExportOption;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}