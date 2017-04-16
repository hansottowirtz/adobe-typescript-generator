/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Passed to Adobe Bridge to populate the Find dialog. 
		 * Encapsulates one search criterion for a search among handled 
		 * nodes. Your node handler can define possible search criteria 
		 * for your nodes by creating these objects and passing them to 
		 * Adobe Bridge in a SearchDefinition object, during the call 
		 * to the node's ExtensionModel.getSearchDefinition() method. 
		 * Each object corresponds to one line in the Criteria box of 
		 * the Find dialog.The left side is a property associated with 
		 * possible matching nodes, called the search fieldThe middle 
		 * value is the comparison operatorThe right side is the 
		 * comparison value, or operand (some operators, such as 
		 * "exists", do not require an operand)For each node in the 
		 * scope, a search that uses a selected criterion matches the 
		 * selected search-field value against the operand using the 
		 * selected comparison operator. This object specifies the left 
		 * and right sides. By default, all of the predefined operators 
		 * are displayed for user selection. You can use this object to 
		 * limit which of these operators are available for selection. 
		 * The user's choices in the dialog are returned to Adobe 
		 * Bridge in a set of a SearchCondition objects contained in a 
		 * SearchSpecification object.
		 */
		class SearchCriteria extends Adobe.Csawlib.CSHostObject {
			/**
			 * One or more Operand objects used to populate the drop-down 
			 * list for the right-side field of this line in the Find 
			 * dialog.
			 * @type {any[]}
			 */
			public operands: any[];
			/**
			 * The data type of the operand values.
			 * @type {string}
			 */
			public operandType: string;
			/**
			 * A set of predefined operator strings that are not displayed 
			 * for selection.
			 * @type {any[]}
			 */
			public operatorTypesToDisable: any[];
			/**
			 * A search field, the name of some property associated with 
			 * the search node.
			 * @type {string}
			 */
			public searchField: string;
			/**
			 * A localized display name for the search field, displayed in 
			 * the Find dialog. .
			 * @type {string}
			 */
			public searchFieldDisplay: string;
			/**
			 * Whether searchfield display names are sorted alphabetically 
			 * in the Find dialog.
			 * @type {boolean}
			 */
			public searchFieldSort: boolean;
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