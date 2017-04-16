/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.BuildingBlock}
			 */
			public add(blockTypeParam: BuildingBlockTypes, appliedCharacterStyleParam: CharacterStyle, customTextParam: string, withPropertiesParam: any): Adobe.Indesign.BuildingBlock;
			/**
			 * Returns any BuildingBlock in the collection.
			 * @returns {Adobe.Indesign.BuildingBlock}
			 */
			public anyItem(): Adobe.Indesign.BuildingBlock;
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
			 * @returns {Adobe.Indesign.BuildingBlock}
			 */
			public firstItem(): Adobe.Indesign.BuildingBlock;
			/**
			 * Returns the BuildingBlock with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.BuildingBlock}
			 */
			public item(indexParam: any): Adobe.Indesign.BuildingBlock;
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
			 * @returns {Adobe.Indesign.BuildingBlock}
			 */
			public lastItem(): Adobe.Indesign.BuildingBlock;
			/**
			 * Returns the middle BuildingBlock in the collection.
			 * @returns {Adobe.Indesign.BuildingBlock}
			 */
			public middleItem(): Adobe.Indesign.BuildingBlock;
			/**
			 * Returns the BuildingBlock whose index follows the specified 
			 * BuildingBlock in the collection.
			 * @param {BuildingBlock} objParam The BuildingBlock whose 
			 * index comes before the desired BuildingBlock. 
			 * @returns {Adobe.Indesign.BuildingBlock}
			 */
			public nextItem(objParam: BuildingBlock): Adobe.Indesign.BuildingBlock;
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
			 * @returns {Adobe.Indesign.BuildingBlock}
			 */
			public previousItem(objParam: BuildingBlock): Adobe.Indesign.BuildingBlock;
		}
	}
}