/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FollowShapeModeOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Feathers all edges that face the specified angle.
			 * @type {Adobe.Indesign.FollowShapeModeOptions}
			 * @readonly
			 */
			public static readonly ALL_EDGES: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Alias for ALL_EDGES. Feathers all edges that face the 
			 * specified angle.
			 * @type {Adobe.Indesign.FollowShapeModeOptions}
			 * @readonly
			 */
			public static readonly allEdges: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Feathers only the leading edge facing the specified angle.
			 * @type {Adobe.Indesign.FollowShapeModeOptions}
			 * @readonly
			 */
			public static readonly LEADING_EDGE: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Alias for LEADING_EDGE. Feathers only the leading edge 
			 * facing the specified angle.
			 * @type {Adobe.Indesign.FollowShapeModeOptions}
			 * @readonly
			 */
			public static readonly leadingEdge: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Alias for NONE. Disables shape following and uses the 
			 * rectangular bounds of the object.
			 * @type {Adobe.Indesign.FollowShapeModeOptions}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Disables shape following and uses the rectangular bounds of 
			 * the object.
			 * @type {Adobe.Indesign.FollowShapeModeOptions}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.FollowShapeModeOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}