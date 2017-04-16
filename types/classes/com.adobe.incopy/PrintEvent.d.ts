/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Event */
		class PrintEvent extends Adobe.Incopy.Event {
			/**
			 * Dispatched after a PrintEvent is printed. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_PRINT: string;
			/**
			 * Dispatched before a PrintEvent is printed. This event 
			 * bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_PRINT: string;
			/**
			 * If true, the event supports the bubbling phase of 
			 * propagation.
			 */
			public readonly bubbles: boolean;
			/**
			 * If true, the default behavior of the event on its target can 
			 * be canceled.
			 */
			public readonly cancelable: boolean;
			/** The current propagation target of the event. */
			public readonly currentTarget: any;
			/**
			 * If true, the default behavior of the event on its target has 
			 * been canceled.
			 */
			public readonly defaultPrevented: boolean;
			/** UI options for print document */
			public documentPrintUiOption: any;
			/** The current propagation phase of the event. */
			public readonly eventPhase: Adobe.Incopy.EventPhases;
			/** The name of the event. */
			public readonly eventType: string;
			/** The unique ID of the PrintEvent. */
			public readonly id: number;
			/** The index of the PrintEvent within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the PrintEvent (a Document). */
			public readonly parent: any;
			/**
			 * If true, propagation of the event beyond the current target 
			 * has been stopped.
			 */
			public readonly propagationStopped: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The target of the event. */
			public readonly target: any;
			/** The time the event was initialized. */
			public readonly timeStamp: Date;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Cancels the default behavior of the event on its target. */
			public preventDefault(): void;
			/** Stops propagation of the event beyond the current target. */
			public stopPropagation(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}