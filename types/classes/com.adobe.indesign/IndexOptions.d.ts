/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class IndexOptions extends Adobe.Indesign.Preference {
			/** The character(s) inserted at the start of cross references. */
			public beforeCrossReferenceSeparator: string;
			/**
			 * The character(s) inserted between index entries when 
			 * runin-style index format is used for nested topics.
			 */
			public betweenEntriesSeparator: string;
			/**
			 * The character(s) inserted between separate page numbers, 
			 * page numbers and page ranges, and series of page ranges.
			 */
			public betweenPageNumbersSeparator: string;
			/** The character style applied to cross references. */
			public crossReferenceStyle: Adobe.Indesign.CharacterStyle;
			/** The character style applied to cross reference topics. */
			public crossReferenceTopicStyle: Adobe.Indesign.CharacterStyle;
			/** The character(s) inserted at the end of each index entry. */
			public entryEndSeparator: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The character(s) inserted after each index topic. */
			public followingTopicSeparator: string;
			/**
			 * If true, includes topics and page references from all the 
			 * documents in a book.
			 */
			public includeBookDocuments: boolean;
			/**
			 * If true, displays headings for sections with no index 
			 * topics. Note: Valid only when include section headings is 
			 * true.
			 */
			public includeEmptyIndexSections: boolean;
			/**
			 * If true, includes topics and page references on hidden 
			 * layers.
			 */
			public includeHiddenEntries: boolean;
			/**
			 * If true, displays the letters of the alphabet as index 
			 * section headings.
			 */
			public includeSectionHeadings: boolean;
			/** The format for level 2 and lower index topics. */
			public indexFormat: Adobe.Indesign.IndexFormat;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The paragraph style applied to level 1 index topics. */
			public level1Style: Adobe.Indesign.ParagraphStyle;
			/** The paragraph style applied to level 2 index topics. */
			public level2Style: Adobe.Indesign.ParagraphStyle;
			/** The paragraph style applied to level 3 index topics. */
			public level3Style: Adobe.Indesign.ParagraphStyle;
			/** The paragraph style applied to level 4 index topics. */
			public level4Style: Adobe.Indesign.ParagraphStyle;
			/** The character style applied to page numbers in the index. */
			public pageNumberStyle: Adobe.Indesign.CharacterStyle;
			/**
			 * The character(s) inserted between page numbers to indicate a 
			 * page range.
			 */
			public pageRangeSeparator: string;
			/** The parent of the IndexOptions (a Document or Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, replaces the content of the existing index. Note: 
			 * Replaces only index content; does not update the index 
			 * location or other index properties that may have been 
			 * changed.
			 */
			public replaceExistingIndex: boolean;
			/**
			 * The paragraph style applied to index section headings. Note: 
			 * Valid when include section headings is true.
			 */
			public sectionHeadingStyle: Adobe.Indesign.ParagraphStyle;
			/** The title of the generated index. */
			public title: string;
			/**
			 * The paragraph style applied to the title of the generated 
			 * index. Can also accept: String.
			 */
			public titleStyle: Adobe.Indesign.ParagraphStyle;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerIndexOptions(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerIndexOptions(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}