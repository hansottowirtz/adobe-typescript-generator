/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class WordRTFImportPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, bullets and numbers will be converted to embedded 
			 * characters during import. If false, bullets and numbers will 
			 * be rendered by InDesign.
			 */
			public convertBulletsAndNumbersToText: boolean;
			/** The option for handling manual page breaks. */
			public convertPageBreaks: Adobe.Incopy.ConvertPageBreaks;
			/**
			 * The policy for converting tables whose formatting has been 
			 * removed. Note: Valid when remove formatting is true.
			 */
			public convertTablesTo: Adobe.Incopy.ConvertTablesOptions;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** If true, imports endnotes. */
			public importEndnotes: boolean;
			/** If true, imports footnotes. */
			public importFootnotes: boolean;
			/** If true, imports the index. */
			public importIndex: boolean;
			/** If true, imports the table of contents. */
			public importTOC: boolean;
			/** If true, imports unused styles. */
			public importUnusedStyles: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the WordRTFImportPreference (a Application). */
			public readonly parent: any;
			/** If true, preserves inline graphics. */
			public preserveGraphics: boolean;
			/**
			 * If true, maintains character formatting in text whose 
			 * formatting has been removed. Note: Valid when remove 
			 * formatting is true.
			 */
			public preserveLocalOverrides: boolean;
			/** If true, preserves comments and edits in the imported file. */
			public preserveTrackChanges: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, removes text and table formatting. */
			public removeFormatting: boolean;
			/** The option for handling style name conflicts. */
			public resolveCharacterStyleClash: Adobe.Incopy.ResolveStyleClash;
			/**
			 * The option for resolving conflicts that arise when paragraph 
			 * styles have matching names.
			 */
			public resolveParagraphStyleClash: Adobe.Incopy.ResolveStyleClash;
			/**
			 * If true, convert straight quotes and apostrophes in the 
			 * imported text to typographic quotation marks and 
			 * apostrophes.
			 */
			public useTypographersQuotes: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerWordRTFImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerWordRTFImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}