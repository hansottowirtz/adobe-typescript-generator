/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class XMLPreference extends Adobe.Incopy.Preference {
			/**
			 * The color of the default cell tag, specified either as an 
			 * array of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Note: 
			 * Valid only when default cell tag name value creates a new 
			 * tag. Does not update the color of an existing tag. . Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator.
			 */
			public defaultCellTagColor: any;
			/**
			 * The name of the default tag to use for new table cell 
			 * elements. Note: Either specifies an existing tag or creates 
			 * a new tag.
			 */
			public defaultCellTagName: string;
			/**
			 * The color to give a new image tag, specified either as an 
			 * array of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Note: 
			 * Used only when the tag needs to be created. Can return: 
			 * Array of 3 Reals (0 - 255) or UIColors enumerator.
			 */
			public defaultImageTagColor: any;
			/**
			 * The default name for new image elements created 
			 * automatically.
			 */
			public defaultImageTagName: string;
			/**
			 * The color of the default story tag, specified either as an 
			 * array of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Notes: 
			 * Valid only when default story tag name value creates a new 
			 * tag. Does not update the color of an existing tag. Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator.
			 */
			public defaultStoryTagColor: any;
			/**
			 * The name of the default tag to use for new story elements. 
			 * Note: Either specifies an existing tag or creates a new tag.
			 */
			public defaultStoryTagName: string;
			/**
			 * The color of the default table tag, specified either as an 
			 * array of three doubles, each in the range 0 to 255 and 
			 * representing R, G, and B values, or as a UI color. Notes: 
			 * Valid only when default table tag name value creates a new 
			 * tag. Does not update the color of an existing tag. . Can 
			 * return: Array of 3 Reals (0 - 255) or UIColors enumerator.
			 */
			public defaultTableTagColor: any;
			/**
			 * The name of the default tag to use for new table elements. 
			 * Note: Either specifies an existing tag or creates a new tag.
			 */
			public defaultTableTagName: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the XMLPreference (a Application or Document).
			 */
			public readonly parent: any;
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
			public addEventListenerXMLPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerXMLPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}