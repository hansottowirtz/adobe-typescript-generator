/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangeMarkings extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Does not mark changed text. */
			public static readonly none: Adobe.Indesign.ChangeMarkings;
			/** Does not mark changed text. */
			public static readonly NONE: Adobe.Indesign.ChangeMarkings;
			/** Alias for OUTLINE. Outlines changed text. */
			public static readonly outline: Adobe.Indesign.ChangeMarkings;
			/** Outlines changed text. */
			public static readonly OUTLINE: Adobe.Indesign.ChangeMarkings;
			/**
			 * Alias for STRIKETHROUGH. Uses a strikethrough to mark 
			 * changed text.
			 */
			public static readonly strikethrough: Adobe.Indesign.ChangeMarkings;
			/** Uses a strikethrough to mark changed text. */
			public static readonly STRIKETHROUGH: Adobe.Indesign.ChangeMarkings;
			/** Underlines changed text. */
			public static readonly UNDERLINE_SINGLE: Adobe.Indesign.ChangeMarkings;
			/** Alias for UNDERLINE_SINGLE. Underlines changed text. */
			public static readonly underlineSingle: Adobe.Indesign.ChangeMarkings;
			/** Constructor */
			public constructor();
		}
	}
}