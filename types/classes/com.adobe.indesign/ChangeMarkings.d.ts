/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangeMarkings extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not mark changed text.
			 * @type {Adobe.Indesign.ChangeMarkings}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.ChangeMarkings;
			/**
			 * Does not mark changed text.
			 * @type {Adobe.Indesign.ChangeMarkings}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.ChangeMarkings;
			/**
			 * Alias for OUTLINE. Outlines changed text.
			 * @type {Adobe.Indesign.ChangeMarkings}
			 * @readonly
			 */
			public static readonly outline: Adobe.Indesign.ChangeMarkings;
			/**
			 * Outlines changed text.
			 * @type {Adobe.Indesign.ChangeMarkings}
			 * @readonly
			 */
			public static readonly OUTLINE: Adobe.Indesign.ChangeMarkings;
			/**
			 * Alias for STRIKETHROUGH. Uses a strikethrough to mark 
			 * changed text.
			 * @type {Adobe.Indesign.ChangeMarkings}
			 * @readonly
			 */
			public static readonly strikethrough: Adobe.Indesign.ChangeMarkings;
			/**
			 * Uses a strikethrough to mark changed text.
			 * @type {Adobe.Indesign.ChangeMarkings}
			 * @readonly
			 */
			public static readonly STRIKETHROUGH: Adobe.Indesign.ChangeMarkings;
			/**
			 * Underlines changed text.
			 * @type {Adobe.Indesign.ChangeMarkings}
			 * @readonly
			 */
			public static readonly UNDERLINE_SINGLE: Adobe.Indesign.ChangeMarkings;
			/**
			 * Alias for UNDERLINE_SINGLE. Underlines changed text.
			 * @type {Adobe.Indesign.ChangeMarkings}
			 * @readonly
			 */
			public static readonly underlineSingle: Adobe.Indesign.ChangeMarkings;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}