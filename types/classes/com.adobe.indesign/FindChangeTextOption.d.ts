/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FindChangeTextOption extends Adobe.Indesign.Preference {
			/**
			 * If true, finds strings whose use of case matches the find 
			 * text string. If false, finds strings that match the find 
			 * text string regardless of case.
			 */
			public caseSensitive: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** If true, ignore diacs in the find/change query. */
			public ignoreDiacritics: boolean;
			/** If true, ignore kashidas in the find/change query. */
			public ignoreKashidas: boolean;
			/** If true, includes footnotes in the find/change query. */
			public includeFootnotes: boolean;
			/** If true, includes hidden layers in the find/change query. */
			public includeHiddenLayers: boolean;
			/** If true, includes locked layers in the find query. */
			public includeLockedLayersForFind: boolean;
			/** If true, includes locked stories in the find query. */
			public includeLockedStoriesForFind: boolean;
			/** If true, includes master pages in the find/change query. */
			public includeMasterPages: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * If true, finds only text that matches the specified kana 
			 * type.
			 */
			public kanaSensitive: boolean;
			/** The parent of the FindChangeTextOption (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, finds only the complete find text string. If false, 
			 * also finds strings that contain the find text string.
			 */
			public wholeWord: boolean;
			/**
			 * If true, finds only text that matches the specified 
			 * character width.
			 */
			public widthSensitive: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFindChangeTextOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFindChangeTextOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}