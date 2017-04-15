/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ResolveStyleClash extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Automatically renames the new style. */
			public static readonly RESOLVE_CLASH_AUTO_RENAME: Adobe.Indesign.ResolveStyleClash;
			/** Uses the existing style. */
			public static readonly RESOLVE_CLASH_USE_EXISTING: Adobe.Indesign.ResolveStyleClash;
			/** Uses the new style. */
			public static readonly RESOLVE_CLASH_USE_NEW: Adobe.Indesign.ResolveStyleClash;
			/**
			 * Alias for RESOLVE_CLASH_AUTO_RENAME. Automatically renames 
			 * the new style.
			 */
			public static readonly resolveClashAutoRename: Adobe.Indesign.ResolveStyleClash;
			/**
			 * Alias for RESOLVE_CLASH_USE_EXISTING. Uses the existing 
			 * style.
			 */
			public static readonly resolveClashUseExisting: Adobe.Indesign.ResolveStyleClash;
			/** Alias for RESOLVE_CLASH_USE_NEW. Uses the new style. */
			public static readonly resolveClashUseNew: Adobe.Indesign.ResolveStyleClash;
			/** Constructor */
			public constructor();
		}
	}
}