/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DocumentIntentOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Intended purpose of document is for print output. */
			public static readonly PRINT_INTENT: Adobe.Indesign.DocumentIntentOptions;
			/**
			 * Alias for PRINT_INTENT. Intended purpose of document is for 
			 * print output.
			 */
			public static readonly printIntent: Adobe.Indesign.DocumentIntentOptions;
			/** Intended purpose of document is for web output. */
			public static readonly WEB_INTENT: Adobe.Indesign.DocumentIntentOptions;
			/**
			 * Alias for WEB_INTENT. Intended purpose of document is for 
			 * web output.
			 */
			public static readonly webIntent: Adobe.Indesign.DocumentIntentOptions;
			/** Constructor */
			public constructor();
		}
	}
}