/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TagVector extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default setting. For information, see display 
			 * performance preferences.
			 * @type {Adobe.Indesign.TagVector}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.TagVector;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default setting. For 
			 * information, see display performance preferences.
			 * @type {Adobe.Indesign.TagVector}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.TagVector;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Grays out the image.
			 * @type {Adobe.Indesign.TagVector}
			 * @readonly
			 */
			public static readonly GRAY_OUT: Adobe.Indesign.TagVector;
			/**
			 * Alias for GRAY_OUT. Grays out the image.
			 * @type {Adobe.Indesign.TagVector}
			 * @readonly
			 */
			public static readonly grayOut: Adobe.Indesign.TagVector;
			/**
			 * Displays a high-resolution version of the image.
			 * @type {Adobe.Indesign.TagVector}
			 * @readonly
			 */
			public static readonly HIGH_RESOLUTION: Adobe.Indesign.TagVector;
			/**
			 * Alias for HIGH_RESOLUTION. Displays a high-resolution 
			 * version of the image.
			 * @type {Adobe.Indesign.TagVector}
			 * @readonly
			 */
			public static readonly highResolution: Adobe.Indesign.TagVector;
			/**
			 * Alias for PROXY. Displays a low-resolution proxy version of 
			 * the image.
			 * @type {Adobe.Indesign.TagVector}
			 * @readonly
			 */
			public static readonly proxy: Adobe.Indesign.TagVector;
			/**
			 * Displays a low-resolution proxy version of the image.
			 * @type {Adobe.Indesign.TagVector}
			 * @readonly
			 */
			public static readonly PROXY: Adobe.Indesign.TagVector;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}