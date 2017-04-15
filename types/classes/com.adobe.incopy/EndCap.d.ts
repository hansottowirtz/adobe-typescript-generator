/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EndCap extends Adobe.Csawlib.CSEnumBase {
			/** A squared end that stops at the path's endpoint. */
			public static readonly BUTT_END_CAP: Adobe.Incopy.EndCap;
			/**
			 * Alias for BUTT_END_CAP. A squared end that stops at the 
			 * path's endpoint.
			 */
			public static readonly buttEndCap: Adobe.Incopy.EndCap;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * A squared end that extends beyond the endpoint by half the 
			 * stroke-width.
			 */
			public static readonly PROJECTING_END_CAP: Adobe.Incopy.EndCap;
			/**
			 * Alias for PROJECTING_END_CAP. A squared end that extends 
			 * beyond the endpoint by half the stroke-width.
			 */
			public static readonly projectingEndCap: Adobe.Incopy.EndCap;
			/**
			 * A semicircular end that extends beyond the endpoint by half 
			 * the stroke-width.
			 */
			public static readonly ROUND_END_CAP: Adobe.Incopy.EndCap;
			/**
			 * Alias for ROUND_END_CAP. A semicircular end that extends 
			 * beyond the endpoint by half the stroke-width.
			 */
			public static readonly roundEndCap: Adobe.Incopy.EndCap;
			/** Constructor */
			public constructor();
		}
	}
}