/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class JPEGOptionsFormat extends Adobe.Csawlib.CSEnumBase {
			/** Uses baseline encoding to download the image in one pass. */
			public static readonly BASELINE_ENCODING: Adobe.Incopy.JPEGOptionsFormat;
			/**
			 * Alias for BASELINE_ENCODING. Uses baseline encoding to 
			 * download the image in one pass.
			 */
			public static readonly baselineEncoding: Adobe.Incopy.JPEGOptionsFormat;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses progressive encoding to download the image in a series 
			 * of passes, with the first pass at low resolution and each 
			 * successive pass adding resolution to the image.
			 */
			public static readonly PROGRESSIVE_ENCODING: Adobe.Incopy.JPEGOptionsFormat;
			/**
			 * Alias for PROGRESSIVE_ENCODING. Uses progressive encoding to 
			 * download the image in a series of passes, with the first 
			 * pass at low resolution and each successive pass adding 
			 * resolution to the image.
			 */
			public static readonly progressiveEncoding: Adobe.Incopy.JPEGOptionsFormat;
			/** Constructor */
			public constructor();
		}
	}
}