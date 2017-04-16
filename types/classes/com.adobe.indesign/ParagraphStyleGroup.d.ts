/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ParagraphStyleGroup extends Adobe.Csawlib.CSHostObject {
			/** Lists all paragraph styles (regardless of their group). */
			public readonly allParagraphStyles: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the ParagraphStyleGroup. */
			public readonly id: number;
			/**
			 * The index of the ParagraphStyleGroup within its containing 
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
			/** The name of the ParagraphStyleGroup. */
			public name: string;
			/** A collection of paragraph style groups. */
			public readonly paragraphStyleGroups: Adobe.Indesign.ParagraphStyleGroups;
			/** A collection of paragraph styles. */
			public readonly paragraphStyles: Adobe.Indesign.ParagraphStyles;
			/**
			 * The parent of the ParagraphStyleGroup (a Document, 
			 * Application or ParagraphStyleGroup).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerParagraphStyleGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the ParagraphStyleGroup. */
			public duplicate(): Adobe.Indesign.ParagraphStyleGroup;
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
			/**
			 * Moves the style to the specified location.
			 * @param {LocationOptions} toParam The location relative to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: ParagraphStyle, ParagraphStyleGroup, 
			 * CharacterStyle, CharacterStyleGroup, CellStyle, 
			 * CellStyleGroup, TableStyle, TableStyleGroup, Document or 
			 * Application. (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.ParagraphStyleGroup;
			/**
			 * Deletes the style.
			 * @param {any} replacingWithParam The style to apply in place 
			 * of the deleted style. Can accept: ParagraphStyle or 
			 * CharacterStyle. (Optional)
			 */
			public remove(replacingWithParam: any): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerParagraphStyleGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}