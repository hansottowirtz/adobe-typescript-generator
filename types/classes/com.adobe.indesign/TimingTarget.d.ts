/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TimingTarget extends Adobe.Csawlib.CSHostObject {
			/**
			 * The time delay in seconds for a single target or a group of 
			 * targets after the previoius group has finished.
			 * @type {number}
			 */
			public delaySeconds: number;
			/**
			 * A page item target that is an animation, media, or mso. Can 
			 * return: PageItem, Graphic, Behavior or MediaItem.
			 * @type {any}
			 */
			public dynamicTarget: any;
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
			 * The index of the TimingTarget within its containing object.
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
			 * The parent of the TimingTarget (a TimingGroup).
			 * @type {Adobe.Indesign.TimingGroup}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.TimingGroup;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Set to true if reversing animation on rolloff. Valid only 
			 * for self rolloff trigger event.
			 * @type {boolean}
			 */
			public reverseAnimation: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerTimingTarget(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			 * @returns {Adobe.Indesign.TimingTarget}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.TimingTarget;
			/**
			 * Deletes the TimingTarget.
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
			public removeEventListenerTimingTarget(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Unlink target from this group and append to the end of this 
			 * timing list.
			 * @returns {void}
			 */
			public unlink(): void;
		}
	}
}