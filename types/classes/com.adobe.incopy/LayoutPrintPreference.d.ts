/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LayoutPrintPreference extends Adobe.Incopy.Preference {
			/** If true, collate printed copies. */
			public collating: boolean;
			/**
			 * The number of copies to print. Note: Not valid when printer 
			 * is PostScript File.
			 */
			public copies: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * If true, prints the filename, page number, current date and 
			 * time, and color separation name.
			 */
			public pageInformationMarks: boolean;
			/**
			 * The paper height. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 */
			public paperHeight: any;
			/**
			 * The paper size, specified as either a string or an 
			 * enumeration. For information on paper size names, see paper 
			 * size list. Can return: PaperSizes enumerator or String.
			 */
			public paperSize: any;
			/** A list of the available paper sizes. */
			public readonly paperSizeList: any;
			/**
			 * The paper width. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 */
			public paperWidth: any;
			/** The parent of the LayoutPrintPreference (a Application). */
			public readonly parent: any;
			/**
			 * The current printer. Can return: Printer enumerator or 
			 * String.
			 */
			public printer: any;
			/** Available printers. */
			public readonly printerList: any;
			/** The orientation of the printed page. */
			public printPageOrientation: Adobe.Incopy.PrintPageOrientation;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, prints pages in reverse order. */
			public reverseOrder: boolean;
			/**
			 * The amount (as a percentage) that the page height is scaled 
			 * during printing. (Range: 0 to 1000) Note: Valid only when 
			 * scale mode is scale width height.
			 */
			public scaleHeight: number;
			/**
			 * The policy for scaling the page. Note: Valid only when 
			 * printing from Layout view.
			 */
			public scaleMode: Adobe.Incopy.ScaleModes;
			/**
			 * If true, constrains the proportions of the scaling; uses the 
			 * most recent value for either scale width or scale height to 
			 * define both values. Note: Valid only when scale mode is 
			 * scale width height.
			 */
			public scaleProportional: boolean;
			/**
			 * The amount (as a percentage)  that the page width is scaled 
			 * during printing. (Range: 0 to 1000) Note: Valid only when 
			 * scale mode is scale width height.
			 */
			public scaleWidth: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerLayoutPrintPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerLayoutPrintPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}