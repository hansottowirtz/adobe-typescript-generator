/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChapterNumberSources extends Adobe.Csawlib.CSEnumBase {
			/** Continue chapter number from previous document. */
			public static readonly CONTINUE_FROM_PREVIOUS_DOCUMENT: Adobe.Indesign.ChapterNumberSources;
			/**
			 * Alias for CONTINUE_FROM_PREVIOUS_DOCUMENT. Continue chapter 
			 * number from previous document.
			 */
			public static readonly continueFromPreviousDocument: Adobe.Indesign.ChapterNumberSources;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Chapter number same as previous document. */
			public static readonly SAME_AS_PREVIOUS_DOCUMENT: Adobe.Indesign.ChapterNumberSources;
			/**
			 * Alias for SAME_AS_PREVIOUS_DOCUMENT. Chapter number same as 
			 * previous document.
			 */
			public static readonly sameAsPreviousDocument: Adobe.Indesign.ChapterNumberSources;
			/** User-defined chapter number. */
			public static readonly USER_DEFINED: Adobe.Indesign.ChapterNumberSources;
			/** Alias for USER_DEFINED. User-defined chapter number. */
			public static readonly userDefined: Adobe.Indesign.ChapterNumberSources;
			/** Constructor */
			public constructor();
		}
	}
}