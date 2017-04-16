/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RuleDataObject extends Adobe.Csawlib.CSHostObject {
			/** The type of data. */
			public readonly dataType: Adobe.Indesign.RuleDataType;
			/**
			 * The value for this data object. Can return: String, Real, 
			 * Long Integer, Short Integer, Boolean, Object or Array of 
			 * Strings, Reals, Long Integers, Short Integers, Booleans, 
			 * Objects or Arrays of Array of Arrays of Array of Strings, 
			 * Reals, Long Integers, Short Integers, Booleans or Objects.
			 */
			public dataValue: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The ID for this rule data object. */
			public readonly id: string;
			/**
			 * The index of the RuleDataObject within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the RuleDataObject. */
			public readonly name: string;
			/**
			 * The parent of the RuleDataObject (a PreflightProfileRule or 
			 * PreflightRuleInstance).
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
			public addEventListenerRuleDataObject(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the RuleDataObject. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerRuleDataObject(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}