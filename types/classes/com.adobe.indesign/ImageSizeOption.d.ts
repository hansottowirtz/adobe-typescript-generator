/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImageSizeOption extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Image size to be used is absolute.
			 * @type {Adobe.Indesign.ImageSizeOption}
			 * @readonly
			 */
			public static readonly SIZE_FIXED: Adobe.Indesign.ImageSizeOption;
			/**
			 * Image size to be used is relative to page width.
			 * @type {Adobe.Indesign.ImageSizeOption}
			 * @readonly
			 */
			public static readonly SIZE_RELATIVE_TO_PAGE_WIDTH: Adobe.Indesign.ImageSizeOption;
			/**
			 * Alias for SIZE_FIXED. Image size to be used is absolute.
			 * @type {Adobe.Indesign.ImageSizeOption}
			 * @readonly
			 */
			public static readonly sizeFixed: Adobe.Indesign.ImageSizeOption;
			/**
			 * Alias for SIZE_RELATIVE_TO_PAGE_WIDTH. Image size to be used 
			 * is relative to page width.
			 * @type {Adobe.Indesign.ImageSizeOption}
			 * @readonly
			 */
			public static readonly sizeRelativeToPageWidth: Adobe.Indesign.ImageSizeOption;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}