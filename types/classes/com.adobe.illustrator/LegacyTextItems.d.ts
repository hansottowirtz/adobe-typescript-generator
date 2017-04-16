/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of legacy text items */
		class LegacyTextItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create text frames from all legacy text items. The original 
			 * legacy text items will be deleted.
			 * @returns {boolean}
			 */
			public convertToNative(): boolean;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.LegacyTextItem}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.LegacyTextItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.LegacyTextItem}
			 */
			[idx: number]: Adobe.Illustrator.LegacyTextItem;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}