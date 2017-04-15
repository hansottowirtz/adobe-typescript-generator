/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ObjectStyleGroup extends Adobe.Csawlib.CSHostObject {
			/** All object styles contained by the ObjectStyleGroup. */
			public readonly allObjectStyles: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The unique ID of the ObjectStyleGroup. */
			public readonly id: number;
			/**
			 * The index of the ObjectStyleGroup within its containing 
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
			/** The name of the ObjectStyleGroup. */
			public name: string;
			/** A collection of object style groups. */
			public readonly objectStyleGroups: Adobe.Indesign.ObjectStyleGroups;
			/** A collection of object styles. */
			public readonly objectStyles: Adobe.Indesign.ObjectStyles;
			/**
			 * The parent of the ObjectStyleGroup (a Document, Application 
			 * or ObjectStyleGroup).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerObjectStyleGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the ObjectStyleGroup. */
			public duplicate(): Adobe.Indesign.ObjectStyleGroup;
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
			/**
			 * Moves the ObjectStyleGroup to the specified location.
			 * @param {LocationOptions} toParam - The new location relative 
			 * to the reference object or within the container object.
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required when the to parameter is before or after. Can 
			 * accept: ObjectStyle, ObjectStyleGroup, Document or 
			 * Application. (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Deletes the ObjectStyleGroup.
			 * @param {ObjectStyle} replacingWithParam - The 
			 * ObjectStyleGroup to apply in place of the deleted 
			 * ObjectStyleGroup. (Optional)
			 */
			public remove(replacingWithParam: ObjectStyle): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerObjectStyleGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}