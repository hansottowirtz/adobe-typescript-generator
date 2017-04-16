/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CharacterStyleGroup extends Adobe.Csawlib.CSHostObject {
			/**
			 * Lists all character styles (regardless of their group).
			 * @type {any}
			 * @readonly
			 */
			public readonly allCharacterStyles: any;
			/**
			 * A collection of character style groups.
			 * @type {Adobe.Indesign.CharacterStyleGroups}
			 * @readonly
			 */
			public readonly characterStyleGroups: Adobe.Indesign.CharacterStyleGroups;
			/**
			 * A collection of character styles.
			 * @type {Adobe.Indesign.CharacterStyles}
			 * @readonly
			 */
			public readonly characterStyles: Adobe.Indesign.CharacterStyles;
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
			 * The unique ID of the CharacterStyleGroup.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the CharacterStyleGroup within its containing 
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
			 * The name of the CharacterStyleGroup.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the CharacterStyleGroup (a Document, 
			 * Application or CharacterStyleGroup).
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerCharacterStyleGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the CharacterStyleGroup.
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public duplicate(): Adobe.Indesign.CharacterStyleGroup;
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
			 * Moves the style to the specified location.
			 * @param {LocationOptions} toParam The location relative to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: ParagraphStyle, ParagraphStyleGroup, 
			 * CharacterStyle, CharacterStyleGroup, CellStyle, 
			 * CellStyleGroup, TableStyle, TableStyleGroup, Document or 
			 * Application. (Optional)
			 * @returns {Adobe.Indesign.CharacterStyleGroup}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.CharacterStyleGroup;
			/**
			 * Deletes the style.
			 * @param {any} replacingWithParam The style to apply in place 
			 * of the deleted style. Can accept: ParagraphStyle or 
			 * CharacterStyle. (Optional)
			 * @returns {void}
			 */
			public remove(replacingWithParam: any): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerCharacterStyleGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}