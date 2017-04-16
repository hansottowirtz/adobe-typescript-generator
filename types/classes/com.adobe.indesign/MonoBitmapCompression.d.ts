/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MonoBitmapCompression extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CCIT3. Uses CCITT Group 3 compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly ccit3: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * Uses CCITT Group 3 compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly CCIT3: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * Alias for CCIT4. Uses CCITT Group 4 compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly ccit4: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * Uses CCITT Group 4 compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly CCIT4: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Uses no compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * Uses no compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * Uses Run Length compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly RUN_LENGTH: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * Alias for RUN_LENGTH. Uses Run Length compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly runLength: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * Alias for ZIP. Uses ZIP compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly zip: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * Uses ZIP compression.
			 * @type {Adobe.Indesign.MonoBitmapCompression}
			 * @readonly
			 */
			public static readonly ZIP: Adobe.Indesign.MonoBitmapCompression;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}