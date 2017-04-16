/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FollowShapeModeOptions extends Adobe.Csawlib.CSEnumBase {
			/** Feathers all edges that face the specified angle. */
			public static readonly ALL_EDGES: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Alias for ALL_EDGES. Feathers all edges that face the 
			 * specified angle.
			 */
			public static readonly allEdges: Adobe.Indesign.FollowShapeModeOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Feathers only the leading edge facing the specified angle. */
			public static readonly LEADING_EDGE: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Alias for LEADING_EDGE. Feathers only the leading edge 
			 * facing the specified angle.
			 */
			public static readonly leadingEdge: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Alias for NONE. Disables shape following and uses the 
			 * rectangular bounds of the object.
			 */
			public static readonly none: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Disables shape following and uses the rectangular bounds of 
			 * the object.
			 */
			public static readonly NONE: Adobe.Indesign.FollowShapeModeOptions;
			/** Constructor */
			public constructor();
		}
	}
}