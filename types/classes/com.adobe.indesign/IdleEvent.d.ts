/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Event */
		class IdleEvent extends Adobe.Indesign.Event {
			/**
			 * If true, the event supports the bubbling phase of 
			 * propagation.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly bubbles: boolean;
			/**
			 * If true, the default behavior of the event on its target can 
			 * be canceled.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly cancelable: boolean;
			/**
			 * The current propagation target of the event.
			 * @type {any}
			 * @readonly
			 */
			public readonly currentTarget: any;
			/**
			 * If true, the default behavior of the event on its target has 
			 * been canceled.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly defaultPrevented: boolean;
			/**
			 * The current propagation phase of the event.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public readonly eventPhase: Adobe.Indesign.EventPhases;
			/**
			 * The name of the event.
			 * @type {string}
			 * @readonly
			 */
			public readonly eventType: string;
			/**
			 * The unique ID of the IdleEvent.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the IdleEvent within its containing object.
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
			 * Dispatched at idle time for this IdleEvent. This event does 
			 * not bubble. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly ON_IDLE: string;
			/**
			 * The parent of the IdleEvent (a IdleTask).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, propagation of the event beyond the current target 
			 * has been stopped.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly propagationStopped: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The target of the event.
			 * @type {any}
			 * @readonly
			 */
			public readonly target: any;
			/**
			 * Amount of time allocated to this task at the time the event 
			 * was dispatched.
			 * @type {number}
			 * @readonly
			 */
			public readonly timeAllocated: number;
			/**
			 * The time the event was initialized.
			 * @type {Date}
			 * @readonly
			 */
			public readonly timeStamp: Date;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Cancels the default behavior of the event on its target.
			 * @returns {void}
			 */
			public preventDefault(): void;
			/**
			 * Stops propagation of the event beyond the current target.
			 * @returns {void}
			 */
			public stopPropagation(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}