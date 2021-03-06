/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Behavior */
		class GotoStateBehavior extends Adobe.Indesign.Behavior {
			/**
			 * The associated multi-state object page item.
			 * @type {Adobe.Indesign.MultiStateObject}
			 */
			public associatedMultiStateObject: Adobe.Indesign.MultiStateObject;
			/**
			 * The event which triggers the behavior.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 */
			public behaviorEvent: Adobe.Indesign.BehaviorEvents;
			/**
			 * If true, the behavior is enabled.
			 * @type {boolean}
			 */
			public enableBehavior: boolean;
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
			 * If true, will automatically go back to the prior state on 
			 * roll off of the rollover event.
			 * @type {boolean}
			 */
			public goBackOnRollOff: boolean;
			/**
			 * The unique ID of the GotoStateBehavior.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the GotoStateBehavior within its containing 
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
			 * The name of the GotoStateBehavior.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The parent of the GotoStateBehavior (a Button).
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
			 * The name of the state in the associated multi-state object.
			 * @type {string}
			 */
			public stateName: string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerGotoStateBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * Deletes the GotoStateBehavior.
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
			public removeEventListenerGotoStateBehavior(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}