/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * The text can be specified with literal strings, derived from 
		 * data in various ways, or calculated using JavaScript, using 
		 * panelette markup syntax.The displayed thumbnails are 
		 * mouse-sensitive. A single click makes a thumbnail the 
		 * inspection focus for the Inspector, and reveals or navigates 
		 * to that thumbnail in the Content pane.
		 */
		class ThumbnailPanelette extends Adobe.Csawlib.CSHostObject {
			/**
			 * A set of two-element arrays in the format [key, value].
			 * @type {any[]}
			 */
			public keyValuePairs: any[];
			/**
			 * The unique, identifying name of this subpanel.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The placement of the displayed text in the horizontal 
			 * presentation mode.
			 * @type {string}
			 */
			public textPosition: string;
			/**
			 * The nodes corresponding to the key-value pairs.
			 * @type {any[]}
			 */
			public thumbnails: any[];
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