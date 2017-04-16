/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ArticleMembers extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Adds a new member.
			 * @param {PageItem} itemRefParam page item to be added to 
			 * article
			 * @param {LocationOptions} atParam The location relative to 
			 * the reference object or within the containing object. 
			 * (Optional)
			 * @param {ArticleMember} referenceParam The reference object. 
			 * Note: Required when the to value specifies before or after. 
			 * (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ArticleMember (Optional)
			 * @returns {Adobe.Indesign.ArticleMember}
			 */
			public add(itemRefParam: PageItem, atParam: LocationOptions, referenceParam: ArticleMember, withPropertiesParam: any): Adobe.Indesign.ArticleMember;
			/**
			 * Returns any ArticleMember in the collection.
			 * @returns {Adobe.Indesign.ArticleMember}
			 */
			public anyItem(): Adobe.Indesign.ArticleMember;
			/**
			 * Displays the number of elements in the ArticleMember.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ArticleMember in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ArticleMember in the collection.
			 * @returns {Adobe.Indesign.ArticleMember}
			 */
			public firstItem(): Adobe.Indesign.ArticleMember;
			/**
			 * Returns the ArticleMember with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ArticleMember}
			 */
			public item(indexParam: any): Adobe.Indesign.ArticleMember;
			/**
			 * Returns the ArticleMember with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ArticleMember}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ArticleMember;
			/**
			 * Returns the ArticleMembers within the specified range.
			 * @param {any} fromParam The ArticleMember, index, or name at 
			 * the beginning of the range. Can accept: ArticleMember, Long 
			 * Integer or String.
			 * @param {any} toParam The ArticleMember, index, or name at 
			 * the end of the range. Can accept: ArticleMember, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ArticleMember in the collection.
			 * @returns {Adobe.Indesign.ArticleMember}
			 */
			public lastItem(): Adobe.Indesign.ArticleMember;
			/**
			 * Returns the middle ArticleMember in the collection.
			 * @returns {Adobe.Indesign.ArticleMember}
			 */
			public middleItem(): Adobe.Indesign.ArticleMember;
			/**
			 * Returns the ArticleMember whose index follows the specified 
			 * ArticleMember in the collection.
			 * @param {ArticleMember} objParam The ArticleMember whose 
			 * index comes before the desired ArticleMember. 
			 * @returns {Adobe.Indesign.ArticleMember}
			 */
			public nextItem(objParam: ArticleMember): Adobe.Indesign.ArticleMember;
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
			 * Returns the ArticleMember with the index previous to the 
			 * specified index.
			 * @param {ArticleMember} objParam The index of the 
			 * ArticleMember that follows the desired ArticleMember.
			 * @returns {Adobe.Indesign.ArticleMember}
			 */
			public previousItem(objParam: ArticleMember): Adobe.Indesign.ArticleMember;
		}
	}
}