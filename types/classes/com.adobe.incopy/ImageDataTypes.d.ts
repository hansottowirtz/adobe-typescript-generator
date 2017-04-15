/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ImageDataTypes extends Adobe.Csawlib.CSEnumBase {
			/** Sends full-resolution data. */
			public static readonly ALL_IMAGE_DATA: Adobe.Incopy.ImageDataTypes;
			/** Alias for ALL_IMAGE_DATA. Sends full-resolution data. */
			public static readonly allImageData: Adobe.Incopy.ImageDataTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Prints graphics frames with crossbars in 
			 * place of graphics.
			 */
			public static readonly none: Adobe.Incopy.ImageDataTypes;
			/** Prints graphics frames with crossbars in place of graphics. */
			public static readonly NONE: Adobe.Incopy.ImageDataTypes;
			/**
			 * Sends just enough data to print graphics at the best 
			 * possible resolution for the output device.
			 */
			public static readonly OPTIMIZED_SUBSAMPLING: Adobe.Incopy.ImageDataTypes;
			/**
			 * Alias for OPTIMIZED_SUBSAMPLING. Sends just enough data to 
			 * print graphics at the best possible resolution for the 
			 * output device.
			 */
			public static readonly optimizedSubsampling: Adobe.Incopy.ImageDataTypes;
			/**
			 * Sends screen-resolution versions (72 dpi) of placed bitmap 
			 * images.
			 */
			public static readonly PROXY_IMAGE_DATA: Adobe.Incopy.ImageDataTypes;
			/**
			 * Alias for PROXY_IMAGE_DATA. Sends screen-resolution versions 
			 * (72 dpi) of placed bitmap images.
			 */
			public static readonly proxyImageData: Adobe.Incopy.ImageDataTypes;
			/** Constructor */
			public constructor();
		}
	}
}