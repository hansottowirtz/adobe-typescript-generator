/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class WordRTFImportPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, bullets and numbers will be converted to embedded 
			 * characters during import. If false, bullets and numbers will 
			 * be rendered by InDesign.
			 * @type {boolean}
			 */
			public convertBulletsAndNumbersToText: boolean;
			/**
			 * The option for handling manual page breaks.
			 * @type {Adobe.Indesign.ConvertPageBreaks}
			 */
			public convertPageBreaks: Adobe.Indesign.ConvertPageBreaks;
			/**
			 * The policy for converting tables whose formatting has been 
			 * removed. Note: Valid when remove formatting is true.
			 * @type {Adobe.Indesign.ConvertTablesOptions}
			 */
			public convertTablesTo: Adobe.Indesign.ConvertTablesOptions;
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
			 * If true, imports endnotes.
			 * @type {boolean}
			 */
			public importEndnotes: boolean;
			/**
			 * If true, imports footnotes.
			 * @type {boolean}
			 */
			public importFootnotes: boolean;
			/**
			 * If true, imports the index.
			 * @type {boolean}
			 */
			public importIndex: boolean;
			/**
			 * If true, imports the table of contents.
			 * @type {boolean}
			 */
			public importTOC: boolean;
			/**
			 * If true, imports unused styles.
			 * @type {boolean}
			 */
			public importUnusedStyles: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the WordRTFImportPreference (a Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, preserves inline graphics.
			 * @type {boolean}
			 */
			public preserveGraphics: boolean;
			/**
			 * If true, maintains character formatting in text whose 
			 * formatting has been removed. Note: Valid when remove 
			 * formatting is true.
			 * @type {boolean}
			 */
			public preserveLocalOverrides: boolean;
			/**
			 * If true, preserves comments and edits in the imported file.
			 * @type {boolean}
			 */
			public preserveTrackChanges: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, removes text and table formatting.
			 * @type {boolean}
			 */
			public removeFormatting: boolean;
			/**
			 * The option for handling style name conflicts.
			 * @type {Adobe.Indesign.ResolveStyleClash}
			 */
			public resolveCharacterStyleClash: Adobe.Indesign.ResolveStyleClash;
			/**
			 * The option for resolving conflicts that arise when paragraph 
			 * styles have matching names.
			 * @type {Adobe.Indesign.ResolveStyleClash}
			 */
			public resolveParagraphStyleClash: Adobe.Indesign.ResolveStyleClash;
			/**
			 * If true, convert straight quotes and apostrophes in the 
			 * imported text to typographic quotation marks and 
			 * apostrophes.
			 * @type {boolean}
			 */
			public useTypographersQuotes: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerWordRTFImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerWordRTFImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}