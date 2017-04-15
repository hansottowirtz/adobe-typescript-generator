/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TimingTarget extends Adobe.Csawlib.CSHostObject {
			/**
			 * The time delay in seconds for a single target or a group of 
			 * targets after the previoius group has finished.
			 */
			public delaySeconds: number;
			/**
			 * A page item target that is an animation, media, or mso. Can 
			 * return: PageItem, Graphic, Behavior or MediaItem.
			 */
			public dynamicTarget: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the TimingTarget within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the TimingTarget (a TimingGroup). */
			public readonly parent: Adobe.Indesign.TimingGroup;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Set to true if reversing animation on rolloff. Valid only 
			 * for self rolloff trigger event.
			 */
			public reverseAnimation: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTimingTarget(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.TimingTarget;
			/** Deletes the TimingTarget. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTimingTarget(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Unlink target from this group and append to the end of this 
			 * timing list.
			 */
			public unlink(): void;
		}
	}
}