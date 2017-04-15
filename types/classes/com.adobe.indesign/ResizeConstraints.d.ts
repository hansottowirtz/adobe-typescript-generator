/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ResizeConstraints extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Inverse proportions */
			public static readonly INVERSE_PROPORTIONS: Adobe.Indesign.ResizeConstraints;
			/** Alias for INVERSE_PROPORTIONS. Inverse proportions */
			public static readonly inverseProportions: Adobe.Indesign.ResizeConstraints;
			/** Keep current proportions */
			public static readonly KEEP_CURRENT_PROPORTIONS: Adobe.Indesign.ResizeConstraints;
			/** Keep current value */
			public static readonly KEEP_CURRENT_VALUE: Adobe.Indesign.ResizeConstraints;
			/**
			 * Alias for KEEP_CURRENT_PROPORTIONS. Keep current proportions
			 */
			public static readonly keepCurrentProportions: Adobe.Indesign.ResizeConstraints;
			/** Alias for KEEP_CURRENT_VALUE. Keep current value */
			public static readonly keepCurrentValue: Adobe.Indesign.ResizeConstraints;
			/** Tall proportions */
			public static readonly TALL_PROPORTIONS: Adobe.Indesign.ResizeConstraints;
			/** Alias for TALL_PROPORTIONS. Tall proportions */
			public static readonly tallProportions: Adobe.Indesign.ResizeConstraints;
			/** Wide proportions */
			public static readonly WIDE_PROPORTIONS: Adobe.Indesign.ResizeConstraints;
			/** Alias for WIDE_PROPORTIONS. Wide proportions */
			public static readonly wideProportions: Adobe.Indesign.ResizeConstraints;
			/** Constructor */
			public constructor();
		}
	}
}