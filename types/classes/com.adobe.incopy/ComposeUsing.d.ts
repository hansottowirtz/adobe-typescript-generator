/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ComposeUsing extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for BOTH. Uses the lists stored in both the document 
			 * and the user dictionary.
			 */
			public static readonly both: Adobe.Incopy.ComposeUsing;
			/**
			 * Uses the lists stored in both the document and the user 
			 * dictionary.
			 */
			public static readonly BOTH: Adobe.Incopy.ComposeUsing;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the list stored in the document. */
			public static readonly USE_DOCUMENT: Adobe.Incopy.ComposeUsing;
			/** Uses the list stored in the external user dictionary. */
			public static readonly USE_USER_DICTIONARY: Adobe.Incopy.ComposeUsing;
			/**
			 * Alias for USE_DOCUMENT. Uses the list stored in the 
			 * document.
			 */
			public static readonly useDocument: Adobe.Incopy.ComposeUsing;
			/**
			 * Alias for USE_USER_DICTIONARY. Uses the list stored in the 
			 * external user dictionary.
			 */
			public static readonly useUserDictionary: Adobe.Incopy.ComposeUsing;
			/** Constructor */
			public constructor();
		}
	}
}