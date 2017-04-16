/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CursorTypes extends Adobe.Csawlib.CSEnumBase {
			/** Uses a barbell cursor. */
			public static readonly BARBELL_CURSOR: Adobe.Incopy.CursorTypes;
			/** Alias for BARBELL_CURSOR. Uses a barbell cursor. */
			public static readonly barbellCursor: Adobe.Incopy.CursorTypes;
			/** Uses a block cursor. */
			public static readonly BLOCK_CURSOR: Adobe.Incopy.CursorTypes;
			/** Alias for BLOCK_CURSOR. Uses a block cursor. */
			public static readonly blockCursor: Adobe.Incopy.CursorTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses a standard cursor. */
			public static readonly STANDARD_CURSOR: Adobe.Incopy.CursorTypes;
			/** Alias for STANDARD_CURSOR. Uses a standard cursor. */
			public static readonly standardCursor: Adobe.Incopy.CursorTypes;
			/** Uses a thick cursor. */
			public static readonly THICK_CURSOR: Adobe.Incopy.CursorTypes;
			/** Alias for THICK_CURSOR. Uses a thick cursor. */
			public static readonly thickCursor: Adobe.Incopy.CursorTypes;
			/** Constructor */
			public constructor();
		}
	}
}