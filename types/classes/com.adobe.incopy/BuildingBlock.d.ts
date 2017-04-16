/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BuildingBlock extends Adobe.Csawlib.CSHostObject {
			/**
			 * Character style to be applied to the building block.
			 * @type {Adobe.Incopy.CharacterStyle}
			 */
			public appliedCharacterStyle: Adobe.Incopy.CharacterStyle;
			/**
			 * Delimiter character for paragraph text and full paragraph 
			 * building blocks. It is ignored for other types of building 
			 * blocks.
			 * @type {string}
			 */
			public appliedDelimiter: string;
			/**
			 * Type of the building block.
			 * @type {Adobe.Incopy.BuildingBlockTypes}
			 */
			public blockType: Adobe.Incopy.BuildingBlockTypes;
			/**
			 * Building block custom text. Currently this is only useful in 
			 * custom string building block. It is ignored for other types 
			 * of building blocks.
			 * @type {string}
			 */
			public customText: string;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * If true, the source generated for the building block 
			 * includes the delimiter. It is ignored if no delimiter is 
			 * specified on the building block.
			 * @type {boolean}
			 */
			public includeDelimiter: boolean;
			/**
			 * The index of the BuildingBlock within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the BuildingBlock (a CrossReferenceFormat).
			 * @type {Adobe.Incopy.CrossReferenceFormat}
			 * @readonly
			 */
			public readonly parent: Adobe.Incopy.CrossReferenceFormat;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerBuildingBlock(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the BuildingBlock.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerBuildingBlock(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}