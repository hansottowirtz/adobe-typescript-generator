/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Ink extends Adobe.Csawlib.CSHostObject {
			/** The ink object to map this ink to. */
			public aliasInkName: string;
			/** The angle of the ink. (Range: 0 to 360) */
			public angle: number;
			/** Converts spot inks to process inks. */
			public convertToProcess: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The frequency of the ink. (Range: 1 to 500) */
			public frequency: number;
			/** The unique ID of the Ink. */
			public readonly id: number;
			/** The index of the Ink within its containing object. */
			public readonly index: number;
			/** The trapping type of the ink. */
			public inkType: Adobe.Indesign.InkTypes;
			/** If true, the ink is a process ink. */
			public readonly isProcessInk: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** The name of the Ink. */
			public readonly name: string;
			/** The neutral density of the ink. (Range: 0.001 to 10.0) */
			public neutralDensity: number;
			/** The parent of the Ink (a Application or Document). */
			public readonly parent: any;
			/**
			 * If true, prints the ink. Only valid when printing 
			 * separations.
			 */
			public printInk: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The solidity value of the ink. (Range: 0.0 to 1.0) */
			public readonly solidity: number;
			/** The place of the ink in the trapping sequence. */
			public trapOrder: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerInk(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerInk(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}