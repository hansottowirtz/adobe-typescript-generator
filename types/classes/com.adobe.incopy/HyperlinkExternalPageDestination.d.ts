/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyperlinkExternalPageDestination extends Adobe.Csawlib.CSHostObject {
			/**
			 * The index of the page that the hyperlink destination points 
			 * to. Note: Valid only when hyperlink destination is an 
			 * external page.
			 */
			public destinationPageIndex: number;
			/**
			 * The path to the document that the hyperlink destination 
			 * points to.
			 */
			public documentPath: File;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** If true, the hyperlink is hidden. */
			public readonly hidden: boolean;
			/** The unique ID of the HyperlinkExternalPageDestination. */
			public readonly id: number;
			/**
			 * The index of the HyperlinkExternalPageDestination within its 
			 * containing object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the HyperlinkExternalPageDestination. */
			public readonly name: string;
			/**
			 * The parent of the HyperlinkExternalPageDestination (a 
			 * Document).
			 */
			public readonly parent: Adobe.Incopy.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The view rectangle, specified in the format [y1, x1, y2, 
			 * x2]. Note: Valid only when view setting is fixed. Can 
			 * return: Ordered array containing top:Unit, left:Unit, 
			 * bottom:Unit, right:Unit.
			 */
			public viewBounds: any;
			/**
			 * The zoom percentage. (Range: 5 to 4000) Note: Valid only 
			 * when view setting is fixed.
			 */
			public viewPercentage: number;
			/**
			 * The destination page size when the page is reached by 
			 * clicking the hyperlink.
			 */
			public viewSetting: Adobe.Incopy.HyperlinkDestinationPageSetting;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerHyperlinkExternalPageDestination(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/** Deletes the HyperlinkExternalPageDestination. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerHyperlinkExternalPageDestination(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Jumps to the hyperlink destination. */
			public showDestination(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}