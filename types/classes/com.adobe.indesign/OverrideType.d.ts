/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OverrideType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALL. Clears all types of override.
			 * @type {Adobe.Indesign.OverrideType}
			 * @readonly
			 */
			public static readonly all: Adobe.Indesign.OverrideType;
			/**
			 * Clears all types of override.
			 * @type {Adobe.Indesign.OverrideType}
			 * @readonly
			 */
			public static readonly ALL: Adobe.Indesign.OverrideType;
			/**
			 * Clears only character style overrides.
			 * @type {Adobe.Indesign.OverrideType}
			 * @readonly
			 */
			public static readonly CHARACTER_ONLY: Adobe.Indesign.OverrideType;
			/**
			 * Alias for CHARACTER_ONLY. Clears only character style 
			 * overrides.
			 * @type {Adobe.Indesign.OverrideType}
			 * @readonly
			 */
			public static readonly characterOnly: Adobe.Indesign.OverrideType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Clears only paragraph style overrides.
			 * @type {Adobe.Indesign.OverrideType}
			 * @readonly
			 */
			public static readonly PARAGRAPH_ONLY: Adobe.Indesign.OverrideType;
			/**
			 * Alias for PARAGRAPH_ONLY. Clears only paragraph style 
			 * overrides.
			 * @type {Adobe.Indesign.OverrideType}
			 * @readonly
			 */
			public static readonly paragraphOnly: Adobe.Indesign.OverrideType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}