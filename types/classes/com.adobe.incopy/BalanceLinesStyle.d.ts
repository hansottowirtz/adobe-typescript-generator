/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BalanceLinesStyle extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Balances lines equally.
			 * @type {Adobe.Incopy.BalanceLinesStyle}
			 * @readonly
			 */
			public static readonly FULLY_BALANCED: Adobe.Incopy.BalanceLinesStyle;
			/**
			 * Alias for FULLY_BALANCED. Balances lines equally.
			 * @type {Adobe.Incopy.BalanceLinesStyle}
			 * @readonly
			 */
			public static readonly fullyBalanced: Adobe.Incopy.BalanceLinesStyle;
			/**
			 * Does not balance lines.
			 * @type {Adobe.Incopy.BalanceLinesStyle}
			 * @readonly
			 */
			public static readonly NO_BALANCING: Adobe.Incopy.BalanceLinesStyle;
			/**
			 * Alias for NO_BALANCING. Does not balance lines.
			 * @type {Adobe.Incopy.BalanceLinesStyle}
			 * @readonly
			 */
			public static readonly noBalancing: Adobe.Incopy.BalanceLinesStyle;
			/**
			 * Prefers longer last lines.
			 * @type {Adobe.Incopy.BalanceLinesStyle}
			 * @readonly
			 */
			public static readonly PYRAMID_SHAPE: Adobe.Incopy.BalanceLinesStyle;
			/**
			 * Alias for PYRAMID_SHAPE. Prefers longer last lines.
			 * @type {Adobe.Incopy.BalanceLinesStyle}
			 * @readonly
			 */
			public static readonly pyramidShape: Adobe.Incopy.BalanceLinesStyle;
			/**
			 * Prefers shorter last lines.
			 * @type {Adobe.Incopy.BalanceLinesStyle}
			 * @readonly
			 */
			public static readonly VEE_SHAPE: Adobe.Incopy.BalanceLinesStyle;
			/**
			 * Alias for VEE_SHAPE. Prefers shorter last lines.
			 * @type {Adobe.Incopy.BalanceLinesStyle}
			 * @readonly
			 */
			public static readonly veeShape: Adobe.Incopy.BalanceLinesStyle;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}