/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ArticleChildren extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any ArticleChild in the collection. */
			public anyItem(): Adobe.Indesign.ArticleChild;
			/** Displays the number of elements in the ArticleChild. */
			public count(): number;
			/** Returns every ArticleChild in the collection. */
			public everyItem(): any;
			/** Returns the first ArticleChild in the collection. */
			public firstItem(): Adobe.Indesign.ArticleChild;
			/**
			 * Returns the ArticleChild with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.ArticleChild;
			/**
			 * Returns the ArticleChild with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.ArticleChild;
			/**
			 * Returns the ArticleChildren within the specified range.
			 * @param {any} fromParam The ArticleChild, index, or name at 
			 * the beginning of the range. Can accept: ArticleChild, Long 
			 * Integer or String.
			 * @param {any} toParam The ArticleChild, index, or name at the 
			 * end of the range. Can accept: ArticleChild, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ArticleChild in the collection. */
			public lastItem(): Adobe.Indesign.ArticleChild;
			/** Returns the middle ArticleChild in the collection. */
			public middleItem(): Adobe.Indesign.ArticleChild;
			/**
			 * Returns the ArticleChild whose index follows the specified 
			 * ArticleChild in the collection.
			 * @param {ArticleChild} objParam The ArticleChild whose index 
			 * comes before the desired ArticleChild. 
			 */
			public nextItem(objParam: ArticleChild): Adobe.Indesign.ArticleChild;
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
			 * Returns the ArticleChild with the index previous to the 
			 * specified index.
			 * @param {ArticleChild} objParam The index of the ArticleChild 
			 * that follows the desired ArticleChild.
			 */
			public previousItem(objParam: ArticleChild): Adobe.Indesign.ArticleChild;
		}
	}
}