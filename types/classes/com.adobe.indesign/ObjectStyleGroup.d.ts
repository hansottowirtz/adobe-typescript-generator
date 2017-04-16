/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ObjectStyleGroup extends Adobe.Csawlib.CSHostObject {
			/**
			 * All object styles contained by the ObjectStyleGroup.
			 * @type {any}
			 * @readonly
			 */
			public readonly allObjectStyles: any;
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
			 * The unique ID of the ObjectStyleGroup.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the ObjectStyleGroup within its containing 
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
			 * The name of the ObjectStyleGroup.
			 * @type {string}
			 */
			public name: string;
			/**
			 * A collection of object style groups.
			 * @type {Adobe.Indesign.ObjectStyleGroups}
			 * @readonly
			 */
			public readonly objectStyleGroups: Adobe.Indesign.ObjectStyleGroups;
			/**
			 * A collection of object styles.
			 * @type {Adobe.Indesign.ObjectStyles}
			 * @readonly
			 */
			public readonly objectStyles: Adobe.Indesign.ObjectStyles;
			/**
			 * The parent of the ObjectStyleGroup (a Document, Application 
			 * or ObjectStyleGroup).
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
			public addEventListenerObjectStyleGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the ObjectStyleGroup.
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public duplicate(): Adobe.Indesign.ObjectStyleGroup;
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
			 * Moves the ObjectStyleGroup to the specified location.
			 * @param {LocationOptions} toParam The new location relative 
			 * to the reference object or within the container object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter is before or after. Can 
			 * accept: ObjectStyle, ObjectStyleGroup, Document or 
			 * Application. (Optional)
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Deletes the ObjectStyleGroup.
			 * @param {ObjectStyle} replacingWithParam The ObjectStyleGroup 
			 * to apply in place of the deleted ObjectStyleGroup. 
			 * (Optional)
			 * @returns {void}
			 */
			public remove(replacingWithParam: ObjectStyle): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerObjectStyleGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}