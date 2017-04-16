/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class VariableTypes extends Adobe.Csawlib.CSEnumBase {
			/** Chapter number variable. */
			public static readonly CHAPTER_NUMBER_TYPE: Adobe.Incopy.VariableTypes;
			/** Alias for CHAPTER_NUMBER_TYPE. Chapter number variable. */
			public static readonly chapterNumberType: Adobe.Incopy.VariableTypes;
			/** Creation date variable. */
			public static readonly CREATION_DATE_TYPE: Adobe.Incopy.VariableTypes;
			/** Alias for CREATION_DATE_TYPE. Creation date variable. */
			public static readonly creationDateType: Adobe.Incopy.VariableTypes;
			/** Custom text variable. */
			public static readonly CUSTOM_TEXT_TYPE: Adobe.Incopy.VariableTypes;
			/** Alias for CUSTOM_TEXT_TYPE. Custom text variable. */
			public static readonly customTextType: Adobe.Incopy.VariableTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** File name variable. */
			public static readonly FILE_NAME_TYPE: Adobe.Incopy.VariableTypes;
			/** Alias for FILE_NAME_TYPE. File name variable. */
			public static readonly fileNameType: Adobe.Incopy.VariableTypes;
			/** Last page number variable. */
			public static readonly LAST_PAGE_NUMBER_TYPE: Adobe.Incopy.VariableTypes;
			/** Alias for LAST_PAGE_NUMBER_TYPE. Last page number variable. */
			public static readonly lastPageNumberType: Adobe.Incopy.VariableTypes;
			/** Live Caption variable. */
			public static readonly LIVE_CAPTION_TYPE: Adobe.Incopy.VariableTypes;
			/** Alias for LIVE_CAPTION_TYPE. Live Caption variable. */
			public static readonly liveCaptionType: Adobe.Incopy.VariableTypes;
			/** Running header (character style) variable. */
			public static readonly MATCH_CHARACTER_STYLE_TYPE: Adobe.Incopy.VariableTypes;
			/** Running header (paragraph style) variable. */
			public static readonly MATCH_PARAGRAPH_STYLE_TYPE: Adobe.Incopy.VariableTypes;
			/**
			 * Alias for MATCH_CHARACTER_STYLE_TYPE. Running header 
			 * (character style) variable.
			 */
			public static readonly matchCharacterStyleType: Adobe.Incopy.VariableTypes;
			/**
			 * Alias for MATCH_PARAGRAPH_STYLE_TYPE. Running header 
			 * (paragraph style) variable.
			 */
			public static readonly matchParagraphStyleType: Adobe.Incopy.VariableTypes;
			/** Modification date variable. */
			public static readonly MODIFICATION_DATE_TYPE: Adobe.Incopy.VariableTypes;
			/**
			 * Alias for MODIFICATION_DATE_TYPE. Modification date 
			 * variable.
			 */
			public static readonly modificationDateType: Adobe.Incopy.VariableTypes;
			/** Output date variable. */
			public static readonly OUTPUT_DATE_TYPE: Adobe.Incopy.VariableTypes;
			/** Alias for OUTPUT_DATE_TYPE. Output date variable. */
			public static readonly outputDateType: Adobe.Incopy.VariableTypes;
			/** Private cross reference chapter number variable. */
			public static readonly XREF_CHAPTER_NUMBER_TYPE: Adobe.Incopy.VariableTypes;
			/** Private cross reference page number variable. */
			public static readonly XREF_PAGE_NUMBER_TYPE: Adobe.Incopy.VariableTypes;
			/**
			 * Alias for XREF_CHAPTER_NUMBER_TYPE. Private cross reference 
			 * chapter number variable.
			 */
			public static readonly xrefChapterNumberType: Adobe.Incopy.VariableTypes;
			/**
			 * Alias for XREF_PAGE_NUMBER_TYPE. Private cross reference 
			 * page number variable.
			 */
			public static readonly xrefPageNumberType: Adobe.Incopy.VariableTypes;
			/** Constructor */
			public constructor();
		}
	}
}