/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BuildingBlocks extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new cross reference building block.
			 * @param {BuildingBlockTypes} blockTypeParam Type of the 
			 * building block.
			 * @param {CharacterStyle} appliedCharacterStyleParam Character 
			 * style to be applied to the building block. (Optional)
			 * @param {string} customTextParam Building block custom text. 
			 * Currently this is only useful in custom string building 
			 * block. It is ignored for other types of building blocks. 
			 * (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new BuildingBlock (Optional)
			 * @returns {Adobe.Incopy.BuildingBlock}
			 */
			public add(blockTypeParam: BuildingBlockTypes, appliedCharacterStyleParam: CharacterStyle, customTextParam: string, withPropertiesParam: any): Adobe.Incopy.BuildingBlock;
			/**
			 * Returns any BuildingBlock in the collection.
			 * @returns {Adobe.Incopy.BuildingBlock}
			 */
			public anyItem(): Adobe.Incopy.BuildingBlock;
			/**
			 * Displays the number of elements in the BuildingBlock.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every BuildingBlock in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first BuildingBlock in the collection.
			 * @returns {Adobe.Incopy.BuildingBlock}
			 */
			public firstItem(): Adobe.Incopy.BuildingBlock;
			/**
			 * Returns the BuildingBlock with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.BuildingBlock}
			 */
			public item(indexParam: any): Adobe.Incopy.BuildingBlock;
			/**
			 * Returns the BuildingBlocks within the specified range.
			 * @param {any} fromParam The BuildingBlock, index, or name at 
			 * the beginning of the range. Can accept: BuildingBlock, Long 
			 * Integer or String.
			 * @param {any} toParam The BuildingBlock, index, or name at 
			 * the end of the range. Can accept: BuildingBlock, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last BuildingBlock in the collection.
			 * @returns {Adobe.Incopy.BuildingBlock}
			 */
			public lastItem(): Adobe.Incopy.BuildingBlock;
			/**
			 * Returns the middle BuildingBlock in the collection.
			 * @returns {Adobe.Incopy.BuildingBlock}
			 */
			public middleItem(): Adobe.Incopy.BuildingBlock;
			/**
			 * Returns the BuildingBlock whose index follows the specified 
			 * BuildingBlock in the collection.
			 * @param {BuildingBlock} objParam The BuildingBlock whose 
			 * index comes before the desired BuildingBlock. 
			 * @returns {Adobe.Incopy.BuildingBlock}
			 */
			public nextItem(objParam: BuildingBlock): Adobe.Incopy.BuildingBlock;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the BuildingBlock with the index previous to the 
			 * specified index.
			 * @param {BuildingBlock} objParam The index of the 
			 * BuildingBlock that follows the desired BuildingBlock.
			 * @returns {Adobe.Incopy.BuildingBlock}
			 */
			public previousItem(objParam: BuildingBlock): Adobe.Incopy.BuildingBlock;
		}
	}
}