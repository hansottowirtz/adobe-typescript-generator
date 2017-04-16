/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Event */
		class DocumentEvent extends Adobe.Incopy.Event {
			/**
			 * Dispatched after a Document is closed. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_CLOSE: string;
			/**
			 * Dispatched after a Document is created. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_NEW: string;
			/**
			 * Dispatched after a Document is opened. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_OPEN: string;
			/**
			 * Dispatched after a Document is reverted. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_REVERT: string;
			/**
			 * Dispatched after a Document is saved. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_SAVE: string;
			/**
			 * Dispatched after a copy of a Document is saved. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SAVE_A_COPY: string;
			/**
			 * Dispatched after a Document is saved under a new name. This 
			 * event bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SAVE_AS: string;
			/**
			 * Dispatched before a Document is closed. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly BEFORE_CLOSE: string;
			/**
			 * Dispatched before a Document is created. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_NEW: string;
			/**
			 * Dispatched before a Document is opened. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_OPEN: string;
			/**
			 * Dispatched before a Document is reverted. This event 
			 * bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_REVERT: string;
			/**
			 * Dispatched before a Document is saved. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_SAVE: string;
			/**
			 * Dispatched before a copy of a Document is saved. This event 
			 * bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_SAVE_A_COPY: string;
			/**
			 * Dispatched before a Document is saved under a new name. This 
			 * event bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_SAVE_AS: string;
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
			/** The current propagation phase of the event. */
			public readonly eventPhase: Adobe.Incopy.EventPhases;
			/** The name of the event. */
			public readonly eventType: string;
			/**
			 * The full path to the DocumentEvent, including the name of 
			 * the DocumentEvent.
			 */
			public readonly fullName: File;
			/** The unique ID of the DocumentEvent. */
			public readonly id: number;
			/**
			 * The index of the DocumentEvent within its containing object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the DocumentEvent (a Application or Document).
			 */
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
			 * Controls the display of dialogs and alerts during script 
			 * processing.
			 */
			public userInteractionLevel: Adobe.Incopy.UserInteractionLevels;
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