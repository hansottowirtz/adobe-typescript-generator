/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * The Find dialog returns a SearchSpecification object for a 
		 * specific search, which contains a list of these objects in 
		 * the conditionList property; each object corresponds to the 
		 * user's selection in one line of the Criteria box in the 
		 * dialog. The SearchSpecification.conjunction controls whether 
		 * all or any of the conditions must be met.Your node handler 
		 * can define possible search criteria for your nodes by 
		 * creating SearchCriteria objects.Each condition specifies a 
		 * property associated with a node (the searchField), whose 
		 * value is compared to a selected operand value, using a 
		 * selected operator such as "equals". Operators are 
		 * predefined. Some operators, such as "exists", do not require 
		 * an operand.
		 */
		class SearchCondition extends Adobe.Csawlib.CSHostObject {
			/**
			 * The value to compare against the value of the search field 
			 * in each node.
			 * @type {string}
			 */
			public operand: string;
			/**
			 * The comparison operator for the search.
			 * @type {string}
			 */
			public operatorType: string;
			/**
			 * The name of some property associated with the search node.
			 * @type {string}
			 */
			public searchField: string;
			/**
			 * @type {string}
			 */
			public secondaryOperand: string;
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