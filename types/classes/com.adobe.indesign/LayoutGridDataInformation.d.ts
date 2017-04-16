/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class LayoutGridDataInformation extends Adobe.Indesign.Preference {
			/**
			 * The font applied to the LayoutGridDataInformation, specified 
			 * as either a font object or the name of font family. Can 
			 * return: Font or String.
			 * @type {any}
			 */
			public appliedFont: any;
			/**
			 * The amount of white space between characters.
			 * @type {number}
			 */
			public characterAki: number;
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
			 * The name of the font style.
			 * @type {string}
			 */
			public fontStyle: string;
			/**
			 * The horizontal scaling applied to the 
			 * LayoutGridDataInformation.
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The amount of white space between lines.
			 * @type {number}
			 */
			public lineAki: number;
			/**
			 * The parent of the LayoutGridDataInformation (a Application 
			 * or Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The text size.
			 * @type {any}
			 */
			public pointSize: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The vertical scaling applied to the 
			 * LayoutGridDataInformation.
			 * @type {number}
			 */
			public verticalScale: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerLayoutGridDataInformation(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerLayoutGridDataInformation(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}