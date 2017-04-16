/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class PrintBookletOption extends Adobe.Indesign.Preference {
			/**
			 * If true, automatically adjust margins to fit the specified 
			 * printer's marks and bleed area.
			 */
			public autoAdjustMargins: boolean;
			/** The amount of bleed between pages. */
			public bleedBetweenPages: any;
			/** The type of booklet. */
			public bookletType: Adobe.Indesign.BookletTypeOptions;
			/** Bottom margin of the printed booklet. */
			public bottomMargin: any;
			/**
			 * The amount of creep (binding adjustment based on paper 
			 * thickness) to add.
			 */
			public creep: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** Left margin of the printed booklet. */
			public leftMargin: any;
			/** If true, make all margins equal to the top margin. */
			public marginsUniformSize: boolean;
			/**
			 * The pages to print, specified either as an enumeration or a 
			 * string. To specify a range, separate page numbers in the 
			 * string with a hyphen (-). To specify separate pages, 
			 * separate page numbers in the string with a comma (,). Can 
			 * return: PageRange enumerator or String.
			 */
			public pageRange: any;
			/** The parent of the PrintBookletOption (a Document). */
			public readonly parent: any;
			/** If true, print blank spreads. */
			public printBlankPrinterSpreads: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** Right margin of the printed booklet. */
			public rightMargin: any;
			/** The signature size of booklet (for perfect binding). */
			public signatureSize: Adobe.Indesign.SignatureSizeOptions;
			/** The amount of space between pages. */
			public spaceBetweenPages: any;
			/** Top margin of the printed booklet. */
			public topMargin: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPrintBookletOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerPrintBookletOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}