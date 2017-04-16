/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * unconverted legacy text items from documents in pre-version 
		 * 11 formats
		 */
		class LegacyTextItem extends Adobe.Illustrator.PageItem {
			/**
			 * has the legacy text item been updated to a native text frame 
			 * item?
			 */
			public readonly converted: boolean;
			/**
			 * create a native text frame from a legacy text item. The 
			 * original legacy text item is deleted.
			 */
			public convertToNative(): Adobe.Illustrator.GroupItem;
		}
	}
}