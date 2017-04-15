/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextEditingPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, allows text to be dragged and dropped in the story 
			 * editor or galley view.
			 */
			public allowDragAndDropTextInStory: boolean;
			/**
			 * If true, allows text to be dragged and dropped on a layout 
			 * page.
			 */
			public dragAndDropTextInLayout: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the TextEditingPreference (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, a single click (with the Type tool) converts 
			 * non-text frames to text frames.
			 */
			public singleClickConvertsFramesToTextFrames: boolean;
			/**
			 * If true, automatically adjusts spacing among words and 
			 * between words and punctuation marks when cutting and pasting 
			 * text.
			 */
			public smartCutAndPaste: boolean;
			/**
			 * If true, a triple click selects a line of text. If false, a 
			 * triple click selects a paragraph.
			 */
			public tripleClickSelectsLine: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTextEditingPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTextEditingPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}