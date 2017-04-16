/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextExportCharacterSet extends Adobe.Csawlib.CSEnumBase {
			/** The default character set for the platform. */
			public static readonly DEFAULT_PLATFORM: Adobe.Incopy.TextExportCharacterSet;
			/**
			 * Alias for DEFAULT_PLATFORM. The default character set for 
			 * the platform.
			 */
			public static readonly defaultPlatform: Adobe.Incopy.TextExportCharacterSet;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for UTF16. The Unicode UTF16 character set. */
			public static readonly utf16: Adobe.Incopy.TextExportCharacterSet;
			/** The Unicode UTF16 character set. */
			public static readonly UTF16: Adobe.Incopy.TextExportCharacterSet;
			/** Alias for UTF8. The Unicode UTF8 character set. */
			public static readonly utf8: Adobe.Incopy.TextExportCharacterSet;
			/** The Unicode UTF8 character set. */
			public static readonly UTF8: Adobe.Incopy.TextExportCharacterSet;
			/** Constructor */
			public constructor();
		}
	}
}