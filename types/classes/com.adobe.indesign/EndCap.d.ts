/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EndCap extends Adobe.Csawlib.CSEnumBase {
			/**
			 * A squared end that stops at the path's endpoint.
			 * @type {Adobe.Indesign.EndCap}
			 * @readonly
			 */
			public static readonly BUTT_END_CAP: Adobe.Indesign.EndCap;
			/**
			 * Alias for BUTT_END_CAP. A squared end that stops at the 
			 * path's endpoint.
			 * @type {Adobe.Indesign.EndCap}
			 * @readonly
			 */
			public static readonly buttEndCap: Adobe.Indesign.EndCap;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * A squared end that extends beyond the endpoint by half the 
			 * stroke-width.
			 * @type {Adobe.Indesign.EndCap}
			 * @readonly
			 */
			public static readonly PROJECTING_END_CAP: Adobe.Indesign.EndCap;
			/**
			 * Alias for PROJECTING_END_CAP. A squared end that extends 
			 * beyond the endpoint by half the stroke-width.
			 * @type {Adobe.Indesign.EndCap}
			 * @readonly
			 */
			public static readonly projectingEndCap: Adobe.Indesign.EndCap;
			/**
			 * A semicircular end that extends beyond the endpoint by half 
			 * the stroke-width.
			 * @type {Adobe.Indesign.EndCap}
			 * @readonly
			 */
			public static readonly ROUND_END_CAP: Adobe.Indesign.EndCap;
			/**
			 * Alias for ROUND_END_CAP. A semicircular end that extends 
			 * beyond the endpoint by half the stroke-width.
			 * @type {Adobe.Indesign.EndCap}
			 * @readonly
			 */
			public static readonly roundEndCap: Adobe.Indesign.EndCap;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}