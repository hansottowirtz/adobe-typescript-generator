/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeMarkings extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not mark changed text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.ChangeMarkings;
			/**
			 * Does not mark changed text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.ChangeMarkings;
			/**
			 * Alias for OUTLINE. Outlines changed text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 * @readonly
			 */
			public static readonly outline: Adobe.Incopy.ChangeMarkings;
			/**
			 * Outlines changed text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 * @readonly
			 */
			public static readonly OUTLINE: Adobe.Incopy.ChangeMarkings;
			/**
			 * Alias for STRIKETHROUGH. Uses a strikethrough to mark 
			 * changed text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 * @readonly
			 */
			public static readonly strikethrough: Adobe.Incopy.ChangeMarkings;
			/**
			 * Uses a strikethrough to mark changed text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 * @readonly
			 */
			public static readonly STRIKETHROUGH: Adobe.Incopy.ChangeMarkings;
			/**
			 * Underlines changed text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 * @readonly
			 */
			public static readonly UNDERLINE_SINGLE: Adobe.Incopy.ChangeMarkings;
			/**
			 * Alias for UNDERLINE_SINGLE. Underlines changed text.
			 * @type {Adobe.Incopy.ChangeMarkings}
			 * @readonly
			 */
			public static readonly underlineSingle: Adobe.Incopy.ChangeMarkings;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}