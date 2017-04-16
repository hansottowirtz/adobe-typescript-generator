/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Passed to Adobe Bridge to populate the Find dialog. Provides 
		 * a way for Adobe Bridge extensions to specify how the Adobe 
		 * Bridge Find dialog should be populated for a search among 
		 * handled nodes. It specifies possible search criteria, and 
		 * result scope and ranking criteria. If the user invokes the 
		 * Find dialog for a handled node, the dialog calls the the 
		 * node's ExtensionModel.getSearchDefinition() method. Your 
		 * node-handling extension must define this method to return a 
		 * SearchDefinition object that can be used to populate Find 
		 * dialog.When a user clicks Find in the Find dialog, Adobe 
		 * Bridge uses the dialog selections to create a 
		 * SearchSpecification object, which, together with a target 
		 * node, specifies a search.
		 */
		class SearchDefinition extends Adobe.Csawlib.CSHostObject {
			/**
			 * A collection of possible SearchCriteria objects to use for 
			 * this search.
			 * @type {any[]}
			 */
			public criteriaList: any[];
			/**
			 * If non-zero, the Find dialog offers choices to limit the 
			 * result set to certain sizes, and the choice defaults to this 
			 * value.
			 * @type {number}
			 */
			public defaultResultsLimit: number;
			/**
			 * @type {any[]}
			 */
			public quickSearchMenuItems: any[];
			/**
			 * A set of Rank objects to use only if the search can limit 
			 * results.
			 * @type {any[]}
			 */
			public ranks: any[];
			/**
			 * A set of scopes used to extend or limit the scope of the 
			 * search.
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