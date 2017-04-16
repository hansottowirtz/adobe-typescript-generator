/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ComposeUsing extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for BOTH. Uses the lists stored in both the document 
			 * and the user dictionary.
			 */
			public static readonly both: Adobe.Indesign.ComposeUsing;
			/**
			 * Uses the lists stored in both the document and the user 
			 * dictionary.
			 */
			public static readonly BOTH: Adobe.Indesign.ComposeUsing;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the list stored in the document. */
			public static readonly USE_DOCUMENT: Adobe.Indesign.ComposeUsing;
			/** Uses the list stored in the external user dictionary. */
			public static readonly USE_USER_DICTIONARY: Adobe.Indesign.ComposeUsing;
			/**
			 * Alias for USE_DOCUMENT. Uses the list stored in the 
			 * document.
			 */
			public static readonly useDocument: Adobe.Indesign.ComposeUsing;
			/**
			 * Alias for USE_USER_DICTIONARY. Uses the list stored in the 
			 * external user dictionary.
			 */
			public static readonly useUserDictionary: Adobe.Indesign.ComposeUsing;
			/** Constructor */
			public constructor();
		}
	}
}