/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BitmapCompression extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses JPEG compression and automatically determines the best 
			 * quality type. Valid only when acrobat compatibility is 
			 * acrobat 6 or higher.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly AUTO_COMPRESSION: Adobe.Indesign.BitmapCompression;
			/**
			 * Alias for AUTO_COMPRESSION. Uses JPEG compression and 
			 * automatically determines the best quality type. Valid only 
			 * when acrobat compatibility is acrobat 6 or higher.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly autoCompression: Adobe.Indesign.BitmapCompression;
			/**
			 * The Automatic JPEG 2000 compression method.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly AUTOMATIC_JPEG_2000: Adobe.Indesign.BitmapCompression;
			/**
			 * Alias for AUTOMATIC_JPEG_2000. The Automatic JPEG 2000 
			 * compression method.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly automaticJpeg2000: Adobe.Indesign.BitmapCompression;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for JPEG. Uses JPEG compression.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly jpeg: Adobe.Indesign.BitmapCompression;
			/**
			 * Uses JPEG compression.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly JPEG: Adobe.Indesign.BitmapCompression;
			/**
			 * Uses JPEG 2000 compression. Valid only when acrobat 
			 * compatibility is acrobat 6 or higher.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly JPEG_2000: Adobe.Indesign.BitmapCompression;
			/**
			 * Alias for JPEG_2000. Uses JPEG 2000 compression. Valid only 
			 * when acrobat compatibility is acrobat 6 or higher.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly jpeg2000: Adobe.Indesign.BitmapCompression;
			/**
			 * Alias for NONE. Uses no compression.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.BitmapCompression;
			/**
			 * Uses no compression.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.BitmapCompression;
			/**
			 * Alias for ZIP. Uses ZIP compression.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly zip: Adobe.Indesign.BitmapCompression;
			/**
			 * Uses ZIP compression.
			 * @type {Adobe.Indesign.BitmapCompression}
			 * @readonly
			 */
			public static readonly ZIP: Adobe.Indesign.BitmapCompression;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}