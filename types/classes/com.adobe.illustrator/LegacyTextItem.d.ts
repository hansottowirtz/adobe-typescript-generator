/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Unconverted legacy text items from documents in pre-version 
		 * 11 formats.
		 */
		class LegacyTextItem extends Adobe.Illustrator.PageItem {
			/**
			 * Has the legacy text item been updated to a native text frame 
			 * item?
			 */
			public readonly converted: boolean;
			/**
			 * Create a native text frame from a legacy text item. The 
			 * original legacy text item is deleted.
			 */
			public convertToNative(): Adobe.Illustrator.GroupItem;
		}
	}
}