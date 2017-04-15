/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BookContentStatus extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The book content object is being used by someone else and is 
			 * therefore locked.
			 */
			public static readonly DOCUMENT_IN_USE: Adobe.Indesign.BookContentStatus;
			/** The book content object is open. */
			public static readonly DOCUMENT_IS_OPEN: Adobe.Indesign.BookContentStatus;
			/**
			 * The book content object has been modified after 
			 * repagination.
			 */
			public static readonly DOCUMENT_OUT_OF_DATE: Adobe.Indesign.BookContentStatus;
			/**
			 * Alias for DOCUMENT_IN_USE. The book content object is being 
			 * used by someone else and is therefore locked.
			 */
			public static readonly documentInUse: Adobe.Indesign.BookContentStatus;
			/**
			 * Alias for DOCUMENT_IS_OPEN. The book content object is open.
			 */
			public static readonly documentIsOpen: Adobe.Indesign.BookContentStatus;
			/**
			 * Alias for DOCUMENT_OUT_OF_DATE. The book content object has 
			 * been modified after repagination.
			 */
			public static readonly documentOutOfDate: Adobe.Indesign.BookContentStatus;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The book content object is missing because it has been 
			 * moved, renamed, or deleted.
			 */
			public static readonly MISSING_DOCUMENT: Adobe.Indesign.BookContentStatus;
			/**
			 * Alias for MISSING_DOCUMENT. The book content object is 
			 * missing because it has been moved, renamed, or deleted.
			 */
			public static readonly missingDocument: Adobe.Indesign.BookContentStatus;
			/**
			 * Alias for NORMAL. The book content object is not open and is 
			 * unchanged.
			 */
			public static readonly normal: Adobe.Indesign.BookContentStatus;
			/** The book content object is not open and is unchanged. */
			public static readonly NORMAL: Adobe.Indesign.BookContentStatus;
			/** Constructor */
			public constructor();
		}
	}
}