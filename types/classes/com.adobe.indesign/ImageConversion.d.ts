/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImageConversion extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AUTOMATIC. Uses the best format based on the 
			 * image.
			 * @type {Adobe.Indesign.ImageConversion}
			 * @readonly
			 */
			public static readonly automatic: Adobe.Indesign.ImageConversion;
			/**
			 * Uses the best format based on the image.
			 * @type {Adobe.Indesign.ImageConversion}
			 * @readonly
			 */
			public static readonly AUTOMATIC: Adobe.Indesign.ImageConversion;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for GIF. Uses GIF format for all images.
			 * @type {Adobe.Indesign.ImageConversion}
			 * @readonly
			 */
			public static readonly gif: Adobe.Indesign.ImageConversion;
			/**
			 * Uses GIF format for all images.
			 * @type {Adobe.Indesign.ImageConversion}
			 * @readonly
			 */
			public static readonly GIF: Adobe.Indesign.ImageConversion;
			/**
			 * Alias for JPEG. Uses JPEG format for all images.
			 * @type {Adobe.Indesign.ImageConversion}
			 * @readonly
			 */
			public static readonly jpeg: Adobe.Indesign.ImageConversion;
			/**
			 * Uses JPEG format for all images.
			 * @type {Adobe.Indesign.ImageConversion}
			 * @readonly
			 */
			public static readonly JPEG: Adobe.Indesign.ImageConversion;
			/**
			 * Alias for PNG. Uses PNG format for all images.
			 * @type {Adobe.Indesign.ImageConversion}
			 * @readonly
			 */
			public static readonly png: Adobe.Indesign.ImageConversion;
			/**
			 * Uses PNG format for all images.
			 * @type {Adobe.Indesign.ImageConversion}
			 * @readonly
			 */
			public static readonly PNG: Adobe.Indesign.ImageConversion;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}