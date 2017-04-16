/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * The text can be static, or can be obtained dynamically from 
		 * the associated thumbnail at display time, using panelette 
		 * markup syntax.
		 */
		class IconListPanelette extends Adobe.Csawlib.CSHostObject {
			public keyValuePairs: any[];
			/** The unique, identifying name of this subpanel. */
			public name: string;
			/**
			 * A collection of two-member arrays describing the rows to 
			 * display in the panelette.
			 */
			public rows: any[];
			/** Localizable text shown in the subpanel header bar. */
			public titleMarkup: string;
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}