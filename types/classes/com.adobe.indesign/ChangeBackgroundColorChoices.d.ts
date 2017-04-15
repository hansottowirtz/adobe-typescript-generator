/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangeBackgroundColorChoices extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The background color for changed text is the same as the 
			 * track changes preferences background color. For information, 
			 * see background color for added text, background color for 
			 * deleted text, or background color for moved text.
			 */
			public static readonly CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR: Adobe.Indesign.ChangeBackgroundColorChoices;
			/**
			 * The background color for changed text is the same as the 
			 * galley background color.
			 */
			public static readonly CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR: Adobe.Indesign.ChangeBackgroundColorChoices;
			/**
			 * The background color for changed text is the same as the 
			 * color assigned to the current user.
			 */
			public static readonly CHANGE_BACKGROUND_USES_USER_COLOR: Adobe.Indesign.ChangeBackgroundColorChoices;
			/**
			 * Alias for CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR. The 
			 * background color for changed text is the same as the track 
			 * changes preferences background color. For information, see 
			 * background color for added text, background color for 
			 * deleted text, or background color for moved text.
			 */
			public static readonly changeBackgroundUsesChangePrefColor: Adobe.Indesign.ChangeBackgroundColorChoices;
			/**
			 * Alias for CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR. 
			 * The background color for changed text is the same as the 
			 * galley background color.
			 */
			public static readonly changeBackgroundUsesGalleyBackgroundColor: Adobe.Indesign.ChangeBackgroundColorChoices;
			/**
			 * Alias for CHANGE_BACKGROUND_USES_USER_COLOR. The background 
			 * color for changed text is the same as the color assigned to 
			 * the current user.
			 */
			public static readonly changeBackgroundUsesUserColor: Adobe.Indesign.ChangeBackgroundColorChoices;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}