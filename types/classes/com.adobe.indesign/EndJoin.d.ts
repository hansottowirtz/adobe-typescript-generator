/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EndJoin extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Beveled end join.
			 * @type {Adobe.Indesign.EndJoin}
			 * @readonly
			 */
			public static readonly BEVEL_END_JOIN: Adobe.Indesign.EndJoin;
			/**
			 * Alias for BEVEL_END_JOIN. Beveled end join.
			 * @type {Adobe.Indesign.EndJoin}
			 * @readonly
			 */
			public static readonly bevelEndJoin: Adobe.Indesign.EndJoin;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Miter end join.
			 * @type {Adobe.Indesign.EndJoin}
			 * @readonly
			 */
			public static readonly MITER_END_JOIN: Adobe.Indesign.EndJoin;
			/**
			 * Alias for MITER_END_JOIN. Miter end join.
			 * @type {Adobe.Indesign.EndJoin}
			 * @readonly
			 */
			public static readonly miterEndJoin: Adobe.Indesign.EndJoin;
			/**
			 * Rounded end join.
			 * @type {Adobe.Indesign.EndJoin}
			 * @readonly
			 */
			public static readonly ROUND_END_JOIN: Adobe.Indesign.EndJoin;
			/**
			 * Alias for ROUND_END_JOIN. Rounded end join.
			 * @type {Adobe.Indesign.EndJoin}
			 * @readonly
			 */
			public static readonly roundEndJoin: Adobe.Indesign.EndJoin;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}