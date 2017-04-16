/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class IndexOptions extends Adobe.Indesign.Preference {
			/**
			 * The character(s) inserted at the start of cross references.
			 * @type {string}
			 */
			public beforeCrossReferenceSeparator: string;
			/**
			 * The character(s) inserted between index entries when 
			 * runin-style index format is used for nested topics.
			 * @type {string}
			 */
			public betweenEntriesSeparator: string;
			/**
			 * The character(s) inserted between separate page numbers, 
			 * page numbers and page ranges, and series of page ranges.
			 * @type {string}
			 */
			public betweenPageNumbersSeparator: string;
			/**
			 * The character style applied to cross references.
			 * @type {Adobe.Indesign.CharacterStyle}
			 */
			public crossReferenceStyle: Adobe.Indesign.CharacterStyle;
			/**
			 * The character style applied to cross reference topics.
			 * @type {Adobe.Indesign.CharacterStyle}
			 */
			public crossReferenceTopicStyle: Adobe.Indesign.CharacterStyle;
			/**
			 * The character(s) inserted at the end of each index entry.
			 * @type {string}
			 */
			public entryEndSeparator: string;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The character(s) inserted after each index topic.
			 * @type {string}
			 */
			public followingTopicSeparator: string;
			/**
			 * If true, includes topics and page references from all the 
			 * documents in a book.
			 * @type {boolean}
			 */
			public includeBookDocuments: boolean;
			/**
			 * If true, displays headings for sections with no index 
			 * topics. Note: Valid only when include section headings is 
			 * true.
			 * @type {boolean}
			 */
			public includeEmptyIndexSections: boolean;
			/**
			 * If true, includes topics and page references on hidden 
			 * layers.
			 * @type {boolean}
			 */
			public includeHiddenEntries: boolean;
			/**
			 * If true, displays the letters of the alphabet as index 
			 * section headings.
			 * @type {boolean}
			 */
			public includeSectionHeadings: boolean;
			/**
			 * The format for level 2 and lower index topics.
			 * @type {Adobe.Indesign.IndexFormat}
			 */
			public indexFormat: Adobe.Indesign.IndexFormat;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The paragraph style applied to level 1 index topics.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public level1Style: Adobe.Indesign.ParagraphStyle;
			/**
			 * The paragraph style applied to level 2 index topics.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public level2Style: Adobe.Indesign.ParagraphStyle;
			/**
			 * The paragraph style applied to level 3 index topics.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public level3Style: Adobe.Indesign.ParagraphStyle;
			/**
			 * The paragraph style applied to level 4 index topics.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public level4Style: Adobe.Indesign.ParagraphStyle;
			/**
			 * The character style applied to page numbers in the index.
			 * @type {Adobe.Indesign.CharacterStyle}
			 */
			public pageNumberStyle: Adobe.Indesign.CharacterStyle;
			/**
			 * The character(s) inserted between page numbers to indicate a 
			 * page range.
			 * @type {string}
			 */
			public pageRangeSeparator: string;
			/**
			 * The parent of the IndexOptions (a Document or Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, replaces the content of the existing index. Note: 
			 * Replaces only index content; does not update the index 
			 * location or other index properties that may have been 
			 * changed.
			 * @type {boolean}
			 */
			public replaceExistingIndex: boolean;
			/**
			 * The paragraph style applied to index section headings. Note: 
			 * Valid when include section headings is true.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public sectionHeadingStyle: Adobe.Indesign.ParagraphStyle;
			/**
			 * The title of the generated index.
			 * @type {string}
			 */
			public title: string;
			/**
			 * The paragraph style applied to the title of the generated 
			 * index. Can also accept: String.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public titleStyle: Adobe.Indesign.ParagraphStyle;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerIndexOptions(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerIndexOptions(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}