/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CharacterStyleGroup extends Adobe.Csawlib.CSHostObject {
			/**
			 * Lists all character styles (regardless of their group).
			 * @type {any}
			 * @readonly
			 */
			public readonly allCharacterStyles: any;
			/**
			 * A collection of character style groups.
			 * @type {Adobe.Incopy.CharacterStyleGroups}
			 * @readonly
			 */
			public readonly characterStyleGroups: Adobe.Incopy.CharacterStyleGroups;
			/**
			 * A collection of character styles.
			 * @type {Adobe.Incopy.CharacterStyles}
			 * @readonly
			 */
			public readonly characterStyles: Adobe.Incopy.CharacterStyles;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
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
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerCharacterStyleGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Duplicates the CharacterStyleGroup.
			 * @returns {Adobe.Incopy.CharacterStyleGroup}
			 */
			public duplicate(): Adobe.Incopy.CharacterStyleGroup;
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
			 * @returns {Adobe.Incopy.CharacterStyleGroup}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Incopy.CharacterStyleGroup;
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