/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GridAlignment extends Adobe.Csawlib.CSEnumBase {
			/** Aligns the text baseline to the grid. */
			public static readonly ALIGN_BASELINE: Adobe.Indesign.GridAlignment;
			/** Aligns the bottom of the em box to the grid. */
			public static readonly ALIGN_EM_BOTTOM: Adobe.Indesign.GridAlignment;
			/** Aligns the center of the em box to the grid. */
			public static readonly ALIGN_EM_CENTER: Adobe.Indesign.GridAlignment;
			/** Aligns the top of the em box to the grid. */
			public static readonly ALIGN_EM_TOP: Adobe.Indesign.GridAlignment;
			/** Aligns the bottom of the ICF box to the grid. */
			public static readonly ALIGN_ICF_BOTTOM: Adobe.Indesign.GridAlignment;
			/** Aligns the top of the ICF box to the grid. */
			public static readonly ALIGN_ICF_TOP: Adobe.Indesign.GridAlignment;
			/**
			 * Alias for ALIGN_BASELINE. Aligns the text baseline to the 
			 * grid.
			 */
			public static readonly alignBaseline: Adobe.Indesign.GridAlignment;
			/**
			 * Alias for ALIGN_EM_BOTTOM. Aligns the bottom of the em box 
			 * to the grid.
			 */
			public static readonly alignEmBottom: Adobe.Indesign.GridAlignment;
			/**
			 * Alias for ALIGN_EM_CENTER. Aligns the center of the em box 
			 * to the grid.
			 */
			public static readonly alignEmCenter: Adobe.Indesign.GridAlignment;
			/**
			 * Alias for ALIGN_EM_TOP. Aligns the top of the em box to the 
			 * grid.
			 */
			public static readonly alignEmTop: Adobe.Indesign.GridAlignment;
			/**
			 * Alias for ALIGN_ICF_BOTTOM. Aligns the bottom of the ICF box 
			 * to the grid.
			 */
			public static readonly alignIcfBottom: Adobe.Indesign.GridAlignment;
			/**
			 * Alias for ALIGN_ICF_TOP. Aligns the top of the ICF box to 
			 * the grid.
			 */
			public static readonly alignIcfTop: Adobe.Indesign.GridAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Lines are not aligned to the grid. */
			public static readonly none: Adobe.Indesign.GridAlignment;
			/** Lines are not aligned to the grid. */
			public static readonly NONE: Adobe.Indesign.GridAlignment;
			/** Constructor */
			public constructor();
		}
	}
}