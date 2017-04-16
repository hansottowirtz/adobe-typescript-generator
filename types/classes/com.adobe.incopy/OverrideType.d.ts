/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class OverrideType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALL. Clears all types of override.
			 * @type {Adobe.Incopy.OverrideType}
			 * @readonly
			 */
			public static readonly all: Adobe.Incopy.OverrideType;
			/**
			 * Clears all types of override.
			 * @type {Adobe.Incopy.OverrideType}
			 * @readonly
			 */
			public static readonly ALL: Adobe.Incopy.OverrideType;
			/**
			 * Clears only character style overrides.
			 * @type {Adobe.Incopy.OverrideType}
			 * @readonly
			 */
			public static readonly CHARACTER_ONLY: Adobe.Incopy.OverrideType;
			/**
			 * Alias for CHARACTER_ONLY. Clears only character style 
			 * overrides.
			 * @type {Adobe.Incopy.OverrideType}
			 * @readonly
			 */
			public static readonly characterOnly: Adobe.Incopy.OverrideType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Clears only paragraph style overrides.
			 * @type {Adobe.Incopy.OverrideType}
			 * @readonly
			 */
			public static readonly PARAGRAPH_ONLY: Adobe.Incopy.OverrideType;
			/**
			 * Alias for PARAGRAPH_ONLY. Clears only paragraph style 
			 * overrides.
			 * @type {Adobe.Incopy.OverrideType}
			 * @readonly
			 */
			public static readonly paragraphOnly: Adobe.Incopy.OverrideType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}