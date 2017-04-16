/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AssignedStory extends Adobe.Csawlib.CSHostObject {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The file path (colon delimited on the Mac OS). Can also 
			 * accept: File.
			 */
			public readonly filePath: string;
			/** The unique ID of the AssignedStory. */
			public readonly id: number;
			/**
			 * The index of the AssignedStory within its containing object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the AssignedStory. */
			public readonly name: string;
			/** The parent of the AssignedStory (a Assignment). */
			public readonly parent: Adobe.Incopy.Assignment;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * A reference to the assigned story. Can return: Story, 
			 * PageItem, Oval, Rectangle or Polygon.
			 */
			public readonly storyReference: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerAssignedStory(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
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
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerAssignedStory(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}