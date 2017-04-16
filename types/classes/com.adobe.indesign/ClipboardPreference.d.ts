/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class ClipboardPreference extends Adobe.Indesign.Preference {
			/** If true, copies PDF to the clipboard. */
			public copyPDFToClipboard: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the ClipboardPreference (a Application). */
			public readonly parent: any;
			/**
			 * If true, objects cut or copied from different layers retain 
			 * their layer assignment when pasted.
			 */
			public pasteRemembersLayers: boolean;
			/** If true, pastes PDF if available. */
			public preferPDFWhenPasting: boolean;
			/** If true, includes text attributes when pasting text. */
			public preferStyledTextWhenPasting: boolean;
			/**
			 * If true, preserves PDF data on the system clipboard when the 
			 * application exits.
			 */
			public preservePdfClipboardAtQuit: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerClipboardPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerClipboardPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}