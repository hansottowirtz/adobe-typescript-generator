/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FlipValues extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FLIPPED. Flips the text across the path.
			 * @type {Adobe.Indesign.FlipValues}
			 * @readonly
			 */
			public static readonly flipped: Adobe.Indesign.FlipValues;
			/**
			 * Flips the text across the path.
			 * @type {Adobe.Indesign.FlipValues}
			 * @readonly
			 */
			public static readonly FLIPPED: Adobe.Indesign.FlipValues;
			/**
			 * No flip effect applied.
			 * @type {Adobe.Indesign.FlipValues}
			 * @readonly
			 */
			public static readonly NOT_FLIPPED: Adobe.Indesign.FlipValues;
			/**
			 * Alias for NOT_FLIPPED. No flip effect applied.
			 * @type {Adobe.Indesign.FlipValues}
			 * @readonly
			 */
			public static readonly notFlipped: Adobe.Indesign.FlipValues;
			/**
			 * Undefined flip effect.
			 * @type {Adobe.Indesign.FlipValues}
			 * @readonly
			 */
			public static readonly UNDEFINED_FLIP_VALUE: Adobe.Indesign.FlipValues;
			/**
			 * Alias for UNDEFINED_FLIP_VALUE. Undefined flip effect.
			 * @type {Adobe.Indesign.FlipValues}
			 * @readonly
			 */
			public static readonly undefinedFlipValue: Adobe.Indesign.FlipValues;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}