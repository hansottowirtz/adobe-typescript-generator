/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GridPrintingPreference extends Adobe.Indesign.Preference {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, displays frame (story) grids in the printed or 
			 * exported document.
			 */
			public frameGridPrinting: boolean;
			/** The stroke weight (in points) of the frame grid. */
			public frameGridStrokeWeight: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * If true, displays layout grids in the printed or exported 
			 * document.
			 */
			public layoutGridPrinting: boolean;
			/** The stroke weight (in points) of the layout grid. */
			public layoutGridStrokeWeight: number;
			/**
			 * If true, displays page items other than text, frame grids, 
			 * and layout grids in the printed or exported document. For 
			 * information on printing and exporting text and grids, see 
			 * text printing, frame grid printing, and layout grid 
			 * printing.
			 */
			public pageItemPrinting: boolean;
			/** The parent of the GridPrintingPreference (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, displays text in the printed or exported document. */
			public textPrinting: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGridPrintingPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerGridPrintingPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}