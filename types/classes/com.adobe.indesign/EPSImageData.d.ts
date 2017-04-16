/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EPSImageData extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Exports high-resolution data. Note: Use when the file will 
			 * be printed on a high-resolution output device.
			 * @type {Adobe.Indesign.EPSImageData}
			 * @readonly
			 */
			public static readonly ALL_IMAGE_DATA: Adobe.Indesign.EPSImageData;
			/**
			 * Alias for ALL_IMAGE_DATA. Exports high-resolution data. 
			 * Note: Use when the file will be printed on a high-resolution 
			 * output device.
			 * @type {Adobe.Indesign.EPSImageData}
			 * @readonly
			 */
			public static readonly allImageData: Adobe.Indesign.EPSImageData;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Exports only screen-resolution versions (72 dpi) of placed 
			 * bitmap images. Note: Use in conjunction with OPI image 
			 * replacement or if the resulting file will be viewed 
			 * on-screen.
			 * @type {Adobe.Indesign.EPSImageData}
			 * @readonly
			 */
			public static readonly PROXY_IMAGE_DATA: Adobe.Indesign.EPSImageData;
			/**
			 * Alias for PROXY_IMAGE_DATA. Exports only screen-resolution 
			 * versions (72 dpi) of placed bitmap images. Note: Use in 
			 * conjunction with OPI image replacement or if the resulting 
			 * file will be viewed on-screen.
			 * @type {Adobe.Indesign.EPSImageData}
			 * @readonly
			 */
			public static readonly proxyImageData: Adobe.Indesign.EPSImageData;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}