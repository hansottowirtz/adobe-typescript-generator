/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class TextImportPreference extends Adobe.Incopy.Preference {
			/**
			 * The computer language character set used to create the text 
			 * file.
			 * @type {Adobe.Incopy.TextImportCharacterSet}
			 */
			public characterSet: Adobe.Incopy.TextImportCharacterSet;
			/**
			 * If true, converts the specified number of spaces into a tab. 
			 * For information on specifying the number of spaces, see 
			 * spaces into tabs count.
			 * @type {boolean}
			 */
			public convertSpacesIntoTabs: boolean;
			/**
			 * The dictionary to use for the imported text.
			 * @type {string}
			 */
			public dictionary: string;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the TextImportPreference (a Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The platform used to create the imported text file.
			 * @type {Adobe.Incopy.ImportPlatform}
			 */
			public platform: Adobe.Incopy.ImportPlatform;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The number of spaces to convert to a tab. Note: Valid when 
			 * convert spaces into tabs is true.
			 * @type {number}
			 */
			public spacesIntoTabsCount: number;
			/**
			 * If true, the import filter removes extra carriage returns at 
			 * the ends of lines.
			 * @type {boolean}
			 */
			public stripReturnsBetweenLines: boolean;
			/**
			 * If true, the import filter removes extra carriage returns 
			 * between paragraphs.
			 * @type {boolean}
			 */
			public stripReturnsBetweenParagraphs: boolean;
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
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerTextImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerTextImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}