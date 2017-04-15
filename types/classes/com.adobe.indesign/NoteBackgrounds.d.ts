/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NoteBackgrounds extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the galley background color. */
			public static readonly GALLEY_BACKGROUND_COLOR: Adobe.Indesign.NoteBackgrounds;
			/**
			 * Alias for GALLEY_BACKGROUND_COLOR. Uses the galley 
			 * background color.
			 */
			public static readonly galleyBackgroundColor: Adobe.Indesign.NoteBackgrounds;
			/** Uses the note color. */
			public static readonly USE_NOTE_COLOR: Adobe.Indesign.NoteBackgrounds;
			/** Alias for USE_NOTE_COLOR. Uses the note color. */
			public static readonly useNoteColor: Adobe.Indesign.NoteBackgrounds;
			/** Constructor */
			public constructor();
		}
	}
}