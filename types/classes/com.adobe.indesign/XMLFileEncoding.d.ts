/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLFileEncoding extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Shift-JIS encoding.
			 * @type {Adobe.Indesign.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly SHIFT_JIS: Adobe.Indesign.XMLFileEncoding;
			/**
			 * Alias for SHIFT_JIS. Shift-JIS encoding.
			 * @type {Adobe.Indesign.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly shiftJis: Adobe.Indesign.XMLFileEncoding;
			/**
			 * Alias for UTF16. UTF-16 encoding.
			 * @type {Adobe.Indesign.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly utf16: Adobe.Indesign.XMLFileEncoding;
			/**
			 * UTF-16 encoding.
			 * @type {Adobe.Indesign.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly UTF16: Adobe.Indesign.XMLFileEncoding;
			/**
			 * Alias for UTF8. UTF-8 encoding.
			 * @type {Adobe.Indesign.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly utf8: Adobe.Indesign.XMLFileEncoding;
			/**
			 * UTF-8 encoding.
			 * @type {Adobe.Indesign.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly UTF8: Adobe.Indesign.XMLFileEncoding;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}