/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MarkTypes extends Adobe.Csawlib.CSEnumBase {
			/** Uses the default format. */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.MarkTypes;
			/** Alias for DEFAULT_VALUE. Uses the default format. */
			public static readonly defaultValue: Adobe.Indesign.MarkTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses J marks with a circle. */
			public static readonly J_MARK_WITH_CIRCLE: Adobe.Indesign.MarkTypes;
			/** Uses J marks without a circle. */
			public static readonly J_MARK_WITHOUT_CIRCLE: Adobe.Indesign.MarkTypes;
			/** Alias for J_MARK_WITH_CIRCLE. Uses J marks with a circle. */
			public static readonly jMarkWithCircle: Adobe.Indesign.MarkTypes;
			/**
			 * Alias for J_MARK_WITHOUT_CIRCLE. Uses J marks without a 
			 * circle.
			 */
			public static readonly jMarkWithoutCircle: Adobe.Indesign.MarkTypes;
			/** Constructor */
			public constructor();
		}
	}
}