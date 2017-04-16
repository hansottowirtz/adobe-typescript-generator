/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ImageDataTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Sends full-resolution data.
			 * @type {Adobe.Incopy.ImageDataTypes}
			 * @readonly
			 */
			public static readonly ALL_IMAGE_DATA: Adobe.Incopy.ImageDataTypes;
			/**
			 * Alias for ALL_IMAGE_DATA. Sends full-resolution data.
			 * @type {Adobe.Incopy.ImageDataTypes}
			 * @readonly
			 */
			public static readonly allImageData: Adobe.Incopy.ImageDataTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Prints graphics frames with crossbars in 
			 * place of graphics.
			 * @type {Adobe.Incopy.ImageDataTypes}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.ImageDataTypes;
			/**
			 * Prints graphics frames with crossbars in place of graphics.
			 * @type {Adobe.Incopy.ImageDataTypes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.ImageDataTypes;
			/**
			 * Sends just enough data to print graphics at the best 
			 * possible resolution for the output device.
			 * @type {Adobe.Incopy.ImageDataTypes}
			 * @readonly
			 */
			public static readonly OPTIMIZED_SUBSAMPLING: Adobe.Incopy.ImageDataTypes;
			/**
			 * Alias for OPTIMIZED_SUBSAMPLING. Sends just enough data to 
			 * print graphics at the best possible resolution for the 
			 * output device.
			 * @type {Adobe.Incopy.ImageDataTypes}
			 * @readonly
			 */
			public static readonly optimizedSubsampling: Adobe.Incopy.ImageDataTypes;
			/**
			 * Sends screen-resolution versions (72 dpi) of placed bitmap 
			 * images.
			 * @type {Adobe.Incopy.ImageDataTypes}
			 * @readonly
			 */
			public static readonly PROXY_IMAGE_DATA: Adobe.Incopy.ImageDataTypes;
			/**
			 * Alias for PROXY_IMAGE_DATA. Sends screen-resolution versions 
			 * (72 dpi) of placed bitmap images.
			 * @type {Adobe.Incopy.ImageDataTypes}
			 * @readonly
			 */
			public static readonly proxyImageData: Adobe.Incopy.ImageDataTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}