/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeMarkings extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Does not mark changed text. */
			public static readonly none: Adobe.Incopy.ChangeMarkings;
			/** Does not mark changed text. */
			public static readonly NONE: Adobe.Incopy.ChangeMarkings;
			/** Alias for OUTLINE. Outlines changed text. */
			public static readonly outline: Adobe.Incopy.ChangeMarkings;
			/** Outlines changed text. */
			public static readonly OUTLINE: Adobe.Incopy.ChangeMarkings;
			/**
			 * Alias for STRIKETHROUGH. Uses a strikethrough to mark 
			 * changed text.
			 */
			public static readonly strikethrough: Adobe.Incopy.ChangeMarkings;
			/** Uses a strikethrough to mark changed text. */
			public static readonly STRIKETHROUGH: Adobe.Incopy.ChangeMarkings;
			/** Underlines changed text. */
			public static readonly UNDERLINE_SINGLE: Adobe.Incopy.ChangeMarkings;
			/** Alias for UNDERLINE_SINGLE. Underlines changed text. */
			public static readonly underlineSingle: Adobe.Incopy.ChangeMarkings;
			/** Constructor */
			public constructor();
		}
	}
}