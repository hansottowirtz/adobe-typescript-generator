/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class MarginPreference extends Adobe.Indesign.Preference {
			/**
			 * The bottom edge of the MarginPreference.
			 * @type {any}
			 */
			public bottom: any;
			/**
			 * The number of columns to place on the page.
			 * @type {number}
			 */
			public columnCount: number;
			/**
			 * The direction of text in the column.
			 * @type {Adobe.Indesign.HorizontalOrVertical}
			 */
			public columnDirection: Adobe.Indesign.HorizontalOrVertical;
			/**
			 * The distance between columns.
			 * @type {any}
			 */
			public columnGutter: any;
			/**
			 * The distance that each column guide is placed from the left 
			 * margin, formatted as an array in the format [guide1, guide2, 
			 * guide3].
			 * @type {any}
			 */
			public columnsPositions: any;
			/**
			 * If false, columns are evenly spaced. If true, columns can 
			 * have custom widths.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly customColumns: boolean;
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
			 * The left edge of the MarginPreference.
			 * @type {any}
			 */
			public left: any;
			/**
			 * The parent of the MarginPreference (a Application, Document 
			 * or Page).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The right edge of the MarginPreference.
			 * @type {any}
			 */
			public right: any;
			/**
			 * The top edge of the MarginPreference.
			 * @type {any}
			 */
			public top: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerMarginPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerMarginPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}