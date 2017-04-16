/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CompositeFontEntry extends Adobe.Csawlib.CSHostObject {
			/**
			 * The font applied to the CompositeFontEntry, specified as 
			 * either a font object or the name of font family. Can return: 
			 * Font or String.
			 * @type {any}
			 */
			public appliedFont: any;
			/**
			 * The amount of baseline shift.
			 * @type {number}
			 */
			public baselineShift: number;
			/**
			 * The characters that the set affects.
			 * @type {string}
			 */
			public customCharacters: string;
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
			 * The horizontal scaling applied to the CompositeFontEntry.
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * The unique ID of the CompositeFontEntry.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the CompositeFontEntry within its containing 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * If true, the CompositeFontEntry is locked.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly locked: boolean;
			/**
			 * The name of the CompositeFontEntry.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the CompositeFontEntry (a CompositeFont).
			 * @type {Adobe.Indesign.CompositeFont}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.CompositeFont;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The size of the entry relative to the base entry. Note: The 
			 * base entry cannot be modified.
			 * @type {number}
			 */
			public relativeSize: number;
			/**
			 * If true, scales characters from the center.
			 * @type {boolean}
			 */
			public scaleOption: boolean;
			/**
			 * The vertical scaling applied to the CompositeFontEntry.
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
			public addEventListenerCompositeFontEntry(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Deletes the CompositeFontEntry.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerCompositeFontEntry(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}