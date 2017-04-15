/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Hyperlink extends Adobe.Csawlib.CSHostObject {
			/**
			 * The hyperlink border color. Can return: Array of 3 Reals (0 
			 * - 255) or UIColors enumerator.
			 */
			public borderColor: any;
			/** The hyperlink border style. */
			public borderStyle: Adobe.Incopy.HyperlinkAppearanceStyle;
			/**
			 * The text, page, paragraph, or URL that the hyperlink points 
			 * to. Can return: HyperlinkTextDestination, 
			 * HyperlinkExternalPageDestination, HyperlinkURLDestination or 
			 * ParagraphDestination.
			 */
			public destination: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** If true, the hyperlink is hidden. */
			public readonly hidden: boolean;
			/** The hyperlink highlight style. */
			public highlight: Adobe.Incopy.HyperlinkAppearanceHighlight;
			/** The unique ID of the Hyperlink. */
			public readonly id: number;
			/** The index of the Hyperlink within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the Hyperlink. */
			public name: string;
			/** The parent of the Hyperlink (a Document). */
			public readonly parent: Adobe.Incopy.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The hyperlinked text or page item. Can return: 
			 * HyperlinkPageItemSource, HyperlinkTextSource or 
			 * CrossReferenceSource.
			 */
			public source: any;
			/** If true, the Hyperlink is visible. */
			public visible: boolean;
			/** The stroke weight of the hyperlink border. */
			public width: Adobe.Incopy.HyperlinkAppearanceWidth;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerHyperlink(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
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
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/** Deletes the Hyperlink. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerHyperlink(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Jumps to the hyperlink destination. */
			public showDestination(): void;
			/** Jumps to the hyperlink source. */
			public showSource(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}