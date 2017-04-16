/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class JPEGOptionsFormat extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses baseline encoding to download the image in one pass.
			 * @type {Adobe.Indesign.JPEGOptionsFormat}
			 * @readonly
			 */
			public static readonly BASELINE_ENCODING: Adobe.Indesign.JPEGOptionsFormat;
			/**
			 * Alias for BASELINE_ENCODING. Uses baseline encoding to 
			 * download the image in one pass.
			 * @type {Adobe.Indesign.JPEGOptionsFormat}
			 * @readonly
			 */
			public static readonly baselineEncoding: Adobe.Indesign.JPEGOptionsFormat;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses progressive encoding to download the image in a series 
			 * of passes, with the first pass at low resolution and each 
			 * successive pass adding resolution to the image.
			 * @type {Adobe.Indesign.JPEGOptionsFormat}
			 * @readonly
			 */
			public static readonly PROGRESSIVE_ENCODING: Adobe.Indesign.JPEGOptionsFormat;
			/**
			 * Alias for PROGRESSIVE_ENCODING. Uses progressive encoding to 
			 * download the image in a series of passes, with the first 
			 * pass at low resolution and each successive pass adding 
			 * resolution to the image.
			 * @type {Adobe.Indesign.JPEGOptionsFormat}
			 * @readonly
			 */
			public static readonly progressiveEncoding: Adobe.Indesign.JPEGOptionsFormat;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}