/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class LegacyTextItem extends PageItem {
			/**
			 * Has the legacy text item been updated to a native text frame 
			 * item?
			 */
			public readonly converted: boolean;
			/**
			 * Create a native text frame from a legacy text item. The 
			 * original legacy text item is deleted.
			 */
			public convertToNative(): GroupItem;
		}
	}
}