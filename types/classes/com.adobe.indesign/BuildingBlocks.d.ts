/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BuildingBlocks extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new cross reference building block.
			 * @param {BuildingBlockTypes} blockTypeParam - Type of the 
			 * building block.
			 * @param {CharacterStyle} appliedCharacterStyleParam - 
			 * Character style to be applied to the building block. 
			 * (Optional)
			 * @param {string} customTextParam - Building block custom 
			 * text. Currently this is only useful in custom string 
			 * building block. It is ignored for other types of building 
			 * blocks. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new BuildingBlock (Optional)
			 */
			public add(blockTypeParam: BuildingBlockTypes, appliedCharacterStyleParam: CharacterStyle, customTextParam: string, withPropertiesParam: any): Adobe.Indesign.BuildingBlock;
			/** Returns any BuildingBlock in the collection. */
			public anyItem(): Adobe.Indesign.BuildingBlock;
			/** Displays the number of elements in the BuildingBlock. */
			public count(): number;
			/** Returns every BuildingBlock in the collection. */
			public everyItem(): any;
			/** Returns the first BuildingBlock in the collection. */
			public firstItem(): Adobe.Indesign.BuildingBlock;
			/**
			 * Returns the BuildingBlock with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.BuildingBlock;
			/**
			 * Returns the BuildingBlocks within the specified range.
			 * @param {any} fromParam - The BuildingBlock, index, or name 
			 * at the beginning of the range. Can accept: BuildingBlock, 
			 * Long Integer or String.
			 * @param {any} toParam - The BuildingBlock, index, or name at 
			 * the end of the range. Can accept: BuildingBlock, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last BuildingBlock in the collection. */
			public lastItem(): Adobe.Indesign.BuildingBlock;
			/** Returns the middle BuildingBlock in the collection. */
			public middleItem(): Adobe.Indesign.BuildingBlock;
			/**
			 * Returns the BuildingBlock whose index follows the specified 
			 * BuildingBlock in the collection.
			 * @param {BuildingBlock} objParam - The BuildingBlock whose 
			 * index comes before the desired BuildingBlock. 
			 */
			public nextItem(objParam: BuildingBlock): Adobe.Indesign.BuildingBlock;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the BuildingBlock with the index previous to the 
			 * specified index.
			 * @param {BuildingBlock} objParam - The index of the 
			 * BuildingBlock that follows the desired BuildingBlock.
			 */
			public previousItem(objParam: BuildingBlock): Adobe.Indesign.BuildingBlock;
		}
	}
}