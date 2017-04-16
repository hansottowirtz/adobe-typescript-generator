/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * A SearchDefinition object can limit the number of results to 
		 * return, and, if results are limited, it can define a set of 
		 * possible properties to use in ranking results. Adobe Bridge 
		 * sorts result nodes by the value of the chosen rank property, 
		 * and returns no more than the maximum number of result nodes 
		 * with the highest rank values. When the result is displayed, 
		 * the view sorts the nodes again using its sorting 
		 * criteria.The attribute name and display name of a property 
		 * used for ranking are encapsulated in a Rank object.An array 
		 * of these objects kept in SearchDefinition.ranks. They are 
		 * used to populate the Rank field that corresponds to the 
		 * definition in the Find dialog. If there is more than one, 
		 * the field displays a drop-down list. The rank that the user 
		 * selects becomes the SearchSpecification.rankField value.
		 */
		class Rank extends Adobe.Csawlib.CSHostObject {
			/**
			 * The localized display name for the corresponding field in 
			 * the Find dialog.
			 * @type {string}
			 */
			public displayName: string;
			/**
			 * The property name for the ranking property.
			 * @type {string}
			 */
			public valueName: string;
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