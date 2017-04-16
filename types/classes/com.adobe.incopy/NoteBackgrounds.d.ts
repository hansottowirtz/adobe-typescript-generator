/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NoteBackgrounds extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the galley background color. */
			public static readonly GALLEY_BACKGROUND_COLOR: Adobe.Incopy.NoteBackgrounds;
			/**
			 * Alias for GALLEY_BACKGROUND_COLOR. Uses the galley 
			 * background color.
			 */
			public static readonly galleyBackgroundColor: Adobe.Incopy.NoteBackgrounds;
			/** Uses the note color. */
			public static readonly USE_NOTE_COLOR: Adobe.Incopy.NoteBackgrounds;
			/** Alias for USE_NOTE_COLOR. Uses the note color. */
			public static readonly useNoteColor: Adobe.Incopy.NoteBackgrounds;
			/** Constructor */
			public constructor();
		}
	}
}