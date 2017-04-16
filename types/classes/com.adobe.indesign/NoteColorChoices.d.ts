/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NoteColorChoices extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the note color.
			 * @type {Adobe.Indesign.NoteColorChoices}
			 * @readonly
			 */
			public static readonly USE_NOTE_PREF_COLOR: Adobe.Indesign.NoteColorChoices;
			/**
			 * Uses the color assigned to the user.
			 * @type {Adobe.Indesign.NoteColorChoices}
			 * @readonly
			 */
			public static readonly USE_USER_COLOR: Adobe.Indesign.NoteColorChoices;
			/**
			 * Alias for USE_NOTE_PREF_COLOR. Uses the note color.
			 * @type {Adobe.Indesign.NoteColorChoices}
			 * @readonly
			 */
			public static readonly useNotePrefColor: Adobe.Indesign.NoteColorChoices;
			/**
			 * Alias for USE_USER_COLOR. Uses the color assigned to the 
			 * user.
			 * @type {Adobe.Indesign.NoteColorChoices}
			 * @readonly
			 */
			public static readonly useUserColor: Adobe.Indesign.NoteColorChoices;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}