/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLComments extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new XML comment.
			 * @param {string} valueParam The value of the comment. 
			 * (Optional)
			 * @param {any} storyOffsetParam The location within the story, 
			 * specified as an insertion point. Can accept: InsertionPoint 
			 * or Long Integer. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLComment (Optional)
			 * @returns {Adobe.Incopy.XMLComment}
			 */
			public add(valueParam: string, storyOffsetParam: any, withPropertiesParam: any): Adobe.Incopy.XMLComment;
			/**
			 * Returns any XMLComment in the collection.
			 * @returns {Adobe.Incopy.XMLComment}
			 */
			public anyItem(): Adobe.Incopy.XMLComment;
			/**
			 * Displays the number of elements in the XMLComment.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every XMLComment in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first XMLComment in the collection.
			 * @returns {Adobe.Incopy.XMLComment}
			 */
			public firstItem(): Adobe.Incopy.XMLComment;
			/**
			 * Returns the XMLComment with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.XMLComment}
			 */
			public item(indexParam: any): Adobe.Incopy.XMLComment;
			/**
			 * Returns the XMLComment with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.XMLComment}
			 */
			public itemByID(idParam: number): Adobe.Incopy.XMLComment;
			/**
			 * Returns the XMLComments within the specified range.
			 * @param {any} fromParam The XMLComment, index, or name at the 
			 * beginning of the range. Can accept: XMLComment, Long Integer 
			 * or String.
			 * @param {any} toParam The XMLComment, index, or name at the 
			 * end of the range. Can accept: XMLComment, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last XMLComment in the collection.
			 * @returns {Adobe.Incopy.XMLComment}
			 */
			public lastItem(): Adobe.Incopy.XMLComment;
			/**
			 * Returns the middle XMLComment in the collection.
			 * @returns {Adobe.Incopy.XMLComment}
			 */
			public middleItem(): Adobe.Incopy.XMLComment;
			/**
			 * Returns the XMLComment whose index follows the specified 
			 * XMLComment in the collection.
			 * @param {XMLComment} objParam The XMLComment whose index 
			 * comes before the desired XMLComment. 
			 * @returns {Adobe.Incopy.XMLComment}
			 */
			public nextItem(objParam: XMLComment): Adobe.Incopy.XMLComment;
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
			 * Returns the XMLComment with the index previous to the 
			 * specified index.
			 * @param {XMLComment} objParam The index of the XMLComment 
			 * that follows the desired XMLComment.
			 * @returns {Adobe.Incopy.XMLComment}
			 */
			public previousItem(objParam: XMLComment): Adobe.Incopy.XMLComment;
		}
	}
}