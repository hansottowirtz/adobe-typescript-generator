/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextExportCharacterSet extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The default character set for the platform.
			 * @type {Adobe.Indesign.TextExportCharacterSet}
			 * @readonly
			 */
			public static readonly DEFAULT_PLATFORM: Adobe.Indesign.TextExportCharacterSet;
			/**
			 * Alias for DEFAULT_PLATFORM. The default character set for 
			 * the platform.
			 * @type {Adobe.Indesign.TextExportCharacterSet}
			 * @readonly
			 */
			public static readonly defaultPlatform: Adobe.Indesign.TextExportCharacterSet;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for UTF16. The Unicode UTF16 character set.
			 * @type {Adobe.Indesign.TextExportCharacterSet}
			 * @readonly
			 */
			public static readonly utf16: Adobe.Indesign.TextExportCharacterSet;
			/**
			 * The Unicode UTF16 character set.
			 * @type {Adobe.Indesign.TextExportCharacterSet}
			 * @readonly
			 */
			public static readonly UTF16: Adobe.Indesign.TextExportCharacterSet;
			/**
			 * Alias for UTF8. The Unicode UTF8 character set.
			 * @type {Adobe.Indesign.TextExportCharacterSet}
			 * @readonly
			 */
			public static readonly utf8: Adobe.Indesign.TextExportCharacterSet;
			/**
			 * The Unicode UTF8 character set.
			 * @type {Adobe.Indesign.TextExportCharacterSet}
			 * @readonly
			 */
			public static readonly UTF8: Adobe.Indesign.TextExportCharacterSet;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}