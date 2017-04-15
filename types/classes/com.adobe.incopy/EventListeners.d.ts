/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EventListeners extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new EventListener (Optional)
			 */
			public add(eventTypeParam: string, handlerParam: any, capturesParam: boolean, withPropertiesParam: any): Adobe.Incopy.EventListener;
			/** Returns any EventListener in the collection. */
			public anyItem(): Adobe.Incopy.EventListener;
			/** Displays the number of elements in the EventListener. */
			public count(): number;
			/** Returns every EventListener in the collection. */
			public everyItem(): any;
			/** Returns the first EventListener in the collection. */
			public firstItem(): Adobe.Incopy.EventListener;
			/**
			 * Returns the EventListener with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.EventListener;
			/**
			 * Returns the EventListener with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.EventListener;
			/**
			 * Returns the EventListener with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.EventListener;
			/**
			 * Returns the EventListeners within the specified range.
			 * @param {any} fromParam - The EventListener, index, or name 
			 * at the beginning of the range. Can accept: EventListener, 
			 * Long Integer or String.
			 * @param {any} toParam - The EventListener, index, or name at 
			 * the end of the range. Can accept: EventListener, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last EventListener in the collection. */
			public lastItem(): Adobe.Incopy.EventListener;
			/** Returns the middle EventListener in the collection. */
			public middleItem(): Adobe.Incopy.EventListener;
			/**
			 * Returns the EventListener whose index follows the specified 
			 * EventListener in the collection.
			 * @param {EventListener} objParam - The EventListener whose 
			 * index comes before the desired EventListener. 
			 */
			public nextItem(objParam: EventListener): Adobe.Incopy.EventListener;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the EventListener with the index previous to the 
			 * specified index.
			 * @param {EventListener} objParam - The index of the 
			 * EventListener that follows the desired EventListener.
			 */
			public previousItem(objParam: EventListener): Adobe.Incopy.EventListener;
		}
	}
}