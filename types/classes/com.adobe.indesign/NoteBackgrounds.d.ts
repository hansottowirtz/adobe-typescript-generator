/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NoteBackgrounds extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the galley background color.
			 * @type {Adobe.Indesign.NoteBackgrounds}
			 * @readonly
			 */
			public static readonly GALLEY_BACKGROUND_COLOR: Adobe.Indesign.NoteBackgrounds;
			/**
			 * Alias for GALLEY_BACKGROUND_COLOR. Uses the galley 
			 * background color.
			 * @type {Adobe.Indesign.NoteBackgrounds}
			 * @readonly
			 */
			public static readonly galleyBackgroundColor: Adobe.Indesign.NoteBackgrounds;
			/**
			 * Uses the note color.
			 * @type {Adobe.Indesign.NoteBackgrounds}
			 * @readonly
			 */
			public static readonly USE_NOTE_COLOR: Adobe.Indesign.NoteBackgrounds;
			/**
			 * Alias for USE_NOTE_COLOR. Uses the note color.
			 * @type {Adobe.Indesign.NoteBackgrounds}
			 * @readonly
			 */
			public static readonly useNoteColor: Adobe.Indesign.NoteBackgrounds;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}