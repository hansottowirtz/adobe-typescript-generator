/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OverrideType extends Adobe.Csawlib.CSEnumBase {
			/** Alias for ALL. Clears all types of override. */
			public static readonly all: Adobe.Indesign.OverrideType;
			/** Clears all types of override. */
			public static readonly ALL: Adobe.Indesign.OverrideType;
			/** Clears only character style overrides. */
			public static readonly CHARACTER_ONLY: Adobe.Indesign.OverrideType;
			/**
			 * Alias for CHARACTER_ONLY. Clears only character style 
			 * overrides.
			 */
			public static readonly characterOnly: Adobe.Indesign.OverrideType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Clears only paragraph style overrides. */
			public static readonly PARAGRAPH_ONLY: Adobe.Indesign.OverrideType;
			/**
			 * Alias for PARAGRAPH_ONLY. Clears only paragraph style 
			 * overrides.
			 */
			public static readonly paragraphOnly: Adobe.Indesign.OverrideType;
			/** Constructor */
			public constructor();
		}
	}
}