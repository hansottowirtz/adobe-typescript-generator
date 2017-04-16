/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** HyperlinkTextSource */
		class CrossReferenceSource extends Adobe.Indesign.HyperlinkTextSource {
			/** Character style of the hyperlink text source. */
			public appliedCharacterStyle: Adobe.Indesign.CharacterStyle;
			/** Format used for cross reference source. */
			public appliedFormat: Adobe.Indesign.CrossReferenceFormat;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** If true, the hyperlink is hidden. */
			public readonly hidden: boolean;
			/** The unique ID of the CrossReferenceSource. */
			public readonly id: number;
			/**
			 * The index of the CrossReferenceSource within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the CrossReferenceSource. */
			public name: string;
			/** The parent of the CrossReferenceSource (a Document). */
			public readonly parent: Adobe.Indesign.Document;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The hyperlinked text or insertion point. */
			public sourceText: Adobe.Indesign.Text;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerCrossReferenceSource(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			/** Deletes the CrossReferenceSource. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerCrossReferenceSource(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Jumps to the hyperlink source. */
			public showSource(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/** Updates cross reference text source content. */
			public update(): void;
		}
	}
}