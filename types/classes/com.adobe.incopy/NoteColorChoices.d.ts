/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NoteColorChoices extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the note color. */
			public static readonly USE_NOTE_PREF_COLOR: Adobe.Incopy.NoteColorChoices;
			/** Uses the color assigned to the user. */
			public static readonly USE_USER_COLOR: Adobe.Incopy.NoteColorChoices;
			/** Alias for USE_NOTE_PREF_COLOR. Uses the note color. */
			public static readonly useNotePrefColor: Adobe.Incopy.NoteColorChoices;
			/**
			 * Alias for USE_USER_COLOR. Uses the color assigned to the 
			 * user.
			 */
			public static readonly useUserColor: Adobe.Incopy.NoteColorChoices;
			/** Constructor */
			public constructor();
		}
	}
}