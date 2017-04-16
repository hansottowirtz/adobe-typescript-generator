/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * It differs from the ThumbnailPanelette object in that it 
		 * does not display the thumbnail icon, only the related 
		 * text.The text can be static, or can be obtained dynamically 
		 * from the associated thumbnail at display time, using 
		 * panelette markup syntax.
		 */
		class TextPanelette extends Adobe.Csawlib.CSHostObject {
			/** A set of two-element arrays in the format [key, value]. */
			public keyValuePairs: any[];
			/** The unique, identifying name of this subpanel. */
			public name: string;
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