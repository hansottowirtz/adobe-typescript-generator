/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NoteColorChoices extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the note color. */
			public static readonly USE_NOTE_PREF_COLOR: Adobe.Indesign.NoteColorChoices;
			/** Uses the color assigned to the user. */
			public static readonly USE_USER_COLOR: Adobe.Indesign.NoteColorChoices;
			/** Alias for USE_NOTE_PREF_COLOR. Uses the note color. */
			public static readonly useNotePrefColor: Adobe.Indesign.NoteColorChoices;
			/**
			 * Alias for USE_USER_COLOR. Uses the color assigned to the 
			 * user.
			 */
			public static readonly useUserColor: Adobe.Indesign.NoteColorChoices;
			/** Constructor */
			public constructor();
		}
	}
}