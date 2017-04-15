/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CompositeFontEntry extends Adobe.Csawlib.CSHostObject {
			/**
			 * The font applied to the CompositeFontEntry, specified as 
			 * either a font object or the name of font family. Can return: 
			 * Font or String.
			 */
			public appliedFont: any;
			/** The amount of baseline shift. */
			public baselineShift: number;
			/** The characters that the set affects. */
			public customCharacters: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The name of the font style. */
			public fontStyle: string;
			/** The horizontal scaling applied to the CompositeFontEntry. */
			public horizontalScale: number;
			/** The unique ID of the CompositeFontEntry. */
			public readonly id: number;
			/**
			 * The index of the CompositeFontEntry within its containing 
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
			/** If true, the CompositeFontEntry is locked. */
			public readonly locked: boolean;
			/** The name of the CompositeFontEntry. */
			public name: string;
			/** The parent of the CompositeFontEntry (a CompositeFont). */
			public readonly parent: Adobe.Indesign.CompositeFont;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The size of the entry relative to the base entry. Note: The 
			 * base entry cannot be modified.
			 */
			public relativeSize: number;
			/** If true, scales characters from the center. */
			public scaleOption: boolean;
			/** The vertical scaling applied to the CompositeFontEntry. */
			public verticalScale: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerCompositeFontEntry(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			/** Deletes the CompositeFontEntry. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerCompositeFontEntry(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}