/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Returned from a selection in the Find dialog. Encapsulates a 
		 * specific search among member nodes of a target container 
		 * node. The object contains a set of conditions to be met in 
		 * order for a node to match, and instructions for how to 
		 * return matching nodes.Adobe Bridge creates this object from 
		 * user selections in the Find dialog. For a search that 
		 * involves handled nodes, Adobe Bridge passes the search 
		 * specification to the handler's getBridgeUriForSearch() 
		 * method.
		 */
		class SearchSpecification extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of SearchCondition objects to use for this 
			 * search.
			 * @type {any[]}
			 */
			public conditionList: any[];
			/**
			 * The search conjunction, and or or, as selected in the Find 
			 * dialog.
			 * @type {string}
			 */
			public conjunction: string;
			/**
			 * The maximum number of result nodes to return from the 
			 * search.
			 * @type {number}
			 */
			public maximumResults: number;
			/**
			 * @type {string}
			 */
			public quickSearchItem: string;
			/**
			 * @type {string}
			 */
			public quickSearchValue: string;
			/**
			 * The name of a Rank object, as specified for a 
			 * SearchDefinition object.
			 * @type {string}
			 */
			public rankField: string;
			/**
			 * The ordering style, one of ascending (the default) or 
			 * descending.
			 * @type {string}
			 */
			public rankOrdering: string;
			/**
			 * One or more Scope object name strings, as specified for a 
			 * SearchDefinition object.
			 * @type {any[]}
			 */
			public scopeSpecifiers: any[];
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