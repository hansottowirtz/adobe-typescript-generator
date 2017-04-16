/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NoteColorChoices extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the note color.
			 * @type {Adobe.Incopy.NoteColorChoices}
			 * @readonly
			 */
			public static readonly USE_NOTE_PREF_COLOR: Adobe.Incopy.NoteColorChoices;
			/**
			 * Uses the color assigned to the user.
			 * @type {Adobe.Incopy.NoteColorChoices}
			 * @readonly
			 */
			public static readonly USE_USER_COLOR: Adobe.Incopy.NoteColorChoices;
			/**
			 * Alias for USE_NOTE_PREF_COLOR. Uses the note color.
			 * @type {Adobe.Incopy.NoteColorChoices}
			 * @readonly
			 */
			public static readonly useNotePrefColor: Adobe.Incopy.NoteColorChoices;
			/**
			 * Alias for USE_USER_COLOR. Uses the color assigned to the 
			 * user.
			 * @type {Adobe.Incopy.NoteColorChoices}
			 * @readonly
			 */
			public static readonly useUserColor: Adobe.Incopy.NoteColorChoices;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}