/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ResizeConstraints extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Inverse proportions
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly INVERSE_PROPORTIONS: Adobe.Indesign.ResizeConstraints;
			/**
			 * Alias for INVERSE_PROPORTIONS. Inverse proportions
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly inverseProportions: Adobe.Indesign.ResizeConstraints;
			/**
			 * Keep current proportions
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly KEEP_CURRENT_PROPORTIONS: Adobe.Indesign.ResizeConstraints;
			/**
			 * Keep current value
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly KEEP_CURRENT_VALUE: Adobe.Indesign.ResizeConstraints;
			/**
			 * Alias for KEEP_CURRENT_PROPORTIONS. Keep current proportions
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly keepCurrentProportions: Adobe.Indesign.ResizeConstraints;
			/**
			 * Alias for KEEP_CURRENT_VALUE. Keep current value
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly keepCurrentValue: Adobe.Indesign.ResizeConstraints;
			/**
			 * Tall proportions
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly TALL_PROPORTIONS: Adobe.Indesign.ResizeConstraints;
			/**
			 * Alias for TALL_PROPORTIONS. Tall proportions
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly tallProportions: Adobe.Indesign.ResizeConstraints;
			/**
			 * Wide proportions
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly WIDE_PROPORTIONS: Adobe.Indesign.ResizeConstraints;
			/**
			 * Alias for WIDE_PROPORTIONS. Wide proportions
			 * @type {Adobe.Indesign.ResizeConstraints}
			 * @readonly
			 */
			public static readonly wideProportions: Adobe.Indesign.ResizeConstraints;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}