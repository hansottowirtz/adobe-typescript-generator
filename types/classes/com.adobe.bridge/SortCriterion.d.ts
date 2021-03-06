/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Sorting compares the values of a property associated with 
		 * the displayed nodes. This object identifies that property, 
		 * which can be in handler-defined node data (that is, defined 
		 * in an Infoset object), or defined in embedded XMP 
		 * metadata.When Adobe Bridge enters a container node, it calls 
		 * the node's ExtensionModel.getSortCriteria() method, which 
		 * returns a list of these objects. The method can supply a 
		 * completely new list, or can get the default list from  
		 * app.defaultSortCriteria and modify it, append to it, or 
		 * return it unchanged.
		 */
		class SortCriterion extends Adobe.Csawlib.CSHostObject {
			/**
			 * A localized display name for this sorting criterion.
			 * @type {string}
			 */
			public displayName: string;
			/**
			 * The name of an Infoset property by which to sort.
			 * @type {string}
			 */
			public infosetMember: string;
			/**
			 * The unique identifying name of this sort criterion.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The data type of the criterion property.
			 * @type {string}
			 */
			public type: string;
			/**
			 * The namespace portion of an XMP property by which to sort.
			 * @type {string}
			 */
			public xmpNamespace: string;
			/**
			 * The URI key portion of an XMP property by which to sort.
			 * @type {string}
			 */
			public xmpUri: string;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}