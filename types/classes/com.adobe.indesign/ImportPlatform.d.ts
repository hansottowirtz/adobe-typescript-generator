/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImportPlatform extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for MACINTOSH. Macintosh.
			 * @type {Adobe.Indesign.ImportPlatform}
			 * @readonly
			 */
			public static readonly macintosh: Adobe.Indesign.ImportPlatform;
			/**
			 * Macintosh.
			 * @type {Adobe.Indesign.ImportPlatform}
			 * @readonly
			 */
			public static readonly MACINTOSH: Adobe.Indesign.ImportPlatform;
			/**
			 * Alias for PC. Windows.
			 * @type {Adobe.Indesign.ImportPlatform}
			 * @readonly
			 */
			public static readonly pc: Adobe.Indesign.ImportPlatform;
			/**
			 * Windows.
			 * @type {Adobe.Indesign.ImportPlatform}
			 * @readonly
			 */
			public static readonly PC: Adobe.Indesign.ImportPlatform;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}