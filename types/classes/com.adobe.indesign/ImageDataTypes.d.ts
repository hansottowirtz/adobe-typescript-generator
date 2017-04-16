/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImageDataTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Sends full-resolution data.
			 * @type {Adobe.Indesign.ImageDataTypes}
			 * @readonly
			 */
			public static readonly ALL_IMAGE_DATA: Adobe.Indesign.ImageDataTypes;
			/**
			 * Alias for ALL_IMAGE_DATA. Sends full-resolution data.
			 * @type {Adobe.Indesign.ImageDataTypes}
			 * @readonly
			 */
			public static readonly allImageData: Adobe.Indesign.ImageDataTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Prints graphics frames with crossbars in 
			 * place of graphics.
			 * @type {Adobe.Indesign.ImageDataTypes}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.ImageDataTypes;
			/**
			 * Prints graphics frames with crossbars in place of graphics.
			 * @type {Adobe.Indesign.ImageDataTypes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.ImageDataTypes;
			/**
			 * Sends just enough data to print graphics at the best 
			 * possible resolution for the output device.
			 * @type {Adobe.Indesign.ImageDataTypes}
			 * @readonly
			 */
			public static readonly OPTIMIZED_SUBSAMPLING: Adobe.Indesign.ImageDataTypes;
			/**
			 * Alias for OPTIMIZED_SUBSAMPLING. Sends just enough data to 
			 * print graphics at the best possible resolution for the 
			 * output device.
			 * @type {Adobe.Indesign.ImageDataTypes}
			 * @readonly
			 */
			public static readonly optimizedSubsampling: Adobe.Indesign.ImageDataTypes;
			/**
			 * Sends screen-resolution versions (72 dpi) of placed bitmap 
			 * images.
			 * @type {Adobe.Indesign.ImageDataTypes}
			 * @readonly
			 */
			public static readonly PROXY_IMAGE_DATA: Adobe.Indesign.ImageDataTypes;
			/**
			 * Alias for PROXY_IMAGE_DATA. Sends screen-resolution versions 
			 * (72 dpi) of placed bitmap images.
			 * @type {Adobe.Indesign.ImageDataTypes}
			 * @readonly
			 */
			public static readonly proxyImageData: Adobe.Indesign.ImageDataTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}