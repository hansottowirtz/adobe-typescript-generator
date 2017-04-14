/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Artboards extends IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** add artboard object */
			public add(artboardRect: any[]): Artboard;
			/**
			 * Retrieves the index position of the active artboard in the 
			 * document's list.
			 */
			public getActiveArtboardIndex(): number;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): Artboard;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			/** Delete artboard object. */
			public remove(index: number): void;
			public removeAll(): void;
			/**
			 * Makes a specific artboard active, and makes it current in 
			 * the iteration order.
			 */
			public setActiveArtboardIndex(index: number): void;
		}
	}
}