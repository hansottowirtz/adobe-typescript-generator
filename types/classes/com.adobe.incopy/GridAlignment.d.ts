/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GridAlignment extends Adobe.Csawlib.CSEnumBase {
			/** Aligns the text baseline to the grid. */
			public static readonly ALIGN_BASELINE: Adobe.Incopy.GridAlignment;
			/** Aligns the bottom of the em box to the grid. */
			public static readonly ALIGN_EM_BOTTOM: Adobe.Incopy.GridAlignment;
			/** Aligns the center of the em box to the grid. */
			public static readonly ALIGN_EM_CENTER: Adobe.Incopy.GridAlignment;
			/** Aligns the top of the em box to the grid. */
			public static readonly ALIGN_EM_TOP: Adobe.Incopy.GridAlignment;
			/** Aligns the bottom of the ICF box to the grid. */
			public static readonly ALIGN_ICF_BOTTOM: Adobe.Incopy.GridAlignment;
			/** Aligns the top of the ICF box to the grid. */
			public static readonly ALIGN_ICF_TOP: Adobe.Incopy.GridAlignment;
			/**
			 * Alias for ALIGN_BASELINE. Aligns the text baseline to the 
			 * grid.
			 */
			public static readonly alignBaseline: Adobe.Incopy.GridAlignment;
			/**
			 * Alias for ALIGN_EM_BOTTOM. Aligns the bottom of the em box 
			 * to the grid.
			 */
			public static readonly alignEmBottom: Adobe.Incopy.GridAlignment;
			/**
			 * Alias for ALIGN_EM_CENTER. Aligns the center of the em box 
			 * to the grid.
			 */
			public static readonly alignEmCenter: Adobe.Incopy.GridAlignment;
			/**
			 * Alias for ALIGN_EM_TOP. Aligns the top of the em box to the 
			 * grid.
			 */
			public static readonly alignEmTop: Adobe.Incopy.GridAlignment;
			/**
			 * Alias for ALIGN_ICF_BOTTOM. Aligns the bottom of the ICF box 
			 * to the grid.
			 */
			public static readonly alignIcfBottom: Adobe.Incopy.GridAlignment;
			/**
			 * Alias for ALIGN_ICF_TOP. Aligns the top of the ICF box to 
			 * the grid.
			 */
			public static readonly alignIcfTop: Adobe.Incopy.GridAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Lines are not aligned to the grid. */
			public static readonly none: Adobe.Incopy.GridAlignment;
			/** Lines are not aligned to the grid. */
			public static readonly NONE: Adobe.Incopy.GridAlignment;
			/** Constructor */
			public constructor();
		}
	}
}