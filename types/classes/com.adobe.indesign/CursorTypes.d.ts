/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CursorTypes extends Adobe.Csawlib.CSEnumBase {
			/** Uses a barbell cursor. */
			public static readonly BARBELL_CURSOR: Adobe.Indesign.CursorTypes;
			/** Alias for BARBELL_CURSOR. Uses a barbell cursor. */
			public static readonly barbellCursor: Adobe.Indesign.CursorTypes;
			/** Uses a block cursor. */
			public static readonly BLOCK_CURSOR: Adobe.Indesign.CursorTypes;
			/** Alias for BLOCK_CURSOR. Uses a block cursor. */
			public static readonly blockCursor: Adobe.Indesign.CursorTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses a standard cursor. */
			public static readonly STANDARD_CURSOR: Adobe.Indesign.CursorTypes;
			/** Alias for STANDARD_CURSOR. Uses a standard cursor. */
			public static readonly standardCursor: Adobe.Indesign.CursorTypes;
			/** Uses a thick cursor. */
			public static readonly THICK_CURSOR: Adobe.Indesign.CursorTypes;
			/** Alias for THICK_CURSOR. Uses a thick cursor. */
			public static readonly thickCursor: Adobe.Indesign.CursorTypes;
			/** Constructor */
			public constructor();
		}
	}
}