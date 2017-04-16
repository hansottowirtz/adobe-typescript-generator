/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

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
			/** A set of two-element arrays in the format [key, value]. */
			public keyValuePairs: any[];
			/** The unique, identifying name of this subpanel. */
			public name: string;
			/**
			 * The placement of the displayed text in the horizontal 
			 * presentation mode.
			 */
			public textPosition: string;
			/** The nodes corresponding to the key-value pairs. */
			public thumbnails: any[];
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