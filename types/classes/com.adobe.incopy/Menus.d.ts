/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Menus extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Menu in the collection. */
			public anyItem(): Adobe.Incopy.Menu;
			/** Displays the number of elements in the Menu. */
			public count(): number;
			/** Returns every Menu in the collection. */
			public everyItem(): any;
			/** Returns the first Menu in the collection. */
			public firstItem(): Adobe.Incopy.Menu;
			/**
			 * Returns the Menu with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Menu;
			/**
			 * Returns the Menu with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Menu;
			/**
			 * Returns the Menus within the specified range.
			 * @param {any} fromParam - The Menu, index, or name at the 
			 * beginning of the range. Can accept: Menu, Long Integer or 
			 * String.
			 * @param {any} toParam - The Menu, index, or name at the end 
			 * of the range. Can accept: Menu, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Menu in the collection. */
			public lastItem(): Adobe.Incopy.Menu;
			/** Returns the middle Menu in the collection. */
			public middleItem(): Adobe.Incopy.Menu;
			/**
			 * Returns the Menu whose index follows the specified Menu in 
			 * the collection.
			 * @param {Menu} objParam - The Menu whose index comes before 
			 * the desired Menu. 
			 */
			public nextItem(objParam: Menu): Adobe.Incopy.Menu;
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
			 * Returns the Menu with the index previous to the specified 
			 * index.
			 * @param {Menu} objParam - The index of the Menu that follows 
			 * the desired Menu.
			 */
			public previousItem(objParam: Menu): Adobe.Incopy.Menu;
		}
	}
}