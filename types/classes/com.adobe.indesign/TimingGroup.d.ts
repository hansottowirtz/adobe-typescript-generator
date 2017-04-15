/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TimingGroup extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the TimingGroup within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the TimingGroup (a TimingList). */
			public readonly parent: Adobe.Indesign.TimingList;
			/** The placement of the timing group in the timing list. */
			public placement: number;
			/** The number of times this timing group plays. */
			public plays: number;
			/** Set to true if timing group loops. */
			public playsLoop: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of timing target. */
			public readonly timingTargets: Adobe.Indesign.TimingTargets;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTimingGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Moves the timing group or target to the specified location.
			 * @param {LocationOptions} toParam - The location in relation 
			 * to the reference object or within the containing object.
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required when the to parameter specifies before or after. . 
			 * Can accept: TimingGroup, TimingTarget or TimingList. 
			 * (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.TimingGroup;
			/** Deletes the TimingGroup. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTimingGroup(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Unlink all targets in the group into separate groups in this 
			 * timing list.
			 */
			public unlink(): void;
		}
	}
}