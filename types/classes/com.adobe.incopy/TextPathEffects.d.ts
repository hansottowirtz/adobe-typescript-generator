/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextPathEffects extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The center of each character�s baseline is on the path while 
			 * each vertical edge is in line with the path�s center point.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly GRAVITY_PATH_EFFECT: Adobe.Incopy.TextPathEffects;
			/**
			 * Alias for GRAVITY_PATH_EFFECT. The center of each 
			 * character�s baseline is on the path while each vertical edge 
			 * is in line with the path�s center point.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly gravityPathEffect: Adobe.Incopy.TextPathEffects;
			/**
			 * The center of each character's baseline is parallel to the 
			 * path's tangent. This is the default effect.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly RAINBOW_PATH_EFFECT: Adobe.Incopy.TextPathEffects;
			/**
			 * Alias for RAINBOW_PATH_EFFECT. The center of each 
			 * character's baseline is parallel to the path's tangent. This 
			 * is the default effect.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly rainbowPathEffect: Adobe.Incopy.TextPathEffects;
			/**
			 * The text characters' horizontal edges are perfectly 
			 * horizontal regardless of the path shape.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly RIBBON_PATH_EFFECT: Adobe.Incopy.TextPathEffects;
			/**
			 * Alias for RIBBON_PATH_EFFECT. The text characters' 
			 * horizontal edges are perfectly horizontal regardless of the 
			 * path shape.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly ribbonPathEffect: Adobe.Incopy.TextPathEffects;
			/**
			 * The text characters' vertical edges are perfectly vertical 
			 * regardless of the path shape.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly SKEW_PATH_EFFECT: Adobe.Incopy.TextPathEffects;
			/**
			 * Alias for SKEW_PATH_EFFECT. The text characters' vertical 
			 * edges are perfectly vertical regardless of the path shape.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly skewPathEffect: Adobe.Incopy.TextPathEffects;
			/**
			 * The left edge of each character's baseline is on the path 
			 * and no characters are rotated.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly STAIR_STEP_PATH_EFFECT: Adobe.Incopy.TextPathEffects;
			/**
			 * Alias for STAIR_STEP_PATH_EFFECT. The left edge of each 
			 * character's baseline is on the path and no characters are 
			 * rotated.
			 * @type {Adobe.Incopy.TextPathEffects}
			 * @readonly
			 */
			public static readonly stairStepPathEffect: Adobe.Incopy.TextPathEffects;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}