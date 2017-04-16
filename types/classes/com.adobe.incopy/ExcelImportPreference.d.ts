/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class ExcelImportPreference extends Adobe.Incopy.Preference {
			/**
			 * The cell alignment for the imported document.
			 * @type {Adobe.Incopy.AlignmentStyleOptions}
			 */
			public alignmentStyle: Adobe.Incopy.AlignmentStyleOptions;
			/**
			 * The number of decimal places to include. Note: Valid only 
			 * when alignment style is decimal.
			 * @type {number}
			 */
			public decimalPlaces: number;
			/**
			 * The import error code. (Key: 0=Success; 1=Empty Sheet; 
			 * 2=Invalid sheet; 3=Invalid range; 4=Invalid View; 5=Misc. 
			 * Error)
			 * @type {number}
			 */
			public errorCode: number;
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
			 * The parent of the ExcelImportPreference (a Application).
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
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The range of cells to import. Note: Use a colon (:) to 
			 * separate the start and end cell names in the range.
			 * @type {string}
			 */
			public rangeName: string;
			/**
			 * The worksheet's index. For information, see sheet name.
			 * @type {number}
			 */
			public sheetIndex: number;
			/**
			 * The worksheet to import.
			 * @type {string}
			 */
			public sheetName: string;
			/**
			 * If true, shows hidden cells.
			 * @type {boolean}
			 */
			public showHiddenCells: boolean;
			/**
			 * The format for imported spreadsheets.
			 * @type {Adobe.Incopy.TableFormattingOptions}
			 */
			public tableFormatting: Adobe.Incopy.TableFormattingOptions;
			/**
			 * If true, convert straight quotes and apostrophes in the 
			 * imported text to typographic quotation marks and 
			 * apostrophes.
			 * @type {boolean}
			 */
			public useTypographersQuotes: boolean;
			/**
			 * The stored custom or personal view(s) to import with the 
			 * file.
			 * @type {string}
			 */
			public viewName: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerExcelImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerExcelImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}