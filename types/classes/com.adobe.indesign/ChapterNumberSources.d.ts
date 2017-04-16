/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChapterNumberSources extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Continue chapter number from previous document.
			 * @type {Adobe.Indesign.ChapterNumberSources}
			 * @readonly
			 */
			public static readonly CONTINUE_FROM_PREVIOUS_DOCUMENT: Adobe.Indesign.ChapterNumberSources;
			/**
			 * Alias for CONTINUE_FROM_PREVIOUS_DOCUMENT. Continue chapter 
			 * number from previous document.
			 * @type {Adobe.Indesign.ChapterNumberSources}
			 * @readonly
			 */
			public static readonly continueFromPreviousDocument: Adobe.Indesign.ChapterNumberSources;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Chapter number same as previous document.
			 * @type {Adobe.Indesign.ChapterNumberSources}
			 * @readonly
			 */
			public static readonly SAME_AS_PREVIOUS_DOCUMENT: Adobe.Indesign.ChapterNumberSources;
			/**
			 * Alias for SAME_AS_PREVIOUS_DOCUMENT. Chapter number same as 
			 * previous document.
			 * @type {Adobe.Indesign.ChapterNumberSources}
			 * @readonly
			 */
			public static readonly sameAsPreviousDocument: Adobe.Indesign.ChapterNumberSources;
			/**
			 * User-defined chapter number.
			 * @type {Adobe.Indesign.ChapterNumberSources}
			 * @readonly
			 */
			public static readonly USER_DEFINED: Adobe.Indesign.ChapterNumberSources;
			/**
			 * Alias for USER_DEFINED. User-defined chapter number.
			 * @type {Adobe.Indesign.ChapterNumberSources}
			 * @readonly
			 */
			public static readonly userDefined: Adobe.Indesign.ChapterNumberSources;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}