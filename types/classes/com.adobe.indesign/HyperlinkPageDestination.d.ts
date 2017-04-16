/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HyperlinkPageDestination extends Adobe.Csawlib.CSHostObject {
			/**
			 * The page that the hyperlink points to.
			 * @type {Adobe.Indesign.Page}
			 */
			public destinationPage: Adobe.Indesign.Page;
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
			 * If true, the hyperlink is hidden.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly hidden: boolean;
			/**
			 * The unique ID of the HyperlinkPageDestination.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the HyperlinkPageDestination within its 
			 * containing object.
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
			 * The name of the HyperlinkPageDestination.
			 * @type {string}
			 */
			public name: string;
			/**
			 * If true or unspecified, allows a custom destination name; 
			 * also does not update the name when the destination is moved 
			 * to a different page. If false, uses the page number as the 
			 * page destination name and makes the name property read-only 
			 * for the destination object; also updates the name when the 
			 * destination is moved to a different page.
			 * @type {boolean}
			 */
			public nameManually: boolean;
			/**
			 * The parent of the HyperlinkPageDestination (a Document).
			 * @type {Adobe.Indesign.Document}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The view rectangle, specified in the format [y1, x1, y2, 
			 * x2]. Note: Valid only when view setting is fixed. Can 
			 * return: Ordered array containing top:Unit, left:Unit, 
			 * bottom:Unit, right:Unit.
			 * @type {any}
			 */
			public viewBounds: any;
			/**
			 * The zoom percentage. (Range: 5 to 4000) Note: Valid only 
			 * when view setting is fixed.
			 * @type {number}
			 */
			public viewPercentage: number;
			/**
			 * The destination page size when the page is reached by 
			 * clicking the hyperlink.
			 * @type {Adobe.Indesign.HyperlinkDestinationPageSetting}
			 */
			public viewSetting: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerHyperlinkPageDestination(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Deletes the HyperlinkPageDestination.
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
			public removeEventListenerHyperlinkPageDestination(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Jumps to the hyperlink destination.
			 * @returns {void}
			 */
			public showDestination(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}