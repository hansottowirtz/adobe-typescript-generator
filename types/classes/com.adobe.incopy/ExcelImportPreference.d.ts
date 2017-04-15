/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ExcelImportPreference extends Adobe.Incopy.Preference {
			/** The cell alignment for the imported document. */
			public alignmentStyle: Adobe.Incopy.AlignmentStyleOptions;
			/**
			 * The number of decimal places to include. Note: Valid only 
			 * when alignment style is decimal.
			 */
			public decimalPlaces: number;
			/**
			 * The import error code. (Key: 0=Success; 1=Empty Sheet; 
			 * 2=Invalid sheet; 3=Invalid range; 4=Invalid View; 5=Misc. 
			 * Error)
			 */
			public errorCode: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the ExcelImportPreference (a Application). */
			public readonly parent: any;
			/** If true, preserves inline graphics. */
			public preserveGraphics: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The range of cells to import. Note: Use a colon (:) to 
			 * separate the start and end cell names in the range.
			 */
			public rangeName: string;
			/** The worksheet's index. For information, see sheet name. */
			public sheetIndex: number;
			/** The worksheet to import. */
			public sheetName: string;
			/** If true, shows hidden cells. */
			public showHiddenCells: boolean;
			/** The format for imported spreadsheets. */
			public tableFormatting: Adobe.Incopy.TableFormattingOptions;
			/**
			 * If true, convert straight quotes and apostrophes in the 
			 * imported text to typographic quotation marks and 
			 * apostrophes.
			 */
			public useTypographersQuotes: boolean;
			/**
			 * The stored custom or personal view(s) to import with the 
			 * file.
			 */
			public viewName: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerExcelImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerExcelImportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}