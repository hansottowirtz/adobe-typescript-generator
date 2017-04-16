/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeTextColorChoices extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The text color for changed text is the same as the text 
			 * color defined in track changes preferences. For information, 
			 * see text color for added text, text color for deleted text, 
			 * or text color for moved text.
			 */
			public static readonly CHANGE_USES_CHANGE_PREF_COLOR: Adobe.Incopy.ChangeTextColorChoices;
			/**
			 * The text color for changed text is the same as the galley 
			 * text color.
			 */
			public static readonly CHANGE_USES_GALLEY_TEXT_COLOR: Adobe.Incopy.ChangeTextColorChoices;
			/**
			 * Alias for CHANGE_USES_CHANGE_PREF_COLOR. The text color for 
			 * changed text is the same as the text color defined in track 
			 * changes preferences. For information, see text color for 
			 * added text, text color for deleted text, or text color for 
			 * moved text.
			 */
			public static readonly changeUsesChangePrefColor: Adobe.Incopy.ChangeTextColorChoices;
			/**
			 * Alias for CHANGE_USES_GALLEY_TEXT_COLOR. The text color for 
			 * changed text is the same as the galley text color.
			 */
			public static readonly changeUsesGalleyTextColor: Adobe.Incopy.ChangeTextColorChoices;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}