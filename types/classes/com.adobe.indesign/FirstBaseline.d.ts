/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FirstBaseline extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The tallest character in the font falls below the top inset 
			 * of the object.
			 */
			public static readonly ASCENT_OFFSET: Adobe.Indesign.FirstBaseline;
			/**
			 * Alias for ASCENT_OFFSET. The tallest character in the font 
			 * falls below the top inset of the object.
			 */
			public static readonly ascentOffset: Adobe.Indesign.FirstBaseline;
			/**
			 * The tops of upper case letters touch the top inset of the 
			 * object.
			 */
			public static readonly CAP_HEIGHT: Adobe.Indesign.FirstBaseline;
			/**
			 * Alias for CAP_HEIGHT. The tops of upper case letters touch 
			 * the top inset of the object.
			 */
			public static readonly capHeight: Adobe.Indesign.FirstBaseline;
			/**
			 * The text em box height is the distance between the baseline 
			 * of the text and the top inset of the object.
			 */
			public static readonly EMBOX_HEIGHT: Adobe.Indesign.FirstBaseline;
			/**
			 * Alias for EMBOX_HEIGHT. The text em box height is the 
			 * distance between the baseline of the text and the top inset 
			 * of the object.
			 */
			public static readonly emboxHeight: Adobe.Indesign.FirstBaseline;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the value specified for minimum first baseline offset 
			 * as the distance between the baseline of the text and the top 
			 * inset of the object.
			 */
			public static readonly FIXED_HEIGHT: Adobe.Indesign.FirstBaseline;
			/**
			 * Alias for FIXED_HEIGHT. Uses the value specified for minimum 
			 * first baseline offset as the distance between the baseline 
			 * of the text and the top inset of the object.
			 */
			public static readonly fixedHeight: Adobe.Indesign.FirstBaseline;
			/**
			 * The text leading value defines the distance between the 
			 * baseline of the text and the top inset of the object.
			 */
			public static readonly LEADING_OFFSET: Adobe.Indesign.FirstBaseline;
			/**
			 * Alias for LEADING_OFFSET. The text leading value defines the 
			 * distance between the baseline of the text and the top inset 
			 * of the object.
			 */
			public static readonly leadingOffset: Adobe.Indesign.FirstBaseline;
			/**
			 * The tops of lower case letters touch the top inset of the 
			 * object.
			 */
			public static readonly X_HEIGHT: Adobe.Indesign.FirstBaseline;
			/**
			 * Alias for X_HEIGHT. The tops of lower case letters touch the 
			 * top inset of the object.
			 */
			public static readonly xHeight: Adobe.Indesign.FirstBaseline;
			/** Constructor */
			public constructor();
		}
	}
}