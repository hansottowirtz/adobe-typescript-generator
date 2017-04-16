/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BuildingBlock extends Adobe.Csawlib.CSHostObject {
			/** Character style to be applied to the building block. */
			public appliedCharacterStyle: Adobe.Incopy.CharacterStyle;
			/**
			 * Delimiter character for paragraph text and full paragraph 
			 * building blocks. It is ignored for other types of building 
			 * blocks.
			 */
			public appliedDelimiter: string;
			/** Type of the building block. */
			public blockType: Adobe.Incopy.BuildingBlockTypes;
			/**
			 * Building block custom text. Currently this is only useful in 
			 * custom string building block. It is ignored for other types 
			 * of building blocks.
			 */
			public customText: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * If true, the source generated for the building block 
			 * includes the delimiter. It is ignored if no delimiter is 
			 * specified on the building block.
			 */
			public includeDelimiter: boolean;
			/**
			 * The index of the BuildingBlock within its containing object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The parent of the BuildingBlock (a CrossReferenceFormat). */
			public readonly parent: Adobe.Incopy.CrossReferenceFormat;
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
			public addEventListenerBuildingBlock(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the BuildingBlock. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerBuildingBlock(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}