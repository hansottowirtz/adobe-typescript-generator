/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class PrintBookletOption extends Adobe.Indesign.Preference {
			/**
			 * If true, automatically adjust margins to fit the specified 
			 * printer's marks and bleed area.
			 * @type {boolean}
			 */
			public autoAdjustMargins: boolean;
			/**
			 * The amount of bleed between pages.
			 * @type {any}
			 */
			public bleedBetweenPages: any;
			/**
			 * The type of booklet.
			 * @type {Adobe.Indesign.BookletTypeOptions}
			 */
			public bookletType: Adobe.Indesign.BookletTypeOptions;
			/**
			 * Bottom margin of the printed booklet.
			 * @type {any}
			 */
			public bottomMargin: any;
			/**
			 * The amount of creep (binding adjustment based on paper 
			 * thickness) to add.
			 * @type {any}
			 */
			public creep: any;
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * Left margin of the printed booklet.
			 * @type {any}
			 */
			public leftMargin: any;
			/**
			 * If true, make all margins equal to the top margin.
			 * @type {boolean}
			 */
			public marginsUniformSize: boolean;
			/**
			 * The pages to print, specified either as an enumeration or a 
			 * string. To specify a range, separate page numbers in the 
			 * string with a hyphen (-). To specify separate pages, 
			 * separate page numbers in the string with a comma (,). Can 
			 * return: PageRange enumerator or String.
			 * @type {any}
			 */
			public pageRange: any;
			/**
			 * The parent of the PrintBookletOption (a Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, print blank spreads.
			 * @type {boolean}
			 */
			public printBlankPrinterSpreads: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Right margin of the printed booklet.
			 * @type {any}
			 */
			public rightMargin: any;
			/**
			 * The signature size of booklet (for perfect binding).
			 * @type {Adobe.Indesign.SignatureSizeOptions}
			 */
			public signatureSize: Adobe.Indesign.SignatureSizeOptions;
			/**
			 * The amount of space between pages.
			 * @type {any}
			 */
			public spaceBetweenPages: any;
			/**
			 * Top margin of the printed booklet.
			 * @type {any}
			 */
			public topMargin: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPrintBookletOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerPrintBookletOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}