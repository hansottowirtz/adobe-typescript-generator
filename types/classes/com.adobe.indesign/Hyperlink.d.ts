/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Hyperlink extends Adobe.Csawlib.CSHostObject {
			/**
			 * The hyperlink border color. Can return: Array of 3 Reals (0 
			 * - 255) or UIColors enumerator.
			 * @type {any}
			 */
			public borderColor: any;
			/**
			 * The hyperlink border style.
			 * @type {Adobe.Indesign.HyperlinkAppearanceStyle}
			 */
			public borderStyle: Adobe.Indesign.HyperlinkAppearanceStyle;
			/**
			 * The text, page, or URL that the hyperlink points to. Can 
			 * return: HyperlinkTextDestination, HyperlinkPageDestination, 
			 * HyperlinkExternalPageDestination, HyperlinkURLDestination or 
			 * ParagraphDestination.
			 * @type {any}
			 */
			public destination: any;
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
			 * The hyperlink highlight style.
			 * @type {Adobe.Indesign.HyperlinkAppearanceHighlight}
			 */
			public highlight: Adobe.Indesign.HyperlinkAppearanceHighlight;
			/**
			 * The unique ID of the Hyperlink.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Hyperlink within its containing object.
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
			 * The name of the Hyperlink.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the Hyperlink (a Document).
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
			 * The hyperlinked text or page item. Can return: 
			 * HyperlinkPageItemSource, HyperlinkTextSource or 
			 * CrossReferenceSource.
			 * @type {any}
			 */
			public source: any;
			/**
			 * If true, the Hyperlink is visible.
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * The stroke weight of the hyperlink border.
			 * @type {Adobe.Indesign.HyperlinkAppearanceWidth}
			 */
			public width: Adobe.Indesign.HyperlinkAppearanceWidth;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerHyperlink(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Deletes the Hyperlink.
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
			public removeEventListenerHyperlink(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Jumps to the hyperlink destination.
			 * @returns {void}
			 */
			public showDestination(): void;
			/**
			 * Jumps to the hyperlink source.
			 * @returns {void}
			 */
			public showSource(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}