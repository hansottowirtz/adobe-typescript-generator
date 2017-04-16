/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLFileEncoding extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Shift-JIS encoding.
			 * @type {Adobe.Incopy.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly SHIFT_JIS: Adobe.Incopy.XMLFileEncoding;
			/**
			 * Alias for SHIFT_JIS. Shift-JIS encoding.
			 * @type {Adobe.Incopy.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly shiftJis: Adobe.Incopy.XMLFileEncoding;
			/**
			 * Alias for UTF16. UTF-16 encoding.
			 * @type {Adobe.Incopy.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly utf16: Adobe.Incopy.XMLFileEncoding;
			/**
			 * UTF-16 encoding.
			 * @type {Adobe.Incopy.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly UTF16: Adobe.Incopy.XMLFileEncoding;
			/**
			 * Alias for UTF8. UTF-8 encoding.
			 * @type {Adobe.Incopy.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly utf8: Adobe.Incopy.XMLFileEncoding;
			/**
			 * UTF-8 encoding.
			 * @type {Adobe.Incopy.XMLFileEncoding}
			 * @readonly
			 */
			public static readonly UTF8: Adobe.Incopy.XMLFileEncoding;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}