/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Dialog extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, creates a Cancel button in the dialog that allows 
			 * users to close the dialog without saving any selections. If 
			 * false, the dialog contains an OK button but no Cancel 
			 * button.
			 */
			public canCancel: boolean;
			/** A collection of dialog columns. */
			public readonly dialogColumns: Adobe.Incopy.DialogColumns;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The unique ID of the Dialog. */
			public readonly id: number;
			/** The index of the Dialog within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the Dialog. */
			public name: string;
			/** The parent of the Dialog (a Application). */
			public readonly parent: Adobe.Incopy.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDialog(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Destroys the dialog object. Note: Dialog objects remain in 
			 * memory until you destroy them or quit the program.
			 */
			public destroy(): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerDialog(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Displays the dialog. */
			public show(): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}