/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImportExportEvent extends Adobe.Indesign.Event {
			/**
			 * Dispatched after a ImportExportEvent is exported. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_EXPORT: string;
			/**
			 * Dispatched after importing a file into a ImportExportEvent. 
			 * This event bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_IMPORT: string;
			/**
			 * Dispatched before a ImportExportEvent is exported. This 
			 * event bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_EXPORT: string;
			/**
			 * Dispatched before importing a file into a ImportExportEvent. 
			 * This event bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_IMPORT: string;
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
			public readonly eventPhase: Adobe.Indesign.EventPhases;
			/** The name of the event. */
			public readonly eventType: string;
			/**
			 * Dispatched after a ImportExportEvent export is canceled or 
			 * fails. This event bubbles. This event is not cancelable.
			 */
			public static readonly FAILED_EXPORT: string;
			/** The import/export file format. */
			public readonly format: string;
			/**
			 * The full path to the ImportExportEvent, including the name 
			 * of the ImportExportEvent.
			 */
			public readonly fullName: File;
			/** The unique ID of the ImportExportEvent. */
			public readonly id: number;
			/**
			 * The index of the ImportExportEvent within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the ImportExportEvent (a Application or 
			 * Document).
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
			public userInteractionLevel: Adobe.Indesign.UserInteractionLevels;
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