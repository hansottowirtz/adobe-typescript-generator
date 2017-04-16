/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of legacy text items */
		class LegacyTextItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * create text frames from all legacy text items. The original 
			 * legacy text items will be deleted.
			 */
			public convertToNative(): boolean;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 */
			public getByName(nameParam: string): Adobe.Illustrator.LegacyTextItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Illustrator.LegacyTextItem;
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
			public removeAll(): void;
		}
	}
}