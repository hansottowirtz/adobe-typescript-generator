/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class JPEGOptionsFormat extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses baseline encoding to download the image in one pass.
			 * @type {Adobe.Incopy.JPEGOptionsFormat}
			 * @readonly
			 */
			public static readonly BASELINE_ENCODING: Adobe.Incopy.JPEGOptionsFormat;
			/**
			 * Alias for BASELINE_ENCODING. Uses baseline encoding to 
			 * download the image in one pass.
			 * @type {Adobe.Incopy.JPEGOptionsFormat}
			 * @readonly
			 */
			public static readonly baselineEncoding: Adobe.Incopy.JPEGOptionsFormat;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses progressive encoding to download the image in a series 
			 * of passes, with the first pass at low resolution and each 
			 * successive pass adding resolution to the image.
			 * @type {Adobe.Incopy.JPEGOptionsFormat}
			 * @readonly
			 */
			public static readonly PROGRESSIVE_ENCODING: Adobe.Incopy.JPEGOptionsFormat;
			/**
			 * Alias for PROGRESSIVE_ENCODING. Uses progressive encoding to 
			 * download the image in a series of passes, with the first 
			 * pass at low resolution and each successive pass adding 
			 * resolution to the image.
			 * @type {Adobe.Incopy.JPEGOptionsFormat}
			 * @readonly
			 */
			public static readonly progressiveEncoding: Adobe.Incopy.JPEGOptionsFormat;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}