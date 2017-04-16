/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * The text can be static, or can be obtained dynamically from 
		 * the associated thumbnail at display time, using panelette 
		 * markup syntax.
		 */
		class IconListPanelette extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {any[]}
			 */
			public keyValuePairs: any[];
			/**
			 * The unique, identifying name of this subpanel.
			 * @type {string}
			 */
			public name: string;
			/**
			 * A collection of two-member arrays describing the rows to 
			 * display in the panelette.
			 * @type {any[]}
			 */
			public rows: any[];
			/**
			 * Localizable text shown in the subpanel header bar.
			 * @type {string}
			 */
			public titleMarkup: string;
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