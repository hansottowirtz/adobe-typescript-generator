/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ResolveStyleClash extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Automatically renames the new style.
			 * @type {Adobe.Indesign.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly RESOLVE_CLASH_AUTO_RENAME: Adobe.Indesign.ResolveStyleClash;
			/**
			 * Uses the existing style.
			 * @type {Adobe.Indesign.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly RESOLVE_CLASH_USE_EXISTING: Adobe.Indesign.ResolveStyleClash;
			/**
			 * Uses the new style.
			 * @type {Adobe.Indesign.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly RESOLVE_CLASH_USE_NEW: Adobe.Indesign.ResolveStyleClash;
			/**
			 * Alias for RESOLVE_CLASH_AUTO_RENAME. Automatically renames 
			 * the new style.
			 * @type {Adobe.Indesign.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly resolveClashAutoRename: Adobe.Indesign.ResolveStyleClash;
			/**
			 * Alias for RESOLVE_CLASH_USE_EXISTING. Uses the existing 
			 * style.
			 * @type {Adobe.Indesign.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly resolveClashUseExisting: Adobe.Indesign.ResolveStyleClash;
			/**
			 * Alias for RESOLVE_CLASH_USE_NEW. Uses the new style.
			 * @type {Adobe.Indesign.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly resolveClashUseNew: Adobe.Indesign.ResolveStyleClash;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}