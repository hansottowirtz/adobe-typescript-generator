/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EndJoin extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Beveled end join.
			 * @type {Adobe.Incopy.EndJoin}
			 * @readonly
			 */
			public static readonly BEVEL_END_JOIN: Adobe.Incopy.EndJoin;
			/**
			 * Alias for BEVEL_END_JOIN. Beveled end join.
			 * @type {Adobe.Incopy.EndJoin}
			 * @readonly
			 */
			public static readonly bevelEndJoin: Adobe.Incopy.EndJoin;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Miter end join.
			 * @type {Adobe.Incopy.EndJoin}
			 * @readonly
			 */
			public static readonly MITER_END_JOIN: Adobe.Incopy.EndJoin;
			/**
			 * Alias for MITER_END_JOIN. Miter end join.
			 * @type {Adobe.Incopy.EndJoin}
			 * @readonly
			 */
			public static readonly miterEndJoin: Adobe.Incopy.EndJoin;
			/**
			 * Rounded end join.
			 * @type {Adobe.Incopy.EndJoin}
			 * @readonly
			 */
			public static readonly ROUND_END_JOIN: Adobe.Incopy.EndJoin;
			/**
			 * Alias for ROUND_END_JOIN. Rounded end join.
			 * @type {Adobe.Incopy.EndJoin}
			 * @readonly
			 */
			public static readonly roundEndJoin: Adobe.Incopy.EndJoin;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}