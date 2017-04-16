/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ResolveStyleClash extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Automatically renames the new style.
			 * @type {Adobe.Incopy.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly RESOLVE_CLASH_AUTO_RENAME: Adobe.Incopy.ResolveStyleClash;
			/**
			 * Uses the existing style.
			 * @type {Adobe.Incopy.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly RESOLVE_CLASH_USE_EXISTING: Adobe.Incopy.ResolveStyleClash;
			/**
			 * Uses the new style.
			 * @type {Adobe.Incopy.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly RESOLVE_CLASH_USE_NEW: Adobe.Incopy.ResolveStyleClash;
			/**
			 * Alias for RESOLVE_CLASH_AUTO_RENAME. Automatically renames 
			 * the new style.
			 * @type {Adobe.Incopy.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly resolveClashAutoRename: Adobe.Incopy.ResolveStyleClash;
			/**
			 * Alias for RESOLVE_CLASH_USE_EXISTING. Uses the existing 
			 * style.
			 * @type {Adobe.Incopy.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly resolveClashUseExisting: Adobe.Incopy.ResolveStyleClash;
			/**
			 * Alias for RESOLVE_CLASH_USE_NEW. Uses the new style.
			 * @type {Adobe.Incopy.ResolveStyleClash}
			 * @readonly
			 */
			public static readonly resolveClashUseNew: Adobe.Incopy.ResolveStyleClash;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}