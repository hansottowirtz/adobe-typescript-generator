/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ImageConversion extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AUTOMATIC. Uses the best format based on the 
			 * image.
			 * @type {Adobe.Incopy.ImageConversion}
			 * @readonly
			 */
			public static readonly automatic: Adobe.Incopy.ImageConversion;
			/**
			 * Uses the best format based on the image.
			 * @type {Adobe.Incopy.ImageConversion}
			 * @readonly
			 */
			public static readonly AUTOMATIC: Adobe.Incopy.ImageConversion;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for GIF. Uses GIF format for all images.
			 * @type {Adobe.Incopy.ImageConversion}
			 * @readonly
			 */
			public static readonly gif: Adobe.Incopy.ImageConversion;
			/**
			 * Uses GIF format for all images.
			 * @type {Adobe.Incopy.ImageConversion}
			 * @readonly
			 */
			public static readonly GIF: Adobe.Incopy.ImageConversion;
			/**
			 * Alias for JPEG. Uses JPEG format for all images.
			 * @type {Adobe.Incopy.ImageConversion}
			 * @readonly
			 */
			public static readonly jpeg: Adobe.Incopy.ImageConversion;
			/**
			 * Uses JPEG format for all images.
			 * @type {Adobe.Incopy.ImageConversion}
			 * @readonly
			 */
			public static readonly JPEG: Adobe.Incopy.ImageConversion;
			/**
			 * Alias for PNG. Uses PNG format for all images.
			 * @type {Adobe.Incopy.ImageConversion}
			 * @readonly
			 */
			public static readonly png: Adobe.Incopy.ImageConversion;
			/**
			 * Uses PNG format for all images.
			 * @type {Adobe.Incopy.ImageConversion}
			 * @readonly
			 */
			public static readonly PNG: Adobe.Incopy.ImageConversion;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}