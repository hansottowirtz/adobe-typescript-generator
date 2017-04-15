/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextVariable extends Adobe.Csawlib.CSHostObject {
			/** Variable instances associated with the text variable. */
			public readonly associatedInstances: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The index of the TextVariable within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The name of the TextVariable. */
			public name: string;
			/** The parent of the TextVariable (a Application or Document). */
			public readonly parent: any;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The preferences associated with the text variable. Can 
			 * return: PageNumberVariablePreference, 
			 * ChapterNumberVariablePreference, DateVariablePreference, 
			 * FileNameVariablePreference, MatchCharacterStylePreference, 
			 * MatchParagraphStylePreference, CustomTextVariablePreference 
			 * or CaptionMetadataVariablePreference.
			 */
			public readonly variableOptions: any;
			/** The variable type. */
			public variableType: Adobe.Indesign.VariableTypes;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTextVariable(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Convert all of this variable's instances to text. */
			public convertToText(): any;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the TextVariable. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTextVariable(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}