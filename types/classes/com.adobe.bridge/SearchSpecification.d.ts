/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

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
			 */
			public conditionList: any[];
			/**
			 * The search conjunction, and or or, as selected in the Find 
			 * dialog.
			 */
			public conjunction: string;
			/**
			 * The maximum number of result nodes to return from the 
			 * search.
			 */
			public maximumResults: number;
			public quickSearchItem: string;
			public quickSearchValue: string;
			/**
			 * The name of a Rank object, as specified for a 
			 * SearchDefinition object.
			 */
			public rankField: string;
			/**
			 * The ordering style, one of ascending (the default) or 
			 * descending.
			 */
			public rankOrdering: string;
			/**
			 * One or more Scope object name strings, as specified for a 
			 * SearchDefinition object.
			 */
			public scopeSpecifiers: any[];
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}