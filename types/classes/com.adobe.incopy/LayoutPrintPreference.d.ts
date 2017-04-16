/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class LayoutPrintPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, collate printed copies.
			 * @type {boolean}
			 */
			public collating: boolean;
			/**
			 * The number of copies to print. Note: Not valid when printer 
			 * is PostScript File.
			 * @type {number}
			 */
			public copies: number;
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
			 * If true, prints the filename, page number, current date and 
			 * time, and color separation name.
			 * @type {boolean}
			 */
			public pageInformationMarks: boolean;
			/**
			 * The paper height. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 * @type {any}
			 */
			public paperHeight: any;
			/**
			 * The paper size, specified as either a string or an 
			 * enumeration. For information on paper size names, see paper 
			 * size list. Can return: PaperSizes enumerator or String.
			 * @type {any}
			 */
			public paperSize: any;
			/**
			 * A list of the available paper sizes.
			 * @type {any}
			 * @readonly
			 */
			public readonly paperSizeList: any;
			/**
			 * The paper width. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 * @type {any}
			 */
			public paperWidth: any;
			/**
			 * The parent of the LayoutPrintPreference (a Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The current printer. Can return: Printer enumerator or 
			 * String.
			 * @type {any}
			 */
			public printer: any;
			/**
			 * Available printers.
			 * @type {any}
			 * @readonly
			 */
			public readonly printerList: any;
			/**
			 * The orientation of the printed page.
			 * @type {Adobe.Incopy.PrintPageOrientation}
			 */
			public printPageOrientation: Adobe.Incopy.PrintPageOrientation;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, prints pages in reverse order.
			 * @type {boolean}
			 */
			public reverseOrder: boolean;
			/**
			 * The amount (as a percentage) that the page height is scaled 
			 * during printing. (Range: 0 to 1000) Note: Valid only when 
			 * scale mode is scale width height.
			 * @type {number}
			 */
			public scaleHeight: number;
			/**
			 * The policy for scaling the page. Note: Valid only when 
			 * printing from Layout view.
			 * @type {Adobe.Incopy.ScaleModes}
			 */
			public scaleMode: Adobe.Incopy.ScaleModes;
			/**
			 * If true, constrains the proportions of the scaling; uses the 
			 * most recent value for either scale width or scale height to 
			 * define both values. Note: Valid only when scale mode is 
			 * scale width height.
			 * @type {boolean}
			 */
			public scaleProportional: boolean;
			/**
			 * The amount (as a percentage)  that the page width is scaled 
			 * during printing. (Range: 0 to 1000) Note: Valid only when 
			 * scale mode is scale width height.
			 * @type {number}
			 */
			public scaleWidth: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerLayoutPrintPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerLayoutPrintPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}