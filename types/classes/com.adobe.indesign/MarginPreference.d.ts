/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class MarginPreference extends Adobe.Indesign.Preference {
			/** The bottom edge of the MarginPreference. */
			public bottom: any;
			/** The number of columns to place on the page. */
			public columnCount: number;
			/** The direction of text in the column. */
			public columnDirection: Adobe.Indesign.HorizontalOrVertical;
			/** The distance between columns. */
			public columnGutter: any;
			/**
			 * The distance that each column guide is placed from the left 
			 * margin, formatted as an array in the format [guide1, guide2, 
			 * guide3].
			 */
			public columnsPositions: any;
			/**
			 * If false, columns are evenly spaced. If true, columns can 
			 * have custom widths.
			 */
			public readonly customColumns: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The left edge of the MarginPreference. */
			public left: any;
			/**
			 * The parent of the MarginPreference (a Application, Document 
			 * or Page).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The right edge of the MarginPreference. */
			public right: any;
			/** The top edge of the MarginPreference. */
			public top: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerMarginPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerMarginPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}