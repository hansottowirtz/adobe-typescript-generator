/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextPathEffects extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The center of each character�s baseline is on the path while 
			 * each vertical edge is in line with the path�s center point.
			 */
			public static readonly GRAVITY_PATH_EFFECT: Adobe.Indesign.TextPathEffects;
			/**
			 * Alias for GRAVITY_PATH_EFFECT. The center of each 
			 * character�s baseline is on the path while each vertical edge 
			 * is in line with the path�s center point.
			 */
			public static readonly gravityPathEffect: Adobe.Indesign.TextPathEffects;
			/**
			 * The center of each character's baseline is parallel to the 
			 * path's tangent. This is the default effect.
			 */
			public static readonly RAINBOW_PATH_EFFECT: Adobe.Indesign.TextPathEffects;
			/**
			 * Alias for RAINBOW_PATH_EFFECT. The center of each 
			 * character's baseline is parallel to the path's tangent. This 
			 * is the default effect.
			 */
			public static readonly rainbowPathEffect: Adobe.Indesign.TextPathEffects;
			/**
			 * The text characters' horizontal edges are perfectly 
			 * horizontal regardless of the path shape.
			 */
			public static readonly RIBBON_PATH_EFFECT: Adobe.Indesign.TextPathEffects;
			/**
			 * Alias for RIBBON_PATH_EFFECT. The text characters' 
			 * horizontal edges are perfectly horizontal regardless of the 
			 * path shape.
			 */
			public static readonly ribbonPathEffect: Adobe.Indesign.TextPathEffects;
			/**
			 * The text characters' vertical edges are perfectly vertical 
			 * regardless of the path shape.
			 */
			public static readonly SKEW_PATH_EFFECT: Adobe.Indesign.TextPathEffects;
			/**
			 * Alias for SKEW_PATH_EFFECT. The text characters' vertical 
			 * edges are perfectly vertical regardless of the path shape.
			 */
			public static readonly skewPathEffect: Adobe.Indesign.TextPathEffects;
			/**
			 * The left edge of each character's baseline is on the path 
			 * and no characters are rotated.
			 */
			public static readonly STAIR_STEP_PATH_EFFECT: Adobe.Indesign.TextPathEffects;
			/**
			 * Alias for STAIR_STEP_PATH_EFFECT. The left edge of each 
			 * character's baseline is on the path and no characters are 
			 * rotated.
			 */
			public static readonly stairStepPathEffect: Adobe.Indesign.TextPathEffects;
			/** Constructor */
			public constructor();
		}
	}
}