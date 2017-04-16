/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * Identifies a scope modifier to use in node searches among 
		 * handled nodes. The modifier can expand or limit the scope of 
		 * the search from the original target node. The scope value 
		 * and usage is defined entirely by the node's 
		 * ExtensionModel.getSearchDefinition() implementation.An array 
		 * of these objects, kept in SearchDefinition.scopeSpecifiers, 
		 * is used to populate the Find dialog. The box displays a 
		 * check box for each possible scope extension or limitation. 
		 * When the user selects a scope, its name becomes the 
		 * resulting SearchSpecification.scopeSpecifiers value.
		 */
		class Scope extends Adobe.Csawlib.CSHostObject {
			/**
			 * The localized display name for the corresponding field in 
			 * the Find dialog.
			 * @type {string}
			 */
			public displayName: string;
			/**
			 * The unique identifying name for the scope modifier.
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