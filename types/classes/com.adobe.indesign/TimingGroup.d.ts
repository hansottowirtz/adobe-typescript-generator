/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TimingGroup extends Adobe.Csawlib.CSHostObject {
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
			 * The index of the TimingGroup within its containing object.
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
			 * The parent of the TimingGroup (a TimingList).
			 * @type {Adobe.Indesign.TimingList}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.TimingList;
			/**
			 * The placement of the timing group in the timing list.
			 * @type {number}
			 */
			public placement: number;
			/**
			 * The number of times this timing group plays.
			 * @type {number}
			 */
			public plays: number;
			/**
			 * Set to true if timing group loops.
			 * @type {boolean}
			 */
			public playsLoop: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of timing target.
			 * @type {Adobe.Indesign.TimingTargets}
			 * @readonly
			 */
			public readonly timingTargets: Adobe.Indesign.TimingTargets;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerTimingGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Moves the timing group or target to the specified location.
			 * @param {LocationOptions} toParam The location in relation to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. . 
			 * Can accept: TimingGroup, TimingTarget or TimingList. 
			 * (Optional)
			 * @returns {Adobe.Indesign.TimingGroup}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.TimingGroup;
			/**
			 * Deletes the TimingGroup.
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
			public removeEventListenerTimingGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Unlink all targets in the group into separate groups in this 
			 * timing list.
			 * @returns {void}
			 */
			public unlink(): void;
		}
	}
}