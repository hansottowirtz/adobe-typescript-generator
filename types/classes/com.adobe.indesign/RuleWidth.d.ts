/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RuleWidth extends Adobe.Csawlib.CSEnumBase {
			/** Makes the rule the width of the column. */
			public static readonly COLUMN_WIDTH: Adobe.Indesign.RuleWidth;
			/**
			 * Alias for COLUMN_WIDTH. Makes the rule the width of the 
			 * column.
			 */
			public static readonly columnWidth: Adobe.Indesign.RuleWidth;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Makes the paragraph rule above the width of the first line 
			 * of text in the paragraph.
			 */
			public static readonly TEXT_WIDTH: Adobe.Indesign.RuleWidth;
			/**
			 * Alias for TEXT_WIDTH. Makes the paragraph rule above the 
			 * width of the first line of text in the paragraph.
			 */
			public static readonly textWidth: Adobe.Indesign.RuleWidth;
			/** Constructor */
			public constructor();
		}
	}
}